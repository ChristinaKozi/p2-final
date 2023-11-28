import React from "react";
import NavBar from "./NavBar";

function SongForm(){
    return (
        <>
            <header>
                <NavBar />
            </header>
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