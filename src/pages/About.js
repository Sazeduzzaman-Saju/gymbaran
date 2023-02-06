import useWebTitle from '@/hook/useWebTitle';
import React from 'react';

const About = () => {
    useWebTitle("Gym About Us Page")
    return (
        <div>
            <h1>This is About Page</h1>
        </div>
    );
};

export default About;