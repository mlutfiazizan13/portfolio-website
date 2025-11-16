"use client";

import { useEffect } from "react";
import Line from "../components/line";
import ContactSection from "../components/contant-section";

const AboutMe = () => {
  useEffect(() => {
    document.title = "About Me - Lutfi°";
  }, []);

  return (
    <div
      id="container"
      className="w-full overflow-hidden px-5 lg:pl-[5%] xl:pl-[15%] lg:pr-[calc(5%+90px)] xl:pr-[calc(15%+90px)] pb-20"
    >
      {/* Header */}
      <section id="main-banner">
        <div className="flex h-full flex-col items-center gap-5 text-black">
          <div className="relative">
            <div
              className="h-[130px] w-[1px] bg-[#2021241a] after:absolute after:bottom-0 after:left-1/2 after:h-3 after:w-3 after:-translate-x-1/2 after:rounded-full after:bg-[#323443] after:content-[attr(after)]"
            ></div>
          </div>

          <div className="text-center mb-12">
            <p className="text-6xl md:text-8xl font-bold">About Me</p>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="text-center mb-20">
        <p className="text-xl">
          I am a fullstack web developer, with 2.5 years experience. Proven
          ability to develop, test applications, and collaborate in a team. I'm
          eager to learn, grow, and improve my skills. I'm also a tech
          enthusiast who loves learning tech-related things. My goal is to
          deliver impactful solutions and become a better software engineer.
        </p>
      </section>

      {/* Skills & Experience */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        {/* Skills */}
        <div>
          <Line text="Skills" />

          {/* <TechnologyContainer
            classes="grid grid-cols-2 items-center gap-5"
          /> */}
        </div>

        {/* Experience */}
        <div>
          <Line text="Experience" />

          <ol className="relative border-s border-gray-200 mx-2">
            {/* Kejar.id */}
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-[#323443] rounded-full mt-1.5 -start-1.5 border border-white"></div>

              <div className="flex justify-between items-center mb-1">
                <h3 className="text-lg font-semibold text-gray-900">
                  Kejar.id
                </h3>
                <time className="text-sm font-normal text-gray-400">
                  Jan 2021 - Mar 2021
                </time>
              </div>

              <p className="mb-1 text-sm text-gray-400">
                Web Developer - Internship
              </p>

              <p className="mb-4 text-base text-gray-500">
                Kejar.id provides LMS systems and educational platforms with
                measurable and monitored features.
              </p>
            </li>

            {/* PT Agatra Kreasi Teknologi */}
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-[#323443] rounded-full mt-1.5 -start-1.5 border border-white"></div>

              <div className="flex justify-between items-center mb-1">
                <h3 className="text-lg font-semibold text-gray-900">
                  PT. Agatra Kreasi Teknologi
                </h3>
                <time className="text-sm font-normal text-gray-400">
                  Aug 2021 - Nov 2021
                </time>
              </div>

              <p className="mb-1 text-sm text-gray-400">
                Backend Web Developer - Internship
              </p>

              <p className="text-base text-gray-500 mb-2">
                A system integration and software development company in
                Bandung.
              </p>

              <ol className="pl-4 list-disc">
                <li className="text-base text-gray-500">
                  Built REST API using Yii2 for company profile.
                </li>
                <li className="text-base text-gray-500">
                  Built admin page using Angular.
                </li>
              </ol>
            </li>

            {/* PT TIM */}
            <li className="ms-4">
              <div className="absolute w-3 h-3 bg-[#323443] rounded-full mt-1.5 -start-1.5 border border-white"></div>

              {/* Bootcamp */}
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-lg font-semibold text-gray-900">
                  PT. Teknologi Inovasi Mandiri
                </h3>
                <time className="text-sm font-normal text-gray-400">
                  Jul 2022 - Sep 2022
                </time>
              </div>

              <p className="mb-1 text-sm text-gray-400">
                Web Developer - Bootcamp
              </p>

              <p className="text-base text-gray-500 mb-2">
                Learned Spring Boot and contributed to internal & external
                projects.
              </p>

              <ol className="pl-4 list-disc mb-5">
                <li className="text-base text-gray-500">
                  Built features with Spring Boot.
                </li>
              </ol>

              {/* Contract */}
              <div className="flex justify-between items-center mb-1 mt-5">
                <p className="mb-1 text-sm text-gray-400">
                  Web Developer - Contract
                </p>
                <time className="text-sm font-normal text-gray-400">
                  Sep 2022 - Dec 2022
                </time>
              </div>

              <ol className="pl-4 list-disc mb-5">
                <li className="text-base text-gray-500">
                  Worked with Spring Boot, Spring MVC, Laravel, etc.
                </li>
              </ol>

              {/* Full-Time */}
              <div className="flex justify-between items-center mb-1 mt-5">
                <p className="mb-1 text-sm text-gray-400">
                  Web Developer - Fulltime
                </p>
                <time className="text-sm font-normal text-gray-400">
                  Dec 2022 - Present
                </time>
              </div>

              <ol className="pl-4 list-disc">
                <li className="text-base text-gray-500">
                  Working on enterprise applications using various backend
                  frameworks.
                </li>
              </ol>
            </li>
          </ol>
        </div>
      </section>

      {/* Contact */}
      <ContactSection />
    </div>
  );
};

export default AboutMe;
