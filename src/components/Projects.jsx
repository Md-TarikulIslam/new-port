import React, { useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Collapse
} from "@material-tailwind/react";
import { FaGithub, FaGlobe } from "react-icons/fa";

import suffix from "../assets/image/pro_img/1suffix.png";
import tori from "../assets/image/pro_img/2tori.png";
import pro1 from "../assets/image/pro_img/4pro1.png";
import pro2 from "../assets/image/pro_img/3.weather.png";
import quiz from "../assets/image/pro_img/5quiz.png";
import keep from "../assets/image/pro_img/6keep.png";
import shop from "../assets/image/pro_img/7shop.png";
import newspaper from "../assets/image/pro_img/8news.png";
import car from "../assets/image/pro_img/a.png";
import player from "../assets/image/pro_img/10player.png";
import fitness from "../assets/image/pro_img/11fitness.png";
import nilmrc from "../assets/image/pro_img/12nilmrc.png";
import connect from "../assets/image/pro_img/13connect.png";
import { FcBinoculars } from 'react-icons/fc';


const ProjectsData = [
    {
        id: 1,
        img: nilmrc,
        name: "National Institute of Laboratory Medicine & Referral Centre",
        title:
            "This is a Government project. There are many landing pages and many official information is there.",
        ti: "react",
        ti2: "tailwindcss",
        ti3: "express",
        ti4: "mongodb",
        live: "https://nil-mrc.netlify.app/",
        github: "https://github.com/Md-TarikulIslam/nilmrc-client",
    },
    {
        id: 1,
        img: connect,
        name: "Connect",
        title:
            "This is a social media app, you can post and accept requests. Connect with your favorite person",
        ti: "nextjs",
        ti2: "tailwindcss",
        ti3: "express",
        ti4: "mongodb",
        live: "https://nextjs-project-tawny.vercel.app/",
        github: "https://github.com/Md-TarikulIslam/nilmrc-client",
    },
   
    {
        id: 2,
        img: suffix,
        name: "Suffix IT Limited",
        ti: "react",
        ti2: "react bootstrap",
        ti3: "css3",
        title: "Suffix IT Limited is a IT service company with various program. Many landing pages design.",

        live: "https://suffix-it.netlify.app/",
        github: "https://github.com/Md-TarikulIslam/suffix_it",
    },


];

const allData = [
    {
        id: 3,
        img: tori,
        name: "Tori Limited",
        title: "Tori Limited is a IT service company with various program",
        ti2: "TailwindCSS",
        ti3: "CSS3",
        ti: "React",
        live: "https://tori-lim.netlify.app/",
        github: "https://github.com/Md-TarikulIslam/tori-limited",
    },
    {
        id: 7,
        img: quiz,
        name: "Quiz",
        ti: "html5",
        ti2: "css3",
        ti3: "js",
        title: "Quiz app with timer functionality",

        live: "https://quiz-tarikul.netlify.app/",
        github: "https://github.com/Md-TarikulIslam/quiz-app",
    },
    {
        id: 8,
        img: keep,
        name: "Keep",
        ti: "html5",
        ti2: "css3",
        ti3: "js",
        title: "Keep app is for keep your daily notes.",
        live: "https://tarikul-keep.netlify.app/",
        github: "https://github.com/Md-TarikulIslam/keep",
    },
    {
        id: 10,
        img: pro1,
        name: "Apple Website",
        ti: "html5",
        ti2: "css3",
        ti3:"js",
        title: "Responsive landing page design",
        live: "https://md-tarikulislam.github.io/pro1/",
        github: "https://github.com/Md-TarikulIslam/pro1",
    },
    {
        id: 11,
        img: pro2,
        name: "Landing Page",
        ti: "html5",
        ti2: "css3",
        ti3:"js",
        title: "Responsive landing page design",
        live: "https://md-tarikulislam.github.io/pro2/",
        github: "https://github.com/Md-TarikulIslam/pro2",
    },
    {
        id: 1,
        img: car,
        name: "Car Service",
        title:
            "Car service is a project with MongoDB, you can check various car service method here",
        ti2: "tailwindcss",
        ti: "react",
        ti3: "express.js",
        ti4: "mongodb",
        live: "https://genius-car-8fe25.web.app",
        github: "https://github.com/Md-TarikulIslam/genius-car-client",
    },
    
    {
        id: 4,
        img: newspaper,
        name: "NewsPaper",
        ti2: "react bootstrap",
        ti3: "css3",
        ti: "react",
        ti4: "firebase",
        title: "Newspaper is a website with authentication and daily news.",
        live: "https://newspaper-e362f.web.app/",
        github: "https://github.com/Md-TarikulIslam/newspaper-client",
    },
    {
        id: 5,
        img: shop,
        name: "Shopping Website",
        ti2: "react bootstrap",
        ti3: "css3",
        ti: "react",
        ti4: "firebase",
        title: "This is a web site where you can select products and give order",

        live: "https://tarikul-shop.netlify.app/",
        github: "https://github.com/Md-TarikulIslam/shopping-with-authentication",
    },
    {
        id: 6,
        img: player,
        name: "Best Player",
        ti: "html5",
        ti2: "react bootstrap",
        ti3: "css3",
        ti4: "js",
        title:
            "Select best 5 players for your upcoming match and also count their expenses.",

        live: "https://five-players.netlify.app/",
        github: "https://github.com/Md-TarikulIslam/Select-Players",
    },
   
    
    {
        id: 9,
        img: fitness,
        name: "Fitness Freak",
        ti: "html5",
        ti2: "css3",
        ti3: "js",

        title: "You can count your exercise daily for good health.",

        live: "https://preeminent-entremet-49bfe8.netlify.app/",
        github: "https://github.com/Md-TarikulIslam/Fitness-Freak",
    },
    
]



