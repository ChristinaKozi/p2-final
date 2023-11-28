import React from "react";
import { Link } from "react-router-dom";

function SongCard({ song }){
    const {id, title, artist} = song

    return (
        <article>
            <h2>"{title}" by {artist}</h2>
            <p>
                <Link to={`/song/${id}`}>
                    <button>Add New Song</button>
                </Link>
            </p>
        </article>
    )
}

export default SongCard;