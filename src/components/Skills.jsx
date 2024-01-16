import React from "react";

const Skills = () => {
  const skills = [
    { logo: "logo-html5", level: "HTML", count: 86 },
    { logo: "logo-html5", level: "CSS", count: 86 },
    { logo: "logo-javascript", level: "JavaScript", count: 86 },
    { logo: "logo-python", level: "Python", count: 90 },
    { logo: "logo-nodejs", level: "Node Js", count: 40 },
    { logo: "logo-react", level: "React", count: 80 },
    { logo: "logo-.net", level: ".NET", count: 80 },
    { logo: "logo-postgreSql", level: "Postgree SQL", count: 80 },
  ];

  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="w-full md:w-1/2 lg:w-1/5 p-4"
            >
              <div
                className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[15rem] bg-gray-900 p-12 rounded-xl"
              >
                <div
                  style={{
                    background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                  }}
                  className="w-32 h-32 flex items-center justify-center rounded-full"
                >
                  <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                    <ion-icon name={skill.logo}></ion-icon>
                  </div>
                </div>
                <p className="text-xl mt-3">{skill.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
