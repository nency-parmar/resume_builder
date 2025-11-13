// src/pages/templates/Layouts/Layout1.js
import React from "react";
import "../../../styles/layouts/Layout1.css"; // ✅ relative import for portability

export default function Layout1({ data = {}, color = "#7b2ff7" }) {
    const {
        name = "Your Name",
        email = "email@example.com",
        phone = "+91 XXXXX XXXXX",
        address = "City, State, Country",
        linkedin = "linkedin.com/in/username",
        github = "github.com/username",
        workExperience = "",
        education = "",
        technicalSkills = [],
        languagesKnown = [],
        hobbies = [],
        projects = [],
        certificates = [],
        strength = "",
        weakness = "",
    } = data;

    // 🧠 Convert string fields to arrays when needed
    const parseList = (input) =>
        Array.isArray(input)
            ? input
            : input
                ?.split(",")
                .map((s) => s.trim())
                .filter(Boolean) || [];

    return (
        <div className="layout1-wrapper" style={{ "--primary-color": color, "--section-heading-color": color }}>
            {/* LEFT SIDEBAR */}
            <aside className="layout1-sidebar">
                <div className="sidebar-header">
                    <h1>{name}</h1>
                </div>

                <div className="sidebar-section">
                    <h4>Contact</h4>
                    <p>{email}</p>
                    <p>{phone}</p>
                    <p>{address}</p>
                </div>

                <div className="sidebar-section">
                    <h4>Links</h4>
                    {linkedin && (
                        <p>
                            <a href={`https://${linkedin}`} target="_blank" rel="noreferrer">
                                LinkedIn
                            </a>
                        </p>
                    )}
                    {github && (
                        <p>
                            <a href={`https://${github}`} target="_blank" rel="noreferrer">
                                GitHub
                            </a>
                        </p>
                    )}
                </div>

                <div className="sidebar-section">
                    <h4>Skills</h4>
                    <ul>
                        {parseList(technicalSkills).map((s, i) => (
                            <li key={i}>{s}</li>
                        ))}
                    </ul>
                </div>

                <div className="sidebar-section">
                    <h4>Languages</h4>
                    <ul>
                        {parseList(languagesKnown).map((lang, i) => (
                            <li key={i}>{lang}</li>
                        ))}
                    </ul>
                </div>

                <div className="sidebar-section">
                    <h4>Hobbies</h4>
                    <ul>
                        {parseList(hobbies).map((h, i) => (
                            <li key={i}>{h}</li>
                        ))}
                    </ul>
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="layout1-main">
                {workExperience && (
                    <section className="section">
                        <h2>Work Experience</h2>
                        <p>{workExperience}</p>
                    </section>
                )}

                {education && (
                    <section className="section">
                        <h2>Education</h2>
                        <p>{education}</p>
                    </section>
                )}

                {projects.length > 0 && (
                    <section className="section">
                        <h2>Projects</h2>
                        <ul>
                            {parseList(projects).map((p, i) => (
                                <li key={i}>{p}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {certificates.length > 0 && (
                    <section className="section">
                        <h2>Certificates</h2>
                        <ul>
                            {parseList(certificates).map((c, i) => (
                                <li key={i}>{c}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {(strength || weakness) && (
                    <section className="section">
                        <h2>Personality</h2>
                        {strength && <p><strong>Strength:</strong> {strength}</p>}
                        {weakness && <p><strong>Weakness:</strong> {weakness}</p>}
                    </section>
                )}
            </main>
        </div>
    );
}
