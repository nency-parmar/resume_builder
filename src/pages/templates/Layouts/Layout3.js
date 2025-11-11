import React from "react";
import "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/styles/layouts/Layout3.css";

export default function Layout3({ data = {} }) {
    const {
        name = "Your Name",
        jobTitle = "UI/UX Designer",
        email = "email@example.com",
        phone = "+91 XXXXX XXXXX",
        address = "City, State, Country",
        linkedin = "linkedin.com/in/username",
        github = "github.com/username",
        portfolio = "yourportfolio.com",
        summary = "Creative and detail-oriented designer with a strong sense of aesthetics and a passion for user-centered design.",
        skills = ["Figma", "Adobe XD", "React", "Canva", "HTML/CSS"],
        education = [
            { degree: "B.Des in UI/UX Design", college: "Darshan University", year: "2025" },
        ],
        experience = [
            {
                position: "UI/UX Intern",
                company: "ABC Studio",
                duration: "Jan 2024 - May 2024",
                details: "Designed responsive layouts and improved usability of existing projects by 25%.",
            },
        ],
        projects = [
            {
                title: "Portfolio Website",
                tech: "React, TailwindCSS",
                description: "Developed a responsive portfolio to showcase personal and client projects.",
            },
        ],
        languages = ["English", "Hindi", "Gujarati"],
        achievements = ["Winner of Designathon 2024", "3rd Place in Creative UI Challenge"],
    } = data;

    return (
        <div className="layout3-container">
            <header className="header">
                <div className="name-role">
                    <h1>{name}</h1>
                    <h2>{jobTitle}</h2>
                </div>
                <div className="contact">
                    <p>📧 {email}</p>
                    <p>📞 {phone}</p>
                    <p>🌐 {portfolio}</p>
                </div>
            </header>

            <section className="summary">
                <h3>About Me</h3>
                <p>{summary}</p>
            </section>

            <section className="skills">
                <h3>Skills</h3>
                <div className="skill-tags">
                    {skills.map((skill, idx) => (
                        <span key={idx} className="skill">
                            {skill}
                        </span>
                    ))}
                </div>
            </section>

            <section className="experience">
                <h3>Experience</h3>
                {experience.map((exp, idx) => (
                    <div key={idx} className="exp-card">
                        <h4>
                            {exp.position} @ {exp.company}
                        </h4>
                        <p className="duration">{exp.duration}</p>
                        <p>{exp.details}</p>
                    </div>
                ))}
            </section>

            <section className="projects">
                <h3>Projects</h3>
                {projects.map((proj, idx) => (
                    <div key={idx} className="project-card">
                        <h4>{proj.title}</h4>
                        <p className="tech">{proj.tech}</p>
                        <p>{proj.description}</p>
                    </div>
                ))}
            </section>

            <section className="education">
                <h3>Education</h3>
                {education.map((edu, idx) => (
                    <div key={idx} className="edu-card">
                        <h4>{edu.degree}</h4>
                        <p>{edu.college}</p>
                        <p className="duration">{edu.year}</p>
                    </div>
                ))}
            </section>

            <section className="extra">
                <div className="languages">
                    <h3>Languages</h3>
                    <ul>
                        {languages.map((lang, idx) => (
                            <li key={idx}>{lang}</li>
                        ))}
                    </ul>
                </div>

                <div className="achievements">
                    <h3>Achievements</h3>
                    <ul>
                        {achievements.map((ach, idx) => (
                            <li key={idx}>{ach}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <footer className="footer">
                <p>Connect: {linkedin} | {github}</p>
            </footer>
        </div>
    );
}
