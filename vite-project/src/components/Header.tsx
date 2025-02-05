import SearchBar from "./SearchBar";
import SkillSwipeIcon from "../assets/skillswipe.svg?react";

export default function Header() {
    return (
        <nav className="sticky top-5 w-full flex justify-center">

            <div className="p-4 flex items-center justify-center
                bg-gradient-to-b from-slate-50 via-gray-100 to-slate-50
                border rounded gap-10">

                <a href="/" className="flex items-center no-wrap">
                    <SkillSwipeIcon className="fill-yellow-600 dark:fill-gray-500" />
                    <span className="ml-1 font-permanentmarker text-xl whitespace-nowrap text-gray-600 dark:text-white">
                        SkillSwipe
                    </span>
                </a>

                <div className="flex md:order-2">
                    <SearchBar />
                </div>

                <div id="navbar-search" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium 
                        md:space-x-8 md:flex-row md:mt-0 md:border-0">
                        <li>
                            <a href="#" className="transform transition-all duration-200 dark:text-white dark:hover:text-blue-500">Home</a>
                        </li>
                        <li>
                            <a href="#" className="transform transition-all duration-200 dark:text-white dark:hover:text-blue-500">About</a>
                        </li>
                        <li>
                            <a href="#" className="transform transition-all duration-200 dark:text-white dark:hover:text-blue-500">Services</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
};
