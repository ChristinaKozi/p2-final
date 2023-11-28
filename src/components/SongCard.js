import React from "react";
import Lyrics from "./Lyrics";

function SongCard({ song }){
    const {id, title, artist, lyrics} = song

    return (
        <article>
            <p>  {id}. "{title}" by {artist}</p>
            <Lyrics lyrics={lyrics}/>
        </article>
    )
}

export default SongCard;