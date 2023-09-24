import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { FcHome, FcAbout, FcBriefcase, FcSupport, FcFeedback } from "react-icons/fc";

export default function Bar() {
    const data = [
        {
            label: "Home",
            value: "#home",
            icon: <FcHome />

        },
        {
            label: "About",
            value: "#about",
            icon: <FcAbout />


        },
        {
            label: "Skills",
            value: "#skills",
            icon: <FcSupport />


        },
        {
            label: "Projects",
            value: "#projects",
            icon: <FcBriefcase />


        },



        {
            label: "Contact",
            value: "#contact",
            icon: <FcFeedback />


        },
    ];

    return (
         <Tabs id="custom-animation" value="html" className="lg:hidden w-full mx-auto bg-blue-900 fixed  bottom-0 ">
            <TabsHeader className=" bg-blue-900 " indicatorProps={{
                className: "bg-blue-700 bg-opacity-80",
            }}>
                {data.map(({ label, value, icon }) => (
                    <a className="w-full" href={value}>
                        <Tab key={value} value={value} className="text-sm text-white bg-blue-900">
                            <p href={value} className="text-2xl">{icon}</p>
                        </Tab>
                    </a>
                ))}
            </TabsHeader>
            <TabsBody
                animate={{
                    initial: { y: 250 },
                    mount: { y: 0 },
                    unmount: { y: 250 },
                }}
            >

            </TabsBody>
        </Tabs>
    );
}