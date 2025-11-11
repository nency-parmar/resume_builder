import React from "react";
import "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/styles/layouts/Layout4.css";

export default function Layout4({ data = {} }) {
    const {
        name = "Your Name",
        jobTitle = "Software Engineer",
        email = "email@example.com",
        phone = "+91 XXXXX XXXXX",
        address = "City, State, Country",
        linkedin = "linkedin.com/in/username",
        github = "github.com/username",
        summary = "Result-oriented software engineer with hands-on experience in web development, problem-solving, and team collaboration.",
        skills = ["Java", "React", "SQL", "Node.js", "Git"],
        education = [
            { degree: "B.Tech in Computer Science", college: "Darshan University", year: "2025" },
        ],
        experience = [
            {
                position: "Software Developer Intern",
                company: "TechCorp Pvt Ltd",
                duration: "Jan 2024 - May 2024",
                details: "Built REST APIs, optimized queries, and improved app performance by 20%.",
            },
        ],
        projects = [
            {
                title: "Online Resume Builder",
                tech: "React, Firebase",
                description: "Developed a resume maker app with dynamic templates and color selection.",
            },
        ],
        languages = ["English", "Hindi", "Gujarati"],
        achievements = ["Top 10 in Hackathon 2024", "Published technical blog on React.js"],
    } = data;

    return (
        <div className="layout4-container">
            {/* Header */}
            <header className="header">
                <div>
                    <h1>{name}</h1>
                    <h2>{jobTitle}</h2>
                </div>
                <div className="contact">
                    <p>{email}</p>
                    <p>{phone}</p>
                    <p>{linkedin}</p>
                    <p>{github}</p>
                </div>
            </header>

            {/* Summary */}
            <section>
                <h3>Profile Summary</h3>
                <p>{summary}</p>
            </section>

            {/* Experience */}
            <section>
                <h3>Experience</h3>
                {experience.map((exp, idx) => (
                    <div key={idx} className="info-block">
                        <h4>{exp.position}</h4>
                        <p className="sub">{exp.company} | {exp.duration}</p>
                        <p>{exp.details}</p>
                    </div>
                ))}
            </section>

            {/* Projects */}
            <section>
                <h3>Projects</h3>
                {projects.map((proj, idx) => (
                    <div key={idx} className="info-block">
                        <h4>{proj.title}</h4>
                        <p className="sub">{proj.tech}</p>
                        <p>{proj.description}</p>
                    </div>
                ))}
            </section>

            {/* Education */}
            <section>
                <h3>Education</h3>
                {education.map((edu, idx) => (
                    <div key={idx} className="info-block">
                        <h4>{edu.degree}</h4>
                        <p className="sub">{edu.college} | {edu.year}</p>
                    </div>
                ))}
            </section>

            {/* Skills & Extras */}
            <div className="two-col">
                <div>
                    <h3>Skills</h3>
                    <ul>
                        {skills.map((skill, idx) => (
                            <li key={idx}>{skill}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3>Achievements</h3>
                    <ul>
                        {achievements.map((ach, idx) => (
                            <li key={idx}>{ach}</li>
                        ))}
                    </ul>

                    <h3>Languages</h3>
                    <ul>
                        {languages.map((lang, idx) => (
                            <li key={idx}>{lang}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <footer className="footer">
                <p>{address}</p>
            </footer>
        </div>
    );
}
