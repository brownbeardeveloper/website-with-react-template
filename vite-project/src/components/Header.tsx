import SearchBar from "./SearchBar";
import SkillSwipeIcon from "../assets/skillswipe.svg?react";

export default function Header() {

    const menuItems = [
        { text: 'Home', href: '/' },
        { text: 'About', href: '/about' },
        { text: 'Services', href: '/services' },
    ];

    return (
        <header id="header" className="w-full  fixed top-5 flex justify-center">
            <nav className="w-9/10 max-w-200 flex items-center justify-between
                bg-gradient-to-b from-slate-50 via-gray-100 to-slate-50
                dark:bg-gradient-to-b dark:from-gray-800 dark:via-slate-900 dark:to-gray-800
                border-2 border-slate-100 dark:border-gray-900 shadow-lg rounded">

                <a href="/" className="flex items-center -mt-1 ml-4 no-wrap">
                    <SkillSwipeIcon className="fill-yellow-600 dark:fill-gray-500" />
                    <h1 className="ml-1 font-permanentmarker text-xl whitespace-nowrap text-gray-600 dark:text-white">
                        SkillSwipe
                    </h1>
                </a>

                <div className="flex order-2 mr-4 py-2">
                    <SearchBar />
                </div>

                <div id="navbar-search" className="hidden md:flex">
                    <ul className="flex font-medium gap-3">
                        {menuItems.map((item, index) => (
                            <li key={index} className="relative group group-hover:cursor-pointer">
                                <a href={item.href} className="block w-full h-full py-5 px-1.5 transform transition-all duration-200 
                                    text-gray-800 dark:text-white
                                    group-hover:text-orange-700 dark:group-hover:text-blue-400">
                                    {item.text}
                                </a>
                                <div className="absolute bottom-3 left-0 w-full h-0.5 transition-all duration-200 rounded 
                                    bg-orange-600 dark:bg-blue-500 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"/>
                            </li>
                        ))}
                    </ul>
                </div>

            </nav>
        </header>
    );
};
