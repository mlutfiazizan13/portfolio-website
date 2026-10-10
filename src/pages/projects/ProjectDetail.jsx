import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProjects } from "../../services/Service";
import Endpoint from "../../components/Endpoint";
import JsonCode from "../../components/JsonCode";
import ImageViewer from "../../components/ImageViewer";
import ProjectContainer from "../../containers/ProjectContainer";
import ContentRenderer from "../../components/ContentRenderer";
import NotFound from "./NotFound";
import { formatDate } from "../../utils/date";

const getReadingTime = (projectData) => {
    let text = projectData.desc || '';
    if (projectData.content) {
        projectData.content.forEach(block => {
            if (block.text) text += ' ' + block.text;
            if (block.items) text += ' ' + block.items.join(' ');
        });
    }
    const words = text.trim().split(/\s+/).length;
    const mins = Math.max(1, Math.ceil(words / 200));
    return `${mins} min read`;
};

const toJson = ({ slug, name, date, client, technology, repositoryLinks }) => ({
    slug,
    name,
    published: date,
    made_for: client,
    stack: (technology || []).map((item) => item.name),
    source: (repositoryLinks || []).map(({ url }) => url),
});

const ProjectDetail = () => {

    const [currentImage, setCurrentImage] = useState(null);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [otherProjects, setOtherProjects] = useState([]);

    let { name } = useParams();

    const openImageViewer = useCallback((image) => {
        setCurrentImage(image);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = useCallback(() => {
        setIsViewerOpen(false);
    }, []);

    useEffect(() => {
        let isCurrent = true;

        const fetchData = async () => {
            try {
                const result = await getProjects();
                if (!isCurrent) return;
                const projects = result.data.data;
                const project = projects.find((el) => el.slug === name) || null;
                setData(project);
                setOtherProjects(projects.filter((el) => el.slug !== name));
                if (project) document.title = `${project.name} - Lutfi°`;
            } catch (error) {
                console.log("Error fetching data:", error);
            } finally {
                if (isCurrent) setLoading(false);
            }
        };

        setLoading(true);
        fetchData();

        return () => {
            isCurrent = false;
        };
    }, [name]);

    if (isLoading) {
        return (
            <div className="px-5 py-14 md:px-12" role="status">
                <div className="animate-pulse space-y-6">
                    <div className="h-5 w-56 rounded bg-mist"></div>
                    <div className="h-16 w-3/4 rounded bg-mist"></div>
                    <div className="h-5 w-1/2 rounded bg-mist"></div>
                    <div className="aspect-video w-full max-w-4xl rounded-lg bg-mist"></div>
                </div>
                <span className="sr-only">Loading project</span>
            </div>
        );
    }

    if (!data) return <NotFound />;

    return (
        <>
            <div key={data.slug}>
                {/* Article Header */}
                <Endpoint
                    id="project-header"
                    method="GET"
                    path={`/projects/${data.slug}`}
                    panelStatus="200 OK"
                    panel={<JsonCode value={toJson(data)} />}
                >
                    <h1 className="title mt-5 text-[clamp(2.5rem,4.8vw,4.25rem)]">{data.name}</h1>

                    {data.teaserDesc && (
                        <p className="mt-6 max-w-[30em] text-xl leading-snug">{data.teaserDesc}</p>
                    )}

                    <dl className="mt-8 border-t border-line">
                        <div className="flex flex-wrap gap-x-6 gap-y-1 border-b border-line py-3">
                            <dt className="w-36 flex-none font-mono text-sm leading-7 text-muted">published</dt>
                            <dd className="font-semibold tabular-nums">{formatDate(data.date)}</dd>
                        </div>
                        {data.client && (
                            <div className="flex flex-wrap gap-x-6 gap-y-1 border-b border-line py-3">
                                <dt className="w-36 flex-none font-mono text-sm leading-7 text-muted">made_for</dt>
                                <dd className="font-semibold">{data.client}</dd>
                            </div>
                        )}
                        {data.technology && data.technology.length > 0 && (
                            <div className="flex flex-wrap gap-x-6 gap-y-1 border-b border-line py-3">
                                <dt className="w-36 flex-none font-mono text-sm leading-7 text-muted">stack</dt>
                                <dd className="min-w-0 flex-1 basis-60 font-semibold">
                                    {data.technology.map((item) => item.name).join(", ")}
                                </dd>
                            </div>
                        )}
                        <div className="flex flex-wrap gap-x-6 gap-y-1 border-b border-line py-3">
                            <dt className="w-36 flex-none font-mono text-sm leading-7 text-muted">length</dt>
                            <dd className="font-semibold tabular-nums">{getReadingTime(data)}</dd>
                        </div>
                    </dl>

                    {data.repositoryLinks && data.repositoryLinks.length > 0 && (
                        <div className="mt-8 flex flex-wrap gap-3">
                            {data.repositoryLinks.map(({ label, url }, index) => (
                                <a key={index} href={url} target="_blank" rel="noreferrer" className={index === 0 ? "btn" : "btn-outline"}>
                                    {label || "Repository"} on GitHub
                                </a>
                            ))}
                        </div>
                    )}
                </Endpoint>

                <div className="border-b border-line px-5 py-12 md:px-12 md:py-14">
                    {/* Hero Image */}
                    {data.image && (
                        <button
                            type="button"
                            aria-label={`View ${data.name} screenshot full size`}
                            className="mb-12 block w-full max-w-5xl cursor-zoom-in overflow-hidden rounded-lg border border-line bg-mist"
                            onClick={() => openImageViewer(data.image)}
                        >
                            <img src={data.image} alt="" className="w-full" />
                        </button>
                    )}

                    {/* Article Body */}
                    <section>
                        {data.content && data.content.length > 0 ? (
                            <ContentRenderer blocks={data.content} onImageClick={openImageViewer} />
                        ) : (
                            <p className="max-w-[68ch] text-lg leading-relaxed text-soft">{data.desc}</p>
                        )}
                    </section>

                    {/* Image Gallery */}
                    {data.images && data.images.length > 0 && (
                        <section className="mt-16">
                            <h2 className="title mb-6 text-3xl">Screenshots</h2>
                            <div className="grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
                                {data.images.map(({ id, name, image }) => (
                                    <button
                                        type="button"
                                        key={id}
                                        aria-label={`View ${name} full size`}
                                        className="aspect-video cursor-zoom-in overflow-hidden rounded-lg border border-line bg-mist"
                                        onClick={() => openImageViewer(image)}
                                    >
                                        <img
                                            src={image}
                                            alt=""
                                            loading="lazy"
                                            className="h-full w-full object-cover object-top"
                                        />
                                    </button>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {otherProjects.length > 0 && (
                    <section className="border-b border-line px-5 py-12 md:px-12 md:py-14">
                        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                            <h2 className="title text-3xl">Related endpoints</h2>
                            <Link to="/projects" className="text-link">See all projects</Link>
                        </div>
                        <ProjectContainer projectList={otherProjects} limit={3} classes="flex max-w-3xl flex-col gap-7" />
                    </section>
                )}
            </div>

            {isViewerOpen && (
                <ImageViewer
                    image={currentImage}
                    onClose={closeImageViewer}
                />
            )}
        </>
    );
};

export default ProjectDetail;
