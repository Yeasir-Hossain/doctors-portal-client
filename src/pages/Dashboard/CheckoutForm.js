import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Loading from '../Shared/Loading';

const CheckoutForm = ({ appointment }) => {
    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [transactionID, setTransactionID] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const { _id, price, patient, patientName } = appointment
    useEffect(() => {
        fetch("https://doctors-portal-jzhn.onrender.com/create-payment-intent", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            })
    }, [price]);
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setCardError(error?.message || '');
        setSuccess('')
        setProcessing(true)
        if (processing) {
            return <Loading></Loading>
        }
        //confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: patient
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false)
        }
        else {
            setCardError('')
            console.log(paymentIntent);
            setTransactionID(paymentIntent.id)
            setSuccess('Your payment is completed')
            //payment info
            const payment = {
                appointment: _id,
                transactionId: paymentIntent.id
            }
            fetch(`https://doctors-portal-jzhn.onrender.com/booking/${_id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment),
            }).then(res => res.json().then(data => {
                console.log(data);
                setProcessing(false)
            }))
        }


    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <div className='text-green-500'>
                    <p>{success}</p>
                    <p>Your transaction id: <span className='text-purple-500 font-bold'>{transactionID}</span> </p>
                </div>
            }

        </>
    );
};

export default CheckoutForm;