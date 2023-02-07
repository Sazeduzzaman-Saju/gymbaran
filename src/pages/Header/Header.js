import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import logo from '../../img/logo.png'
import { FiMenu } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";

const Header = () => {
    const [active, setActive] = useState(false);

    const showMenu = () => {
        setActive(!active);
    };
    const MenuItems = ({ showMenu, active }) => {
        return (
            <ul
                className={
                    active
                        ? "flex-col flex items-center fixed pt-10 inset-0  uppercase bg-black/60 z-50 backdrop-blur-lg gap-8   md:hidden"
                        : "hidden"
                }
                data-aos="zoom-in-left"
            >
                <button onClick={showMenu} className="hover:border-2 hover:border-[#6765F0] rounded-full p-2 text-white bg-[#ffffff] text-2xl">
                    <GrFormClose className=''></GrFormClose>
                </button>

                <li >
                    <Link href="/" className='text-white hover:text-[#6765F0]'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/projects" className='text-white hover:text-[#6765F0]'>
                        Program
                    </Link>
                </li>

                <li>
                    <Link href="/about" className='text-white hover:text-[#6765F0]'>
                        Blog
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className='text-white hover:text-[#6765F0]'>
                        About Us
                    </Link>
                </li>
            </ul>
        );
    };

    return (
        <div className='px-4 py-1'>
            <nav className='container mx-auto '>

                <div className='flex justify-between items-center '>
                    <div className='flex justify-center items-center' data-aos="fade-up"
                        data-aos-duration="1000">
                        <Link href="/">
                            <Image src={logo} alt="/"></Image>
                        </Link>
                    </div>

                    <div className="absolute right-10 md:hidden flex items-center" data-aos="fade-left"
                        data-aos-duration="2000">
                        <p onClick={showMenu} className=" ">
                            <span className=' text-black text-2xl'><FiMenu></FiMenu></span>
                        </p>
                    </div>

                    <div data-aos="fade-up"
                        data-aos-duration="3000">
                        <ul className="hidden  md:flex justify-between items-center gap-8 ">
                            <li>
                                <Link href="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/Program">
                                    Program
                                </Link>
                            </li>
                            <li>
                                <Link href="/Blog">
                                    Blog
                                </Link>
                            </li>

                            <li>
                                <Link href="/About">
                                    About Us
                                </Link>
                            </li>
                            <div className=''>
                                <button className='btn rounded-[12px] shadow-xl bg-[#264373]  hover:bg-[#6462f0] border-0 capitalize'>Get Started</button>
                            </div>
                        </ul>
                    </div>
                </div>
                <MenuItems showMenu={showMenu} active={active} />
            </nav>
        </div>
    );
};


export default Header;