import * as React from "react";
import type { PageProps } from "gatsby"
import "../styles/index.css"

const Portfolio: React.FC<PageProps> = () => {
    return (
        <div className="portfolio">
            <h1>Portfolio</h1>
            <br />
            <br />
            <br />
            <div className="github-card">
                <a className="github-link" href="https://github.com/Adamocho/chip8-rust" target="_blank">Chip-8 Rust</a>
                <p className="github-desc">A chip8 emulator (interpreter) written in Rust</p>
                <img className="github-img" src="https://github.com/Adamocho/chip8-rust/raw/master/logo.svg"/>
            </div>
        </div>
    )
};

export default Portfolio;