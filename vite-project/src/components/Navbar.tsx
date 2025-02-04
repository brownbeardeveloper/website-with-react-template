import SearchBar from "./SearchBar";

export default function Navbar() {
    return (
        <nav className="bg-gradient-to-bl from-pink-600 to-indigo-500 border-gray-200
        dark:bg-gradient-to-bl dark:from-slate-900 dark:to-pink-800 dark:border-gray-800">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                <a href="#" className="flex items-center p-3">
                    <img src="/skillswipe_icon.png" className="h-8 mr-2" alt="Flowbite Logo" />
                    <span className="self-center text-lg font-semibold whitespace-nowrap text-gray-100  dark:text-white">
                        Skill
                        <span className="text-slate-300 dark:text-slate-400">
                            Swipe
                        </span>
                    </span>
                </a>

                <div className="flex md:order-2">
                    <SearchBar />
                </div>

                <div id="navbar-search" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium 
                        md:space-x-8 md:flex-row md:mt-0 md:border-0">
                        <li>
                            <a href="#" className="text-white">Home</a>
                        </li>
                        <li>
                            <a href="#" className="text-white">About</a>
                        </li>
                        <li>
                            <a href="#" className="text-white">Services</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
};
