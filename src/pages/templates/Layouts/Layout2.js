import React from "react";
import "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/styles/layouts/Layout2.css";

export default function Layout2({ data = {} }) {
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
        skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"],
        education = [
            { degree: "B.Tech in CSE", college: "Darshan University", year: "2025" },
        ],
        experience = [
            {
                position: "Frontend Developer Intern",
                company: "ABC Tech",
                duration: "Jan 2024 - June 2024",
                details:
                    "Built responsive web pages and improved website performance by 30%.",
            },
        ],
        projects = [
            {
                title: "Smart Recipe Finder",
                tech: "React, Flask API",
                description:
                    "An AI-powered recipe suggestion app using image recognition.",
            },
        ],
        languages = ["English", "Hindi", "Gujarati"],
        achievements = [
            "Top Performer in Web Development Bootcamp",
            "Won 1st Prize in Hackathon 2024",
        ],
    } = data;

    return (
        <div className="layout2-container">
            <div className="left-section">
                <div className="profile">
                    <h1>{name}</h1>
                    <h2>{jobTitle}</h2>
                </div>

                <div className="contact">
                    <h3>Contact</h3>
                    <p>📧 {email}</p>
                    <p>📞 {phone}</p>
                    <p>📍 {address}</p>
                    <p>🔗 {linkedin}</p>
                    <p>💻 {github}</p>
                    <p>🌐 {portfolio}</p>
                </div>

                <div className="skills">
                    <h3>Skills</h3>
                    <ul>
                        {skills.map((skill, idx) => (
                            <li key={idx}>{skill}</li>
                        ))}
                    </ul>
                </div>

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
            </div>

            <div className="right-section">
                <div className="summary">
                    <h3>Profile Summary</h3>
                    <p>{summary}</p>
                </div>

                <div className="experience">
                    <h3>Experience</h3>
                    {experience.map((exp, idx) => (
                        <div key={idx} className="section-item">
                            <h4>
                                {exp.position} - {exp.company}
                            </h4>
                            <p className="duration">{exp.duration}</p>
                            <p>{exp.details}</p>
                        </div>
                    ))}
                </div>

                <div className="education">
                    <h3>Education</h3>
                    {education.map((edu, idx) => (
                        <div key={idx} className="section-item">
                            <h4>{edu.degree}</h4>
                            <p>{edu.college}</p>
                            <p className="duration">{edu.year}</p>
                        </div>
                    ))}
                </div>

                <div className="projects">
                    <h3>Projects</h3>
                    {projects.map((proj, idx) => (
                        <div key={idx} className="section-item">
                            <h4>{proj.title}</h4>
                            <p className="tech">{proj.tech}</p>
                            <p>{proj.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
