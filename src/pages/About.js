import React from "react";
import NavBar from "../components/NavBar";

function About() {
    
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <h1>About</h1>
            <hr />
            <h2>Why Use Genre Generator?</h2>
            <p className="textbox">Using Genre Generator can widen your genre knowledge base and allow you to explore a more sub-genred atmosphere. 
            This will introduce you to new sounds, styles, rythms and techniques that you may love and implement... or loathe and never touch again!</p>
        </div>
    )
};

export default About;