import React from "react";
import "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/styles/layouts/Layout5.css";

export default function Layout5({ data = {} }) {
    const {
        name = "Your Name",
        jobTitle = "Full Stack Developer",
        email = "email@example.com",
        phone = "+91 XXXXX XXXXX",
        address = "City, State, Country",
        linkedin = "linkedin.com/in/username",
        github = "github.com/username",
        portfolio = "yourportfolio.com",
        summary = "Creative and detail-oriented developer with strong expertise in React, Node.js, and REST APIs.",
        skills = ["React", "Node.js", "JavaScript", "MongoDB", "Git", "CSS"],
        experience = [
            {
                position: "Web Developer Intern",
                company: "TechStudio Pvt Ltd",
                duration: "Jan 2024 - May 2024",
                details:
                    "Collaborated with designers and backend developers to build responsive web apps with React.",
            },
        ],
        education = [
            { degree: "B.Tech in Computer Engineering", institute: "Darshan University", year: "2025" },
        ],
        projects = [
            {
                title: "BuildMyResume",
                description:
                    "Developed a resume builder web app with live preview and dynamic template switching.",
            },
        ],
        certificates = [
            { title: "React Developer Certification", issuer: "Udemy", year: "2024" },
        ],
        languages = ["English", "Hindi", "Gujarati"],
        achievements = ["Top Performer Intern 2024", "Built 5+ production-level projects"],
    } = data;

    return (
        <div className="layout5-wrapper">
            {/* Sidebar */}
            <aside className="layout5-sidebar">
                <div className="profile">
                    <h1>{name}</h1>
                    <p className="job">{jobTitle}</p>
                </div>

                <div className="sidebar-section">
                    <h3>Contact</h3>
                    <p>{email}</p>
                    <p>{phone}</p>
                    <p>{address}</p>
                </div>

                <div className="sidebar-section">
                    <h3>Links</h3>
                    <p>{linkedin}</p>
                    <p>{github}</p>
                    <p>{portfolio}</p>
                </div>

                <div className="sidebar-section">
                    <h3>Skills</h3>
                    <ul>
                        {skills.map((s, idx) => (
                            <li key={idx}>{s}</li>
                        ))}
                    </ul>
                </div>

                <div className="sidebar-section">
                    <h3>Languages</h3>
                    <p>{languages.join(", ")}</p>
                </div>
            </aside>

            {/* Main Content */}
            <main className="layout5-main">
                <section>
                    <h2>Profile</h2>
                    <p>{summary}</p>
                </section>

                <section>
                    <h2>Experience</h2>
                    {experience.map((exp, idx) => (
                        <div key={idx} className="item">
                            <h4>{exp.position}</h4>
                            <p className="sub">
                                {exp.company} | {exp.duration}
                            </p>
                            <p>{exp.details}</p>
                        </div>
                    ))}
                </section>

                <section>
                    <h2>Projects</h2>
                    {projects.map((proj, idx) => (
                        <div key={idx} className="item">
                            <h4>{proj.title}</h4>
                            <p>{proj.description}</p>
                        </div>
                    ))}
                </section>

                <section>
                    <h2>Education</h2>
                    {education.map((edu, idx) => (
                        <div key={idx} className="item">
                            <h4>{edu.degree}</h4>
                            <p className="sub">
                                {edu.institute} | {edu.year}
                            </p>
                        </div>
                    ))}
                </section>

                <section>
                    <h2>Certificates</h2>
                    {certificates.map((cert, idx) => (
                        <p key={idx}>
                            {cert.title} — {cert.issuer} ({cert.year})
                        </p>
                    ))}
                </section>

                <section>
                    <h2>Achievements</h2>
                    <ul>
                        {achievements.map((a, idx) => (
                            <li key={idx}>{a}</li>
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    );
}
