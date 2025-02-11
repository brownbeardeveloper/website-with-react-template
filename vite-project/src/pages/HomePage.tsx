import SvgTextComponent from "../components/SvgTextComponent";
import FaqSvg from '../assets/faq.svg?react'
import BrowsingSvg from '../assets/browsing.svg?react'
import CoworkerSvg from '../assets/co-worker.svg?react'
import CampfireSvg from '../assets/campfire.svg?react'


export default function HomePage() {

    const startPageComponents = [
        {
            svg: <BrowsingSvg className="h-full w-full" />,
            isRight: false,
            title: "Ring oss",
            description: "För alla frågor eller support, tveka inte att kontakta oss. Vårt team finns här för att hjälpa dig navigera dina behov och ge den bästa möjliga upplevelsen",
            wave: false,
            titleColor: "text-gray-900 dark:text-gray-100",
            textColor: "text-gray-800 dark:text-gray-100",
        },
        {
            svg: <CoworkerSvg className="h-full w-full" />,
            isRight: true,
            title: "Samarbeta med oss",
            description: "Gå samman med vårt team för smidigt samarbete. Vi arbetar tillsammans för att skapa innovativa lösningar och söker alltid nya partners för samarbete.",
            wave: false,
            titleColor: "text-gray-900 dark:text-gray-100",
            textColor: "text-gray-800 dark:text-gray-100",
        },
        {
            svg: <CampfireSvg className="h-full w-full" />,
            isRight: false,
            title: "Dela samtalet",
            description: "Låt oss tända en diskussion. Vår gemenskap brinner för att dela idéer och diskutera de senaste trenderna. Bli en del av oss genom att kontakta oss och engagera dig.",
            wave: false,
            titleColor: "text-gray-900 dark:text-gray-100",
            textColor: "text-gray-800 dark:text-gray-100",
        },
        {
            svg: <FaqSvg className="h-full w-full" />,
            isRight: true,
            title: "Hitta svar",
            description: "Letar du efter mer information? Kolla in vår hjälpcenter för snabba svar på vanliga frågor. Om du fortfarande behöver hjälp, tveka inte att kontakta oss direkt.",
            wave: false,
            titleColor: "text-gray-900 dark:text-gray-100",
            textColor: "text-gray-800 dark:text-gray-100",
        },
    ];


    return (
        <>
            <div className="h-150 bg-top bg-cover bg-[url('./main-cover.jpg')]" />

            <div className="my-10">
                {startPageComponents.map((component, index) => (
                    <SvgTextComponent key={index} {...component} />
                ))}
            </div>

        </>
    );
}
