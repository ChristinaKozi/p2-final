import React, { useEffect,useState } from "react";
import NavBar from "../components/NavBar";

function SongForm(){
    const [song, setSong] = useState({
        title: "",
        artist: "",
        lyrics: ""
    })

    function handleChange(e) {
        setSong({
            ...song, [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

    }

    return (
        <>
            <header>
                <NavBar />
            </header>
            <h1>Submit New Song</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <label>Title: </label>
                <input name="title" onChange={handleChange} type='text'></input> 
                <br /><br />

                <label>Artist: </label>
                <input name="artist" onChange={handleChange} type='text'></input>
                <br /><br />

                <label>Lyrics: </label>
                <textarea name="lyrics" onChange={handleChange} type='text'></textarea> 
                <br /><br /> 

                <input type='submit'></input>
            </form>
        </>
    )
}

export default SongForm;