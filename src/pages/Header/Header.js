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
                        ? "flex-col flex items-center fixed inset-0  uppercase bg-black/40 backdrop-blur-lg gap-8 justify-center   md:hidden"
                        : "hidden"
                }
            >
                <p onClick={showMenu} className="border-1 border-red-400">
                    <GrFormClose></GrFormClose>
                </p>

                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/projects">
                        Program
                    </Link>
                </li>

                <li>
                    <Link href="/about">
                        Blog
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
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
                    <div className='flex justify-center items-center'>
                        <Link href="/">
                            <Image src={logo} alt="/"></Image>
                        </Link>
                    </div>

                    <div className="absolute right-10 md:hidden flex items-center">
                        <p onClick={showMenu} className=" ">
                            <span className=' text-black text-2xl'><FiMenu></FiMenu></span>
                        </p>
                    </div>

                    <div>
                        <ul className="hidden  md:flex justify-between items-center gap-8 p-6 ">
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
                            <div className='mr-3'>
                                <button className='btn btn-primary bg-[#264373] mr-3'>Get Started</button>
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