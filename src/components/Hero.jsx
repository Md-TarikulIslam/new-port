import React from 'react'
import img from '../assets/image/pro.png'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { FcFeedback, FcNews, FcPhoneAndroid } from 'react-icons/fc';
import { FaGithubAlt } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-2 lg:px-0 " id='home'>
            <Card className="w-full mb-10  flex-col lg:flex-row  items-center bg-[url('https://www.imageshine.in/uploads/gallery/Free-vector-hand-painted-watercolor-abstract-watercolor-background.jpg')] bg-cover bg-center">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 w-4/5 lg:w-2/5 shrink-0 rounded-r-none flex-1"
                >
                    <img
                        src={img}
                        alt="card-image"
                        className="lg:h-full w-full object-cover"
                    />
                </CardHeader>
                <CardBody className='flex-1'>
                    <Typography variant="h6" color="gray" className="uppercase">
                        hi, i'm
                    </Typography>
                    <Typography color="blue-gray" className="my-4 text-4xl lg:text-5xl font-bold">
                        Md. Tarikul Islam
                    </Typography>
                    <Typography color="gray" className="mb-4 font-normal ">
                        Web Developer
                    </Typography>


                    <div className='flex gap-4'>
                        <a href="https://github.com/Md-TarikulIslam"><p className=' text-4xl'><FaGithubAlt /></p></a>

                        <a href="mailto:tarikul2605@gmail.com"><p className=' text-4xl'><FcFeedback /></p></a>
                        <a href="tel:01739426293"><p className='text-4xl'><FcPhoneAndroid /></p></a>
                    </div>

                    <a href="https://drive.google.com/uc?id=1a19KFmNoYVRvmXOH_tv0F9lmeuMVn0rj&export=download"
                        download><Button className="flex items-center gap-2 mt-4 bg-black">Download CV <FcNews className="text-xl" /></Button></a>


                </CardBody>
            </Card>
        </div>
    )
}

export default Hero