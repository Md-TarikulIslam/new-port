import {
    Button,
    Card,
    CardBody,
    Typography

} from "@material-tailwind/react";
import img1 from '../assets/image/logos/1.png'
import img2 from '../assets/image/logos/2.png'
import img3 from '../assets/image/logos/3.png'
import img4 from '../assets/image/logos/4.png'
import img5 from '../assets/image/logos/5.png'
import img6 from '../assets/image/logos/6.png'
import img7 from '../assets/image/logos/7.png'
import img8 from '../assets/image/logos/8.jpg'
import img9 from '../assets/image/logos/9.png'
import img10 from '../assets/image/logos/10.webp'
import img11 from '../assets/image/logos/11.png'
import img12 from '../assets/image/logos/12.png'
import img13 from '../assets/image/logos/13.png'
import img14 from '../assets/image/logos/14.webp'
import img15 from '../assets/image/logos/15.png'
import img16 from '../assets/image/logos/16.png'
import img17 from '../assets/image/logos/17.png'

const allData = [
    {
        id: 1,
        img: img1
    },
    {
        id: 2,
        img: img2
    },
    {
        id: 3,
        img: img3
    },
    {
        id: 4,
        img: img4
    },
    {
        id: 5,
        img: img5
    },
    {
        id: 16,
        img: img16
    },
    {
        id: 6,
        img: img6
    },
    {
        id: 7,
        img: img7
    },
    {
        id: 8,
        img: img8
    },
    {
        id: 9,
        img: img9
    },
    {
        id: 17,
        img: img17
    },
    {
        id: 10,
        img: img10
    },
    {
        id: 11,
        img: img11
    },
    {
        id: 12,
        img: img12
    },
    {
        id: 13,
        img: img13
    },
    {
        id: 14,
        img: img14
    },
    {
        id: 15,
        img: img15
    },
    
   

]
export default function Skills() {
    return (
        <div className="max-w-screen-xl mx-auto px-2 lg:px-0 mt-10" id='skills'>
            <div className="mb-3 text-blue-900">Skills & Experiences</div>

            <Card className="bg-gradient-to-r from-cyan-50 to-blue-100">
                <CardBody >
                    <Typography className="text-center pt-16 mb-4 text-black">My Technical Skills</Typography>
                    <div className="grid grid-cols-5 lg:grid-cols-7 gap-5 max-w-screen-sm mx-auto">
                        {
                            allData.map(data => {
                                return (
                                    <div className=" rounded-2xl bg-white shadow-sm hover:scale-[1.03] hover:shadow-white">
                                        <img className="w-20  mx-auto p-2" src={data.img} alt="" />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <Typography className="text-center pt-10 mb-4 text-black">My Experiences</Typography>
                    <div className="flex items-center justify-center gap-5 max-w-screen-sm mx-auto flex-col lg:flex-row">
                        <Card className="flex-1 w-full rounded-2xl bg-white shadow-sm hover:scale-[1.03] hover:shadow-white">
                            <CardBody>
                                <Typography className="text-orange-600 text-2xl font-semibold">Jr. Software Engineer</Typography>
                                <Typography className="text-blue-900 my-1">Horizon Rising Star</Typography>
                                <Typography className="text-sm"> May, 2023 - Present</Typography>
                            </CardBody>
                        </Card>
                        <Card className="flex-1 w-full rounded-2xl bg-white shadow-sm hover:scale-[1.03] hover:shadow-white">
                            <CardBody>
                                <Typography className="text-orange-600 text-2xl font-semibold">Jr. Software Engineer (Intern)</Typography>
                                <Typography className="text-blue-900 my-1">Suffix IT Limited</Typography>
                                <Typography className="text-sm"> January, 2023 - April, 2023</Typography>
                            </CardBody>
                        </Card>
                    </div>

                </CardBody>
            </Card>

        </div>
    );
}