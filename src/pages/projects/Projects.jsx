import { useEffect, useState } from "react";
import Endpoint from "../../components/Endpoint";
import JsonCode from "../../components/JsonCode";
import ProjectContainer, { toSummary } from "../../containers/ProjectContainer";
import { getProjects } from "../../services/Service";
import { byNewest } from "../../utils/date";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    document.title = 'Projects - Lutfi°';
    getProjects()
      .then((result) => setProjects([...result.data.data].sort(byNewest)))
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  return (
    <Endpoint
      id="main-banner"
      method="GET"
      path="/projects"
      panelStatus="200 OK"
      panel={<JsonCode value={projects.map(toSummary)} />}
    >
      <h1 className="title mt-5 text-[clamp(2.75rem,5.2vw,4.75rem)]">Projects</h1>
      <p className="mb-10 mt-6 max-w-[30em] text-xl leading-snug">
        A collection of things I've built, from personal experiments to production tools.
      </p>
      <ProjectContainer projectList={projects} classes="flex flex-col gap-9" />
    </Endpoint>
  );
};

export default Projects;
