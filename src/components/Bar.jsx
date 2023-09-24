import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";

export default function Bar() {
    const data = [
        {
            label: "Home",
            value: "#home",

        },
        {
            label: "About",
            value: "#about",

        },
        {
            label: "Skills",
            value: "#skills",

        },
        {
            label: "Projects",
            value: "#projects",

        },



        {
            label: "Contact",
            value: "#contact",

        },
    ];

    return (
        <Tabs id="custom-animation" value="html" className="lg:hidden bg-blue-900 fixed bottom-0 w-full rounded-none ">
            <TabsHeader className="rounded-none bg-blue-900" indicatorProps={{
                className: "bg-blue-700 shadow-none ",
            }}>
                {data.map(({ label, value }) => (
                    <a className="w-full" href={value}>
                        <Tab key={value} value={value} className="text-sm text-white bg-blue-900">
                            <p href={value}>{label}</p>
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