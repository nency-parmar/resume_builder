import React from "react";
import "../../../styles/layouts/Layout2.css";

export default function Layout2({ data = {}, color = "#2c3e50" }) {
    const {
        name = "Your Name",
        jobTitle = "Web Developer",
        email = "email@example.com",
        phone = "+91 XXXXX XXXXX",
        address = "City, State, Country",
        linkedin = "linkedin.com/in/username",
        github = "github.com/username",
        portfolio = "yourportfolio.com",
        summary = "A passionate developer eager to learn, build, and innovate.",
        technicalSkills = [],
        education = [],
        experience = [],
        projects = [],
        languagesKnown = [],
        achievements = [],
    } = data;

    // ✅ Helper — ensures both array or string inputs work safely
    const parseList = (val) =>
        Array.isArray(val)
            ? val
            : val
                ? val.split(",").map((v) => v.trim()).filter(Boolean)
                : [];

    // ✅ Helper — ensures complex sections like education/experience are always arrays
    const safeArray = (val) => (Array.isArray(val) ? val : parseList(val));

    return (
        <div
            className="layout2-wrapper"
            style={{ "--primary-color": color, "--section-heading-color": color }}
        >
            {/* LEFT PANEL */}
            <div className="left-section" style={{ borderRight: `2px solid ${color}` }}>
                <div className="profile">
                    <h1 style={{ color }}>{name}</h1>
                    <h2 style={{ color }}>{jobTitle}</h2>
                </div>

                <div className="contact">
                    <h3 style={{ color, borderBottom: `2px solid ${color}` }}>Contact</h3>
                    <p>📧 {email}</p>
                    <p>📞 {phone}</p>
                    <p>📍 {address}</p>
                    {linkedin && <p>🔗 {linkedin}</p>}
                    {github && <p>💻 {github}</p>}
                    {portfolio && <p>🌐 {portfolio}</p>}
                </div>

                {parseList(technicalSkills).length > 0 && (
                    <div className="skills">
                        <h3 style={{ color, borderBottom: `2px solid ${color}` }}>Skills</h3>
                        <ul>
                            {parseList(technicalSkills).map((skill, idx) => (
                                <li key={idx}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {parseList(languagesKnown).length > 0 && (
                    <div className="languages">
                        <h3 style={{ color, borderBottom: `2px solid ${color}` }}>Languages</h3>
                        <ul>
                            {parseList(languagesKnown).map((lang, idx) => (
                                <li key={idx}>{lang}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {parseList(achievements).length > 0 && (
                    <div className="achievements">
                        <h3 style={{ color, borderBottom: `2px solid ${color}` }}>Achievements</h3>
                        <ul>
                            {parseList(achievements).map((ach, idx) => (
                                <li key={idx}>{ach}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* RIGHT PANEL */}
            <div className="right-section">
                {summary && (
                    <div className="summary">
                        <h3 style={{ color, borderBottom: `2px solid ${color}` }}>Profile Summary</h3>
                        <p>{summary}</p>
                    </div>
                )}

                {/* ✅ Safe mapping for Experience */}
                {safeArray(experience).length > 0 && (
                    <div className="experience">
                        <h3 style={{ color, borderBottom: `2px solid ${color}` }}>Experience</h3>
                        {safeArray(experience).map((exp, idx) => (
                            <div key={idx} className="section-item">
                                <h4>
                                    {exp.position || exp.title || "Position"} —{" "}
                                    {exp.company || "Company"}
                                </h4>
                                {exp.duration && <p className="duration">{exp.duration}</p>}
                                <p>{exp.details || exp.description || exp}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* ✅ Safe mapping for Education */}
                {safeArray(education).length > 0 && (
                    <div className="education">
                        <h3 style={{ color, borderBottom: `2px solid ${color}` }}>Education</h3>
                        {safeArray(education).map((edu, idx) => (
                            <div key={idx} className="section-item">
                                <h4>{edu.degree || edu}</h4>
                                <p>{edu.college || edu.institute || ""}</p>
                                {edu.year && <p className="duration">{edu.year}</p>}
                            </div>
                        ))}
                    </div>
                )}

                {/* ✅ Safe mapping for Projects */}
                {safeArray(projects).length > 0 && (
                    <div className="projects">
                        <h3 style={{ color, borderBottom: `2px solid ${color}` }}>Projects</h3>
                        {safeArray(projects).map((proj, idx) => (
                            <div key={idx} className="section-item">
                                <h4>{proj.title || proj}</h4>
                                {proj.tech && <p className="tech">{proj.tech}</p>}
                                <p>{proj.description || proj}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
