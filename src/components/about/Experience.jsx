import React from "react";

const experienceContent = [
    {
        year: "2024 - Present",
        position: "Front End Developer",
        company: "Harmony",
        details: `Front end developer of compony projects`,
    },
    {
        year: "2021 - 2024",
        position: "Full Stack Developer",
        company: "Sakhtbazar",
        details: `IT Head and project manager`,
    },
    {
        year: "2021 - 2024",
        position: "Full Stack Developer",
        company: "AronGroups",
        details: `Front and back end programmer and maintenance of designed platforms`,
    },
    {
        year: "   2018",
        position: " PHP programmer",
        company: "Sabinserver",
        details: `  Intern of Designing and programming WordPress templates and content writing in the field of hosting`,
    },
];

const Experience = () => {
    return (
        <ul>
            {experienceContent.map((val, i) => (
                <li key={i}>
                    <div className="icon">
                        <i className="fa fa-briefcase"></i>
                    </div>
                    <span className="time open-sans-font text-uppercase">{val.year}</span>
                    <h5 className="poppins-font text-uppercase">
                        {val.position}
                        <span className="place open-sans-font">{val.company}</span>
                    </h5>
                    <p className="open-sans-font">{val.details}</p>
                </li>
            ))}
        </ul>
    );
};

export default Experience;
