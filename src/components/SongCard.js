import React from "react";
import Lyrics from "./Lyrics";

function SongCard({ song }){
    const {id, title, artist, lyrics} = song

    return (
        <article>
            <h4>  {id}. "{title}" by {artist}</h4>
            <Lyrics lyrics={lyrics}/>
        </article>
    )
}

export default SongCard;