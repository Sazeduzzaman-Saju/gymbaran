import Image from 'next/image';
import React from 'react';
import { IoMdArrowForward } from 'react-icons/io';
import pose1 from '../../img/pose1.png';

const InfoArea = () => {
    return (
        <div>
            <section className="py-20 px-20 my-6 info_area mt-24 mb-24 ">
                <div className="container grid lg:grid-cols-3 md:grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-3 ">
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                        <div className="flex info_area_icon justify-center p-2 align-middle  sm:p-4 ">
                            <Image src={pose1} className="" alt='' ></Image>
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="info-title font-semibold leading-none">Get that 11 line <br /> in 30 days</p>
                            <p className="capitalize pt-3 flex items-center justify-between text-white " style={{ opacity: "0.3" }}><span>Learn more </span><span><IoMdArrowForward></IoMdArrowForward></span></p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                        <div className="flex info_area_icon justify-center p-2 align-middle  sm:p-4 ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 dark:text-gray-800">
                                <polygon points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039"></polygon>
                                <path d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z"></path>
                                <path d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="info-title font-semibold leading-none">14 Days <br />
                                sherd challenge</p>
                            <p className="capitalize pt-3 flex items-center justify-between text-white " style={{ opacity: "0.3" }}><span>Learn more </span><span><IoMdArrowForward></IoMdArrowForward></span></p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                        <div className="flex info_area_icon justify-center p-2 align-middle  sm:p-4 ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 dark:text-gray-800">
                                <polygon points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039"></polygon>
                                <path d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z"></path>
                                <path d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="info-title font-semibold leading-none">Get <br /> flat belly in 30 days</p>
                            <p className="capitalize pt-3 flex items-center justify-between text-white " style={{ opacity: "0.3" }}><span>Learn more </span><span><IoMdArrowForward></IoMdArrowForward></span></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InfoArea;