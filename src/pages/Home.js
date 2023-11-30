import React from "react";
import NavBar from "../components/NavBar";

function Home() {
    
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <h1>Home</h1>
            <hr />
            <h2>Welcome to Genre Garage Band Practice!</h2>
            <p className="textbox">To begin, click on the Songs tab above where you will find the Genre Generator. 
                There you will be provided with a genre which you can apply to a song of your choice from your song list and transform the style during practice. If you're feeling inspired, you can stretch your creative muscles and write a new song using the generated genre!
            </p>
        </div>
    )
};

export default Home;