import React from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({date,setDate}) => {
    return (
        <div class="hero min-h-screen bg-[url('/src/assets/images/bg.png')]">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt="" />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        required
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;