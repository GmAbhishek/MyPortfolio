"use client";

import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import BrandIcon from './BrandIcon';
import { RxCaretRight } from 'react-icons/rx';
import { BsFileEarmarkPerson } from 'react-icons/bs';
import ThemeSwitch from './ThemeSwitcher';

import BackToTop from './BackToTop';

const navlinks = [
    {
        name: "Home",
        sectionId: "Hero"
    },
    {
        name: "Project",
        sectionId: "Project"
    },
    {
        name: "Contact",
        sectionId: "Contact",
    },
];

export default function Navbar(): JSX.Element {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const triggerMenuRef = React.useRef<HTMLInputElement>(null);
    const navbarRef = React.useRef<HTMLDivElement>(null);
    const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

    // Toggle function for isDarkMode
    const toggleTheme = () => {
      setIsDarkMode((prev) => !prev);
    };
  

    const scrollTo = (sectionId: string) => {
        const section = document.getElementById(sectionId);
    
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
      

    const toggleMenu = (): void => {
        setIsMenuOpen((prev) => !prev);
    };

    const closeMenu = (): void => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const closeMenuOnResize = (): void => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener("resize", closeMenuOnResize);
        return () => window.removeEventListener("resize", closeMenuOnResize);
    }, []);

    useEffect(() => {
        if (triggerMenuRef.current) {
            if (isMenuOpen) {
                triggerMenuRef.current.checked = true;
            } else {
                triggerMenuRef.current.checked = false;
            }
        }

        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);

    return (
        <>
            <nav ref={navbarRef} className={`sticky top-0 z-50 w-screen  md:relative safe-layout ${isDarkMode? 'bg-black':'bg-white'}`} >
                {/* <Banner /> */}
                <div className='flex flex-row items-center justify-between py-6 border-b-2 border-b-gray safe-x-padding'>
                    <Link className='z-50' href="/" onClick={closeMenu} prefetch={false}>
                    <div className="w-[64px] h-[64px] lg:w-[64px] lg:h-[64px]">
  <BrandIcon />
</div>

                    </Link>
                    {/* desktop menu */}
                    <div className='flex-row items-center justify-between hidden text-lg font-bold md:flex md:gap-6 lg:gap-8'>
                        <ul className='flex flex-row md:gap-6 lg:gap-8 justify-evenly'>
                            {navlinks.map((link, index) => (
                                <li key={index}>
                                    <div
                                        className={`p-4`}
                                        onClick={() => scrollTo(link.sectionId)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {link.name}
                                    </div>
                                </li>
                            ))}

                        </ul>
                        <ThemeSwitch isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </div>
                    {/* mobile hamburger menu */}
                    <div className="z-50 md:hidden">
                        <label className="cursor-pointer hamburger">
                            <input className='hidden' type="checkbox" ref={triggerMenuRef} onClick={toggleMenu} />
                            <svg viewBox="0 0 32 32" id='hamburger'>
                                <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                                <path className="line" d="M7 16 27 16"></path>
                            </svg>
                        </label>
                    </div>
                </div>
            </nav>
            {/* mobile menu */}
            <div
                className={`${isMenuOpen ? "top-0" : "-translate-y-full"} fixed top-0 w-screen h-screen transition-all duration-500 ease-in-out z-40 ${isDarkMode? 'bg-black':'bg-white'}`}
                style={{ paddingTop: navbarRef.current ? `${navbarRef.current.offsetHeight}px` : '90px' }}
            >
                <div className='flex flex-col items-start justify-between p-4 text-lg font-medium lg:hidden lg:gap-8'>
                    <ul className='w-full'>
                        {navlinks.map((link, index) => (
                            <li key={index} className={`flex mb-2 rounded-lg`}>
                                <div
                                    className={`flex-1 py-4 safe-x-padding`}
                                    onClick={closeMenu}
                                >
                                    <div className="flex items-center justify-between" onClick={() => scrollTo(link.sectionId)} style={{ cursor: 'pointer' }}>
                                        <span className={`gradient-text text-2xl font-semibold`}>{link.name}</span>
                                        <span className={`text-secondary text-4xl`}>
                                            <RxCaretRight />
                                        </span>
                                    </div>
                                </div>
                            </li>
                        ))}
                        
                        <li className="flex mb-2 rounded-lg"> 
                        <div className="flex items-center justify-between">
                                    <ThemeSwitch isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
                                </div>
                                </li>
                        {/* <li className="flex text-white rounded-lg gradient-bg">
                            <a
                                href="/"
                                className="flex-1 py-4 safe-x-padding"
                                download="Gm_Abhishek Resume"
                            >
                               
                                <div className="flex items-center justify-between">
                                    <span className='text-2xl font-semibold'>Resume</span>
                                    <span className='text-4xl'>
                                        <BsFileEarmarkPerson />
                                    </span>
                                </div>
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>

    <BackToTop/>
        </>
    );
}
