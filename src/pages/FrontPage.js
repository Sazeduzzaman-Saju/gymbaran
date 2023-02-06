import useWebTitle from '@/hook/useWebTitle';
import React from 'react';
import Hero from './Home/Hero';

const Front = () => {
    useWebTitle('Gym Home')
    return (
        <div className='container mx-auto'>
            <Hero></Hero>
        </div>
    );
};

export default Front;