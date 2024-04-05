import * as React from "react";
import type { PageProps } from "gatsby"
import "../styles/index.css"

const Contact: React.FC<PageProps> = () => {
    return (
        <div className="contact">
            <h1>Contact section</h1>
            <div className="links">
                <p>LinkedIn: <a className="contact-link" href="https://www.linkedin.com/in/olleradam" target="_blank">https://www.linkedin.com/in/olleradam</a></p>
                <p>GitHub: <a className="contact-link" href="https://www.github.com/adamocho" target="_blank">https://www.github.com/adamocho</a></p>
                <p>Email: <a className="contact-link" href="mailto:contact@adamoller.com">contact@adamoller.com</a></p>
                <p>Career: <a className="contact-link" href="mailto:career@adamoller.com">career@adamoller.com</a></p>
            </div>
        </div>
    )
};

export default Contact;