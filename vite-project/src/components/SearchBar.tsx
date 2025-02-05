import SearchIcon from "../assets/search.svg?react";

export default function SearchBar() {
    return (
        <>
            <div>
                <button
                    type="button"
                    aria-label="Search"
                    className="md:hidden p-2 border-2 border-gray-200 rounded-lg
                    focus:outline-none focus:ring-4 focus:ring-blue-500 dark:focus:ring-pink-700
                    cursor-pointer hover:ring-4 hover:ring-blue-200 dark:hover:ring-pink-400"
                >
                    <SearchIcon className="text-4xl text-slate-700 dark:text-slate-300" />
                </button>

                <div className="relative hidden md:block mr-2">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                        <SearchIcon className="text-3xl text-slate-700 dark:text-slate-300" />
                    </div>
                    <input type="text" id="search-navbar" aria-label="Search" className="block w-full p-2 ps-10 text-sm 
                    text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 
                    dark:bg-gray-600 dark:border-gray-400 dark:placeholder-gray-300 dark:text-white
                    dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                </div>
            </div >
        </>
    )
}
