import Link from 'next/link';
import React from 'react';

const ComingSoon = () => {
    return (
        <div>
            <section className=" relative z-10 py-[120px]">
                <div className="container mx-auto">
                    <div className="-mx-4 flex">
                        <div className="w-full px-4">
                            <div className="mx-auto max-w-[400px] text-center">
                                <h2
                                    className="mb-2 text-[50px] font-bold leading-none  sm:text-[80px] md:text-[100px] text-[#6462f0]"
                                >
                                    Not Done Yet!
                                </h2>
                                <h4 className="mb-3 text-[22px] font-semibold leading-tight text-[#6462f0]">
                                    Oops! That page can’t be Complete
                                </h4>
                                <p className="mb-8 text-lg text-[#6462f0]">
                                    The page you are looking for it maybe not complete
                                </p>
                                <Link
                                    href="/"
                                    className="hover:text-primary inline-block rounded-lg border border-white px-8 py-3 text-center text-base font-semibold text-white bg-[#6462f0] transition hover:bg-white"
                                >
                                    Go To Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute top-0 left-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14"
                >
                    <div
                        className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"
                    ></div>
                    <div className="flex h-full w-1/3">
                        <div
                            className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"
                        ></div>
                        <div
                            className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"
                        ></div>
                    </div>
                    <div
                        className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"
                    ></div>
                </div>
            </section>
        </div>
    );
};

export default ComingSoon;