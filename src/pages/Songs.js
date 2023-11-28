import React, { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import SongCard from "../components/SongCard"
import Genre from "../components/Genre"
import { Link } from "react-router-dom"

function Songs() {
    const [songs, setSongs] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/songs')
        .then(r=>r.json())
        .then(data => setSongs(data))
    },[])

    const [genre, setGenre] = useState("")

    useEffect(()=>{
        fetch('https://binaryjazz.us/wp-json/genrenator/v1/genre/')
        .then(r=>r.json())
        .then(data=>{setGenre(data)})
    },[])

    const songList = songs.map(song =>{ 
        return <SongCard key={song.id} song={song} />
    })

    return (
        <div>
            <header>
                <NavBar />
            </header>
            <Genre genre={genre}/>
            <hr />
            <h1>Songs</h1>
            {songList}
            <p>
                <Link to={`/song/new`}>
                    <button>Click To Add New Song</button>
                </Link>
            </p>
        </div>
    )
}

export default Songs 