import React from "react";
import "../index.css";

export default function TemplateCard({ template, onClick }) {
  return (
    <div className="template-card" onClick={onClick}>
      <img src={template.image} alt={template.name} />
      <h4>{template.name}</h4>
    </div>
  );
}
