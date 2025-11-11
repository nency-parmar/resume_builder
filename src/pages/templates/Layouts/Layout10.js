// components/templates/Layout10.js
import React from "react";
import "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/styles/layouts/Layout10.css";

export default function Layout10({ data = {}, selectedColor = "#34495e" }) {
    const {
        name = "Your Name",
        title = "Software Engineer",
        email = "email@example.com",
        phone = "+91 XXXXX XXXXX",
        address = "City, State, Country",
        linkedin = "linkedin.com/in/username",
        github = "github.com/username",
        summary = "Innovative developer passionate about crafting scalable applications and delivering impactful solutions.",
        skills = [],
        education = [],
        experience = [],
        projects = [],
        achievements = [],
    } = data;

    return (
        <div className="layout10-container">
            <header
                className="layout10-header"
                style={{ backgroundColor: selectedColor }}
            >
                <h1>{name}</h1>
                <h3>{title}</h3>
            </header>

            <section className="layout10-contact">
                <p>{email}</p>
                <p>{phone}</p>
                <p>{address}</p>
                <p>{linkedin}</p>
                <p>{github}</p>
            </section>

            <section className="layout10-summary">
                <h4 style={{ color: selectedColor }}>Profile Summary</h4>
                <p>{summary}</p>
            </section>

            <section className="layout10-experience">
                <h4 style={{ color: selectedColor }}>Experience</h4>
                {experience.length
                    ? experience.map((exp, i) => (
                        <div key={i} className="exp-item">
                            <div className="exp-title">
                                <h5>{exp.role}</h5>
                                <span>{exp.duration}</span>
                            </div>
                            <p className="exp-company">{exp.company}</p>
                            <p className="exp-desc">{exp.description}</p>
                        </div>
                    ))
                    : [
                        {
                            role: "Frontend Developer",
                            company: "ABC Pvt. Ltd.",
                            duration: "Jan 2024 - Present",
                            description:
                                "Built reusable React components and optimized UI for performance.",
                        },
                    ].map((exp, i) => (
                        <div key={i} className="exp-item">
                            <div className="exp-title">
                                <h5>{exp.role}</h5>
                                <span>{exp.duration}</span>
                            </div>
                            <p className="exp-company">{exp.company}</p>
                            <p className="exp-desc">{exp.description}</p>
                        </div>
                    ))}
            </section>

            <section className="layout10-education">
                <h4 style={{ color: selectedColor }}>Education</h4>
                {education.length
                    ? education.map((edu, i) => (
                        <div key={i} className="edu-item">
                            <div className="edu-title">
                                <h5>{edu.degree}</h5>
                                <span>{edu.year}</span>
                            </div>
                            <p>{edu.institute}</p>
                        </div>
                    ))
                    : [
                        {
                            degree: "B.Tech in Computer Science",
                            institute: "Darshan University",
                            year: "2022 - 2026",
                        },
                    ].map((edu, i) => (
                        <div key={i} className="edu-item">
                            <div className="edu-title">
                                <h5>{edu.degree}</h5>
                                <span>{edu.year}</span>
                            </div>
                            <p>{edu.institute}</p>
                        </div>
                    ))}
            </section>

            <section className="layout10-skills">
                <h4 style={{ color: selectedColor }}>Skills</h4>
                <ul>
                    {skills.length
                        ? skills.map((s, i) => <li key={i}>{s}</li>)
                        : [
                            "React.js",
                            "Node.js",
                            "MongoDB",
                            "Express",
                            "HTML5",
                            "CSS3",
                        ].map((s, i) => (
                            <li key={i}>{s}</li>
                        ))}
                </ul>
            </section>

            <section className="layout10-projects">
                <h4 style={{ color: selectedColor }}>Projects</h4>
                {projects.length
                    ? projects.map((proj, i) => (
                        <div key={i} className="proj-item">
                            <h5>{proj.name}</h5>
                            <p>{proj.description}</p>
                        </div>
                    ))
                    : [
                        {
                            name: "BuildMyResume App",
                            description:
                                "Created an ATS-friendly resume builder with multiple templates and PDF export.",
                        },
                    ].map((proj, i) => (
                        <div key={i} className="proj-item">
                            <h5>{proj.name}</h5>
                            <p>{proj.description}</p>
                        </div>
                    ))}
            </section>

            <section className="layout10-achievements">
                <h4 style={{ color: selectedColor }}>Achievements</h4>
                <ul>
                    {achievements.length
                        ? achievements.map((a, i) => <li key={i}>{a}</li>)
                        : ["Best Coder Award 2024", "Published 2 Web Dev Articles"].map(
                            (a, i) => <li key={i}>{a}</li>
                        )}
                </ul>
            </section>
        </div>
    );
}
