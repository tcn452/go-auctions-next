
"use client"
import { useSession, signOut } from 'next-auth/react';
import Nav from './Nav';
import { useState, useEffect, JSX } from 'react';

export default function Header(): JSX.Element {
    const { data: session } = useSession();
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            const navContainer = document.getElementById('nav-container');
            const menuButton = document.getElementById('menu-button');

            if (
                navContainer &&
                menuButton &&
                !navContainer.contains(event.target as Node) &&
                !menuButton.contains(event.target as Node)
            ) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);
        return () => document.removeEventListener('click', handleOutsideClick);
    }, []);

    return (
        <div className="bg-main-500 h-14 items-center md:px-8 px-3 text-white flex md:gap-5 justify-between">
            <div className="hidden md:flex md:gap-5 items-center">
                <Nav />
            </div>
            <div className="hidden md:flex items-center gap-2 md:gap-5">
                {session ? (
                    <>
                        <a
                            href="/dashboard"
                            className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-main-600 hover:bg-main-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-500 duration-300"
                        >
                            Dashboard
                        </a>
                        <button
                            onClick={() => signOut()}
                            className="py-2 px-4 border border-main-700 hover:border-main-600 rounded-md shadow-sm text-sm font-medium text-white bg-none hover:bg-main-700/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-500 duration-300"
                        >
                            Log out
                        </button>
                    </>
                ) : (
                    <>
                        <a
                            href="/sign-in"
                            className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-main-600 hover:bg-main-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-500 duration-300"
                        >
                            Sign In
                        </a>
                        <a
                            href="/sign-up"
                            className="py-2 px-4 border border-main-700 hover:border-main-600 rounded-md shadow-sm text-sm font-medium text-white bg-none hover:bg-main-700/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-500 duration-300"
                        >
                            Sign Up
                        </a>
                    </>
                )}
            </div>
            <div
                id="nav-container"
                className={`fixed top-0 left-0 w-3/4 max-w-sm h-full pt-10 bg-main-500 z-50 flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out md:hidden ${
                    menuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <Nav />
                <div className="mt-5 flex flex-col items-center gap-4">
                    {session ? (
                        <>
                            <a
                                href="/dashboard"
                                className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-main-600 hover:bg-main-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-500 duration-300"
                            >
                                Dashboard
                            </a>
                            <button
                                onClick={() => signOut()}
                                className="py-2 px-4 border border-main-700 hover:border-main-600 rounded-md shadow-sm text-sm font-medium text-white bg-none hover:bg-main-700/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-500 duration-300"
                            >
                                Log out
                            </button>
                        </>
                    ) : (
                        <>
                            <a
                                href="/sign-in"
                                className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-main-600 hover:bg-main-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-500 duration-300"
                            >
                                Sign In
                            </a>
                            <a
                                href="/sign-up"
                                className="py-2 px-4 border border-main-700 hover:border-main-600 rounded-md shadow-sm text-sm font-medium text-white bg-none hover:bg-main-700/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-500 duration-300"
                            >
                                Sign Up
                            </a>
                        </>
                    )}
                </div>
            </div>
            <div className="block md:hidden">
                <button
                    id="menu-button"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    className="w-14 h-14 flex items-center justify-center border border-main-100 hover:bg-main-400 hover:border-main-300 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-main-600 focus:ring-opacity-50 duration-300"
                >
                    <div className="flex flex-col items-center justify-center h-full w-full">
                        <div
                            id="left"
                            className={`bg-white h-[2px] w-full mb-1 rounded transition-transform duration-300 ease-in-out relative ${menuOpen ? 'rotate-45 top-[0.35rem]' : ''}`}
                        />
                        <div
                            id="centre"
                            className={`bg-white h-[2px] w-full mb-1 rounded transition-opacity duration-300 ease-in-out relative ${menuOpen ? '-rotate-45' : ''}`}
                        />
                        <div
                            id="right"
                            className={`bg-white h-[2px] w-full mb-1 rounded transition-transform duration-300 ease-in-out ${menuOpen ? 'scale-0' : ''}`}
                        />
                    </div>
                    <span className="sr-only">Menu</span>
                </button>
            </div>
        </div>
    );
}
