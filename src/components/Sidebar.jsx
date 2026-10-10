import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { getProjects } from "../services/Service";
import { byNewest } from "../utils/date";

export const endpoints = [
  { method: "GET", path: "/about", to: "/about-me" },
  { method: "GET", path: "/projects", to: "/projects" },
  { method: "GET", path: "/experience", to: "/about-me#experience" },
  { method: "GET", path: "/stack", to: "/about-me#stack" },
];

const itemClass = ({ isActive }) =>
  `block rounded-lg border px-3 py-2.5 hover:bg-white ${
    isActive ? "border-line bg-white font-semibold" : "border-transparent"
  }`;

const Sidebar = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects()
      .then((result) => setProjects([...result.data.data].sort(byNewest)))
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  return (
    <nav
      aria-label="Endpoints"
      className="sticky top-[61px] hidden h-[calc(100vh-61px)] w-64 flex-none overflow-y-auto border-r border-line bg-mist px-5 py-8 lg:block"
    >
      <p className="mb-2 font-extrabold">Getting started</p>
      <NavLink to="/" end className={itemClass}>
        Introduction
      </NavLink>

      <p className="mb-2 mt-7 font-extrabold">Endpoints</p>
      <ul className="font-mono text-sm">
        {endpoints.map(({ method, path, to }) => (
          <li key={path}>
            {to.includes("#") ? (
              <Link to={to} className={itemClass({ isActive: false })}>
                <span className="font-bold text-get">{method}</span> {path}
              </Link>
            ) : (
              <NavLink to={to} end className={itemClass}>
                <span className="font-bold text-get">{method}</span> {path}
              </NavLink>
            )}
          </li>
        ))}
        <li>
          <a href="#contact" className={itemClass({ isActive: false })}>
            <span className="font-bold text-post">POST</span> /contact
          </a>
        </li>
      </ul>

      {projects.length > 0 && (
        <>
          <p className="mb-2 mt-7 font-extrabold">Projects</p>
          <ul className="text-[15px]">
            {projects.map(({ id, slug, name }) => (
              <li key={id}>
                <NavLink to={`/projects/${slug}`} className={itemClass}>
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </>
      )}
    </nav>
  );
};

export default Sidebar;
