import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiMenuFill } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  return (
    <nav className=" px-2 sm:px-4 py-4 bg-slate-600">
      <div className="container flex flex-wrap justify-between items-center mx-auto px-8">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={"/fumidev.png"}
              alt=""
              height={50}
              width={190}
              className=" cursor-pointer"
            />
          </Link>
          <span className="self-center text-xl whitespace-nowrap text-white pl-2 hidden sm:flex">
            GraphCMS Blog
          </span>
        </div>

        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="#about"
                className="block py-2 pr-4 pl-3 text-xl  md:hover:text-blue-tertiary text-gray-300 hover:text-secondary"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 pr-4 pl-3 text-xl md:hover:text-blue-tertiary text-gray-300 hover:text-secondary"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <RiMenuFill />
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <FaTimes />
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between py-10">
              <li className="text-xl md:hover:text-blue-tertiary text-gray-300 hover:text-secondary">
                <a href="#about">About</a>
              </li>
              <li className="text-xl md:hover:text-blue-tertiary text-gray-300 hover:text-secondary">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </nav>
  );
}

export default Header;
