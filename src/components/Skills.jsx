import {
    Card,
    CardBody,
    Chip,
    Typography
} from "@material-tailwind/react";
import { motion } from 'framer-motion';
import { jobData, skillsData } from "../assets/static/data";

export default function Skills() {

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };
    return (
        <div className="max-w-screen-xl mx-auto px-2 lg:px-0 mt-10" id='skills'>
            <div className='max-w-min mb-3 '>
                <Chip
                    variant="ghost"
                    color="blue"
                    size="sm"
                    className="font tracking-wider "
                    value="Skills & Experiences"
                    icon={
                        <span className="mx-auto mt-1  block h-2 w-2 rounded-full bg-blue-900 content-[''] " />
                    }
                />
            </div>

            <Card className="bg-gradient-to-r from-cyan-50 to-blue-100">
                <CardBody >
                    <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 items-center" >

                        <div className="flex-1">

                            <motion.ul variants={container}
                                initial="hidden"
                                whileInView='visible'
                                viewport={{ once: false }}
                                className="container grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
                                {
                                    skillsData.map((data, index) => {
                                        return (
                                            <motion.li variants={item} className="flex item flex-col items-center gap-1" key={index + 1}>
                                                <div className="transition   ease-in-out rounded-2xl bg-[#fef4f5] shadow-sm hover:scale-[1.05] hover:shadow-white">
                                                    <img className="w-14 h-14  mx-auto p-2" src={data.img} alt="" />

                                                </div>
                                                <div>
                                                    <p className="text-xs">{data.name}</p>
                                                </div>
                                            </motion.li>
                                        )
                                    })
                                }
                            </motion.ul>
                        </div>
                        <div className="flex-1 space-y-4">
                            {
                                jobData.map((job, index) => {
                                    return (
                                        <div key={index + 1} className=" rounded-2xl hover:shadow-white hover:shadow-md bg-[#fef4f5] py-3 pl-4 pr-8">

                                            <div className="flex flex-col gap-1 ">
                                                <Typography className="text-xl text-black font-bold" color="blue-gray">
                                                    {job.position}
                                                </Typography>
                                                <Typography className="text-blue-900">
                                                    {job.company}
                                                </Typography>
                                                <Typography variant="small" color="gray" className="font-normal">
                                                    {job.time}
                                                </Typography>
                                            </div>
                                        </div>
                                    )
                                })

                            }
                        </div>
                    </div>


                </CardBody>
            </Card>

        </div>
    );
}