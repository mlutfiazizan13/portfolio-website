"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

import PersonalImg from "./assets/personal-img.jpg";
import Line from "./components/line";
import ContactSection from "./components/contant-section";


export default function Home() {
  const aboutRef = useRef<HTMLDivElement | null>(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    document.title = "Home - Lutfi°";
  }, []);

  return (
    <>
      <div
        id="container"
        className="w-full overflow-hidden px-5 lg:pl-[5%] xl:pl-[15%] lg:pr-[calc(5%+90px)] xl:pr-[calc(15%+90px)]"
      >
        {/* MAIN BANNER */}
        <section id="main-banner" className="h-[calc(100vh-90px)]">
          <div className="flex h-full flex-col items-center justify-between text-black">
            <div className="relative">
              <div
                className="h-[130px] w-[1px] bg-[#2021241a] after:absolute after:bottom-0 after:left-1/2 after:h-3 after:w-3 after:-translate-x-1/2 after:rounded-full after:bg-[#323443] after:content-[attr(after)]"
              ></div>
            </div>
            <div className="text-center">
              <div className="mb-12">
                <p className="text-base font-medium uppercase tracking-wider">
                  Hello! My Name Is
                </p>
              </div>
              <div className="mb-12 text-center">
                <p className="text-6xl md:text-8xl font-bold">Muhamad</p>
                <p className="text-6xl md:text-8xl font-bold">Lutfi Azizan</p>
              </div>
              <div className="mb-12">
                <p className="text-base font-medium uppercase tracking-wider">
                  Fullstack Web Developer
                </p>
              </div>
            </div>

            <div
              onClick={scrollToAbout}
              className="h-[220px] rounded-t-full bg-[#2021241a] px-10 pt-11 cursor-pointer"
            >
              <div className="flex h-[90px] w-[90px] items-center justify-center rounded-full bg-[#323443] text-3xl text-white">
                {/* <FontAwesomeIcon
                  icon={faArrowDown}
                  className="animate-bounce"
                /> */}
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT ME */}
        <section
          ref={aboutRef}
          id="about-me"
          className="scroll-mt-[90px] pb-20"
        >
          <div className="flex flex-col items-center justify-end text-black">
            <div className="mb-20 h-[200px] rounded-b-full bg-[#2021241a] px-10 pt-11">
              <div className="flex h-[90px] w-[90px] items-center justify-center overflow-hidden rounded-full bg-[#323443] text-2xl text-white">
                <Image
                  src={PersonalImg}
                  alt="muhamad-lutfi-azizan"
                  width={90}
                  height={90}
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col items-center gap-5 px-5 md:px-20 2xl:px-60 text-center">
              <p className="text-4xl font-medium">
                Hello! My name is Lutfi, <br /> I'm a Fullstack Web Developer
                based in Indonesia
              </p>

              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#323443] text-xl text-white">
                {/* <FontAwesomeIcon icon={faQuoteLeft} /> */}
              </div>

              <p className="opacity-50">
                I am a fullstack web developer, with 2.5 years experience.
                Proven ability to develop and test applications, and collaborate
                in a team. I enjoy learning tech-related things and always aim
                to improve my engineering skills and deliver impactful work.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <Line text="Services" />

        <section className="pb-20 pt-20">
          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
            <div className="h-full px-10 py-6 text-center">
              {/* <FontAwesomeIcon
                className="mb-1 h-7 w-7 rounded-full bg-[#272727] p-3 text-white"
                icon={faGlobe}
              /> */}
              <div className="text-black">
                <p className="mb-2 text-lg font-bold">Web Development</p>
                <p className="opacity-75">
                  Unlock the Power of Your Online Presence with our Web
                  Development Solutions.
                </p>
              </div>
            </div>

            <div className="h-full px-10 py-6 text-center">
              {/* <FontAwesomeIcon
                className="mb-1 h-7 w-7 rounded-full bg-[#272727] p-3 text-white"
                icon={faAndroid}
              /> */}
              <div className="text-black">
                <p className="mb-2 text-lg font-bold">
                  Native Android Development
                </p>
                <p className="opacity-75">
                  Creating Android apps that inspire, innovate, and influence!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <Line text="Skills" />
        <section className="pb-10 pt-14">
          {/* <TechnologyContainer /> */}
        </section>

        {/* PROJECTS */}
        <Line text="Recent Project" />
        <section className="pb-10 pt-14">
          {/* <ProjectContainer /> */}
        </section>

        {/* CONTACT */}
        <ContactSection />
      </div>
    </>
  );
}
