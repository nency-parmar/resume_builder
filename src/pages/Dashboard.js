import React, { useState } from "react";
import TemplateCard from "../components/TemplateCard";
import templates from "../utils/data";
import "../styles/template.css";

export default function Home() {
    const [search, setSearch] = useState("");
    const filteredTemplates = templates.filter((t) =>
        t.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className="home-page">
            <div className="templates-header">
                <h1 className="templates-title">
                    Choose Your <span>Resume Template</span>
                </h1>
                <p className="templates-subtitle">
                    Explore beautifully designed resume templates made just for you 💼
                </p>
            </div>

            <input
                type="text"
                placeholder="Search templates..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-bar"
            />

            <div className="templates-container">
                {filteredTemplates.length > 0 ? (
                    filteredTemplates.map((t) => (
                        <TemplateCard key={t.id} template={t} />
                    ))
                ) : (
                    <p className="no-templates">No templates found 💜</p>
                )}
                <button>Preview</button>
            </div>
        </section>
    );
}
