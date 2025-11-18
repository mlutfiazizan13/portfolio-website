import React from 'react';

function Info({ project }) {
  const type = project?.type || 'Project';
  const client = project?.client || 'Confidential';
  const startDate = project?.date
    ? new Date(project.date).toLocaleDateString()
    : '—';
  const description =
    project?.desc ||
    project?.teaserDesc ||
    "Project description will be available soon.";
  const technologies =
    project?.technology?.map((tech) => tech.name).join(', ') || '—';

  return (
<div className="container">
        <div className="info mb-80 pb-20 bord-thin-bottom">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="item mb-30">
                <span className="opacity-8 mb-5">Category :</span>
                <h6>{type}</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="item mb-30">
                <span className="opacity-8 mb-5">Client :</span>
                <h6>{client}</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="item mb-30">
                <span className="opacity-8 mb-5">Start Date :</span>
                <h6>{startDate}</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="item">
                <span className="opacity-8 mb-5">Technologies :</span>
                <h6>{technologies}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Info;
