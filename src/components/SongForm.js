import React from "react";
import NavBar from "./NavBar";

function SongForm(){
    return (
        <>
            <header>
                <NavBar />
            </header>
            <h1>Submit New Song</h1>
            <hr />
            <form>
                <label>Title: </label>
                <input type='text'></input> 
                <br />
                <br />

                <label>Artist: </label>
                <input type='text'></input>
                <br />
                <br />

                <label>Lyrics: </label>
                <textarea type='text'></textarea> 
                <br />
                <br /> 

                <input type='submit'></input>
            </form>
        </>
    )
}

export default SongForm