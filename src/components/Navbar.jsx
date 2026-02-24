import { useLocation,Link } from "react-router-dom";
import NavbarMobile from "./NavbarMobile";
import icon from "../assets/images/lutfi-icon-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {

  const currentLocation = useLocation();

  return (
    <>
      <div id="desktop-navbar" className="relative hidden lg:block ">
        <div className="left-0 right-0 top-0 z-50 flex items-center justify-between bg-black md:fixed">
          <Link
            to={"/"}
            className="flex h-[90px] w-[90px] items-center justify-center bg-[#323443] text-4xl text-white"
          >
            <img src={icon} className="w-[30px]" alt="" />
          </Link>
          <div className="text- flex h-full items-center justify-center gap-10 font-medium uppercase text-white">
            <Link
              to={"/"}
              className={`border-b-2 ${currentLocation.pathname === "/" ? 'border-b-[#323443]' : 'border-b-transparent'} hover:border-[#323443]`}
            >
              Home
            </Link>

            <Link
              to={"/about-me"}
              className={`border-b-2 ${currentLocation.pathname === "/about-me" ? 'border-b-[#323443]' : 'border-b-transparent'} hover:border-[#323443]`}
            >
              About Me
            </Link>

            <Link
              to={"/projects"}
              className={`border-b-2 ${currentLocation.pathname === '/projects' ? 'border-b-[#323443]' : 'border-b-transparent'} hover:border-[#323443]`}
            >
              Projects
            </Link>
          </div>

          <a
            href="mailto:mlutfiazizan@gmail.com" target="_blank" rel="noreferrer" 
            className="flex h-[90px] w-[90px] items-center justify-center bg-[#323443] text-3xl text-white"
          >
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          </a>
        </div>

        <div className="fixed top-0 z-20 h-screen w-[90px] bg-black border-r-[0.1px] border-gray-700">
          <div className="flex h-full flex-col items-center justify-end gap-4 py-20">
            <a
              href="https://www.instagram.com/lutf_azn/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="h-5 w-5 text-white"
                icon={faInstagram}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/muhamad-lutfi-azizan/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="h-5 w-5 text-white" icon={faLinkedin} />
            </a>
            
            <a
              href="https://github.com/mlutfiazizan13"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="h-5 w-5 text-white" icon={faGithub} />
            </a>
            {/* <FontAwesomeIcon className="h-5 w-5 text-white" icon={faDiscord} /> */}
          </div>
        </div>
      </div>

      {/* <div id="desktop-navbar" className="hidden lg:block md:fixed top-0 left-0 right-0 my-5 mx-14 xl:mx-32 z-10 overflow-hidden">
                <div className="relative h-[50px] grid grid-cols-6 items-center text-black bg-transparent rounded-full overflow-hidden">
                    <div className="bg-white h-full flex justify-center items-center">
                        <Link to={'/'} className=" text-4xl font-bold">Lutfi°</Link>
                    </div>
                    <div className=" bg-white h-full col-span-4 flex justify-center gap-10 items-center text-lg font-bold">
                        <Link to={'/'} className="border-b-transparent border-b-2 hover:border-[#323443]">
                            Home
                        </Link>

                        <Link to={'/about-me'} className="border-b-transparent border-b-2 hover:border-[#323443]">
                            About Me
                        </Link>

                        <Link to={'/services'} className="border-b-transparent border-b-2 hover:border-[#323443]">
                            Services
                        </Link>                   
                    </div>
                    <a href="-" className="flex justify-center items-center bg-black h-full text-[#FAF6F0] text-lg font-bold z-20">Contact Me</a>
        
                </div>
            </div>     */}

      {/* Mobile Navbar */}
      <NavbarMobile />
    </>
  );
};

export default Navbar;
