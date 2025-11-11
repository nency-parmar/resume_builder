// components/templates/Layout12.js
import React from "react";
import "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/styles/layouts/Layout12.css";

export default function Layout12({ data = {}, selectedColor = "#7c3aed" }) {
    const {
        name = "Your Name",
        title = "UI/UX Designer & Frontend Developer",
        email = "email@example.com",
        phone = "+91 XXXXX XXXXX",
        address = "Ahmedabad, Gujarat, India",
        linkedin = "linkedin.com/in/username",
        github = "github.com/username",
        summary = "Creative and detail-oriented designer and developer with a passion for building visually stunning, user-centered digital experiences.",
        skills = [],
        education = [],
        experience = [],
        projects = [],
        achievements = [],
        photo = "https://via.placeholder.com/150",
    } = data;

    return (
        <div className="layout12-container">
            {/* Left Sidebar */}
            <aside
                className="layout12-sidebar"
                style={{ backgroundColor: selectedColor }}
            >
                <div className="profile-photo">
                    <img src={photo} alt="Profile" />
                </div>

                <div className="sidebar-content">
                    <h2>Contact</h2>
                    <p>{email}</p>
                    <p>{phone}</p>
                    <p>{address}</p>

                    <h2>Links</h2>
                    <p>{linkedin}</p>
                    <p>{github}</p>

                    <h2>Skills</h2>
                    <ul>
                        {(skills.length
                            ? skills
                            : ["React", "Figma", "Node.js", "Tailwind", "JavaScript"]
                        ).map((s, i) => (
                            <li key={i}>{s}</li>
                        ))}
                    </ul>
                </div>
            </aside>

            {/* Right Content Area */}
            <main className="layout12-main">
                <header>
                    <h1 style={{ color: selectedColor }}>{name}</h1>
                    <h3>{title}</h3>
                    <p className="summary">{summary}</p>
                </header>

                {/* Experience */}
                <section>
                    <h2 style={{ color: selectedColor }}>Experience</h2>
                    {experience.length
                        ? experience.map((exp, i) => (
                            <div key={i} className="exp-item">
                                <h4>{exp.role}</h4>
                                <p className="company">{exp.company}</p>
                                <span className="duration">{exp.duration}</span>
                                <p className="desc">{exp.description}</p>
                            </div>
                        ))
                        : [
                            {
                                role: "Frontend Developer Intern",
                                company: "Creative Labs Pvt. Ltd.",
                                duration: "May 2024 - July 2024",
                                description:
                                    "Designed UI layouts and implemented responsive web components using React and Tailwind.",
                            },
                        ].map((exp, i) => (
                            <div key={i} className="exp-item">
                                <h4>{exp.role}</h4>
                                <p className="company">{exp.company}</p>
                                <span className="duration">{exp.duration}</span>
                                <p className="desc">{exp.description}</p>
                            </div>
                        ))}
                </section>

                {/* Education */}
                <section>
                    <h2 style={{ color: selectedColor }}>Education</h2>
                    {(education.length
                        ? education
                        : [
                            {
                                degree: "B.Tech in Computer Science",
                                institute: "Darshan University",
                                year: "2022 - 2026",
                            },
                        ]
                    ).map((edu, i) => (
                        <div key={i} className="edu-item">
                            <h4>{edu.degree}</h4>
                            <p>{edu.institute}</p>
                            <span>{edu.year}</span>
                        </div>
                    ))}
                </section>

                {/* Projects */}
                <section>
                    <h2 style={{ color: selectedColor }}>Projects</h2>
                    {(projects.length
                        ? projects
                        : [
                            {
                                name: "BuildMyResume",
                                description:
                                    "Developed an ATS-friendly Resume Builder with multiple dynamic templates and customizable color themes.",
                            },
                        ]
                    ).map((proj, i) => (
                        <div key={i} className="proj-item">
                            <h4>{proj.name}</h4>
                            <p>{proj.description}</p>
                        </div>
                    ))}
                </section>

                {/* Achievements */}
                <section>
                    <h2 style={{ color: selectedColor }}>Achievements</h2>
                    <ul>
                        {(achievements.length
                            ? achievements
                            : ["Best UI Design Award 2024", "Top 10 in Hackathon at DU"]
                        ).map((a, i) => (
                            <li key={i}>{a}</li>
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    );
}
