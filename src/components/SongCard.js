import React from "react";
import NavBar from "./NavBar";

function SongCard({ song }){
    const [title, artist, lyrics] = song

    return (
        <>
            <header>
                <NavBar />
            </header>
        </>
    )
}

export default SongCard