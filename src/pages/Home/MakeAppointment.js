import React from 'react';
import doctor from '../../assets/images/doctor.png'
import GetStartedButton from '../Shared/GetStartedButton';

const MakeAppointment = () => {
    return (
        <section className="flex justify-center items-center bg-[url('/src/assets/images/appointment.png')]">
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-2xl my-5 text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl font-semi-bold text-white my-5'>Make an appointment Today</h2>
                <p className='my-5 text-white'>Now available 24/7, our physicians can treat your non-emergent urgent medical needs virtually, any time. Enter the waiting room to be seen by our physicians from the comfort of your home. If you have COVID-19-related symptoms, you can choose this option to get screened for testing.</p>
                <GetStartedButton>Get Started</GetStartedButton>
            </div>
        </section>
    );
};

export default MakeAppointment;