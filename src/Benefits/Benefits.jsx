import { CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';

const Benefits = ({advantage}) => {
    return (
        <div className='flex items-center'>
            <CheckCircleIcon className='w-4 text-green-600' />
            <p className='text-lg ml-1'>{advantage}</p>
        </div>
    );
};

export default Benefits;