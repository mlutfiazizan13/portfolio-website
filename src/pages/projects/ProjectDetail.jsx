import { useCallback, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getProjectBySlug, getProjectByTypeExceptId } from "../../services/Service";
import Line from "../../components/Line";
import ContactSection from "../../containers/ContactSection";
import ImageViewer from "../../components/ImageViewer";
import ProjectContainer from "../../containers/ProjectContainer";
import ContentRenderer from "../../components/ContentRenderer";

const ProjectDetail = () => {

    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [similarProject, setSimilarProject] = useState([]);
    const location = useLocation();

    let { name } = useParams();

    const fetchData = async () => {
        try {
            const result = await getProjectBySlug(name);
            const result2 = await getProjectByTypeExceptId(result.type, result.id);
            setData(result);
            setSimilarProject(result2);
            setLoading(false);
            return result;
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    };

    const openImageViewer = useCallback((image) => {
        setCurrentImage(image);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setIsViewerOpen(false);
    };

    const formatDate = (dateStr) => {
        if (!dateStr) return '';
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };

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

    useEffect(() => {
        fetchData().then((result) => {
            document.title = `${result.name} - Lutfi°`;
        });
    }, [location]);

    return (
        <>
            <div
                key={data.slug}
                id="container"
                className="w-full overflow-hidden px-5 lg:pl-[5%] xl:pl-[15%] lg:pr-[calc(5%+90px)] xl:pr-[calc(15%+90px)] pb-20"
            >
                {isLoading ? (
                    <div className="pb-10 pt-36">
                        <div className="animate-pulse space-y-6 max-w-3xl mx-auto">
                            <div className="h-3 bg-gray-100 rounded w-1/4 mx-auto"></div>
                            <div className="h-12 bg-gray-100 rounded w-3/4 mx-auto"></div>
                            <div className="h-3 bg-gray-100 rounded w-1/3 mx-auto"></div>
                            <div className="h-64 bg-gray-100 rounded w-full mt-8"></div>
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Article Header */}
                        <section id="project-header" className="pb-12">
                            <div className="flex flex-col items-center text-black">
                                <div className="relative mb-16">
                                    <div
                                        after=""
                                        className="h-[130px] w-[1px] bg-[#2021241a] after:absolute after:bottom-0 after:left-1/2 after:h-3 after:w-3 after:-translate-x-1/2 after:rounded-full after:bg-[#323443] after:content-[attr(after)]"
                                    ></div>
                                </div>

                                <div className="w-full max-w-3xl text-center">
                                    {/* Breadcrumb */}
                                    <nav className="flex justify-center mb-6" aria-label="Breadcrumb">
                                        <ol className="inline-flex items-center space-x-1 md:space-x-2">
                                            <li>
                                                <Link to="/" className="text-sm text-gray-400 hover:text-black transition-colors">
                                                    Home
                                                </Link>
                                            </li>
                                            <li><span className="text-gray-300 mx-1">/</span></li>
                                            <li>
                                                <Link to="/projects" className="text-sm text-gray-400 hover:text-black transition-colors">
                                                    Projects
                                                </Link>
                                            </li>
                                            <li><span className="text-gray-300 mx-1">/</span></li>
                                            <li>
                                                <span className="text-sm text-gray-500">{data.name}</span>
                                            </li>
                                        </ol>
                                    </nav>

                                    {/* Category badge */}
                                    <span className="inline-block uppercase text-xs font-bold tracking-widest px-4 py-1.5 bg-[#323443] text-white rounded-full mb-6">
                                        {data.type}
                                    </span>

                                    {/* Title */}
                                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">{data.name}</h1>

                                    {/* Meta */}
                                    <div className="flex items-center justify-center flex-wrap gap-2 text-sm text-gray-400">
                                        <span>{formatDate(data.date)}</span>
                                        <span>·</span>
                                        <span>{getReadingTime(data)}</span>
                                        {data.client && (
                                            <>
                                                <span>·</span>
                                                <span>{data.client}</span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Hero Image */}
                        {data.image && (
                            <section className="mb-14">
                                <div
                                    className="relative w-full aspect-video overflow-hidden cursor-zoom-in group"
                                    onClick={() => openImageViewer(data.image)}
                                >
                                    <img
                                        src={data.image}
                                        alt={data.name}
                                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                                </div>
                            </section>
                        )}

                        {/* Article Body */}
                        <section className="mb-12 max-w-3xl mx-auto">
                            {data.content && data.content.length > 0 ? (
                                <ContentRenderer blocks={data.content} onImageClick={openImageViewer} />
                            ) : (
                                <p className="text-lg leading-relaxed text-gray-700">{data.desc}</p>
                            )}
                        </section>

                        {/* Tech Stack + Repo */}
                        <section className="mb-16 max-w-3xl mx-auto">
                            <div className="border-t border-b border-gray-100 py-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
                                <div>
                                    <p className="text-xs uppercase font-bold tracking-widest text-gray-400 mb-3">Tech Stack</p>
                                    <div className="flex flex-wrap gap-2">
                                        {data.technology.map(({ id, name }) => (
                                            <span
                                                key={id}
                                                className="px-3 py-1 text-sm font-medium border border-[#323443] text-[#323443] rounded-full"
                                            >
                                                {name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                {data.repositoryLink && (
                                    <a
                                        href={data.repositoryLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#323443] text-white text-sm font-medium rounded-full hover:opacity-80 transition-opacity duration-200 whitespace-nowrap shrink-0"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                            <polyline points="15 3 21 3 21 9" />
                                            <line x1="10" y1="14" x2="21" y2="3" />
                                        </svg>
                                        View Repository
                                    </a>
                                )}
                            </div>
                        </section>

                        {/* Image Gallery */}
                        {data.images && data.images.length > 0 && (
                            <section className="mb-16">
                                <p className="text-xs uppercase font-bold tracking-widest text-gray-400 mb-6">Gallery</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {data.images.map(({ id, name, image }) => (
                                        <div
                                            key={id}
                                            className="overflow-hidden cursor-zoom-in group aspect-video"
                                            onClick={() => openImageViewer(image)}
                                        >
                                            <img
                                                src={image}
                                                alt={name}
                                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </>
                )}

                <Line text="Similar Projects" />

                <section className="pb-10 pt-14">
                    <ProjectContainer projectList={similarProject} />
                </section>

                <ContactSection />
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
