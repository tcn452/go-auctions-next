// components/Navbar.js
import Link from 'next/link';

const Nav = () => {
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Upcoming", href: "/upcoming" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav>
      <ul className="flex flex-col md:flex-row gap-10 items-center px-8">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link href={item.href}>
              <span className="font-semibold hover:text-gray-300">
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;