import * as React from "react";
import type { PageProps } from "gatsby"
import "../styles/index.css"

const Summary: React.FC<PageProps> = () => {
    return (
        <div className="home">
            <div className="home-info">
                <h1>About Me</h1>
                <p>
                    My name is Adam Oller and I'm a programmer, striving to make our code clean, easier to change, and bug-free.  Having finished my programming certificate in 2023, I'm delighted to continue my journey through life with new opportunities hiding around every corner, willing to use them to their fullest. I constantly seek out opportunities and expand my knowledge, which earns me many perspectives. Also, being an early adopter is quite handy, since I have a choice no to work with 20+ years old technologies, creating my own solutions if not satisfied. In my free time I grab onto everything within my reach, which includes books, scientific papers, new languages, be it programming or not. If you would like to join me on my journey, I'd be honored.
                </p>

                <div className="home-info-cups">
                    <p>Achievements:</p>
                    <ul>
                        <li>An official programmer diploma and title in 2023</li>
                        <li>In 2024 started a CS degree in Regensburg, Bavaria, Germany.</li>
                        <li>Advanced Linux user with a ton of experience paired with a vast knowledge about the system, commands, and shell - fully migrated to Nixos in 2024</li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Summary;
