import React from "react";
import "../styles/footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} BuildMyResume — Designed with 💜 by Nency Parmar</p>
        </footer>
    );
}
