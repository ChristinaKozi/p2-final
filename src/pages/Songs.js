import React, { useEffect, useState } from "react"
import NavBar from "../components/NavBar"

function Songs() {
    const [songs, setSongs] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/songs')
        .then(r=>r.json())
        .then(data => setSongs(data))
    },[])

    const songList = songs.map(song =>{
        return <SongCard key={song.id} />
    })

    return (
        <div>
            <header>
                <NavBar />
            </header>
            Songs
        </div>
    )
}

export default Songs 