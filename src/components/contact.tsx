import * as React from "react";
import type { PageProps } from "gatsby"
import "../styles/index.css"

const Contact: React.FC<PageProps> = () => {
    return (
        <div className="contact">
            <h1>Contact section</h1>
            <p>LinkedIn: <span className="contact-link">https://www.linkedin.com/in/olleradam</span></p>
            <p>GitHub: <span className="contact-link">https://www.github.com/adamocho</span></p>
            <p>Email: <span className="contact-link">contact@adamoller.com</span></p>
            <p>Career: <span className="contact-link">career@adamoller.com</span></p>
        </div>
    )
};

export default Contact;