const Projects = () => {
    const [open, setOpen] = useState(false);
    const [isButtonHidden, setIsButtonHidden] = useState(false);


    const toggleOpen = () => {
        setOpen((cur) => !cur)
        setIsButtonHidden(true);

    };
    return (
        <div id='projects'>
            <div className="max-w-screen-xl mx-auto px-2 lg:px-0 mt-10">
                <div className="mb-3 text-blue-900">Projects</div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                    {
                        ProjectsData.map(data => {
                            return (
                                <div className='mx-auto'>
                                    <Card className="mt-6 w-88 hover:shadow-orange-500 hover:shadow-md ">
                                        <CardHeader color="blue-gray" className="relative h-56">
                                            <img
                                                src={data.img}
                                                alt="card-image"
                                                className='object-cover w-full h-full'
                                            />
                                        </CardHeader>
                                        <CardBody>
                                            <Typography variant="h5" color="blue-gray" className=" h-16">
                                                {data.name}
                                            </Typography>
                                            <Typography className='h-20'>
                                                {data.title}
                                            </Typography>
                                            <div className='h-8'>
                                                <p className='text-black'>Technology: <span className='uppercase text-orange-600'>{data.ti}, {data.ti2}, {data.ti3}, {data.ti4}</span></p>
                                            </div>
                                        </CardBody>
                                        <CardFooter className="pt-0 ">
                                            <div className='flex items-center justify-center gap-3'>
                                                <a target='_blank' href={data.github}><Button className='p-1 bg-blue-900'><FaGithub className='text-4xl' /> </Button></a>
                                                <a target='_blank' href={data.live}><Button className='p-1 bg-blue-900'><FaGlobe className='text-4xl' /> </Button></a>
                                            </div>

                                        </CardFooter>

                                    </Card>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='flex justify-center mt-4'>
                    {!isButtonHidden ? (
                        <Button
                            onClick={toggleOpen}
                            className="bg-black flex items-center gap-2"
                        >
                            show all <FcBinoculars className='text-xl'/>
                        </Button>
                    ) : null}
                </div>
                <div>

                    <Collapse open={open} className='mb-10'>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-0'>
                            {
                                allData.map(data => {
                                    return (
                                        <div className='mx-auto'>
                                            <Card className="mt-6 w-88 hover:shadow-orange-500 hover:shadow-md">
                                                <CardHeader color="blue-gray" className="relative h-56">
                                                    <img
                                                        src={data.img}
                                                        alt="card-image"
                                                        className='object-cover w-full h-full'
                                                    />
                                                </CardHeader>
                                                <CardBody>
                                                    <Typography variant="h5" color="blue-gray" className=" h-16">
                                                        {data.name}
                                                    </Typography>
                                                    <Typography className='h-20'>
                                                        {data.title}
                                                    </Typography>
                                                    <div className='h-8'>
                                                        <p className='text-black'>Technology: <span className='uppercase text-orange-600'>{data.ti}, {data.ti2}, {data.ti3}, {data.ti4}</span></p>
                                                    </div>
                                                </CardBody>
                                                <CardFooter className="pt-0 ">
                                                    <div className='flex items-center justify-center gap-3'>
                                                        <a target='_blank' href={data.github}><Button className='p-1 bg-blue-900'><FaGithub className='text-4xl' /> </Button></a>
                                                        <a target='_blank' href={data.live}><Button className='p-1 bg-blue-900'><FaGlobe className='text-4xl' /> </Button></a>
                                                    </div>

                                                </CardFooter>

                                            </Card>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Collapse>
                </div>

            </div>
        </div>
    )
}

export default Projects