import React from "react";

function SongForm(){
    return (
        <>
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
            </form>
        </>
    )
}

export default SongForm