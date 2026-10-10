import { useEffect } from "react";
import PersonalImg from "../../assets/images/personal-img.jpg";
import Endpoint from "../../components/Endpoint";
import JsonCode from "../../components/JsonCode";
import TechnologyContainer from "../../containers/TechnologyContainer";
import { profile } from "../home/Home";

const experience = [
    {
        company: "PT. Teknologi Inovasi Mandiri",
        about: "PT Technology Inovasi Mandiri (TIM) is a system integrator company with high dedication and technical know-how. With various backgrounds in the IT industry, system integrators and IT consultants, our people have deep experience in the world of information technology.",
        roles: [
            {
                title: "Web Developer, full-time",
                from: "Dec 2022",
                to: "Present",
                points: ["Working on projects using spring boot, spring mvc, laravel, etc"],
            },
            {
                title: "Web Developer, contract",
                from: "Sep 2022",
                to: "Dec 2022",
                points: ["Working on projects using spring boot, spring mvc, laravel, etc"],
            },
            {
                title: "Web Developer, bootcamp",
                from: "Jul 2022",
                to: "Sep 2022",
                points: ["Learning about Spring boot and working on some internal and external projects"],
            },
        ],
    },
    {
        company: "PT. Agatra Kreasi Teknologi",
        about: "Agatra is one of the few IT system integration, professional service and software development companies in Bandung.",
        roles: [
            {
                title: "Backend Web Developer, internship",
                from: "Aug 2021",
                to: "Nov 2021",
                points: [
                    "Build Restful API using Yii2 for PT Agatra Kreasi Teknologi's Company Profile",
                    "Build Admin Page using Angular for PT Agatra Kreasi Teknologi's Company Profile",
                ],
            },
        ],
    },
    {
        company: "Kejar.id",
        about: "Kejar.id provides learning content, learning management systems (LMS), and educational information systems for schools with a complete, measurable, and monitored philosophy.",
        roles: [
            {
                title: "Web Developer, internship",
                from: "Jan 2021",
                to: "Mar 2021",
                points: [],
            },
        ],
    },
];

const experienceJson = experience.flatMap(({ company, roles }) =>
    roles.map(({ title, from, to }) => ({ company, role: title, from, to }))
);

const AboutMe = () => {

    useEffect(() => {
        document.title = 'About Me - Lutfi°';
    }, []);

  return (
      <>
          <Endpoint id="main-banner" method="GET" path="/about" panelStatus="200 OK" panel={<JsonCode value={profile} />}>
              <h1 className="title mt-5 text-[clamp(2.75rem,5.2vw,4.75rem)]">About me</h1>
              <img
                  src={PersonalImg}
                  alt="Muhamad Lutfi Azizan"
                  className="mt-8 h-32 w-32 rounded-xl object-cover object-[62%_40%]"
              />
              <div className="mt-8 max-w-[62ch] space-y-4 text-lg text-soft">
                <p>Experienced Software Engineer with 3 years of expertise in developing, testing, and collaborating within a team to deliver high-quality applications. Passionate about technology, I have a constant desire to learn, grow, and refine my skills in software engineering.</p>
                <p>Proficient in Spring Boot, Laravel, Go, and JavaScript, with hands-on experience in DevOps tools like Docker, Kubernetes, and Jenkins. Familiar with the Agile Software Development Life Cycle (SDLC), I adapt quickly to project requirements, collaborate effectively, and deliver iterative improvements efficiently.</p>
                <p>With a deep enthusiasm for tech, I continuously explore new advancements and expand my expertise to stay at the forefront of the industry.</p>
              </div>
          </Endpoint>

          <Endpoint id="experience" method="GET" path="/experience" panelStatus="200 OK" panel={<JsonCode value={experienceJson} />}>
              <h2 className="title mb-8 mt-4 text-4xl md:text-[44px]">Experience</h2>

              <ol className="space-y-10">
                  {experience.map(({ company, about, roles }) => (
                      <li key={company}>
                          <h3 className="mb-2 text-2xl font-extrabold tracking-tight">{company}</h3>
                          <p className="mb-5 max-w-[62ch] text-base text-muted">{about}</p>
                          <ol className="border-t border-line">
                              {roles.map(({ title, from, to, points }) => (
                                  <li key={from} className="border-b border-line py-3.5">
                                      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                                          <p className="font-semibold">{title}</p>
                                          <p className="font-mono text-sm text-muted">{from} – {to}</p>
                                      </div>
                                      {points.length > 0 && (
                                          <ul className="mt-1.5 list-disc space-y-1 pl-5 text-base text-soft marker:text-get">
                                              {points.map((point) => (
                                                  <li key={point}>{point}</li>
                                              ))}
                                          </ul>
                                      )}
                                  </li>
                              ))}
                          </ol>
                      </li>
                  ))}
              </ol>
          </Endpoint>

          <TechnologyContainer></TechnologyContainer>
      </>
  );
};

export default AboutMe;
