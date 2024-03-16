import * as React from "react";
import type { PageProps } from "gatsby"
import "../styles/index.css"

const Summary: React.FC<PageProps> = () => {
    return (
        <div className="home">
            <div className="home-info">
                <h1>About me!</h1>
                <p>
                Adam is a young, aspiring software developer who loves
                exploring computer hardware and software from
                inside out. Throughout the years several talents emerged, such as 
                love of lerning, reading and doing all kinds of sport activities. 
                Starting with Linux, through SVG graphics and Android apps, 
                ending with emulators written in Rust - he's seen it all.
                <br/>
                A short list of hobbies: film photography, calistenics,
                canoeing and books.
                </p>
                <div className="home-info-cups">
                    <p>Personal achievements:</p>
                    <ul>
                        <li>Became an official programmer (with a title) in 2023</li>
                        <li>52 books read in 2024</li>
                        <li>Can read at thrice the averege human reading speed</li>
                        <li>Speaks fluently in Polish, English, German, plus a glimpse of Ukrainian/Russian</li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Summary;
