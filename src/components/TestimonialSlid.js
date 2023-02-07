import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import Image from "next/image";
import profile from '../img/profile.png'

export default function TestimonialSlid() {

    const testimonialData = [
        {
            id: 1,
            say: "It's great to be able to work out from home and be helped by the gymbaran. My day feels fresher when I regularly participate in this fun sport. Good luck to the coaches.",
            name: "Suketi Mantapo",
            designation: "Designer Graphic"


        },
        {
            id: 2,
            say: "It's great to be able to work out from home and be helped by the gymbaran. My day feels fresher when I regularly participate in this fun sport. Good luck to the coaches.",
            name: "Suketi Mantapo",
            designation: "Frontend Developer"


        },
        {
            id: 3,
            say: "It's great to be able to work out from home and be helped by the gymbaran. My day feels fresher when I regularly participate in this fun sport. Good luck to the coaches.",
            name: "Suketi Mantapo",
            designation: "MERN Developer"


        },
        {
            id: 3,
            say: "It's great to be able to work out from home and be helped by the gymbaran. My day feels fresher when I regularly participate in this fun sport. Good luck to the coaches.",
            name: "Suketi Mantapo",
            designation: "Full Stack Developer"


        },
        {
            id: 4,
            say: "It's great to be able to work out from home and be helped by the gymbaran. My day feels fresher when I regularly participate in this fun sport. Good luck to the coaches.",
            name: "Suketi Mantapo",
            designation: "Project Manager"


        },
        {
            id: 5,
            say: "It's great to be able to work out from home and be helped by the gymbaran. My day feels fresher when I regularly participate in this fun sport. Good luck to the coaches.",
            name: "Suketi Mantapo",
            designation: "Project Manager"


        },
        {
            id: 6,
            say: "It's great to be able to work out from home and be helped by the gymbaran. My day feels fresher when I regularly participate in this fun sport. Good luck to the coaches.",
            name: "Suketi Mantapo",
            designation: "Project Manager"


        },
    ]
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {testimonialData.map((value) => <SwiperSlide key={value.id}>
                    <div className="text-start shadow-xl px-12 py-12 mb-10 mt-10">
                        <p className="text-justify hero_para2" data-aos="fade-up"
                            data-aos-duration="1000"><span className="text-4xl ">“</span>{value.say}</p>
                        <div className="flex items-center pt-12">
                            <Image src={profile} className="testimonial_profile" alt="" data-aos="fade-up"
                                data-aos-duration="1500"></Image>
                            <div className="text-start ml-3 ">
                                <h1 className="font-semibold" data-aos="fade-up"
                                    data-aos-duration="2500">{value.name}</h1>
                                <p className="hero_para2 pt-1" data-aos="fade-up"
                                    data-aos-duration="3000">{value.designation}</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>)}

            </Swiper>
        </>
    );
}

