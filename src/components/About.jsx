import {
    Button,
    Chip,
    Typography

} from "@material-tailwind/react";
import img from '../assets/image/com.jpg'
import { FcCheckmark, FcIdea, FcNews, FcSupport } from "react-icons/fc";

export default function About() {
    return (
        <div className="max-w-screen-xl mx-auto px-2 lg:px-0" id="about">
            <div className='max-w-min mb-3 '>
                <Chip
                    variant="ghost"
                    color="blue"
                    size="sm"
                    className="font tracking-wider"
                    value="about me"
                    icon={
                        <span className="mx-auto mt-1  block h-2 w-2 rounded-full bg-blue-900 content-[''] " />
                    }
                />
            </div>

            <figure className="relative h-full w-full ">
                <img
                    className="h-[1050px] lg:h-[1100px] w-full rounded-xl object-cover object-left lg:object-top"
                    src={img}
                    alt="image"
                />
                <figcaption className="absolute bottom-8 left-2/4 flex w-full lg:w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-2  lg:px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                    <div className="">
                        <div className="flex gap-3 justify-center lg:justify-start">
                            <div className="h-24 w-24 lg:h-36 lg:w-36 border border-orange-600 hover:border-none p-1 lg:p-4 rounded-xl flex flex-col items-center hover:bg-orange-900 hover:text-gray-300">
                                <Typography><FcIdea className="text-3xl" /> </Typography>
                                <Typography className="my-2 font-bold">
                                    Experience
                                </Typography>
                                <Typography className="text-xs">1 Year Working</Typography>
                            </div>
                            <div className="h-24 w-24 lg:h-36 lg:w-36 border border-orange-600 hover:border-none p-1 lg:p-4 rounded-xl flex flex-col items-center hover:bg-orange-900 hover:text-gray-300">
                                <Typography><FcCheckmark className="text-3xl" /> </Typography>
                                <Typography className="my-2 font-bold">
                                    Completed
                                </Typography>
                                <Typography className="text-sm">13+ Projects</Typography>
                            </div>
                            <div className="h-24 w-24 lg:h-36 lg:w-36 border border-orange-600 hover:border-none p-1 lg:p-4 rounded-xl flex flex-col items-center hover:bg-orange-900 hover:text-gray-300">
                                <Typography><FcSupport className="text-3xl" /> </Typography>
                                <Typography className="my-2 font-bold">
                                    Support
                                </Typography>
                                <Typography className="text-sm">Online 24/7</Typography>
                            </div>

                        </div>
                        <Typography color="gray" className="my-2 text-xs md:text-sm lg:text-base font-normal text-justify  mx-auto">
                            Hello, I am Md. Tarikul Islam, and I am a highly skilled web developer with a passion for programming. I Recently completed my B.Sc in Computer Science and Engineering (CSE) at Bangladesh Army University of Engineering & Technology (BAUET).

                            I am passionate about continuous learning and have completed various courses on different online platforms, including 10 Minute School, Bohubrihi, SoloLearn, Simplilearn, and FreeCodeCamp, to further enhance my knowledge and skills.

                            In my free time, I enjoy building personal projects, and exploring new technologies. I am passionate about staying up-to-date with the latest trends and advancements in the field of web development and continuously strive to improve my skills and knowledge.

                            As a highly motivated, detail-oriented, and dedicated individual, I am committed to delivering quality work within tight deadlines and continuously improving my skills. I possess excellent communication skills and enjoy working collaboratively with teams to deliver innovative solutions that meet the needs of users.

                            Overall, I am confident that my skills, experience, combined with my technical skills, and strong work ethic, make me an ideal candidate for any web development role. I am excited about the opportunities that lie ahead and look forward to making valuable contributions to any team.
                        </Typography>
                        <a href="https://drive.google.com/uc?id=1a19KFmNoYVRvmXOH_tv0F9lmeuMVn0rj&export=download"
                            download><Button className="flex items-center gap-2 bg-black">Download CV <FcNews className="text-xl" /></Button></a>
                    </div>

                </figcaption>
            </figure>
        </div>
    );
}