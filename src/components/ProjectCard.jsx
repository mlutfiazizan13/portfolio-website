import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <Link to={`/projects/${props.slug}`} id={props.id} className="group flex flex-wrap items-start gap-x-5 gap-y-4">
      <img
        className="aspect-[16/10] w-full flex-none rounded-lg border border-line bg-mist object-cover object-left-top sm:w-44"
        src={props.image}
        alt=""
        loading="lazy"
      />
      <div className="min-w-0 flex-1 basis-56">
        <p className="mb-1 break-all font-mono text-[13px] text-muted">GET /projects/{props.slug}</p>
        <h3 className="mb-1 text-[22px] font-extrabold leading-tight tracking-tight group-hover:text-post">
          {props.name}
        </h3>
        {props.teaserDesc && <p className="text-base text-soft">{props.teaserDesc}</p>}
      </div>
    </Link>
  );
};

export default ProjectCard;
