import { Button, Card, CardBody, Input, Textarea } from '@material-tailwind/react'
import React, { useRef } from 'react'
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcFeedback } from 'react-icons/fc';



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
                <div className="mb-3 text-blue-900">Contact</div>
                <Card className=''>
                    <CardBody>
                        <form ref={form} onSubmit={handleSubmit} className="">
                            
                       <div className='flex gap-4 flex-col lg:flex-row'>
                       <Input
                                type="text"
                                name='name'
                                placeholder="Full Name"
                                className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
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
                                className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
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
                                className="!border mt-4 h-40 !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                                labelProps={{
                                    className: "hidden",
                                }}
                                containerProps={{ className: "min-w-[100px]" }}
                                required
                            />

                          
                       
                            <Button className="mt-2 flex items-center gap-2" value="Send" type="submit">
                                Send Message <FcFeedback  className='text-xl'/>
                            </Button>
                        </form>

                    </CardBody>
                </Card>

            </div>
        </div>
    )
}

export default Contact