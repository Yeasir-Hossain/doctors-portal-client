import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:max-w-lg">
            <div class="card-body">
                <h2 class="card-title text-secondary">{name}</h2>
                <p>{
                    slots.length ? <span>{slots[0]}</span> : <span className='text-red-500'>Try another date!!</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} avilable</p>
                <div class="card-actions justify-center">
                    <label for="booking-modal"
                        disabled={slots.length === 0}
                        class="btn btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
                        onClick={() => setTreatment(service)}>Book appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;