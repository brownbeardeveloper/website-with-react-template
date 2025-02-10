import QuickAccessBanner from "../components/QuickAccessBanner";
import { MessagesSquare } from 'lucide-react';
import { ShieldCheck } from 'lucide-react';
import { Ribbon } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Cookie } from 'lucide-react';

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
            text: "Kontakta oss",
            btnText: "Kontakta oss",
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


    return (
        <>
            <div className="h-84 bg-center bg-cover bg-[url('./old-town.jpg')]" >
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
        </>
    );
}
