import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import templates from "../utils/data"; // your existing templates list
import TemplateCard from "../components/TemplateCard";
import "../styles/dashboard.css";

export default function Dashboard() {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    // 🔍 Filter by name
    const filtered = templates.filter((t) =>
        t.name.toLowerCase().includes(search.toLowerCase())
    );

    // 🎨 When user clicks a template → go to color selection
    const handleUseTemplate = (template) => {
        navigate(`/color/${template.id}`);
    };

    // 🌟 Image to show for all cards
    const cardImage = "https://marketplace.canva.com/EAGmJ13p8zE/1/0/1131w/canva-black-and-white-minimalist-professional-resume-a4-X9UHTVTOsqQ.jpg";

    return (
        <div className="dashboard-page">
            <header className="dash-header">
                <div className="dash-title">
                    <h1>Choose a Resume Template</h1>
                </div>

                <div className="dash-actions">
                    <input
                        className="dash-search"
                        type="search"
                        placeholder="Search templates..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        aria-label="Search templates"
                    />
                </div>
            </header>

            <main className="templates-grid-wrap">
                <div className="templates-grid">
                    {filtered.map((t) => (
                        <TemplateCard
                            key={t.id}
                            template={t}
                            image={cardImage} // ✅ Pass image here
                            onUse={() => handleUseTemplate(t)}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}
