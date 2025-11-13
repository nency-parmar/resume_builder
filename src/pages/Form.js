// src/pages/Form.js
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/form.css";

export default function Form() {
    const navigate = useNavigate();
    const location = useLocation();
    const { templateId, selectedColor } = location.state || {};

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        linkedin: "",
        github: "",
        workExperience: "",
        education: "",
        technicalSkills: "",
        languagesKnown: "",
        hobbies: "",
        projects: "",
        certificates: "",
        strength: "",
        weakness: "",
    });

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();

        const formattedData = {
            ...formData,
            technicalSkills: formData.technicalSkills
                .split(",")
                .map((s) => s.trim())
                .filter(Boolean),
            languagesKnown: formData.languagesKnown
                .split(",")
                .map((l) => l.trim())
                .filter(Boolean),
            hobbies: formData.hobbies
                .split(",")
                .map((h) => h.trim())
                .filter(Boolean),
            projects: formData.projects
                .split(",")
                .map((p) => p.trim())
                .filter(Boolean),
            certificates: formData.certificates
                .split(",")
                .map((c) => c.trim())
                .filter(Boolean),
        };

        // ✅ Pass data + template correctly
        navigate("/preview", {
            state: {
                data: formattedData,
                selectedTemplate: templateId,
                selectedColor: selectedColor
            },
        });
    };

    return (
        <div className="form-page">
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <div className="card form-card shadow-lg p-5 rounded-4">
                    <h2 className="text-center mb-4 fw-bold text-primary">
                        Build Your Professional Resume ✨
                    </h2>

                    <form onSubmit={handleSubmit} className="row g-3">
                        {[
                            { name: "name", label: "Full Name" },
                            { name: "email", label: "Email Address" },
                            { name: "phone", label: "Phone Number" },
                            { name: "address", label: "Address" },
                            { name: "linkedin", label: "LinkedIn Profile Link" },
                            { name: "github", label: "GitHub Profile Link" },
                            { name: "workExperience", label: "Work Experience" },
                            { name: "education", label: "Education" },
                            { name: "technicalSkills", label: "Technical Skills (comma separated)" },
                            { name: "languagesKnown", label: "Languages Known (comma separated)" },
                            { name: "hobbies", label: "Hobbies (comma separated)" },
                            { name: "projects", label: "Projects Built (comma separated)" },
                            { name: "certificates", label: "Certificates (comma separated)" },
                            { name: "strength", label: "Your Strengths" },
                            { name: "weakness", label: "Your Weaknesses" },
                        ].map((field, i) => (
                            <div key={i} className="col-12">
                                <label className="form-label fw-semibold">{field.label}</label>
                                <textarea
                                    className="form-control input-box"
                                    name={field.name}
                                    rows={["workExperience", "education", "strength", "weakness"].includes(field.name) ? 3 : 2}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    placeholder={`Enter your ${field.label.toLowerCase()}`}
                                    required
                                />
                            </div>
                        ))}

                        <div className="col-12 mt-3">
                            <button
                                type="submit"
                                className="btn btn-primary w-100 py-3 fw-semibold fs-5"
                            >
                                🚀 Preview My Resume
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
