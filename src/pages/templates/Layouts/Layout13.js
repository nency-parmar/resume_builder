import React from "react";
import "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/styles/layouts/Layout13.css";

export default function Layout13({ data = {}, color = "#7c3aed" }) {
    const {
        name = "Your Name",
        title = "Full Stack Developer",
        email = "youremail@example.com",
        phone = "+91 98765 43210",
        address = "Ahmedabad, India",
        summary = "Passionate developer skilled in creating responsive web applications and solving real-world problems.",
        skills = ["JavaScript", "React", "Node.js", "MongoDB", "Flutter"],
        education = [
            {
                degree: "B.Tech in Computer Science",
                institution: "Darshan University",
                year: "2025",
            },
        ],
        experience = [
            {
                company: "Tech Innovators",
                position: "Frontend Developer Intern",
                duration: "June 2024 - Dec 2024",
                description:
                    "Worked on building reusable React components, optimized UI/UX, and improved performance by 20%.",
            },
        ],
        projects = [
            {
                title: "BuildMyResume",
                description:
                    "A modern ATS Resume Builder using React and Firebase for dynamic resume generation.",
            },
        ],
    } = data;

    return (
        <div className="layout13" style={{ "--accent": color }}>
            <header className="header13">
                <h1>{name}</h1>
                <h3>{title}</h3>
                <p>
                    {email} | {phone} | {address}
                </p>
            </header>

            <section className="summary13">
                <h2>Profile Summary</h2>
                <p>{summary}</p>
            </section>

            <div className="main13">
                <div className="left13">
                    <div className="block13">
                        <h2>Skills</h2>
                        <ul>
                            {skills.map((skill, i) => (
                                <li key={i}>{skill}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="block13">
                        <h2>Education</h2>
                        {education.map((edu, i) => (
                            <div key={i} className="edu-item13">
                                <h4>{edu.degree}</h4>
                                <p>{edu.institution}</p>
                                <span>{edu.year}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="right13">
                    <div className="block13">
                        <h2>Experience</h2>
                        {experience.map((exp, i) => (
                            <div key={i} className="exp-item13">
                                <h4>{exp.position}</h4>
                                <p className="company13">{exp.company}</p>
                                <span>{exp.duration}</span>
                                <p>{exp.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="block13">
                        <h2>Projects</h2>
                        {projects.map((proj, i) => (
                            <div key={i} className="proj-item13">
                                <h4>{proj.title}</h4>
                                <p>{proj.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
