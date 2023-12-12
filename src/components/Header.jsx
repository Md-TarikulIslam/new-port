import {
    Navbar,
    Typography
} from "@material-tailwind/react";
import React, { useState } from "react";
import logo from '../assets/image/logo.png';

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
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4">
            <a href="#home">  <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className={`cursor-pointer px-4 py-2 rounded-lg hover:bg-[#e6e9ee] hover:text-black font-semibold tracking-wider ${selectedItem === 'item1' ? 'bg-blue-900 text-white' : ''
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
                className={`cursor-pointer px-4 py-2 rounded-lg hover:bg-[#e6e9ee] hover:text-black font-semibold tracking-wider ${selectedItem === 'item2' ? 'bg-blue-900 text-white' : ''
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
                className={`cursor-pointer px-4 py-2 rounded-lg hover:bg-[#e6e9ee] hover:text-black font-semibold tracking-wider ${selectedItem === 'item3' ? 'bg-blue-900 text-white' : ''
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
                className={`cursor-pointer px-4 py-2 rounded-lg hover:bg-[#e6e9ee] hover:text-black font-semibold tracking-wider ${selectedItem === 'item4' ? 'bg-blue-900 text-white' : ''
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
                className={`cursor-pointer px-4 py-2 rounded-lg hover:bg-[#e6e9ee] hover:text-black font-semibold tracking-wider ${selectedItem === 'item5' ? 'bg-blue-900 text-white' : ''
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
        <Navbar className="mx-auto max-w-screen-3xl py-1 px-4 lg:px-8 lg:py-4  rounded-none fixed top-0 z-20">
            <div className="container max-w-screen-xl mx-auto flex items-center justify-between text-blue-gray-900">
                <a href="#home"> <img
                    // className="w-28 lg:w-40" 
                    className={`cursor-pointer w-28 lg:w-40 ${selectedItem === 'item0' ? '' : ''
                        }`}
                    onClick={() => handleItemClick('item0')}
                    src={logo} alt="" /></a>

                <div className="hidden lg:block">{navList}</div>
            </div>
        </Navbar>
    );
}