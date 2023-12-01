import React, { useState } from "react";
import NavBar from "./NavBar";

function SongForm(){
    const [title,setTitle] = useState('')
    const [artist,setArtist] = useState('')
    const [lyrics,setLyrics] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        const newSong = {
            title: title,
            artist: artist,
            lyrics: lyrics
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
    }

    return (
        <>
            <h2>Submit New Song</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <label>Title: </label>
                <input name="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} type='text'></input> 
                <br /><br />

                <label>Artist: </label>
                <input name="artist" value={artist} onChange={(e)=>{setArtist(e.target.value)}} type='text'></input>
                <br /><br />

                <label>Lyrics: </label>
                <textarea name="lyrics" value={lyrics} onChange={(e)=>{setLyrics(e.target.value)}} type='text'></textarea> 
                <br /><br /> 

                <input type='submit'></input>
            </form>
        </>
    )
}

export default SongForm;