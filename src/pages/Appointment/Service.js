import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots,price } = service;
    return (
        <div className="card lg:max-w-lg">
            <div className="card-body">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>{
                    slots.length ? <span>{slots[0]}</span> : <span  className='text-red-500'>Try another date!!</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} avilable</p>
                <p><small>Price:${price}</small></p>
                <div className="card-actions justify-center">
                    <label htmlFor="booking-modal"
                        disabled={slots.length === 0}
                        className="btn btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
                        onClick={() => setTreatment(service)}>Book appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;