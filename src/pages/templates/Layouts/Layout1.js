import React from "react";
import "/Users/nencyy/Desktop/React/ResumeBuilder/ats-resume-builder/src/styles/layouts/Layout1.css";

export default function Layout1({ data = {}, color = "#2c3e50" }) {
    const {
        name = "Your Name",
        jobTitle = "Full Stack Developer",
        email = "email@example.com",
        phone = "+91 XXXXX XXXXX",
        address = "City, State, Country",
        linkedin = "linkedin.com/in/username",
        github = "github.com/username",
        portfolio = "yourportfolio.com",
        summary = "A passionate developer eager to learn and grow.",
        skills = ["HTML", "CSS", "JS", "React", "Node.js"],
        experience = [
            {
                position: "Web Developer Intern",
                company: "ABC Tech",
                duration: "Jan 2024 – Dec 2024",
                description:
                    "Developed modern UI with React and optimized backend API integration.",
            },
        ],
        education = [
            { degree: "B.Tech CSE", institute: "Darshan University", year: "2025" },
        ],
        projects = [
            {
                title: "Resume Builder App",
                description: "Built an ATS-optimized resume builder using React.js.",
            },
        ],
        certificates = [
            { title: "Frontend Developer Certificate", issuer: "Udemy", year: "2024" },
        ],
        languages = ["English", "Hindi", "Gujarati"],
        interests = ["UI Design", "Traveling", "Photography"],
        achievements = ["Top 10 finalist in Hackathon 2024"],
    } = data;

    return (
        <div className="layout1-wrapper" data-color={color}>
            {/* LEFT SIDEBAR */}
            <aside className="layout1-sidebar">
                <div className="sidebar-header">
                    <h1>{name}</h1>
                    <p className="job-title">{jobTitle}</p>
                </div>

                <div className="sidebar-section">
                    <h4>Contact</h4>
                    <p>{email}</p>
                    <p>{phone}</p>
                    <p>{address}</p>
                </div>

                <div className="sidebar-section">
                    <h4>Links</h4>
                    <p><a href={`https://${linkedin}`} target="_blank" rel="noreferrer">LinkedIn</a></p>
                    <p><a href={`https://${github}`} target="_blank" rel="noreferrer">GitHub</a></p>
                    <p><a href={`https://${portfolio}`} target="_blank" rel="noreferrer">Portfolio</a></p>
                </div>

                <div className="sidebar-section">
                    <h4>Skills</h4>
                    <ul>
                        {Array.isArray(skills) && skills.map((s, i) => <li key={i}>{s}</li>)}
                    </ul>
                </div>

                <div className="sidebar-section">
                    <h4>Languages</h4>
                    <p>{languages.join(", ")}</p>
                </div>

                <div className="sidebar-section">
                    <h4>Interests</h4>
                    <ul>
                        {Array.isArray(interests) &&
                            interests.map((int, idx) => <li key={idx}>{int}</li>)}
                    </ul>
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="layout1-main">
                <section className="section">
                    <h2>Profile</h2>
                    <p>{summary}</p>
                </section>

                <section className="section">
                    <h2>Experience</h2>
                    {Array.isArray(experience) &&
                        experience.map((exp, idx) => (
                            <div key={idx} className="exp-item">
                                <strong>{exp.position}</strong> — {exp.company} ({exp.duration})
                                <p>{exp.description}</p>
                            </div>
                        ))}
                </section>

                <section className="section">
                    <h2>Education</h2>
                    {Array.isArray(education) &&
                        education.map((edu, idx) => (
                            <div key={idx} className="edu-item">
                                <strong>{edu.degree}</strong> — {edu.institute} ({edu.year})
                            </div>
                        ))}
                </section>

                <section className="section">
                    <h2>Projects</h2>
                    {Array.isArray(projects) &&
                        projects.map((proj, idx) => (
                            <div key={idx} className="proj-item">
                                <strong>{proj.title}</strong>
                                <p>{proj.description}</p>
                            </div>
                        ))}
                </section>

                <section className="section">
                    <h2>Certificates</h2>
                    {Array.isArray(certificates) &&
                        certificates.map((cert, idx) => (
                            <div key={idx} className="cert-item">
                                {cert.title} — {cert.issuer} ({cert.year})
                            </div>
                        ))}
                </section>

                <section className="section">
                    <h2>Achievements</h2>
                    <ul>
                        {Array.isArray(achievements) &&
                            achievements.map((a, idx) => <li key={idx}>{a}</li>)}
                    </ul>
                </section>
            </main>
        </div>
    );
}
