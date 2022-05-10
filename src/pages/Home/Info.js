import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard cardText="Lorem Ipsum is simply dummy text of the pri" bgclass="bg-gradient-to-r from-secondary to-primary" cardTitle="Opening Hours" img={clock}></InfoCard>
            <InfoCard cardText="Brooklyn, NY 10036, United States" bgclass="bg-accent" cardTitle="Our Locations" img={marker}></InfoCard>
            <InfoCard cardText="+000 123 456789" bgclass="bg-gradient-to-r from-secondary to-primary" cardTitle="Contact us" img={phone}></InfoCard>
        </div>
    );
};

export default Info;