import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import logo from '../../img/logo.png'

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
                        ? "flex-col flex items-center fixed inset-0 left-1/4 uppercase bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden"
                        : "hidden"
                }
            >
                <button onClick={showMenu} className="btn btn-primary">close menu</button>

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
        <div>
            <nav className='container mx-auto '>

                <div className='flex justify-between items-center py-1'>
                    <div className='flex justify-center items-center'>
                        <Link href="/">
                            <Image src={logo} alt="/"></Image>
                        </Link>
                    </div>

                    <div className="absolute right-0 md:hidden ">
                        <button onClick={showMenu} className="btn btn-primary">
                            Show Menu
                        </button>
                    </div>

                    <div>
                        <ul className="hidden  md:flex justify-between items-center gap-8 p-6  bg-white/10">
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
                            <button className='btn btn-primary bg-[#264373]'>Get Started</button>
                        </ul>
                    </div>
                </div>
                <MenuItems showMenu={showMenu} active={active} />
            </nav>
        </div>
    );
};


export default Header;