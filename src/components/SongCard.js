import React from "react";

function SongCard({ song }){
    const {id, title, artist} = song

    return (
        <article>
            <p>  {id}. "{title}" by {artist}</p>
        </article>
    )
}

export default SongCard;