import React, { useEffect,useState } from "react";
import NavBar from "../components/NavBar";
import Genre from "../components/Genre";

function SongForm(){
    const [song, setSong] = useState({
        title: "",
        artist: "",
        lyrics: ""
    })

    const [genre, setGenre] = useState("")

    useEffect(()=>{
        fetch('https://binaryjazz.us/wp-json/genrenator/v1/genre/')
        .then(r=>r.json())
        .then(data=>{setGenre(data)})
    },[])


    return (
        <>
            <header>
                <NavBar />
            </header>
            <Genre genre={genre}/>
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

export default SongForm;