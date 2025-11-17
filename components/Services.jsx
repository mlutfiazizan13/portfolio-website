import React from 'react';

function Services() {
  return (
    <section className="services-clas">
      <div className="container section-padding bord-bottom-grd pt-0">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Specialize</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Featured <span className="fw-200">Services.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <a
                href="/page-services"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>View All</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="item sub-bg md-mb30">
              <div className="icon-img-60 opacity-5 mb-40">
                <img src="/assets/imgs/serv-icons/3.png" alt="" />
              </div>
              <h5>API Development</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">Backend</span>
                  <span className="tag">Development</span>
                </div>
                <p>
                  We build fast, secure, and scalable APIs that power your web and mobile applications.
                </p>
              </div>
              <a href="/page-services-details" className="mt-40">
                <span className="ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item sub-bg md-mb30">
              <div className="icon-img-60 opacity-5 mb-40">
                <img src="/assets/imgs/serv-icons/4.png" alt="" />
              </div>
              <h5>Database Architecture</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">Backend</span>
                  <span className="tag">Database</span>
                </div>
                <p>
                  We design and optimize databases to ensure high performance, reliability, and clean data structure.
                </p>
              </div>
              <a href="/page-services-details" className="mt-40">
                <span className="ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item sub-bg">
              <div className="icon-img-60 opacity-5 mb-40">
                <img src="/assets/imgs/serv-icons/5.png" alt="" />
              </div>
              <h5>Server & Deployment Setup</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">Backend</span>
                  <span className="tag">DevOps</span>
                </div>
                <p>
                  We handle server configuration, deployment pipelines, and cloud infrastructure for smooth operations.
                </p>
              </div>
              <a href="/page-services-details" className="mt-40">
                <span className="ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
