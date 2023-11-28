import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import NavBar from "../components/NavBar";

function SongForm(){
    const navigate = useNavigate()

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
        const newSong = {
            title: song.title,
            artist: song.artist,
            lyrics: song.lyrics
        }
        fetch('http://localhost:3000/songs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newSong)
        })
        .then(r=>r.json())
        .then(data=>data)
        navigate('/songs')
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