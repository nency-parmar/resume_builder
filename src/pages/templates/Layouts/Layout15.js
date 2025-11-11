import React from "react";
import "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/styles/layouts/Layout15.css";

export default function Layout15({ data = {}, color = "#7c3aed" }) {
    const {
        name = "Your Name",
        title = "Software Engineer",
        email = "youremail@example.com",
        phone = "+91 98765 43210",
        address = "Ahmedabad, India",
        summary = "Motivated software engineer passionate about building innovative and scalable web applications. Dedicated to writing clean code and delivering seamless user experiences.",
        skills = ["React.js", "Node.js", "Java", "MongoDB", "Flutter"],
        education = [
            {
                degree: "B.Tech in Computer Science",
                institution: "Darshan University",
                year: "2025",
            },
        ],
        experience = [
            {
                company: "Tech Solutions Pvt. Ltd.",
                position: "Frontend Developer Intern",
                duration: "May 2024 - Nov 2024",
                description:
                    "Developed modular React components, improved API integration performance, and optimized UI responsiveness.",
            },
        ],
        projects = [
            {
                title: "Expense Tracker App",
                description:
                    "Built a personal finance tracker using React and Firebase, allowing users to monitor spending patterns and budget goals.",
            },
        ],
    } = data;

    return (
        <div className="layout15" style={{ "--accent": color }}>
            <header className="header15">
                <h1>{name}</h1>
                <h3>{title}</h3>
                <div className="contact15">
                    <span>{email}</span> | <span>{phone}</span> | <span>{address}</span>
                </div>
            </header>

            <section className="summary15">
                <h2>Professional Summary</h2>
                <p>{summary}</p>
            </section>

            <section className="skills15">
                <h2>Technical Skills</h2>
                <div className="skill-grid15">
                    {skills.map((skill, i) => (
                        <span key={i} className="skill-tag15">
                            {skill}
                        </span>
                    ))}
                </div>
            </section>

            <section className="experience15">
                <h2>Experience</h2>
                {experience.map((exp, i) => (
                    <div key={i} className="exp-item15">
                        <h4>{exp.position}</h4>
                        <p className="company15">
                            {exp.company} <span>• {exp.duration}</span>
                        </p>
                        <p>{exp.description}</p>
                    </div>
                ))}
            </section>

            <section className="projects15">
                <h2>Projects</h2>
                {projects.map((proj, i) => (
                    <div key={i} className="proj-item15">
                        <h4>{proj.title}</h4>
                        <p>{proj.description}</p>
                    </div>
                ))}
            </section>

            <section className="education15">
                <h2>Education</h2>
                {education.map((edu, i) => (
                    <div key={i} className="edu-item15">
                        <h4>{edu.degree}</h4>
                        <p>
                            {edu.institution} • <span>{edu.year}</span>
                        </p>
                    </div>
                ))}
            </section>
        </div>
    );
}
