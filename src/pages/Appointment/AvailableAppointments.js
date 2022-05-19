import { format } from 'date-fns';
import React, { useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading';

const AvailableAppointments = ({ date }) => {
    const [treatment, setTreatment] = useState(null)
    const formattedDate = format(date, 'PP');
    const { isLoading, data: services,refetch } = useQuery(['available',formattedDate], () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h4 className='text-xl text-secondary text-center mt-32 mb-9'>Appointments Available on {format(date, 'PP')}</h4>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-items-center'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal 
            setTreatment={setTreatment} 
            date={date} 
            treatment={treatment}
            refetch = {refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;