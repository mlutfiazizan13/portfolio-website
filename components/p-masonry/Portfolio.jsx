'use client';
import React, { useEffect, useState } from 'react';
import initIsotope2 from '@/common/initIsotope2';
function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let mounted = true;

    fetch("/api/portfolio")
      .then((res) => res.json())
      .then((data) => {
        if (!mounted) return;
        setProjects(data.data);
        setTimeout(() => initIsotope2(), 300);
      })
      .catch((err) => console.error("Failed to load projects", err));

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="work-minimal section-padding pb-40">
      <div className="container">
        <div className="row mb-80">
          <div className="col-lg-4">
            <div className="sec-head">
              <h6 className="sub-title main-color mb-10">DISCOVER OUR CASES</h6>
              <h3>Latest Projects</h3>
            </div>
          </div>
          <div className="filtering col-lg-8 d-flex justify-content-end align-items-end">
            <div>
              <div className="filter">
                <span data-filter="*" className="active" data-count="08">
                  All
                </span>
                <span data-filter=".design" data-count="03">
                  Design
                </span>
                <span data-filter=".development" data-count="02">
                  Development
                </span>
                <span data-filter=".marketing" data-count="03">
                  Marketing
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl">
        <div className="gallery2  row sm-marg">
                    {projects.map((project) => (
            <div 
              key={project._id || project.id || project.slug}
              className={`col-lg-6 items width2 ${project.type?.toLowerCase()}`} // e.g. .design
            >
              <div className="item mt-10">
                <div className="img">
                  <img src={project.image} alt={project.name} />

                  <div className="cont inline d-flex align-items-center">
                    <div>
                      <h5>
                        <a href={`/portfolio/${project.slug}`}>
                          {project.name}
                        </a>
                      </h5>
                    </div>

                    <div className="ml-auto">
                      <p>{project.type}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))} 
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
