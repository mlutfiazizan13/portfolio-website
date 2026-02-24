import { useEffect } from "react";
import ProjectContainer from "../../containers/ProjectContainer";

const Projects = () => {

  useEffect(() => {
    document.title = 'Projects - Lutfi°';
  }, []);

  return (
    <div
      id="container"
      className="w-full overflow-hidden px-5 lg:pl-[5%] xl:pl-[15%] lg:pr-[calc(5%+90px)] xl:pr-[calc(15%+90px)] pb-20"
    >
      <section id="main-banner" className="pb-16">
        <div className="flex h-full flex-col items-center text-black">
          <div className="relative">
            <div
              after=""
              className="h-[130px] w-[1px] bg-[#2021241a] after:absolute after:bottom-0 after:left-1/2 after:h-3 after:w-3 after:-translate-x-1/2 after:rounded-full after:bg-[#323443] after:content-[attr(after)]"
            ></div>
          </div>
          <div className="text-center mt-8">
            <span className="uppercase text-xs font-bold tracking-widest opacity-50 mb-4 block">Portfolio</span>
            <p className="text-6xl md:text-8xl font-bold mb-6">Projects</p>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              A collection of things I've built — from personal experiments to production tools.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <ProjectContainer classes="grid grid-cols-1 lg:grid-cols-2 gap-14 auto-cols-max" />
      </section>

    </div>
  );
};

export default Projects;
