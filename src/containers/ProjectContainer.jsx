import { useEffect, useState } from "react";
import { getProjects } from "../services/Service";
import ProjectCard from "../components/ProjectCard";
import { byNewest, parseDate } from "../utils/date";

// The short form of a project shown in JSON response panels
export const toSummary = ({ slug, date, technology }) => ({
    slug,
    year: parseDate(date).getFullYear(),
    stack: (technology || []).slice(0, 3).map(({ name }) => name),
});

const ProjectContainer = ({
    classes = "flex flex-col gap-7",
    projectList,
    limit
}) => {
    const [data, setData] = useState([]);

    async function fetchData(){
        try {
            const result = await getProjects();
            setData(result.data.data);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    }

    useEffect(() => {
        if (projectList == null) fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [projectList]);

    const projects = [...(projectList ?? data)].sort(byNewest).slice(0, limit ?? undefined);

    return (
        <div className={classes}>
            {projects.map(({id, slug, name, teaserDesc, image}) => {
                return <ProjectCard key={id} id={id} name={name} slug={slug} teaserDesc={teaserDesc} image={image}/>
            })}
        </div>
     );
}

export default ProjectContainer;
