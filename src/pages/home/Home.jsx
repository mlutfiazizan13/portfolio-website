import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PersonalImg from "../../assets/images/personal-img.jpg";

import Endpoint from "../../components/Endpoint";
import JsonCode from "../../components/JsonCode";
import TechnologyContainer from "../../containers/TechnologyContainer";
import ProjectContainer, { toSummary } from "../../containers/ProjectContainer";
import { getProjects } from "../../services/Service";
import { byNewest } from "../../utils/date";

export const profile = {
  name: "Muhamad Lutfi Azizan",
  role: "Software Engineer",
  based_in: "Indonesia",
  years: 3,
  writes: ["Java", "Go", "PHP"],
  ships_with: ["Docker", "Kubernetes", "Jenkins"],
};

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    document.title = "Home - Lutfi°";
    getProjects()
      .then((result) => setProjects([...result.data.data].sort(byNewest).slice(0, 3)))
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  return (
    <>
      <Endpoint id="main-banner" method="GET" path="/" panelStatus="200 OK" panel={<JsonCode value={profile} />}>
        <h1 className="title mt-5 text-[clamp(2.75rem,5.2vw,4.75rem)]">Muhamad Lutfi Azizan</h1>
        <p className="mt-6 max-w-[27em] text-xl leading-snug md:text-[21px]">
          Software engineer in Indonesia. I design and build backend services, and this site documents me
          the way I'd document one of them.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <img
            src={PersonalImg}
            alt="Muhamad Lutfi Azizan"
            className="h-[88px] w-[88px] rounded-xl object-cover object-[62%_40%]"
          />
          <p className="font-mono text-sm leading-relaxed text-muted">
            Stable since 2021
            <br />3 years in production teams
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to={"/projects"} className="btn">
            GET /projects
          </Link>
          <Link to={"/about-me"} className="btn-outline">
            GET /about
          </Link>
        </div>
      </Endpoint>

      <Endpoint
        id="projects"
        method="GET"
        path="/projects?limit=3"
        panelStatus="200 OK"
        panel={<JsonCode value={projects.map(toSummary)} />}
      >
        <h2 className="title mb-3 mt-4 text-4xl md:text-[44px]">List projects</h2>
        <p className="mb-8 max-w-[30em] text-soft">
          Returns the things I've built, newest first. Each one links to a write-up of how it works.
        </p>
        <ProjectContainer projectList={projects}></ProjectContainer>
        <p className="mt-8">
          <Link to={"/projects"} className="text-link">
            See all projects
          </Link>
        </p>
      </Endpoint>

      <TechnologyContainer></TechnologyContainer>
    </>
  );
};

export default Home;
