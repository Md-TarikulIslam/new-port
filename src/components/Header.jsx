import {
    Navbar,
    Typography
} from "@material-tailwind/react";
import React from "react";
import { navList as menus } from "../assets/static/data";
export default function Header() {
    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4">
            {
                menus.map((menu) => (
                    <div key={menu.name}>
                        <a href={`#${menu.name}`}>  <Typography
                            as="li"
                            variant="small"
                            color="blue-gray"
                            className={`cursor-pointer px-4 py-2 rounded-lg hover:bg-[#e6e9ee] hover:text-black font-semibold tracking-wider capitalize`}

                        >
                            <p className="flex items-center">
                                {menu.name}
                            </p>
                        </Typography></a>
                    </div>
                ))
            }
        </ul>
    );
    return (
        <Navbar className="mx-auto max-w-screen-3xl py-1 px-4 lg:px-8 lg:py-4  rounded-none fixed top-0 z-20">
            <div className="container max-w-screen-xl mx-auto flex items-center justify-between text-blue-gray-900">
                <a href="#home">
                    <p className="font-bold text-2xl text-black tracking-widest">T<span className="text-gray-400 text-lg">arikul.</span></p>

                </a>

                <div className="hidden lg:block">{navList}</div>
            </div>
        </Navbar>
    );
}