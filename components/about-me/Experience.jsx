import React from 'react';

const Experience = () => {
  return (
    <div className="experience-container">
      <style>{`
        .experience-container {
          padding: 20px;
        }

        .section-title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
          color: #1a1a1a;
        }

        .timeline {
          position: relative;
          border-left: 2px solid #e5e7eb;
          margin: 0 8px;
          padding: 0;
          list-style: none;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 40px;
          margin-left: 16px;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-dot {
          position: absolute;
          width: 12px;
          height: 12px;
          background-color: #323443;
          border-radius: 50%;
          margin-top: 6px;
          left: -22px;
          border: 2px solid white;
        }

        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 4px;
        }

        .company-name {
          font-size: 18px;
          font-weight: 600;
          color: #111827;
        }

        .date {
          font-size: 14px;
          font-weight: 400;
          color: #9ca3af;
        }

        .position {
          margin-bottom: 4px;
          font-size: 14px;
          font-weight: 400;
          color: #9ca3af;
        }

        .description {
          margin-bottom: 16px;
          font-size: 16px;
          font-weight: 400;
          color: #6b7280;
          line-height: 1.5;
        }

        .description-short {
          margin-bottom: 8px;
        }

        .responsibilities {
          padding-left: 16px;
          list-style: disc;
          margin: 0;
        }

        .responsibility-item {
          font-size: 16px;
          font-weight: 400;
          color: #6b7280;
          line-height: 1.5;
        }

        .sub-position {
          margin-top: 20px;
        }
      `}</style>

      <h2 className="section-title">Experience</h2>

      <ol className="timeline">                  
        <li className="timeline-item">
          <div className="timeline-dot"></div>
          
          <div className="timeline-header">
            <h3 className="company-name">Kejar.id</h3>
            <time className="date">Jan 2021 - Mar 2021</time>
          </div>
          <p className="position">Web Developer - Internship</p>
          
          <p className="description">
            Kejar.id provides learning content, learning management systems (LMS), 
            and educational information systems for schools with a complete, 
            measurable, and monitored philosophy.
          </p>
        </li>

        <li className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-header">
            <h3 className="company-name">PT. Agatra Kreasi Teknologi</h3>
            <time className="date">Aug 2021 - Nov 2021</time>
          </div>
          <p className="position">Backend Web Developer - Internship</p>

          <p className="description description-short">
            Agatra is one of the few IT system integration, professional service 
            and software development companies in Bandung.
          </p>
          <ul className="responsibilities">
            <li className="responsibility-item">
              Build Restful API using Yii2 for PT Agatra Kreasi Teknologi's Company Profile
            </li>
            <li className="responsibility-item">
              Build Admin Page using Angular for PT Agatra Kreasi Teknologi's Company Profile
            </li>
          </ul>
        </li>

        <li className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-header">
            <h3 className="company-name">PT. Teknologi Inovasi Mandiri</h3>
            <time className="date">Jul 2022 - Sep 2022</time>
          </div>
          <p className="position">Web Developer - Bootcamp</p>

          <p className="description description-short">
            PT Technology Inovasi Mandiri (TIM) is a system integrator company 
            with high dedication and technical know-how. With various backgrounds 
            in the IT industry, system integrators and IT consultants, our people 
            have deep experience in the world of information technology.
          </p>
          <ul className="responsibilities">
            <li className="responsibility-item">
              Learning about Spring boot and working on some internal and external projects
            </li>
          </ul>

          <div className="sub-position">
            <div className="timeline-header">
              <p className="position">Web Developer - Contract</p>
              <time className="date">Sep 2022 - Dec 2022</time>
            </div>
            <ul className="responsibilities">
              <li className="responsibility-item">
                Working on projects using spring boot, spring mvc, laravel, etc
              </li>
            </ul>
          </div>

          <div className="sub-position">
            <div className="timeline-header">
              <p className="position">Web Developer - Fulltime</p>
              <time className="date">Dec 2022 - Present</time>
            </div>
            <ul className="responsibilities">
              <li className="responsibility-item">
                Working on projects using spring boot, spring mvc, laravel, etc
              </li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Experience;