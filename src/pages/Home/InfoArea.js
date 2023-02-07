import Image from 'next/image';
import React from 'react';
import { IoMdArrowForward } from 'react-icons/io';
import pose1 from '../../img/3.png';
import pose2 from '../../img/2.png';
import pose3 from '../../img/1.png';

const InfoArea = () => {
    return (
        <div>
            <section className="py-20 px-20 my-6 info_area mt-24 mb-24 " >
                <div className="container grid lg:grid-cols-3 md:grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-3 " >

                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100" data-aos="fade-up"
                        data-aos-duration="1000">
                        <div className="flex info_area_icon justify-center p-2 align-middle  sm:p-4 ">
                            <Image src={pose1} className="" alt='' ></Image>
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="info-title font-semibold leading-none">Get that 11 line <br /> in 30 days</p>
                            <p className="capitalize pt-3 flex items-center justify-between text-white " style={{ opacity: "0.3" }}><span>Learn more </span><span><IoMdArrowForward></IoMdArrowForward></span></p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100" data-aos="fade-up"
                        data-aos-duration="1500">
                        <div className="flex info_area_icon justify-center p-2 align-middle  sm:p-4 ">
                            <Image src={pose2} className="" alt='' ></Image>
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="info-title font-semibold leading-none">14 Days <br />
                                sherd challenge</p>
                            <p className="capitalize pt-3 flex items-center justify-between text-white " style={{ opacity: "0.3" }}><span>Learn more </span><span><IoMdArrowForward></IoMdArrowForward></span></p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100" data-aos="fade-up"
                        data-aos-duration="2000">
                        <div className="flex info_area_icon justify-center p-2 align-middle  sm:p-4 ">
                            <Image src={pose3} className="" alt='' ></Image>
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