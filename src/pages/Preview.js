// src/pages/Preview.js
import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import TemplateRenderer from "./templates/TemplateRenderer";
import "../styles/preview.css"; // ✅ relative import instead of full path

export default function Preview() {
    const { state } = useLocation();
    const { data, selectedTemplate, selectedColor } = state || {};
    const resumeRef = useRef();

    // 🧾 Handle download as PDF
    const handleDownload = async () => {
        const element = resumeRef.current;
        if (!element) return;

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

        let position = 0;
        pdf.addImage(imgData, "PNG", 0, position, pageWidth, imgHeight);

        // If content exceeds 1 page
        if (imgHeight > pageHeight) {
            let heightLeft = imgHeight - pageHeight;
            while (heightLeft > 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, "PNG", 0, position, pageWidth, imgHeight);
                heightLeft -= pageHeight;
            }
        }

        pdf.save("My_Resume.pdf");
    };

    if (!data || !selectedTemplate) {
        return (
            <p style={{ textAlign: "center", marginTop: "50px" }}>
                ⚠️ No data found! Please go back and fill your details.
            </p>
        );
    }

    return (
        <section className="preview-page">
            <h2 className="preview-title">Your Resume Preview</h2>

            <div ref={resumeRef} className="resume-preview">
                <TemplateRenderer
                    data={data}
                    selectedTemplate={selectedTemplate}
                    selectedColor={selectedColor || "#7b2ff7"}
                />
            </div>

            <div className="download-btn-container">
                <button className="download-btn" onClick={handleDownload}>
                    💾 Download as PDF
                </button>
            </div>
        </section>
    );
}
