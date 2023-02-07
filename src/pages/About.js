import ComingSoon from '@/components/ComingSoon';
import useWebTitle from '@/hook/useWebTitle';
import React from 'react';

const About = () => {
    useWebTitle("Gym About Us Page")
    return (
        <div>
            <ComingSoon></ComingSoon>
        </div>
    );
};

export default About;