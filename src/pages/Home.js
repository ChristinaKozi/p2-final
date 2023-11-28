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
            <p>To begin, click on the Songs tab above and you will find the Genre Generator. 
                The genrenator will provide you with a genre which you can then apply to your favorite songs in your song list and practice in that style. If you're feeling inspired, you can write a new song using the generated genre!
            </p>
        </div>
    )
};

export default Home;