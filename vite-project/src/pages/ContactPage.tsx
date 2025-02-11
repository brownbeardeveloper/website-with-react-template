import QuickAccessBanner from "../components/QuickAccessBanner";
import SvgTextComponent from "../components/SvgTextComponent";
import { MessagesSquare } from 'lucide-react';
import { ShieldCheck } from 'lucide-react';
import { Ribbon } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Cookie } from 'lucide-react';
import DevSvg from '../assets/dev.svg?react'
import TripSvg from '../assets/trip.svg?react'
import ApplicationSvg from '../assets/application.svg?react'
import WelcomeSvg from '../assets/welcome.svg?react'



export default function ContactPage() {

    const helpCenterProps = [
        {
            icon: <MessagesSquare size={60} />,
            text: "Vanliga frågor",
            btnText: "Läs mer",
            onClick: () => alert("FAQs clicked"),
        },
        {
            icon: <ShieldCheck size={60} />,
            text: "Integritet",
            btnText: "Visa policy",
            onClick: () => alert("Integritet clicked"),
        },
        {
            icon: <Mail size={60} />,
            text: "Mejla oss",
            btnText: "Skicka mail",
            onClick: () => alert("Mail clicked"),
        },
        {
            icon: <Cookie size={60} />,
            text: "Kakor",
            btnText: "Läs mer",
            onClick: () => alert("Kakor clicked"),
        },
        {
            icon: <Ribbon size={60} className="text-pink-400 dark:text-pink-200" />,
            text: "Rosa Bandet",
            btnText: "Läs mer",
            onClick: () => alert("Rosa Bandet clicked"),
        },
    ];

    const contactPageComponents = [
        {
            svg: <WelcomeSvg className="h-full w-full" />,
            isRight: true,
            header: "Mejla oss",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod euismod velit, at ullamcorper odio vehicula et. Curabitur in neque sit amet risus tempor fermentum et a purus. Vivamus vitae lectus ut nunc elementum tristique. Maecenas non erat mauris. Donec consectetur, felis ac scelerisque dapibus, lectus erat iaculis ante, in cursus nisi lorem eu tortor. ",
            textColor: "text-gray-800",
            headerColor: "text-gray-900",
            wave: true,
            waveColor: "fill-purple-200",
            divColor: "bg-purple-200",
        },
        {
            svg: <TripSvg className="h-full w-full" />,
            isRight: false,
            header: "Chatta med oss",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod euismod velit, at ullamcorper odio vehicula et. Curabitur in neque sit amet risus tempor fermentum et a purus. Vivamus vitae lectus ut nunc elementum tristique. Maecenas non erat mauris. Donec consectetur, felis ac scelerisque dapibus, lectus erat iaculis ante, in cursus nisi lorem eu tortor. ",
            wave: false,
            textColor: "text-gray-800",
            headerColor: "text-gray-900",
        },
        {
            svg: <ApplicationSvg className="h-full w-full" />,
            isRight: true,
            header: "Ring oss",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod euismod velit, at ullamcorper odio vehicula et. Curabitur in neque sit amet risus tempor fermentum et a purus. Vivamus vitae lectus ut nunc elementum tristique. Maecenas non erat mauris. Donec consectetur, felis ac scelerisque dapibus, lectus erat iaculis ante, in cursus nisi lorem eu tortor. ",
            wave: false,
            textColor: "text-gray-800",
            headerColor: "text-gray-900",
        },
        {
            svg: <DevSvg className="h-full w-full" />,
            isRight: false,
            header: "Besök oss",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod euismod velit, at ullamcorper odio vehicula et. Curabitur in neque sit amet risus tempor fermentum et a purus. Vivamus vitae lectus ut nunc elementum tristique. Maecenas non erat mauris. Donec consectetur, felis ac scelerisque dapibus, lectus erat iaculis ante, in cursus nisi lorem eu tortor. ",
            textColor: "text-gray-800",
            headerColor: "text-gray-900",
            wave: true,
            waveColor: "fill-indigo-200",
            divColor: "bg-indigo-200",
        },
    ];


    return (
        <>
            <div className="h-150 bg-bottom bg-cover bg-[url('./old-town.jpg')]" >
                <div className="w-full h-full flex flex-col justify-center text-center text-gray-100 gap-y-2">
                    <h1 className="text-6xl strokeme font-permanentmarker">
                        Kontakt Skillswipe
                    </h1>
                    <p className="font-permanentmarker strokeme text-xl">
                        Kontakta oss för mer information!
                    </p>
                </div>
            </div>

            <div>
                <QuickAccessBanner props={helpCenterProps} />
            </div>

            <div className="">
                {contactPageComponents.map((component, index) => (
                    <SvgTextComponent key={index} {...component} />
                ))}
            </div>
        </>
    );
}
