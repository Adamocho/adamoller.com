import * as React from "react";
import type { PageProps } from "gatsby"
import "../styles/index.css"

const Portfolio: React.FC<PageProps> = () => {
    return (
        <div className="portfolio">
            <div className="portfolio-info">
                <h1>Portfolio</h1>
                <span className="intro-portfolio">These are just a few examples of what I'm capable of. For more examples please visit my Github.</span>
            </div>

            <div className="project">
                <a className="project-title" href="https://github.com/Adamocho/chip8-rust" target="_blank">Chip-8 Rust
                    <img className="github-img" src="https://github.com/Adamocho/chip8-rust/raw/master/logo.svg"/>
                </a>
                <p className="project-description">
                    Chip8 emulator (interpreter) in Rust. It was quite an interesting journey and I got much from it.
                    Bonus points: you can play games on it :D
                </p>
            </div>

            <div className="project">
                <a className="project-title" href="https://github.com/Adamocho/doomer" target="_blank">Doomer
                    <img className="github-img" src="https://github.com/Adamocho/doomer/raw/master/img/Logo3.svg"/>
                </a>
                <p className="project-description">
                    I always liked the old Doom games after my father. I wanted to create my own GUI launcher for the game to suit my needs and voilà.
                    It's quite old, but it still works after so many years, which is a good sign.
                </p>
            </div>

            <div className="project">
                <a className="project-title" href="https://github.com/Adamocho/codevm" target="_blank">CodeVM
                    <img className="github-img" src="https://github.com/Adamocho/codevm/raw/master/logo.svg"/>
                </a>
                <p className="project-description">
                    I've had enough of one Linux distro without vscode, so I made a version controller instead.
                    It's able of finding the correct Unix distribution - including darwin. Written in Bash Shell.
                </p>
            </div>

            <div className="project">
                <a className="project-title" href="https://github.com/Adamocho/primal" target="_blank">Primal
                    {/* <img className="github-img" src="https://github.com/Adamocho/primal/raw/master/img/logo.svg"/> */}
                </a>
                <p className="project-description">
                    Hey, you know BASIC, right? It's his ancestor, as I like to think of it, PRIMAL, more primitive, but it works.
                </p>
            </div>

            <div className="project">
                <a className="project-title" href="https://github.com/Adamocho/nixconfig" target="_blank">Nixconfig
                    {/* <img className="github-img" src="https://github.com/Adamocho/nixconfig/raw/main/logo.svg"/> */}
                </a>
                <p className="project-description">
                    My machines. My hardware. My systems. In code, though I also have another project for dotfiles.
                </p>
            </div>

            <div className="project">
                <a className="project-title" href="https://github.com/Adamocho/bookshelf" target="_blank">Bookshelf
                    {/* <img className="github-img" src="https://github.com/Adamocho/bookshelf/raw/master/img/logo.svg"/> */}
                </a>
                <p className="project-description">
                    An online bookshelf with some analysis tools added on top. If you prefer Goodreads, I can totally relate, but this one's mine.
                </p>
            </div>

            <div className="project">
                <a className="project-title">Inspector</a>
                <p className="project-description">
                    Water and electricity consumption monitoring software build in C# .NET Core. Created during an aprenticeship.
                    It was afterwards further developed and, for example, the company's guardian makes use of it, as it shows whether all lights are off on a specified floor.
                    Also (monthly/weekly/daily) water and/or electricy usage spreadsheets are available, rendering costs tracking trivial.
                </p>
            </div>

        </div>
    )
};

export default Portfolio;
