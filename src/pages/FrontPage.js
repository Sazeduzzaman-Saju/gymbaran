import useWebTitle from '@/hook/useWebTitle';
import React, { useEffect, useState } from 'react';
import Details from './Home/Details';
import Feature from './Home/Feature';
import Hero from './Home/Hero';
import InfoArea from './Home/InfoArea';
import Testimonial from './Home/Testimonial';
import PuffLoader from "react-spinners/PuffLoader";

const Front = () => {
    useWebTitle('Gym Home')
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])
    return (
        <div className='container mx-auto'>
            {loading ?
                <div className='container'>
                    <div className='row'>
                        <div className='flex justify-center items-center' style={{ height: '100vh' }}>
                            <PuffLoader color={'#4568dc'} loading={loading} size={150} />
                        </div>
                    </div>
                </div>
                :
                <>
                    <Hero></Hero>
                    <InfoArea></InfoArea>
                    <Details></Details>
                    <Feature></Feature>
                    <Testimonial></Testimonial>
                </>
            }
        </div>
    );
};

export default Front;