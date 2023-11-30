import React, { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import SongCard from "../components/SongCard"
import Genre from "../components/Genre"
import { Link } from "react-router-dom"
import Search from "../components/Search"

function Songs() {
    const [songs, setSongs] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(()=>{
        fetch('http://localhost:3000/songs')
        .then(r=>r.json())
        .then(data => setSongs(data))
    },[])

    const filteredSongs = songs.filter(song => {
        return song.title.toLowerCase().includes(searchTerm.toLowerCase())
    })

    function handleSearch(newSearch) {
        setSearchTerm(newSearch)
    }

    const songList = filteredSongs.map(song =>{ 
        return <SongCard key={song.id} song={song} />
    })

    const [genre, setGenre] = useState("")

    useEffect(()=>{
        fetch('https://binaryjazz.us/wp-json/genrenator/v1/genre/')
        .then(r=>r.json())
        .then(data=>{setGenre(data)})
    },[])

    function handleClick(){
        fetch('https://binaryjazz.us/wp-json/genrenator/v1/genre/')
        .then(r=>r.json())
        .then(data=>{setGenre(data)})
    }

    return (
        <div>
            <header>
                <NavBar />
            </header>
            <Genre genre={genre} handleClick={handleClick}/>
            <h1>Songs</h1>
            <Search searchTerm={searchTerm} onSearch={handleSearch} />
            <hr />
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