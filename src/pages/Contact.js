import React from "react";
import "../styles/contact.css";

export default function Contact() {
    return (
        <div>
            <div className="contact-page">
                <div className="contact-content">
                    <h1 className="contact-title">
                        Contact <span>BuildMyResume</span>
                    </h1>
                    <p className="contact-desc">
                        We'd love to hear from you! Whether you have feedback, feature suggestions,
                        or collaboration ideas — feel free to reach out anytime.
                    </p>

                    <div className="contact-card">
                        <div className="contact-item">
                            <span className="icon">📧</span>
                            <div>
                                <h3>Email</h3>
                                <p>
                                    <a href="mailto:nencyy0808@gmail.com">nencyy0808@gmail.com</a>
                                </p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <span className="icon">📞</span>
                            <div>
                                <h3>Phone</h3>
                                <p>
                                    <a href="tel:+911234567890">+91 1234567890</a>
                                </p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <span className="icon">🌐</span>
                            <div>
                                <h3>Website</h3>
                                <p>www.buildmyresume.in (coming soon!)</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <span className="icon">💻</span>
                            <div>
                                <h3>GitHub</h3>
                                <p>
                                    <a
                                        href="https://github.com/nency-parmar"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        github.com/nency-parmar
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <span className="icon">🔗</span>
                            <div>
                                <h3>LinkedIn</h3>
                                <p>
                                    <a
                                        href="https://www.linkedin.com/in/nency-parmar-8155322b4"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        nency-parmar
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <p className="thankyou">💜 Thank you for using BuildMyResume!</p>
                </div>
            </div>
        </div>
    );
}
