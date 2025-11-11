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
        skills = ["React.js", "Node.js", "Express", "MongoDB", "Java", "Flutter"],
        education = [
            {
                degree: "B.Tech in Computer Science",
                institution: "Darshan University",
                year: "2025",
            },
        ],
        experience = [
            {
                company: "Tech Solutions",
                position: "Software Developer Intern",
                duration: "May 2024 - Nov 2024",
                description:
                    "Built reusable React components, integrated REST APIs, and optimized frontend performance.",
            },
        ],
        projects = [
            {
                title: "Smart Recipe Finder",
                description:
                    "Developed an AI-powered recipe suggestion app using React and Firebase.",
            },
        ],
    } = data;

    return (
        <div className="layout14" style={{ "--accent": color }}>
            <div className="left14">
                <div className="profile14">
                    <h1>{name}</h1>
                    <h3>{title}</h3>
                </div>

                <div className="contact14">
                    <h2>Contact</h2>
                    <p>{email}</p>
                    <p>{phone}</p>
                    <p>{address}</p>
                </div>

                <div className="skills14">
                    <h2>Skills</h2>
                    <ul>
                        {skills.map((skill, i) => (
                            <li key={i}>{skill}</li>
                        ))}
                    </ul>
                </div>

                <div className="education14">
                    <h2>Education</h2>
                    {education.map((edu, i) => (
                        <div key={i} className="edu-item14">
                            <h4>{edu.degree}</h4>
                            <p>{edu.institution}</p>
                            <span>{edu.year}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="right14">
                <section className="summary14">
                    <h2>Profile Summary</h2>
                    <p>{summary}</p>
                </section>

                <section className="experience14">
                    <h2>Experience</h2>
                    {experience.map((exp, i) => (
                        <div key={i} className="exp-item14">
                            <h4>{exp.position}</h4>
                            <p className="company14">{exp.company}</p>
                            <span>{exp.duration}</span>
                            <p>{exp.description}</p>
                        </div>
                    ))}
                </section>

                <section className="projects14">
                    <h2>Projects</h2>
                    {projects.map((proj, i) => (
                        <div key={i} className="proj-item14">
                            <h4>{proj.title}</h4>
                            <p>{proj.description}</p>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}
