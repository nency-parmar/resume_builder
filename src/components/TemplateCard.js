// src/components/TemplateCard.js
import React from "react";
import PropTypes from "prop-types";
import "../styles/dashboard.css";

export default function TemplateCard({ template, onUse }) {
  // ✅ Use the specific image for all templates
  const thumb = "https://static.resumecoach.com/assets/templates/thumbnails/en/noPhoto/munich-736x1041.webp";

  return (
    <div className="template-card">
      <div className="template-thumb">
        <img
          src={thumb}
          alt={`${template.name} thumbnail`}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </div>

      <div className="template-info">
        <h3 className="template-name">{template.name}</h3>
        <p className="template-desc">
          {template.description || "Clean & professional resume layout"}
        </p>

        <div className="template-actions">
          <button className="btn btn-primary" onClick={onUse}>
            Use This Template
          </button>
        </div>
      </div>
    </div>
  );
}

TemplateCard.propTypes = {
  template: PropTypes.object.isRequired,
  onUse: PropTypes.func.isRequired,
};
