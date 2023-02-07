import TestimonialSlid from '@/components/TestimonialSlid';
import React from 'react';



const Testimonial = () => {
    return (
        <div className='container mx-auto mt-24 mb-24'>
            <h1 className='hero_title text-center ' data-aos="fade-left"
                data-aos-duration="2000">Testimonials</h1>
            <div>
                <TestimonialSlid></TestimonialSlid>
            </div>
        </div >
    );
};

export default Testimonial;