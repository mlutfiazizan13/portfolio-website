import { useEffect, useState } from "react";
import { getProjects } from "../services/Service";
import ProjectCard from "../components/ProjectCard";

const ProjectContainer = ({
    classes = "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10",
    projectList
}) => {
    const [data, setData] = useState([]);

    async function fetchData(){
        try {
            const result = await getProjects();
            // console.log(result.data.data[0].technology);
            setData(result.data.data);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    }

    useEffect(() => {
        if (projectList == null) fetchData(); 
    }, []);

    return ( 
        <>
            {
                projectList == null ? 
                    data ? (
                            <div className={classes}>
                            {data.map(({id,slug, name, teaserDesc , desc, image, technology, type, date}) => {
                                return <ProjectCard key={id} id={id} name={name} slug={slug} teaserDesc={teaserDesc} desc={desc} image={image} technology={technology} type={type} date={date}/>
                            })}
                        </div>
                    ) : (
                        <div>
                            <p>Loading</p>
                        </div>
                    )

               : 
                <div className={classes}>
                    {projectList.map(({id,slug, name, teaserDesc , desc, image, technology, type, date}) => {
                        return <ProjectCard key={id} id={id} name={name} slug={slug} teaserDesc={teaserDesc} desc={desc} image={image} technology={technology} type={type} date={date}/>
                    })}
                </div>
               

            }


        </>
     );
}
 
export default ProjectContainer;