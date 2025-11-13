// src/pages/MyResumes.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";

export default function MyResumes() {
    const [resumes, setResumes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        try {
            const raw = localStorage.getItem("myResumes");
            const parsed = raw ? JSON.parse(raw) : [];
            setResumes(parsed);
        } catch (err) {
            console.error("Failed to read saved resumes:", err);
            setResumes([]);
        }
    }, []);

    if (!resumes.length) {
        return (
            <div className="myresumes-empty">
                <h2>No saved resumes yet</h2>
                <p>Create a resume from the Dashboard to see it here.</p>
                <button className="btn btn-primary" onClick={() => navigate("/dashboard")}>
                    Browse Templates
                </button>
            </div>
        );
    }

    return (
        <div className="myresumes-page">
            <h1>My Saved Resumes</h1>
            <div className="saved-grid">
                {resumes.map((r, idx) => (
                    <div className="saved-card" key={idx}>
                        <h3>{r.templateName || "Untitled Resume"}</h3>
                        <p>{r.createdAt ? new Date(r.createdAt).toLocaleString() : "—"}</p>
                        <div className="saved-actions">
                            <button className="btn btn-primary" onClick={() => navigate("/preview", { state: { data: r, fromSaved: true } })}>
                                Open Preview
                            </button>
                            <button className="btn btn-outline" onClick={() => {
                                const remaining = resumes.filter((_, i) => i !== idx);
                                localStorage.setItem("myResumes", JSON.stringify(remaining));
                                setResumes(remaining);
                            }}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
