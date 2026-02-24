import { useEffect } from "react";
import Line from "../../components/Line";
import ContactSection from "../../containers/ContactSection";
import TechnologyContainer from "../../containers/TechnologyContainer";

const AboutMe = () => {


    useEffect(() => {
        document.title = 'About Me - Lutfi°';
    }, []);

  return (
      <div
          id="container"
          className="w-full overflow-hidden px-5 lg:pl-[5%] xl:pl-[15%] lg:pr-[calc(5%+90px)] xl:pr-[calc(15%+90px)] pb-20"
      >
          <section id="main-banner" className="">
            <div className="flex h-full flex-col items-center gap-5 text-black">
              <div className="relative">
                <div
                  after=""
                  className="h-[130px] w-[1px] bg-[#2021241a] after:absolute after:bottom-0 after:left-1/2 after:h-3 after:w-3 after:-translate-x-1/2 after:rounded-full after:bg-[#323443] after:content-[attr(after)]"
                ></div>
              </div>
              <div className="text-center">
                <div className="mb-12 text-center">
                  <p className="text-6xl md:text-8xl font-bold">About Me</p>
                </div>
              </div>

            </div>
          </section>

          <section className="text-center mb-20">
            <p className="text-xl">Experienced Software Engineer with 3 years of expertise in developing, testing, and collaborating within a team to deliver high-quality applications. Passionate about technology, I have a constant desire to learn, grow, and refine my skills in software engineering. Proficient in Spring Boot, Laravel, Go, and JavaScript, with hands-on experience in DevOps tools like Docker, Kubernetes, and Jenkins. Familiar with the Agile Software Development Life Cycle (SDLC), I adapt quickly to project requirements, collaborate effectively, and deliver iterative improvements efficiently. With a deep enthusiasm for tech, I continuously explore new advancements and expand my expertise to stay at the forefront of the industry.</p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            <div>
                <Line text="Skills"></Line>

                <TechnologyContainer classes="grid grid-cols-2 items-center gap-5"></TechnologyContainer>

            </div>

            <div>
                <Line text="Experience"></Line>

               
                <ol className="relative border-s border-gray-200 mx-2">                  
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-[#323443] rounded-full mt-1.5  -start-1.5 border border-white"></div>
                        
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-lg font-semibold text-gray-900">Kejar.id</h3>

                            <time className=" text-sm font-normal leading-none text-gray-400">Jan 2021 - Mar 2021</time>
                        </div>
                        <p className="mb-1 text-sm font-normal leading-none text-gray-400">Web Developer - Internship</p>
                        
                        
                        <p className="mb-4 text-base font-normal text-gray-500">Kejar.id provides learning content, learning management systems (LMS), and educational information systems for schools with a complete, measurable, and monitored philosophy.</p>
                    </li>
                    <li className="mb-10 ms-4">

                        
                        <div className="absolute w-3 h-3 bg-[#323443] rounded-full mt-1.5 -start-1.5 border border-white"></div>

                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-lg font-semibold text-gray-900">PT. Agatra Kreasi Teknologi</h3>

                            <time className=" text-sm font-normal leading-none text-gray-400">Aug 2021 - Nov 2021</time>
                        </div>
                        <p className="mb-1 text-sm font-normal leading-none text-gray-400">Backend Web Developer - Internship</p>

                        <p className="text-base font-normal text-gray-500 mb-2">Agatra is one of the few IT system integration, professional service and software development companies in Bandung.</p>
                        <ol className="pl-4 list-disc">
                            <li className="text-base font-normal text-gray-500">Build Restful API using Yii2 for PT Agatra Kreasi Teknologi's Company Profile</li>
                            <li className="text-base font-normal text-gray-500"> Build Admin Page using Angular for PT Agatra Kreasi Teknologi's Company Profile</li>
                        </ol>
                    </li>
                    <li className="ms-4">
                            
                        <div className="absolute w-3 h-3 bg-[#323443] rounded-full mt-1.5 -start-1.5 border border-white"></div>

                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-lg font-semibold text-gray-900">PT. Teknologi Inovasi Mandiri</h3>

                            <time className=" text-sm font-normal leading-none text-gray-400">Jul 2022 - Sep 2022</time>
                        </div>
                        <p className="mb-1 text-sm font-normal leading-none text-gray-400">Web Developer - Bootcamp</p>

                        <p className="text-base font-normal text-gray-500 mb-2">PT Technology Inovasi Mandiri (TIM) is a system integrator company with high dedication and technical know-how. With various backgrounds in the IT industry, system integrators and IT consultants, our people have deep experience in the world of information technology.</p>
                        <ol className="pl-4 list-disc">
                            <li className="text-base font-normal text-gray-500">Learning about Spring boot and working on some internal and external projects</li>
                        </ol>

                        <div className="flex justify-between items-center mb-1 mt-5">
                        <p className="mb-1 text-sm font-normal leading-none text-gray-400">Web Developer - Contract</p>

                            <time className=" text-sm font-normal leading-none text-gray-400">Sep 2022 - Dec 2022</time>
                        </div>

                        <ol className="pl-4 list-disc">
                            <li className="text-base font-normal text-gray-500">Working on projects using spring boot, spring mvc, laravel, etc</li>
                        </ol>
                        <div className="flex justify-between items-center mb-1 mt-5">
                        <p className="mb-1 text-sm font-normal leading-none text-gray-400">Web Developer - Fulltime</p>
                            <time className=" text-sm font-normal leading-none text-gray-400">Dec 2022 - Present</time>
                        </div>
                        <ol className="pl-4 list-disc">
                            <li className="text-base font-normal text-gray-500">Working on projects using spring boot, spring mvc, laravel, etc</li>
                        </ol>
                    </li>
                </ol>

 

            </div>
          </section>



          <ContactSection></ContactSection>
      </div>
  );
};

export default AboutMe;
