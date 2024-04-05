import * as React from "react";
import type { PageProps } from "gatsby"
import "../styles/index.css"

const Portfolio: React.FC<PageProps> = () => {
    return (
        <div className="portfolio">
            {/* Projects with description */}

            <div className="project">
                <div className="github-card">
                    <a className="project-title" href="https://github.com/Adamocho/chip8-rust" target="_blank">Chip-8 Rust
                        <img className="github-img" src="https://github.com/Adamocho/chip8-rust/raw/master/logo.svg"/>
                    </a>
                </div>
                <p className="project-description">
                    Chip8 emulator (interpreter) in Rust. It was quite an interesting journey and I got much from it.
                    Bonus points: you can play games on it :D
                </p>
            </div>

            <div className="project">
                <div className="github-card">
                    <a className="project-title" href="https://github.com/Adamocho/dotfiles" target="_blank">Dotfiles
                        <img className="github-img" src="https://github.com/Adamocho/dotfiles/raw/main/logo.svg"/>
                    </a>
                </div>
                <p className="project-description">
                    My dotfiles for Linux. It includes bootstrapping tools, self-written 
                    shell-scripts for DMENU and general purpose, many configuration files 
                    for git, shell, tmux and much much more.
                </p>
            </div>

            <div className="project">
                <div className="github-card">
                    <a className="project-title" href="https://github.com/Adamocho/codevm" target="_blank">CodeVM
                        <img className="github-img" src="https://github.com/Adamocho/codevm/raw/master/logo.svg"/>
                    </a>
                </div>
                <p className="project-description">
                    I've had enough of one Linux distro without vscode, so I made a version controller instead.
                    It's able of finding the correct Unix distribution - including darwin. Written in Bash Shell.
                </p>
            </div>

            <div className="project">
                <div className="github-card">
                    <a className="project-title" href="https://github.com/Adamocho/doomer" target="_blank">Doomer
                        <img className="github-img" src="https://github.com/Adamocho/doomer/raw/master/img/Logo3.svg"/>
                    </a>
                </div>
                <p className="project-description">
                    I always liked the old Doom games after my father. I wanted to create my own launcher for the game to suit my needs and voilà.
                    It's quite old, but it still works after so many years, which is a good sign.
                </p>
            </div>

            <div className="project">
                <p className="project-title">Inspector</p>
                <p className="project-description">
                    Water and electricity consumption monitoring software build in C# .NET Core. Created during an aprenticeship in EIB SA. (www.eib.com.pl) in Poland.
                    It was afterwards further developed and, for example, the company's guardian makes use of it, as it shows whether all lights are off on a specified floor.
                    Also (monthly/weekly/daily) water and/or electricy usage spreadsheets are available, rendering costs tracking trivial.
                </p>
            </div>

        </div>
    )
};

export default Portfolio;