import Image from 'next/image';
import React from 'react';
import { IoMdArrowForward } from 'react-icons/io';
import sideimage1 from '../../img/workout.png'

const Details = () => {
    return (
        <div>
            <div className='container mx-auto'>
                {/* First Details */}
                <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-5 items-center mt-24' >
                    <div className='mr-5 ml-0' data-aos="fade-up"
                        data-aos-duration="1500">
                        <Image src={sideimage1} alt=""></Image>
                    </div>
                    <div data-aos="fade-up"
                        data-aos-duration="3000">
                        <h1 className='hero_title pb-8'>Best full body <br /> workout to lose fat</h1>
                        <p className='hero_para pb-8'>
                            Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home.
                        </p>
                        <div className='details_buttons'>
                            <button className='btn bg-[#264373] '><span>Get started</span> <span className='ml-5 text-2xl'><IoMdArrowForward></IoMdArrowForward></span></button>
                        </div>
                    </div>
                </div>
                {/* Second Details */}
                <div className='grid second_details lg:grid-cols-2 sm:grid-cols-1 gap-5 items-center mt-24'>
                    <div data-aos="fade-up"
                        data-aos-duration="1500">
                        <h1 className='hero_title pb-8'>Daily morning <br /> workout in home</h1>
                        <p className='hero_para pb-8'>
                            Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home.
                        </p>
                        <div className='details_buttons'>

                            <button className='btn bg-[#264373] '><span>Get started</span> <span className='ml-5 text-2xl'><IoMdArrowForward></IoMdArrowForward></span></button>
                        </div>
                    </div>
                    <div className='mr-5 ml-0 ' data-aos="fade-up"
                        data-aos-duration="3000">
                        <Image src={sideimage1} alt=""></Image>
                    </div>
                </div>
                {/* Third Details */}
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-5 items-center mt-24'>
                    <div className='mr-5 ml-0' data-aos="fade-up"
                        data-aos-duration="1500">
                        <Image src={sideimage1} alt=""></Image>
                    </div>
                    <div className='details_last' data-aos="fade-up"
                        data-aos-duration="3000">
                        <h1 className='hero_title pb-8'>How it works?</h1>
                        <p className='work_para mb-5 p-5 work_box_active'>
                            <span className='ml-5 text-[#000] font-semibold'>The body becomes sick because of rarely exercise</span>
                        </p>
                        <p className='hero_para mb-5 p-5 work_box_not_active'>
                            <span className='ml-5'>The body becomes sick because of rarely exercise</span>
                        </p>
                        <p className='hero_para mb-5 p-5 work_box_not_active'>
                            <span className='ml-5'>The body becomes sick because of rarely exercise</span>
                        </p>
                        <div className='pt-5 details_buttons'>
                            <button className='btn bg-[#264373] '><span>Get started</span> <span className='ml-5 text-2xl'><IoMdArrowForward></IoMdArrowForward></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;