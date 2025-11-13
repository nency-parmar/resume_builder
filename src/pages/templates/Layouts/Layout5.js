// src/pages/templates/Layouts/Layout5.js
import React from "react";
import "../../../styles/layouts/Layout5.css";

export default function Layout5({ data = {}, color = "#00b894" }) {
    const {
        name = "Your Name",
        jobTitle = "Full Stack Developer",
        email = "email@example.com",
        phone = "+91 XXXXX XXXXX",
        address = "City, State, Country",
        linkedin = "linkedin.com/in/username",
        github = "github.com/username",
        portfolio = "yourportfolio.com",
        summary = "",
        skills = [],
        experience = [],
        education = [],
        projects = [],
        certificates = [],
        languages = [],
        achievements = [],
    } = data;

    // 🧠 Convert string values into list safely
    const parseList = (input) =>
        Array.isArray(input)
            ? input
            : input
                ?.split(",")
                .map((s) => s.trim())
                .filter(Boolean) || [];

    return (
        <div
            className="layout5-wrapper"
            style={{
                "--primary-color": color,
                "--accent-color": color,
            }}
        >
            {/* SIDEBAR */}
            <aside className="layout5-sidebar">
                <div className="profile">
                    <h1>{name}</h1>
                    {jobTitle && <p className="job">{jobTitle}</p>}
                </div>

                {(email || phone || address) && (
                    <div className="sidebar-section">
                        <h3>Contact</h3>
                        {email && <p>{email}</p>}
                        {phone && <p>{phone}</p>}
                        {address && <p>{address}</p>}
                    </div>
                )}

                {(linkedin || github || portfolio) && (
                    <div className="sidebar-section">
                        <h3>Links</h3>
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
                        {portfolio && (
                            <p>
                                <a href={`https://${portfolio}`} target="_blank" rel="noreferrer">
                                    {portfolio}
                                </a>
                            </p>
                        )}
                    </div>
                )}

                {parseList(skills).length > 0 && (
                    <div className="sidebar-section">
                        <h3>Skills</h3>
                        <ul>
                            {parseList(skills).map((s, idx) => (
                                <li key={idx}>{s}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {parseList(languages).length > 0 && (
                    <div className="sidebar-section">
                        <h3>Languages</h3>
                        <p>{parseList(languages).join(", ")}</p>
                    </div>
                )}
            </aside>

            {/* MAIN CONTENT */}
            <main className="layout5-main">
                {summary && (
                    <section>
                        <h2>Profile</h2>
                        <p>{summary}</p>
                    </section>
                )}

                {experience?.length > 0 && (
                    <section>
                        <h2>Experience</h2>
                        {experience.map((exp, idx) => (
                            <div key={idx} className="item">
                                <h4>{exp.position || "Position"}</h4>
                                <p className="sub">
                                    {exp.company || "Company"} {exp.duration ? `| ${exp.duration}` : ""}
                                </p>
                                <p>{exp.details || ""}</p>
                            </div>
                        ))}
                    </section>
                )}

                {projects?.length > 0 && (
                    <section>
                        <h2>Projects</h2>
                        {projects.map((proj, idx) => (
                            <div key={idx} className="item">
                                <h4>{proj.title || "Project Title"}</h4>
                                <p>{proj.description || ""}</p>
                            </div>
                        ))}
                    </section>
                )}

                {education?.length > 0 && (
                    <section>
                        <h2>Education</h2>
                        {education.map((edu, idx) => (
                            <div key={idx} className="item">
                                <h4>{edu.degree || "Degree"}</h4>
                                <p className="sub">
                                    {edu.institute || "Institute"} {edu.year ? `| ${edu.year}` : ""}
                                </p>
                            </div>
                        ))}
                    </section>
                )}

                {certificates?.length > 0 && (
                    <section>
                        <h2>Certificates</h2>
                        {certificates.map((cert, idx) => (
                            <p key={idx}>
                                {cert.title || "Certificate"}{" "}
                                {cert.issuer ? `— ${cert.issuer}` : ""}{" "}
                                {cert.year ? `(${cert.year})` : ""}
                            </p>
                        ))}
                    </section>
                )}

                {parseList(achievements).length > 0 && (
                    <section>
                        <h2>Achievements</h2>
                        <ul>
                            {parseList(achievements).map((a, idx) => (
                                <li key={idx}>{a}</li>
                            ))}
                        </ul>
                    </section>
                )}
            </main>
        </div>
    );
}
