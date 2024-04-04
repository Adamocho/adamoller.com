import * as React from "react";
import type { PageProps } from "gatsby"
import "../styles/index.css"

const Contact: React.FC<PageProps> = () => {
    return (
        <div className="contact">
            <h1>Contact section</h1>
            <p>LinkedIn: <a className="contact-link" href="https://www.linkedin.com/in/olleradam" target="_blank">https://www.linkedin.com/in/olleradam</a></p>
            <p>GitHub: <a className="contact-link" href="https://www.github.com/adamocho" target="_blank">https://www.github.com/adamocho</a></p>
            <p>Email: <span className="contact-link">contact@adamoller.com</span></p>
            <p>Career: <span className="contact-link">career@adamoller.com</span></p>
        </div>
    )
};

export default Contact;