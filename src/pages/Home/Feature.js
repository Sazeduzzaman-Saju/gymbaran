import Image from 'next/image';
import React from 'react';
import feature1 from '../../img/feature1.png'
import feature2 from '../../img/feature2.png'
import feature3 from '../../img/feature3.png'
import feature4 from '../../img/feature4.png'
import feature5 from '../../img/feature5.png'
import feature6 from '../../img/feature6.png'

const Feature = () => {
    return (
        <div>
            <div className="dark:bg-gray-800 dark:text-gray-100 mt-24 mb-24">
                <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center" data-aos="fade-left"
                        data-aos-duration="1000">
                        <h2 className="hero_title">Programs that can <br /> be taken</h2>
                    </div>
                    <div className="mt-12 space-y-10 sm:space-y-0 sm:gap-x-6 sm:gap-y-12 lg:gap-x-8 grid md:grid-cols-1 lg:grid-cols-3">
                        <div className="flex" >
                            <Image src={feature1} alt="" data-aos="fade-right"
                                data-aos-duration="1000"></Image>
                            <div className="ml-3" data-aos="fade-right"
                                data-aos-duration="1500">
                                <dt className="feature_title">Gets ABS in 2 weeks</dt>
                                <p className=" feature_para">Exercise is a very important <br /> need for our body.</p>
                            </div>
                        </div>

                        <div className="flex" data-aos="fade-right"
                            data-aos-duration="1000">
                            <Image src={feature2} alt=""></Image>
                            <div className="ml-3" data-aos="fade-right"
                                data-aos-duration="2000">
                                <dt className="feature_title">25 Mins full body workout</dt>
                                <p className=" feature_para">Exercise is a very important <br /> need for our body.</p>
                            </div>
                        </div>

                        <div className="flex" data-aos="fade-right"
                            data-aos-duration="1000">
                            <Image src={feature3} className="feature_image p-2" alt=""></Image>
                            <div className="ml-3" data-aos="fade-right"
                                data-aos-duration="2000">
                                <dt className="feature_title">10 Mins toned arms workout</dt>
                                <p className=" feature_para">Exercise is a very important <br /> need for our body.</p>
                            </div>
                        </div>
                        <div className="flex" data-aos="fade-right"
                            data-aos-duration="1000">
                            <Image src={feature4} className="feature_image p-2" alt=""></Image>
                            <div className="ml-3" data-aos="fade-right"
                                data-aos-duration="2000">
                                <dt className="feature_title">15 Mins full body fat burn</dt>
                                <p className=" feature_para">Exercise is a very important <br /> need for our body.</p>
                            </div>
                        </div>
                        <div className="flex" data-aos="fade-right"
                            data-aos-duration="1000">
                            <Image src={feature5} alt=""></Image>
                            <div className="ml-3" data-aos="fade-right"
                                data-aos-duration="2000">
                                <dt className="feature_title">25 Mins HIIT workout</dt>
                                <p className=" feature_para">Exercise is a very important <br /> need for our body.</p>
                            </div>
                        </div>
                        <div className="flex" data-aos="fade-right"
                            data-aos-duration="1000">
                            <Image src={feature6} alt=""></Image>
                            <div className="ml-3" data-aos="fade-right"
                                data-aos-duration="2000">
                                <dt className="feature_title">Intense lower Abs workout</dt>
                                <p className=" feature_para">Exercise is a very important <br /> need for our body.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;