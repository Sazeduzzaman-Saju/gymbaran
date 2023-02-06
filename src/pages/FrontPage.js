import useWebTitle from '@/hook/useWebTitle';
import React from 'react';
import Details from './Home/Details';
import Feature from './Home/Feature';
import Hero from './Home/Hero';
import InfoArea from './Home/InfoArea';
import Testimonial from './Home/Testimonial';

const Front = () => {
    useWebTitle('Gym Home')
    return (
        <div className='container mx-auto'>
            <Hero></Hero>
            <InfoArea></InfoArea>
            <Details></Details>
            <Feature></Feature>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Front;