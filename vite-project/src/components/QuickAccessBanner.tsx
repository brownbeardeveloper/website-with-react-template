import { ReactNode } from "react";

interface Selection {
    icon: ReactNode;
    text: string;
    btnText: string,
    onClick: () => void;
}

interface QuickAccessBannerProps {
    props: Selection[];
}

export default function QuickAccessBanner({ props }: QuickAccessBannerProps) {
    return (
        <div className="w-full h-60 md:h-80 flex justify-around
            bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50
            dark:bg-gradient-to-b dark:from-gray-700 dark:via-gray-800 dark:to-gray-700">

            {props.map((selection, index) => (
                <div key={index} className="flex items-center my-auto flex-col gap-y-4">
                    <div className="text-sky-900 dark:text-gray-100">
                        {selection.icon}
                    </div>
                    <p className="font-oswald text-sm md:text-lg text-gray-600 dark:text-gray-100 
                        tracking-wide whitespace-nowrap">
                        {selection.text}
                    </p>
                    <button className="px-3 md:px-6 py-1.5 font-bold md:font-bolder whitespace-nowrap
                        font-oswald uppercase text-sm md:text-lg cursor-pointer rounded
                        text-white dark:text-gray-700 hover:text-sky-900 dark:hover:text-gray-100
                        bg-sky-900 dark:bg-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 
                        border hover:border-sky-500 dark:hover:border-gray-100
                        focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-amber-600
                        transition-all duration-200 ease-in-out
                        shadow-lg hover:shadow-xl"
                        onClick={selection.onClick}>
                        {selection.btnText}
                    </button>
                </div>
            ))}

        </div>
    );
}
