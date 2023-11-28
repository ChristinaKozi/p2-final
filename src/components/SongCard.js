import React from "react";
import { Link } from "react-router-dom";

function SongCard({ song }){
    const {id, title, artist} = song

    return (
        <article>
            <p>  {id}. "{title}" by {artist}</p>
            <Lyrics lyrics={lyrics}/>
        </article>
    )
}

export default SongCard;