import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Endpoint from "../../components/Endpoint";
import JsonCode from "../../components/JsonCode";

const NotFound = () => {
  const { pathname } = useLocation();

  useEffect(() => {
      document.title = 'Not Found - Lutfi°';
  }, []);

  return (
      <Endpoint
          id="main-banner"
          method="GET"
          path={pathname}
          panel={<JsonCode value={{ status: 404, error: "Not Found", path: pathname }} />}
      >
          <h1 className="title mt-5 text-[clamp(2.75rem,5.2vw,4.75rem)]">Page not found</h1>
          <p className="mt-6 max-w-[30em] text-xl leading-snug">
            Nothing lives at this address. The link may be old, or the project may have been renamed.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to={"/projects"} className="btn">GET /projects</Link>
            <Link to={"/"} className="btn-outline">Go to the home page</Link>
          </div>
      </Endpoint>
  );
};

export default NotFound;
