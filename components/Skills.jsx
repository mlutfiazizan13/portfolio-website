import React from 'react';

const skills = [
  {
    name: 'Java',
    type: 'Programming Language',
    image: '/assets/imgs/tech/java.png',
  },
  {
    name: 'PHP',
    type: 'Programming Language',
    image: '/assets/imgs/tech/php.png',
  },
  {
    name: 'Javascript',
    type: 'Programming Language',
    image: '/assets/imgs/tech/js.png',
  },
  {
    name: 'Kotlin',
    type: 'Programming Language',
    image: '/assets/imgs/tech/kotlin.png',
  },
  {
    name: 'Python',
    type: 'Programming Language',
    image: '/assets/imgs/tech/python.png',
  },
    {
    name: 'Golang',
    type: 'Programming Language',
    image: '/assets/imgs/tech/golang.png',
  },
  {
    name: 'Laravel',
    type: 'Framework',
    image: '/assets/imgs/tech/laravel.png',
  },
  {
    name: 'Spring Boot',
    type: 'Framework',
    image: '/assets/imgs/tech/spring-boot.png',
  },
    {
    name: 'Quarkus',
    type: 'Framework',
    image: '/assets/imgs/tech/quarkus.png',
  },
      {
    name: 'Express',
    type: 'Framework',
    image: '/assets/imgs/tech/express.png',
  },
  {
    name: 'React',
    type: 'Library',
    image: '/assets/imgs/tech/react.png',
  },
];

function Skills() {
  return (
    <section className="my-skills section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="sec-head text-center mb-80">
              <h3>
                We&apos;re proud to work with <br />a
                <span className="opacity-7">diverse range of companies.</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row md-marg">
          {skills.map((skill) => (
            <div key={skill.name} className="col-lg-2 col-md-4 col-6">
              <div className="item mb-30">
                <div className="box-bord">
                  <div className="img">
                    <img src={skill.image} alt={skill.name} />
                  </div>
                </div>
                <h6 className="fz-18">{skill.name}</h6>
                <p className="fz-14 opacity-7 mb-0">{skill.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
