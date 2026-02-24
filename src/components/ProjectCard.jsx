import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <Link to={`/projects/${props.slug}`} id={props.id} className="group flex flex-col">
      <div className="relative overflow-hidden aspect-video w-full mb-5">
        <img
          className="absolute inset-0 w-full h-full object-cover object-center scale-100 group-hover:scale-105 duration-300 ease-in-out"
          src={props.image}
          alt={props.name}
        />
      </div>
      <span className="uppercase text-xs font-bold tracking-widest opacity-50 mb-2">{props.type}</span>
      <h2 className="text-2xl font-bold mb-3 group-hover:opacity-60 transition-opacity duration-200 leading-tight">{props.name}</h2>
      {props.teaserDesc && (
        <p className="text-sm text-gray-500 mb-5 line-clamp-2 leading-relaxed">{props.teaserDesc}</p>
      )}
      <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="text-xs text-gray-400">{formatDate(props.date)}</span>
        <div className="bg-[#323443] flex justify-center items-center text-sm text-white h-[34px] w-[34px] rounded-full group-hover:scale-110 duration-200">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
