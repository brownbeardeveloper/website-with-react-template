import { MessagesSquare } from 'lucide-react';
import { ShieldCheck } from 'lucide-react';
import { Ribbon } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Cookie } from 'lucide-react';

export default function ContactPage() {

    const icns = "text-blue-900"
    const icnDivs = "flex items-center my-auto flex-col gap-y-3 text-center"
    const icnTxts = "dark:text-gray-700"
    const icnBtns = "px-4 py-1 font-bold text-lg cursor-pointer rounded bg-blue-900 \
        text-white hover:text-blue-900 hover:bg-gray-200 transition-all duration-100"


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

            <div className="h-50 mx-auto gap-x-10 md:gap-x-25 flex justify-center
            dark:bg-gradient-to-b dark:from-gray-50 dark:via-gray-100 dark:to-gray-50">
                <div className={icnDivs}>
                    <MessagesSquare className={icns} size={50} />
                    <p className={icnTxts}>Product FAQs</p>
                    <button className={icnBtns}>click me</button>
                </div>
                <div className={icnDivs}>
                    <ShieldCheck className={icns} size={50} />
                    <p className={icnTxts}>Privacy Inquiry</p>
                    <button className={icnBtns}>click me</button>
                </div>
                <div className={icnDivs}>
                    <Ribbon className={icns} size={50} />
                    <p className={icnTxts}>Ribbon</p>
                    <button className={icnBtns}>click me</button>
                </div>
                <div className={icnDivs}>
                    <Mail className={icns} size={50} />
                    <p className={icnTxts}>Send message</p>
                    <button className={icnBtns}>click me</button>
                </div>
                <div className={icnDivs}>
                    <Cookie className={icns} size={50} />
                    <p className={icnTxts}>Cookies</p>
                    <button className={icnBtns}>click me</button>
                </div>
            </div>
        </>
    );
}
