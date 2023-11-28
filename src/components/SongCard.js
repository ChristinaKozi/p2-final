import React from "react";
import NavBar from "./NavBar";

function SongCard({ song }){
    const {title, artist, lyrics} = song

    return (
        <>
            <p>"{title}" by {artist}</p>
        </>
    )
}

export default SongCard