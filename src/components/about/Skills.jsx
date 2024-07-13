import React from "react";

const skillsContent = [
  { skillClass: "p100", skillPercent: "100", skillName: "HTML/CSS" },
  { skillClass: "p97", skillPercent: "97", skillName: "JAVASCRIPT" },
  { skillClass: "p90", skillPercent: "90", skillName: "PHP" },
  { skillClass: "p95", skillPercent: "95", skillName: "WORDPRESS" },
  { skillClass: "p97", skillPercent: "97", skillName: "NEXT JS" },
  { skillClass: "p100", skillPercent: "100", skillName: "TAILWINDCSS" },
  { skillClass: "p65", skillPercent: "65", skillName: "PYTHON" },
  { skillClass: "p90", skillPercent: "90", skillName: "LARAVEL" },
  { skillClass: "p100", skillPercent: "100", skillName: "TAILWINDCSS" },
  { skillClass: "p100", skillPercent: "100", skillName: "BOOTSTRAP" },
  { skillClass: "p100", skillPercent: "100", skillName: "Material UI" },
  { skillClass: "p100", skillPercent: "100", skillName: "Mantine UI" },
  { skillClass: "p90", skillPercent: "90", skillName: "Ant Design" },
  { skillClass: "p90", skillPercent: "90", skillName: "React Native" },
  { skillClass: "p50", skillPercent: "50", skillName: "Rust" },
  { skillClass: "p30", skillPercent: "30", skillName: "UE5" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
