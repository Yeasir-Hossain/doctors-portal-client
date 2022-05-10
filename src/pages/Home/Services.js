import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';
const Services = () => {
    const services = [
        {
            _id: 1,
            name:'Fluoride Treatment',
            description:"Fluoride treatment at its best at our place. Get your treatment from the best doctors.",
            img:fluoride
        },
        {
            _id: 2,
            name:'Cavity Filling',
            description:"Fill your cavity with the help best doctors. 100% free risk free",
            img:cavity
        },
        {
            _id: 3,
            name:'Teeth Whitening',
            description:"Whiten your teeth to show the best of you from us.",
            img:whitening
        },
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary text-2xl font-bold'>OUR SERVICES</h3>
                <h2 className='text-4xl mt-4'>Services We Provide</h2>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10'>
                {
                    services.map(service=><Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;