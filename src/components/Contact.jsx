import { Button, Card, CardBody, Chip, Input, Textarea } from '@material-tailwind/react'
import React, { useRef } from 'react'
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcFeedback } from 'react-icons/fc';
import img from "../assets/image/contact.png"



const Contact = () => {
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_mtao1qb",
                "template_0fvv02l",
                form.current,
                "iHrXOZwuUnKviODpL"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        toast.success("Success");
        e.target.reset();
    };
    return (
        <div id='contact'>
            <div className='max-w-screen-xl mx-auto px-2 lg:px-0'>
                <div className='max-w-min mb-3 '>
                    <Chip
                        variant="ghost"
                        color="blue"
                        size="sm"
                        className="font tracking-wider"
                        value="contact"
                        icon={
                            <span className="mx-auto mt-1  block h-2 w-2 rounded-full bg-blue-900 content-[''] " />
                        }
                    />
                </div>
                <Card className="bg-[url('https://www.imageshine.in/uploads/gallery/Free-vector-hand-painted-watercolor-abstract-watercolor-background.jpg')] bg-cover bg-center">
                    <CardBody>
                        <div className=' items-center flex-none lg:flex'>
                            <div className='flex-1'>
                                <img className='w-4/5 hidden lg:block' src={img} alt="" />
                            </div>
                            <div className='flex-1'>
                                <form ref={form} onSubmit={handleSubmit} className="">

                                    <div className='flex gap-4 flex-col lg:flex-row'>
                                        <Input
                                            type="text"
                                            name='name'
                                            placeholder="Full Name"
                                            className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 !h-12"
                                            labelProps={{
                                                className: "hidden",
                                            }}
                                            containerProps={{ className: "min-w-[100px]" }}
                                            required
                                        />
                                        <Input
                                            type="email"
                                            name='email'
                                            placeholder="Email Address"
                                            className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 !h-12"
                                            labelProps={{
                                                className: "hidden",
                                            }}
                                            containerProps={{ className: "min-w-[100px]" }}
                                            required
                                        />
                                    </div>

                                    <Textarea
                                        type="text"
                                        name='message'
                                        placeholder="Message"
                                        className="!border mt-4 lg:mt-6 h-[150px] !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 "
                                        labelProps={{
                                            className: "hidden",
                                        }}
                                        containerProps={{ className: "min-w-[100px]" }}
                                        required
                                    />



                                    <Button className="mt-[2px] lg:mt-[10px] flex items-center gap-2" value="Send" type="submit">
                                        Send Message <FcFeedback className='text-xl' />
                                    </Button>
                                </form>
                            </div>
                        </div>

                    </CardBody>
                </Card>

            </div>
        </div>
    )
}

export default Contact