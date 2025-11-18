'use client';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import React, { useEffect } from 'react';

function Next({ project }) {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const backgroundImage = project?.coverImage || '/assets/imgs/works/3/2.jpg';
  const title = project?.name || 'Project';

  return (
    <section className="next-project sub-bg">
      <div className="container-fluid rest">
        <div className="row">
          <div className="col-md-12 rest">
            <div
              className="text-right d-flex box bg-img"
              data-background={backgroundImage}
            >
              <div className="ml-auto">
                <div className="cont d-flex align-items-center">
                  <div className="text-left">
                    <h6 className="sub-title fz-16 mb-5">Repository</h6>
                    <a
                      href={project?.repositoryLink || '#'}
                      className="fz-32 fw-600 stroke"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {title}
                    </a>
                  </div>
                  <div>
                    <span className="ml-30 fz-30 ti-arrow-right"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <a href="/portfolio" className="all-works-butn text-center">
          <span className="ti-view-grid fz-24 mb-10"></span>
          <span className="d-block fz-12 text-u ls1">all Projects</span>
        </a>
      </div>
    </section>
  );
}

export default Next;
