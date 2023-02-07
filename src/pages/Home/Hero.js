import Image from 'next/image';
import React from 'react';
import { IoIosArrowDroprightCircle, IoIosPlayCircle } from "react-icons/io";
import brand1 from '../../img/brand1.png'
import brand2 from '../../img/brand2.png'
import brand3 from '../../img/brand3.png'
import brand4 from '../../img/brand4.png'
import hero_side from '../../img/Hero_side.png'

const Hero = () => {
    return (
        <div>
            <section className="mt-20 ">
                <div className="flex flex-col justify-between items-center  mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between" >
                    <div className="flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left" data-aos="fade-up"
                        data-aos-duration="1500">
                        <h1 className="hero_title ">Healthy in side <br /> <span style={{ color: "#8382EB" }}>fresh</span> out side
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 hero_para ">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and  run a healthy routine.
                        </p>
                        <div className="flex lg:flex-row details_buttons">
                            <div>
                                <button className='text-1xl mr-5 bg-slate-500 px-4 py-3 rounded-lg text-white flex items-center' style={{ backgroundColor: "var(--normal-color)" }}>Get started <span className=' ml-5 text-white text-2xl'><IoIosArrowDroprightCircle></IoIosArrowDroprightCircle></span></button>
                            </div>
                            <div>
                                <button className='text-1xl shadow-lg bg-white px-4 py-3 rounded-lg text-white flex items-center ' style={{ color: "var(--normal-color)" }}><span className='text-white text-2xl' style={{ color: "var(--normal-color)" }}><IoIosPlayCircle></IoIosPlayCircle></span> <span className='ml-5'>Get started</span>  </button>
                            </div>
                        </div>
                        <p className='mb-5 pt-5 font-semibold'>Brands:</p>
                        <div className='flex justify-start'>
                            <Image className='brand' src={brand1} alt=""></Image>
                            <Image className='brand ml-3' src={brand2} alt=""></Image>
                            <Image className='brand ml-3' src={brand3} alt=""></Image>
                            <Image className='brand ml-3' src={brand4} alt=""></Image>
                        </div>
                    </div>
                    <div className="flex items-center justify-end mt-10 lg:mt-0  sm:h-80 lg:h-96 xl:h-112 2xl:h-128" data-aos="fade-up"
                        data-aos-duration="3000">
                        <Image src={hero_side} alt=""></Image>
                    </div>
                </div>

                <div className='grid md:grid-cols-1 lg:grid-cols-2 justify-between items-center gap-5 mt-20' >
                    <div className='' data-aos="fade-up"
                        data-aos-duration="1500">
                        <h1 className='text-6xl hero_title'>Healthy in side <br /> fresh out side</h1>
                    </div>
                    <div data-aos="fade-up"
                        data-aos-duration="2000">
                        <p className='text-md hero_para'>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. Healthy life makes you more excited to live the day</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;