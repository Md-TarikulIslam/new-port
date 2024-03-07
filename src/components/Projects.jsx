import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Chip,
    Typography
} from "@material-tailwind/react";
import React, { useState } from 'react';

import { motion } from 'framer-motion';
import { FcBinoculars, FcLink } from 'react-icons/fc';
import nilmrc from "../assets/image/pro_img/12nilmrc.png";
import connect from "../assets/image/pro_img/13connect.png";
import patagonia from "../assets/image/pro_img/15.png";
import suffix from "../assets/image/pro_img/1suffix.png";
import tori from "../assets/image/pro_img/2tori.png";
import game from '../assets/image/pro_img/logo.png';
import suwq from '../assets/image/pro_img/suwq.png';


const ProjectsData = [
    {
        id: 1555,
        img: suwq,
        name: "SUWQ",
        title:
            "This is a eCommerce project. User can register, login to buy their desired products from here.",
        tech: [
            {
                t: "ReactJS"
            },
            {
                t: "tailwindCSS"
            },
            {
                t: "expressJS"
            },
            {
                t: "mongoDB"
            },
        ],
        live: "https://www.suwq.online/",
        github: "",
    },
    {
        id: 15555,
        img: game,
        name: "Gaming",
        title:
            "This is a Gaming sell and buy project. User can register, login to sell and buy their desired products from here.",
        tech: [
            {
                t: "ReactJS"
            },
            {
                t: "tailwindCSS"
            },
            {
                t: "expressJS"
            },
            {
                t: "mongoDB"
            },
        ],
        live: "https://idev-gaming.netlify.app/",
        github: "",
    },
    {
        id: 100,
        img: nilmrc,
        name: "National Institute of Laboratory Medicine & Referral Centre",
        title:
            "This is a Government project. There are many landing pages and many official information is there.",
        tech: [
            {
                t: "ReactJS"
            },
            {
                t: "tailwindCSS"
            },
            {
                t: "expressJS"
            },
            {
                t: "mongoDB"
            },
        ],
        live: "https://main.d3k4uhf97xt2iw.amplifyapp.com/",
        github: "",
    },
    {
        id: 15,
        img: patagonia,
        name: "Patagonia Explore",
        title:
            "This is a project for a travel guider. There are many landing pages and many information's are there.",
        tech: [
            {
                t: "ReactJS"
            },
            {
                t: "tailwindCSS"
            },
            {
                t: "expressJS"
            },
            {
                t: "mongoDB"
            },
        ],
        live: "https://patagoniaexplore.com/",
        github: "",
    },

    {
        id: 1,
        img: connect,
        name: "Connect",
        title:
            "This is a social media app, you can post and accept requests. Connect with your favorite person",
        tech: [
            {
                t: "nextjs"
            },
            {
                t: "tailwindCSS"
            },
            {
                t: "expressJS"
            },
            {
                t: "mongoDB"
            },
        ],
        live: "https://life-match.vercel.app/",
        github: "",
    },

    {
        id: 2,
        img: suffix,
        name: "Suffix IT Limited",
        tech: [
            {
                t: "ReactJS"
            },
            {
                t: "css3"
            },
            {
                t: "Bootstrap"
            },
            {
                t: "swiperjs"
            },
        ],

        title: "Suffix IT Limited is a IT service company with various program. Many landing pages design.",

        live: "https://suffix-it.netlify.app/",
        github: "https://github.com/Md-TarikulIslam/suffix_it",
    },
    {
        id: 3,
        img: tori,
        name: "Tori Limited",
        title: "Tori Limited is a IT service company with various program",
        tech: [
            {
                t: "ReactJS"
            },
            {
                t: "css3"
            },
            {
                t: "tailwindcss"
            },

        ],
        live: "https://tori-lim.netlify.app/",
        github: "https://github.com/Md-TarikulIslam/tori-limited",
    },


];





const Projects = () => {
    const [open, setOpen] = useState(false);
    const [isButtonHidden, setIsButtonHidden] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
        setIsButtonHidden(true);
    };


    const visibleProjects = open ? ProjectsData : ProjectsData.slice(0, 3);
    return (
        <div id='projects'>
            <div className="max-w-screen-xl mx-auto px-2 lg:px-0 mt-10">

                <div className='max-w-min mb-3 '>
                    <Chip
                        variant="ghost"
                        color="blue"
                        size="sm"
                        className="font tracking-wider"
                        value="projects"
                        icon={
                            <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-blue-900 content-[''] " />
                        }
                    />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-8'>
                    {
                        visibleProjects.map((data, index) => {
                            return (
                                <motion.div className='mx-auto' key={index + 1}
                                >


                                    <Card className="mt-6 w-88 group md:hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900 transition-all">
                                        <CardHeader color="blue-gray" className="relative h-56">
                                            <img
                                                src={data.img}
                                                alt="card-image"
                                                className='object-cover w-full h-full group-hover:scale-105 transition-all '
                                            />
                                        </CardHeader>
                                        <CardBody>
                                            <Typography variant="h5" color="blue-gray" className=" h-16">
                                                {data.name}
                                            </Typography>
                                            <Typography className='h-20'>
                                                {data.title}
                                            </Typography>
                                            <div className='grid grid-cols-2 gap-2'>
                                                {
                                                    data.tech.map((d, idx) => {
                                                        return (
                                                            <div key={idx} className=''>
                                                                <Chip
                                                                    variant="ghost"
                                                                    color="blue"
                                                                    size="sm"
                                                                    className="font tracking-wider flex justify-center items-center h-full w-full"
                                                                    value={d.t}

                                                                />
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </CardBody>
                                        <CardFooter className="pt-0">
                                            <a target='_blank' href={data.live}><Button className='bg-black flex items-center gap-2 py-2'>Live <FcLink className='text-xl' /></Button></a>
                                        </CardFooter>

                                    </Card>
                                </motion.div>
                            )
                        })
                    }
                </div>
                {!open && !isButtonHidden && (
                    <div className="mb-8 -mt-4">
                        <Button onClick={toggleOpen} className='tracking-widest bg-black flex items-center gap-2 mx-auto'>
                            Show all <FcBinoculars className='text-xl' />
                        </Button>
                    </div>
                )}
                <div>

                </div>

            </div>
        </div>
    )
}

export default Projects