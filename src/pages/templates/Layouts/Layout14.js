import React from "react";
import "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/styles/layouts/Layout14.css";

export default function Layout14({ data = {}, color = "#7c3aed" }) {
    const {
        name = "Your Name",
        title = "Software Engineer",
        email = "youremail@example.com",
        phone = "+91 98765 43210",
        address = "Ahmedabad, India",
        summary = "Innovative and detail-oriented software engineer passionate about building efficient web applications and improving user experience.",
        skills = [],
        education = [],
        experience = [],
        projects = [],
    } = data;

    // Helper to safely parse comma-separated or array data
    const parseList = (input) =>
        Array.isArray(input)
            ? input
            : input
                ?.split(",")
                .map((item) => item.trim())
                .filter(Boolean) || [];

    return (
        <div className="layout14" style={{ "--accent": color }}>
            <div className="left14">
                <div className="profile14">
                    <h1 style={{ color: "var(--accent)" }}>{name}</h1>
                    <h3>{title}</h3>
                </div>

                <div className="contact14">
                    <h2 style={{ color: "var(--accent)" }}>Contact</h2>
                    {email && <p>{email}</p>}
                    {phone && <p>{phone}</p>}
                    {address && <p>{address}</p>}
                </div>

                {parseList(skills).length > 0 && (
                    <div className="skills14">
                        <h2 style={{ color: "var(--accent)" }}>Skills</h2>
                        <ul>
                            {parseList(skills).map((skill, i) => (
                                <li key={i}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {education?.length > 0 && (
                    <div className="education14">
                        <h2 style={{ color: "var(--accent)" }}>Education</h2>
                        {education.map((edu, i) => (
                            <div key={i} className="edu-item14">
                                <h4>{edu.degree || "Degree"}</h4>
                                <p>{edu.institution || edu.institute || "Institute"}</p>
                                {edu.year && <span>{edu.year}</span>}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="right14">
                {summary && (
                    <section className="summary14">
                        <h2 style={{ color: "var(--accent)" }}>Profile Summary</h2>
                        <p>{summary}</p>
                    </section>
                )}

                {experience?.length > 0 && (
                    <section className="experience14">
                        <h2 style={{ color: "var(--accent)" }}>Experience</h2>
                        {experience.map((exp, i) => (
                            <div key={i} className="exp-item14">
                                <h4>{exp.position || exp.role || "Role"}</h4>
                                {exp.company && <p className="company14">{exp.company}</p>}
                                {exp.duration && <span>{exp.duration}</span>}
                                {exp.description && <p>{exp.description}</p>}
                            </div>
                        ))}
                    </section>
                )}

                {projects?.length > 0 && (
                    <section className="projects14">
                        <h2 style={{ color: "var(--accent)" }}>Projects</h2>
                        {projects.map((proj, i) => (
                            <div key={i} className="proj-item14">
                                <h4>{proj.title || proj.name || "Project Title"}</h4>
                                {proj.description && <p>{proj.description}</p>}
                            </div>
                        ))}
                    </section>
                )}
            </div>
        </div>
    );
}
