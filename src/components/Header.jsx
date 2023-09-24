import React, { useState } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import logo from '../assets/image/logo.png'

export default function Header() {
    const [openNav, setOpenNav] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <a href="#home">  <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className={`cursor-pointer px-4 py-2 rounded-full hover:bg-[#e6e9ee] ${selectedItem === 'item1' ? 'bg-blue-900 text-white' : ''
                    }`}
                onClick={() => handleItemClick('item1')}
            >
                <p href="#home" className="flex items-center">
                    Home
                </p>
            </Typography></a>
            <a href="#about"><Typography
                as="li"
                variant="small"
                color="blue-gray"
                className={`cursor-pointer px-4 py-2 rounded-full hover:bg-[#e6e9ee] ${selectedItem === 'item2' ? 'bg-blue-900 text-white' : ''
                    }`}
                onClick={() => handleItemClick('item2')}
            >
                <p href="#about" className="flex items-center">
                    About
                </p>
            </Typography></a>
            <a href="#skills"> <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className={`cursor-pointer px-4 py-2 rounded-full hover:bg-[#e6e9ee] ${selectedItem === 'item3' ? 'bg-blue-900 text-white' : ''
                    }`}
                onClick={() => handleItemClick('item3')}
            >
                <p href="#skills" className="flex items-center">
                    Skills
                </p>
            </Typography></a>
            <a href="#projects"> <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className={`cursor-pointer px-4 py-2 rounded-full hover:bg-[#e6e9ee] ${selectedItem === 'item4' ? 'bg-blue-900 text-white' : ''
                    }`}
                onClick={() => handleItemClick('item4')}
            >
                <p href="#projects" className="flex items-center">
                    Projects
                </p>
            </Typography></a>
            <a href="#contact"> <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className={`cursor-pointer px-4 py-2 rounded-full hover:bg-[#e6e9ee] ${selectedItem === 'item5' ? 'bg-blue-900 text-white' : ''
                    }`}
                onClick={() => handleItemClick('item5')}
            >
                <p href="#contact" className="flex items-center">
                    Contact
                </p>
            </Typography></a>
        </ul>
    );

    return (
        <Navbar className="mx-auto max-w-screen-3xl py-2 px-4 lg:px-8 lg:py-4 rounded-none fixed top-0 z-20">
            <div className="container max-w-screen-xl mx-auto flex items-center justify-between text-blue-gray-900">
                <a href="#home"> <img className="w-40" src={logo} alt="" /></a>
                <div className="hidden lg:block">{navList}</div>

                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                <div className="container mx-auto">
                    {navList}

                </div>
            </MobileNav>
        </Navbar>
    );
}