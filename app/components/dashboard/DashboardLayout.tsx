import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const menuList = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Profile", href: "/profile" },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    const navContainer = document.getElementById("nav-container");
    const menuButton = document.getElementById("menu-button");

    if (
      navContainer &&
      menuButton &&
      !navContainer.contains(event.target as Node) &&
      !menuButton.contains(event.target as Node)
    ) {
      setMenuOpen(false);
    }
  };

  return (
    <div className="bg-gray-100 flex h-screen overflow-hidden" onClick={handleClickOutside}>
      {/* Sidebar */}
      <aside
        id="nav-container"
        className={`fixed top-0 left-0 w-44 pt-2 bg-white h-full z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:static md:transform-none`}
      >
        <Link href="/" className="p-4 flex items-center justify-center">
          <Image height={64} width={128} src="/logo_full.png" alt="Go Auctions Logo" className="h-16 w-auto" />
        </Link>
        <nav className="mt-4 mx-4">
          <ul>
            {menuList.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block py-2 px-4 ${
                    typeof window !== "undefined" && window.location.pathname === item.href
                      ? "bg-main-800/10 text-slate-700"
                      : "text-slate-700"
                  } hover:bg-main-800/20 hover:text-slate-900 rounded-lg duration-300`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        {/* Top Navigation */}
        <header className="bg-white shadow">
          <div className="relative max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="absolute md:hidden top-3 left-2">
              <button
                id="menu-button"
                onClick={toggleMenu}
                className="flex flex-col items-center justify-center h-full w-14 px-4 py-2 border border-slate-700 hover:border-slate-400 hover:bg-slate-100 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-main-600 focus:ring-opacity-50 duration-300 group"
              >
                <div
                  id="left"
                  className={`group-hover:bg-slate-600 bg-slate-800 h-[2px] w-full mb-1 rounded transition-transform duration-300 ease-in-out ${
                    menuOpen ? "rotate-45 top-[0.35rem]" : ""
                  }`}
                />
                <div
                  id="centre"
                  className={`group-hover:bg-slate-600 bg-slate-800 h-[2px] w-full mb-1 rounded transition-opacity duration-300 ease-in-out ${
                    menuOpen ? "-rotate-45" : ""
                  }`}
                />
                <div
                  id="right"
                  className={`group-hover:bg-slate-600 bg-slate-800 h-[2px] w-full mb-1 rounded transition-transform duration-300 ease-in-out ${
                    menuOpen ? "scale-0" : ""
                  }`}
                />
                <span className="sr-only">Menu</span>
              </button>
            </div>
            <div className="flex items-center gap-5">
              <div className="size-10 rounded-full bg-main-600 text-white flex justify-center items-center font-bold">
                S.N
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
