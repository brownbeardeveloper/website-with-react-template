import SearchIcon from "../assets/search.svg?react";

export default function SearchBar() {
    return (
        <>
            <div>
                <button
                    type="button"
                    aria-label="Search"
                    className="md:hidden p-2 border-2 border-gray-200 rounded-lg
                    focus:outline-none focus:ring-4 focus:ring-blue-500 dark:focus:ring-blue-700
                    cursor-pointer hover:ring-3 hover:ring-blue-300 dark:hover:ring-blue-400"
                >
                    <SearchIcon className="text-4xl text-slate-700 dark:text-slate-300" />
                </button>

                <div className="relative hidden md:block mr-2">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                        <SearchIcon className="text-3xl text-slate-700 dark:text-slate-300" />
                    </div>
                    <input type="text" id="search-navbar" placeholder="Search..." aria-label="Search"
                        className="block w-full p-2 ps-10 text-sm border rounded-lg
                        bg-gray-50 border-gray-300 placeholder-gray-500
                        dark:bg-gray-600 dark:border-gray-400 dark:placeholder-gray-300
                        hover:border-blue-500 hover:dark:border-blue-400
                        focus:ring-blue-500 focus:border-blue-500 
                        dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
            </div >
        </>
    )
}
