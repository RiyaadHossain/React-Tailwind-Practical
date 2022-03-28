import React from 'react';
import Benefits from '../Benefits/Benefits';

const Card = ({pricee}) => {
    const {name, price, benefits} = pricee
    return (
        <div className='bg-sky-300 my-8 rounded p-6'>
            <p className='text-4xl font-bold'>{name}</p>
            <p className='mt-3 mb-6'><span className='text-3xl font-bold'>{price}</span><span className='text-2xl font-bold text-gray-300'>/mo</span></p>
            <div>
                {benefits.map(bene => <Benefits advantage={bene}/>)}
            </div>
        </div>
    );
};

export default Card;