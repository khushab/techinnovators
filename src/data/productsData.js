import { TbSettingsAutomation, TbDeviceDesktopAnalytics, TbDashboard, TbClockCode } from "react-icons/tb";


const productsData = () => {
    return [
        {
            icon: <TbSettingsAutomation className='icon' />,
            name: "Automation",
            description: "Automate repetitive tasks to save time and reduce human error, allowing your team to focus on strategic initiatives."

        },
        {
            icon: <TbDeviceDesktopAnalytics className='icon' />,
            name: "Advanced Analytics",
            description: "Leverage our powerful analytics tools to gain insights into your operations and make data-driven decisions."

        },
        {
            icon: <TbDashboard className='icon' />,
            name: "Customizable Dashboards",
            description: "Create personalized dashboards to monitor key performance indicators and metrics, ensuring you have the information"

        },
        {
            icon: <TbClockCode className='icon' />,
            name: "Real-Time Collaboration",
            description: "Enhance team productivity with real-time collaboration tools that allow seamless communication"

        },
    ]
}

export default productsData;
