import * as React from "react";
import type { PageProps } from "gatsby"
import "../styles/index.css"

const Summary: React.FC<PageProps> = () => {
    return (
        <div className="home">
            <div className="home-info">
                <h1>Micro Bio</h1>
                <p>
                    My name is Adam Oller and I'm a programmer, striving to make our code clean, easier to change, and bug-free.  Having finished my programming certificate in 2023, I'm delighted to continue my journey through life with new opportunities hiding around every corner, willing to use them to their fullest. I constantly seek out opportunities and expand my knowledge, which earns me many perspectives. Also, being an early adopter is handy, since I have a choice no to work with 20+ years old technologies, creating my own solutions if not satisfied. In my free time I grab onto everything within my reach, which includes books, scientific papers, new languages, be it programming or not; and much, much more, though I have neither your time nor is your attention span long enough for it to be written and then fully read through.
                </p>

                <div style={{color: "#f00"}}>
                    MAKE IT A SEPARATE THING
                </div>

                <div className="home-info-cups">
                    <p>Work achievements:</p>
                    <ul>
                        <li>An official programmer diploma and title in 2023</li>
                        <li>Right after that, started a CS degree in Regensburg, Bavaria, Germany.</li>
                        <li>Advanced Linux user with a ton of experience paired with a vast knowledge about the system, commands, shell and more</li>
                    </ul>
                    <p>Personal achievements:</p>
                    <ul>
                        <li>52 books read in 2023, a consistent reader overall - lists are available on <a href="https://www.goodreads.com/andyhere" target="_blank">Goodreads</a>.</li>
                        <li>Primary workstation fully Linux-driven -> check out my <a href="https://github.com/Adamocho/nixconfig" target="_blank">nixconfig</a>, non-believers, and the curious minds too ¯_(ツ)_/¯</li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Summary;
