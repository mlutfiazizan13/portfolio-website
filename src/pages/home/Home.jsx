import React, { Component } from "react";
import PersonalImg from "../../assets/images/personal-img.jpg";
import {
  faArrowDown,
  faGlobe,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";

import TechnologyContainer from "../../containers/TechnologyContainer";
import ProjectContainer from "../../containers/ProjectContainer";
import Line from "../../components/Line";
import ContactSection from "../../containers/ContactSection";

class Home extends Component {
  constructor(props) {
    super(props)
    this.aboutRef = React.createRef()
  }
  state = {};

  scrollToAbout = () => this.aboutRef.current.scrollIntoView({ behavior: "smooth" })

  componentDidMount() {
    document.title = "Home - Lutfi°";
  }


  render() {
    return (
      <>
        <div
          id="container"
          className="w-full overflow-hidden px-5 lg:pl-[5%] xl:pl-[15%] lg:pr-[calc(5%+90px)] xl:pr-[calc(15%+90px)]"
        >
          <section id="main-banner" className="h-[calc(100vh-90px)]">
            <div className="flex h-full flex-col items-center justify-between text-black">
              <div className="relative">
                <div
                  after=""
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
                    Software Engineer
                  </p>
                </div>
              </div>

              <div onClick={this.scrollToAbout}
                href="#about-me"
                className="h-[220px] rounded-t-full bg-[#2021241a] px-10 pt-11"
              >
                <div className="flex h-[90px] w-[90px] items-center justify-center rounded-full bg-[#323443] text-3xl text-white">
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    className="animate-bounce"
                  ></FontAwesomeIcon>
                </div>
              </div>
              {/* <div className="mt-3">
                                    <div className="flex gap-4 mt-3 font-bold">
                                        <a href="-" className="px-5 py-2 bg-white text-[#272727]">Email Me</a>
                                        <a href="-" className="px-5 py-2"> <FontAwesomeIcon className="mr-2" icon={faDownload} /> Download CV</a>
                                    </div>
                                </div> */}
            </div>
          </section>

          <section ref={this.aboutRef} id="about-me" className="scroll-mt-[90px] pb-20">
            <div className="flex flex-col items-center justify-end text-black">
              <div className="mb-20 h-[200px] rounded-b-full bg-[#2021241a] px-10 pt-11">
                <div className="flex h-[90px] w-[90px] items-center justify-center overflow-hidden rounded-full bg-[#323443] text-2xl text-white">
                  <img src={PersonalImg} alt="muhamad-lutfi-azizan" />
                </div>
              </div>
              <div className="flex flex-col items-center gap-5 px-5 md:px-20 2xl:px-60 text-center">
                <p className="text-4xl font-medium">
                  Hello! My name is Lutfi, <br /> I'm a Software Engineer
                  based in Indonesia
                </p>
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#323443] text-xl text-white">
                  <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                </div>
                <p className="opacity-50">
                  Experienced Software Engineer with 3 years of expertise in developing, testing, and collaborating within a team to deliver high-quality applications. Passionate about technology, I have a constant desire to learn, grow, and refine my skills in software engineering. Proficient in Spring Boot, Laravel, Go, and JavaScript, with hands-on experience in DevOps tools like Docker, Kubernetes, and Jenkins. Familiar with the Agile Software Development Life Cycle (SDLC), I adapt quickly to project requirements, collaborate effectively, and deliver iterative improvements efficiently. With a deep enthusiasm for tech, I continuously explore new advancements and expand my expertise to stay at the forefront of the industry.
                </p>
              </div>
            </div>
          </section>

          <Line text="Services"></Line>

          <section className="pb-20 pt-20">
            <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
              <div className="h-full px-10 py-6 text-center">
                <FontAwesomeIcon
                  className="mb-1 h-7 w-7 rounded-full bg-[#272727] p-3 text-white"
                  icon={faGlobe}
                />
                <div className="text-black">
                  <p className="mb-2 text-lg font-bold">Web Development</p>
                  <p className="opacity-75">
                    Unlock the Power of Your Online Presence with Our Web Development Solutions. Building Your Digital Dreams, Pixel by Pixel, Code by Code!
                  </p>
                </div>
              </div>
              <div className="h-full px-10 py-6 text-center">
                <FontAwesomeIcon
                  className="mb-1 h-7 w-7 rounded-full bg-[#272727] p-3 text-white"
                  icon={faAndroid}
                />
                <div className="text-black">
                  <p className="mb-2 text-lg font-bold">
                    Native Android Development
                  </p>
                  <p className="opacity-75">
                    Unleash the Power of Native Android Development with Our Expertise. Creating Android Apps that Inspire, Innovate, and Influence!
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Line text="Skills"></Line>

          <section className="pb-10 pt-14">
            <TechnologyContainer></TechnologyContainer>
          </section>

          <Line text="Recent Project"></Line>

          <section className="pb-10 pt-14">
            <ProjectContainer></ProjectContainer>
          </section>

          <ContactSection></ContactSection>
        </div>
      </>
    );
  }
}

export default Home;
