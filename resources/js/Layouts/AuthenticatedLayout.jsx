import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";

export default function AuthenticatedLayout({ user, header, children }) {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const { url } = usePage();

    return (
        <div className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${isSideMenuOpen ? 'overflow-hidden' : ''}`}>
            {/* Desktop sidebar */}
            <aside className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
                <div className="py-4 text-gray-500 dark:text-gray-400">
                    <a className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="#">
                        Sistem Pengaduan
                    </a>
                  
                    <ul className="mt-6">
                    
                        <NavLink href="/dashboard_warga" active={url.startsWith('/dashboard')}>
                            <span className="ml-4">Dashboard</span>
                        </NavLink>
                       
                    </ul>
                </div>
            </aside>

            {/* Mobile sidebar */}
            {/* Backdrop */}
            {isSideMenuOpen && (
                <div className="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"></div>
            )}
            <aside
                className={`fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden transform ${isSideMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-150 ease-in-out`}
                onClick={() => setIsSideMenuOpen(false)}
                onKeyDown={() => setIsSideMenuOpen(false)}
            >
                <div className="py-4 text-gray-500 dark:text-gray-400">
                    <a className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="#">
                        Sistem Pengaduan
                    </a>
                    <ul className="mt-6">
                        <NavLink href="/dashboard_warga" active={url.startsWith('/dashboard')}>
                            <span className="ml-4">Dashboard</span>
                        </NavLink>
                    </ul>
                </div>
            </aside>

            <div className="flex flex-col flex-1 w-full">
                <header className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
                    <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
                        {/* Mobile hamburger */}
                        <button
                            className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
                            onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
                            aria-label="Menu"
                        >
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                        {/* Search input */}
                        <div className="flex justify-center flex-1 lg:mr-32">
                            <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
                                <div className="absolute inset-y-0 flex items-center pl-2">
                                    <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <input
                                    className="w-full pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                                    type="text"
                                    placeholder="Search for projects"
                                    aria-label="Search"
                                />
                            </div>
                        </div>
                        <ul className="flex items-center flex-shrink-0">
                            {/* Theme toggler */}

                            {/* Notifications menu */}
                            <li className="relative">
                                <button
                                    className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
                                    onClick={() => setShowingNavigationDropdown(!showingNavigationDropdown)}
                                    onKeyDown={() => setShowingNavigationDropdown(false)}
                                    aria-label="Notifications"
                                    aria-haspopup="true"
                                >
                                    <svg
                                        className="w-4 h-4 mr-3"
                                        aria-hidden="true"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                        ></path>
                                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                </button>
                            </li>
                            <li className="relative">

                                {showingNavigationDropdown && (
                                    <ul
                                        className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700"
                                        aria-label="submenu"
                                    >
                                        <li className="flex">
                                            <a
                                                className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                                href={route("profile.edit")}
                                            >

                                                <span>Profile</span>
                                            </a>
                                        </li>
                                        <li className="flex">
                                            <Link
                                                href={route('logout')}
                                                method="post"
                                                as="button"
                                                className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                            >
                                                Log Out
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    </div>
                </header>

                {/* Content */}
                <main className="h-full overflow-y-auto">{children}</main>
            </div>
        </div>
    );
}
