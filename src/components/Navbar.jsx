import { Link, NavLink } from "react-router-dom";
import { endpoints } from "./Sidebar";

const stripLinkClass = ({ isActive }) =>
  `whitespace-nowrap px-3 py-3 ${isActive ? "font-bold underline decoration-post decoration-2 underline-offset-8" : ""}`;

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-white">
      <div className="flex h-[60px] items-center justify-between gap-4 px-5 md:px-8">
        <Link to={"/"} className="flex items-baseline gap-2.5 leading-none" aria-label="Lutfi, home">
          <span className="text-[22px] font-extrabold">
            Lutfi<span className="text-post">°</span>
          </span>
          <span className="hidden font-mono text-sm font-medium text-muted sm:inline">API reference</span>
        </Link>

        <div className="flex items-center gap-4 font-mono text-[13px]">
          <span className="hidden items-center gap-2 rounded-full border border-line px-3 py-1.5 md:inline-flex">
            <span className="h-2 w-2 rounded-full bg-get" aria-hidden="true"></span>
            All systems operational
          </span>
          <a href="#contact" className="btn">
            POST /contact
          </a>
        </div>
      </div>

      {/* Below the sidebar breakpoint the endpoints become a scrolling strip */}
      <nav aria-label="Endpoints" className="flex overflow-x-auto border-t border-line px-2 font-mono text-sm [scrollbar-width:none] lg:hidden">
        <NavLink to="/" end className={stripLinkClass}>
          /
        </NavLink>
        {endpoints.map(({ path, to }) =>
          to.includes("#") ? (
            <Link key={path} to={to} className={stripLinkClass({ isActive: false })}>
              {path}
            </Link>
          ) : (
            <NavLink key={path} to={to} className={stripLinkClass}>
              {path}
            </NavLink>
          )
        )}
      </nav>
    </header>
  );
};

export default Navbar;
