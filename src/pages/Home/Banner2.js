import React from 'react';
import treatment from '../../assets/images/treatment.png'
import GetStartedButton from '../Shared/GetStartedButton';

const Banner2 = () => {
    return (
        <div  className="hero min-h-screen">
            <div  className="hero-content flex-col lg:flex-row">
                <img  className='w-[576px] h-[458px] rounded-lg' src={treatment} alt="" />
                <div>
                    <h1  className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p  className="py-6">At Exceptional Dental, your smile is our top priority. We are dedicated to providing you with the personalized and gentle care that you deserve. When you visit our office, you can expect all that modern dentistry has to offer, including a comprehensive list of general, restorative and cosmetic dental services to meet the needs of the whole family. Our goal is to assist each patient in achieving and maintaining long-term dental health and a beautiful smile.</p>
                   <GetStartedButton>Get Started</GetStartedButton>
                </div>
            </div>
        </div>
    );
};

export default Banner2;