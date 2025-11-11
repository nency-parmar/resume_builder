import React from "react";
import templates from "../utils/data";
import TemplateCard from "../components/TemplateCard";
import "../styles/template.css";

export default function Templates({ search = "" }) {
    const safeSearch = search.toLowerCase();

    const filteredTemplates = templates.filter((t) =>
        t.name.toLowerCase().includes(safeSearch)
    );

    return (
        <section className="templates-page">
            <div className="templates-header">
                <h1 className="templates-title">
                    Choose Your <span>Resume Template</span>
                </h1>
                <p className="templates-subtitle">
                    Explore beautifully designed resume templates made just for you 💼
                </p>
            </div>

            <div className="templates-container">
                {filteredTemplates.length > 0 ? (
                    filteredTemplates.map((t) => (
                        <TemplateCard key={t.id} template={t} />
                    ))
                ) : (
                    <p className="no-templates">No templates found 💜</p>
                )}
            </div>
        </section>
    );
}
