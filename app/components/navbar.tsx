"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import icon from "../assets/lutfi-icon-white.png";
const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path ? "border-b-[#323443]" : "border-b-transparent";

  return (
    <>
      {/* Desktop Navbar */}
      <div id="desktop-navbar" className="relative hidden lg:block">
        <div className="left-0 right-0 top-0 z-50 flex items-center justify-between bg-black md:fixed">
          <Link
            href="/"
            className="flex h-[90px] w-[90px] items-center justify-center bg-[#323443] text-4xl text-white"
          >
            <Image src={icon} alt="logo" width={30} height={30} />
          </Link>

          <div className="flex h-full items-center justify-center gap-10 font-medium uppercase text-white">
            <Link
              href="/"
              className={`border-b-2 hover:border-[#323443] ${isActive("/")}`}
            >
              Home
            </Link>

            <Link
              href="/about-me"
              className={`border-b-2 hover:border-[#323443] ${isActive(
                "/about-me"
              )}`}
            >
              About Me
            </Link>

            <Link
              href="/projects"
              className={`border-b-2 hover:border-[#323443] ${isActive(
                "/projects"
              )}`}
            >
              Projects
            </Link>
          </div>

          <a
            href="mailto:mlutfiazizan@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="flex h-[90px] w-[90px] items-center justify-center bg-[#323443] text-3xl text-white"
          >
            {/* <FontAwesomeIcon icon={faEnvelope} /> */}
          </a>
        </div>

        {/* Left Sidebar */}
        <div className="fixed top-0 z-20 h-screen w-[90px] bg-black border-r-[0.1px] border-gray-700">
          <div className="flex h-full flex-col items-center justify-end gap-4 py-20">
            <a
              href="https://www.instagram.com/lutf_azn/"
              target="_blank"
              rel="noreferrer"
            >
              {/* <FontAwesomeIcon className="h-5 w-5 text-white" icon={faInstagram} /> */}
            </a>

            <a
              href="https://www.linkedin.com/in/muhamad-lutfi-azizan/"
              target="_blank"
              rel="noreferrer"
            >
              {/* <FontAwesomeIcon className="h-5 w-5 text-white" icon={faLinkedin} /> */}
            </a>

            <a
              href="https://github.com/mlutfiazizan13"
              target="_blank"
              rel="noreferrer"
            >
              {/* <FontAwesomeIcon className="h-5 w-5 text-white" icon={faGithub} /> */}
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      {/* <NavbarMobile /> */}
    </>
  );
};

export default Navbar;
