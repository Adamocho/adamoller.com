import * as React from "react";
import type { PageProps } from "gatsby"
import "../styles/index.css"

const Hobbys: React.FC<PageProps> = () => {
    return (
        <div className="hobbys">
            <h1>Hobbys</h1>
            {/* <p>dont know the purpose yet. Maybe links to books? List of hobbies with examples?</p> */}
        </div>
    )
};

export default Hobbys;