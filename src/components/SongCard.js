import React from "react";

function SongCard({ song }){
    const {title, artist, lyrics} = song

    return (
        <article>
            <h2>"{title}" by {artist}</h2>
        </article>
    )
}

export default SongCard