import React, { useState } from "react";
import "../index.css";

export default function MyResumes() {
    const [resumes] = useState([
        { id: 1, name: "Professional Resume", date: "Oct 27, 2025" },
        { id: 2, name: "Modern Resume", date: "Oct 25, 2025" },
    ]);

    return (
        <div>
            <div className="myresumes-page">
                <h2>📄 My Created Resumes</h2>
                {resumes.length > 0 ? (
                    <ul className="resume-list">
                        {resumes.map((r) => (
                            <li key={r.id} className="resume-item">
                                <div>
                                    <h3>{r.name}</h3>
                                    <p>Created on: {r.date}</p>
                                </div>
                                <button className="download-btn">Download</button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No resumes created yet 💜</p>
                )}
            </div>
        </div>
    );
}
