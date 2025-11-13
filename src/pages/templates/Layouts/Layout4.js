// src/pages/templates/Layouts/Layout4.js
import React from "react";
import "../../../styles/layouts/Layout4.css";

export default function Layout4({ data = {}, color = "#007bff" }) {
    const {
        name = "Your Name",
        jobTitle = "Software Engineer",
        email = "email@example.com",
        phone = "+91 XXXXX XXXXX",
        address = "City, State, Country",
        linkedin = "linkedin.com/in/username",
        github = "github.com/username",
        summary = "",
        skills = [],
        education = [],
        experience = [],
        projects = [],
        languages = [],
        achievements = [],
    } = data;

    // ✅ Handle both string or array safely
    const parseList = (input) =>
        Array.isArray(input)
            ? input
            : input
                ?.split(",")
                .map((s) => s.trim())
                .filter(Boolean) || [];

    return (
        <div
            className="layout4-container"
            style={{
                "--primary-color": color,
                "--heading-color": color,
            }}
        >
            {/* HEADER */}
            <header className="header">
                <div>
                    <h1>{name}</h1>
                    {jobTitle && <h2>{jobTitle}</h2>}
                </div>
                <div className="contact">
                    {email && <p>{email}</p>}
                    {phone && <p>{phone}</p>}
                    {linkedin && (
                        <p>
                            <a href={`https://${linkedin}`} target="_blank" rel="noreferrer">
                                {linkedin}
                            </a>
                        </p>
                    )}
                    {github && (
                        <p>
                            <a href={`https://${github}`} target="_blank" rel="noreferrer">
                                {github}
                            </a>
                        </p>
                    )}
                </div>
            </header>

            {/* SUMMARY */}
            {summary && (
                <section>
                    <h3>Profile Summary</h3>
                    <p>{summary}</p>
                </section>
            )}

            {/* EXPERIENCE */}
            {experience?.length > 0 && (
                <section>
                    <h3>Experience</h3>
                    {experience.map((exp, idx) => (
                        <div key={idx} className="info-block">
                            <h4>{exp.position || "Position"}</h4>
                            <p className="sub">
                                {exp.company || "Company"} | {exp.duration || ""}
                            </p>
                            <p>{exp.details || ""}</p>
                        </div>
                    ))}
                </section>
            )}

            {/* PROJECTS */}
            {projects?.length > 0 && (
                <section>
                    <h3>Projects</h3>
                    {projects.map((proj, idx) => (
                        <div key={idx} className="info-block">
                            <h4>{proj.title || "Project Title"}</h4>
                            <p className="sub">{proj.tech || ""}</p>
                            <p>{proj.description || ""}</p>
                        </div>
                    ))}
                </section>
            )}

            {/* EDUCATION */}
            {education?.length > 0 && (
                <section>
                    <h3>Education</h3>
                    {education.map((edu, idx) => (
                        <div key={idx} className="info-block">
                            <h4>{edu.degree || "Degree"}</h4>
                            <p className="sub">
                                {edu.college || "College"} | {edu.year || ""}
                            </p>
                        </div>
                    ))}
                </section>
            )}

            {/* SKILLS, ACHIEVEMENTS, LANGUAGES */}
            {(skills?.length > 0 || achievements?.length > 0 || languages?.length > 0) && (
                <div className="two-col">
                    {skills?.length > 0 && (
                        <div>
                            <h3>Skills</h3>
                            <ul>
                                {parseList(skills).map((skill, idx) => (
                                    <li key={idx}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {(achievements?.length > 0 || languages?.length > 0) && (
                        <div>
                            {achievements?.length > 0 && (
                                <>
                                    <h3>Achievements</h3>
                                    <ul>
                                        {parseList(achievements).map((ach, idx) => (
                                            <li key={idx}>{ach}</li>
                                        ))}
                                    </ul>
                                </>
                            )}

                            {languages?.length > 0 && (
                                <>
                                    <h3>Languages</h3>
                                    <ul>
                                        {parseList(languages).map((lang, idx) => (
                                            <li key={idx}>{lang}</li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                    )}
                </div>
            )}

            {/* FOOTER */}
            {address && (
                <footer className="footer">
                    <p>{address}</p>
                </footer>
            )}
        </div>
    );
}
