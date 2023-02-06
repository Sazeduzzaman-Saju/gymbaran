import useWebTitle from '@/hook/useWebTitle';
import React from 'react';

const Front = () => {
    useWebTitle('Gym Home')
    return (
        <div className='container mx-auto'>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
        </div>
    );
};

export default Front;