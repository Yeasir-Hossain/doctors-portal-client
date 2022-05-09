import React from 'react';

const InfoCard = ({img,cardTitle,bgclass,cardText}) => {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl px-5 ${bgclass}`}>
        <figure><img src={img} alt="Album"/></figure>
        <div class="card-body text-white">
          <h2 class="card-title">{cardTitle}</h2>
          <p>{cardText}</p>
        </div>
      </div>
    );
};

export default InfoCard;