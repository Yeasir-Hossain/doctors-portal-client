import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L2JYBLXCe1IOSg90uaxfufF8i7YCfjJVJ3FSaIoYWRJhZAvx8XbgeBD1POl53cWQ2uzEjXz0giqyzidDiebDF3r00Xh7cnU0H');

const Payment = () => {
    const { id } = useParams()
    const url = `https://still-temple-47292.herokuapp.com/booking/${id}`

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div class="card w-50 max-w-md shadow-xl my-12 mx-auto">
                <div class="card-body">
                    <p className="text-success font-bold">Hello {appointment.patientName}</p>
                    <h2 class="card-title">Please pay for {appointment.treatment}</h2>
                    <p>We will see you on <span className='text-purple-500'>{appointment.date}</span> at <span className='text-purple-500'>{appointment.slot}</span></p>
                    <p>Please pay: $ {appointment.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl mx-auto">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;