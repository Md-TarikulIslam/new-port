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
import { projectsData } from "../assets/static/data";

const Projects = () => {
    const [open, setOpen] = useState(false);
    const [isButtonHidden, setIsButtonHidden] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
        setIsButtonHidden(true);
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
    };

    const visibleProjects = open ? projectsData : projectsData.slice(0, 3);
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
                                    variants={cardVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false }}
                                >


                                    <Card className="mt-6 w-88 group md:hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900 transition-all">
                                        <CardHeader color="blue-gray" className="relative h-56">
                                            <img
                                                src={data.img}
                                                alt="card-image"
                                                className='object-cover w-full h-full group-hover:scale-105 transition-all object-top'
                                            />
                                        </CardHeader>
                                        <CardBody>
                                            <Typography variant="h5" color="blue-gray" className="">
                                                {data.name}
                                            </Typography>
                                            <Typography className='h-20 my-4'>
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