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
            <section className=" ">
                <div className="flex flex-col justify-between items-center  mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between" >
                    <div className="flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="hero_title">Healthy in side <br /> <span style={{ color: "#8382EB" }}>fresh</span> out side
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <button className='text-1xl mr-5 bg-slate-500 px-4 py-3 rounded-lg text-white flex items-center' style={{ backgroundColor: "var(--normal-color)" }}>Get started <span className=' ml-5 text-white text-2xl'><IoIosArrowDroprightCircle></IoIosArrowDroprightCircle></span></button>

                            <button className='text-1xl shadow-lg bg-white px-4 py-3 rounded-lg text-white flex items-center ' style={{ color: "var(--normal-color)" }}><span className='text-white text-2xl' style={{ color: "var(--normal-color)" }}><IoIosPlayCircle></IoIosPlayCircle></span> <span className='ml-5'>Get started</span>  </button>
                        </div>
                        <p className='mb-5 pt-5 font-semibold'>Brands:</p>
                        <div className='flex justify-start'>
                            <Image className='brand' src={brand1} alt=""></Image>
                            <Image className='brand ml-3' src={brand2} alt=""></Image>
                            <Image className='brand ml-3' src={brand3} alt=""></Image>
                            <Image className='brand ml-3' src={brand4} alt=""></Image>
                        </div>
                    </div>
                    <div className="flex items-center justify-end p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <Image src={hero_side} alt=""></Image>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;