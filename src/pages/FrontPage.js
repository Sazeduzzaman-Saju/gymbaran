import useWebTitle from '@/hook/useWebTitle';
import React from 'react';
import Hero from './Home/Hero';
import InfoArea from './Home/InfoArea';

const Front = () => {
    useWebTitle('Gym Home')
    return (
        <div className='container mx-auto'>
            <Hero></Hero>
            <InfoArea></InfoArea>
        </div>
    );
};

export default Front;