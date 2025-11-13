import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import TemplateRenderer from "./templates/TemplateRenderer";
import "../styles/preview.css";

export default function Preview() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { data, selectedTemplate, selectedColor } = state || {};
    const resumeRef = useRef();

    // If no color is selected, fallback to a default
    const themeColor = selectedColor || "#7b2ff7";

    const handleDownload = async () => {
        const element = resumeRef.current;
        if (!element) return;

        try {
            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                backgroundColor: "#ffffff",
            });

            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");

            const pageWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();
            const imgHeight = (canvas.height * pageWidth) / canvas.width;

            pdf.addImage(imgData, "PNG", 0, 0, pageWidth, imgHeight);

            pdf.save(`${data.name || "My_Resume"}.pdf`);

            // Save resume in localStorage
            const existing = JSON.parse(localStorage.getItem("myResumes") || "[]");
            existing.unshift({
                data,
                templateId: selectedTemplate,
                color: themeColor,
                createdAt: Date.now(),
            });
            localStorage.setItem("myResumes", JSON.stringify(existing.slice(0, 50)));

            navigate("/thankyou");
        } catch (error) {
            console.error("❌ Error generating PDF:", error);
        }
    };

    if (!data || !selectedTemplate) {
        return (
            <p style={{ textAlign: "center", marginTop: "50px", color: themeColor }}>
                ⚠️ No data found! Please go back and fill your details.
            </p>
        );
    }

    return (
        <section className="preview-page" style={{ "--theme-color": themeColor }}>
            <h2 className="preview-title">Your Resume Preview</h2>

            <div ref={resumeRef} className="resume-preview">
                <TemplateRenderer
                    data={data}
                    selectedTemplate={selectedTemplate}
                    selectedColor={themeColor}
                />
            </div>

            <div className="download-btn-container">
                <button className="btn" onClick={handleDownload}>
                    💾 Download My Resume
                </button>
            </div>
        </section>
    );
}
