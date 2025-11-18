'use client';
import React, { useEffect, useState } from 'react';

function Portfolio() {
  const [projects, setProjects] = useState([]);

  const Playing = () => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = document.querySelectorAll('.cards .card-item');
    let stickDistance = 0;

    const firstCardST = ScrollTrigger.create({
      trigger: cards[0],
      start: 'center center',
    });

    const lastCardST = ScrollTrigger.create({
      trigger: cards[cards.length - 1],
      start: 'bottom bottom',
    });

    cards.forEach((card, index) => {
      const scale = 1 - (cards.length - index) * 0.025;
      const scaleDown = gsap.to(card, {
        scale: scale,
        transformOrigin: '50% ' + (lastCardST.start + stickDistance),
      });

      ScrollTrigger.create({
        trigger: card,
        start: 'center center',
        end: () => lastCardST.start + stickDistance,
        pin: true,
        pinSpacing: false,
        ease: 'none',
        animation: scaleDown,
        toggleActions: 'restart none none reverse',
      });
    });
  };

  useEffect(() => {
    let mounted = true;
    fetch('/api/project')
      .then((res) => res.json())
      .then((data) => {
        if (!mounted) return;
        setProjects(data.data || []);
      })
      .catch((err) => console.error('Failed to load projects', err));

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (!projects.length) return;
    Playing();

    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, [projects]);

  return (
    <section className="work-card section-padding pb-0">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Portfolio</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Selected <span className="fw-200">Works.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <a
                href="/portfolio-grid"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>View All</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
        <div className="cards">
          {projects.map((project) => {
            const tech = project.technology || [];
            return (
              <div className="card-item sub-bg" key={project._id || project.slug || project.name}>
                <div className="row">
                  <div className="col-lg-5">
                    <div className="cont">
                      <div>
                        <div className="mb-15">
                          {tech.map((t) => (
                            <a href="/portfolio-grid" className="tag" key={t.name}>
                              {t.name}
                            </a>
                          ))}
                        </div>
                        <h4>{project.name}</h4>
                      </div>
                      <div>
                        <p>{project.teaserDesc || project.desc}</p>
                        <a href={`/portfolio/${project.slug}`} className="underline mt-15">
                          <span className="text main-color sub-title">
                            View Details <i className="ti-arrow-top-right"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="img">
                      <img src={project.coverImage} alt={project.name} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="sec-bottom mt-100">
        <div className="main-bg d-flex align-items-center">
          <h6 className="fz-14 fw-400">
            More than <span className="fw-600"> 200+ companies</span>
            trusted us worldwide
          </h6>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
