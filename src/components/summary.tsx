import * as React from "react";
import type { PageProps } from "gatsby"
import "../styles/index.css"

const Summary: React.FC<PageProps> = () => {
    return (
        <div className="contact">
            <h1>A quick summary about who I am and what I do</h1>
        </div>
    )
};

export default Summary;