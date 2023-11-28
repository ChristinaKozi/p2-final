import React from "react";
import { Link } from "react-router-dom";

function SongCard({ song }){
    const {id, title, artist} = song

    return (
        <article>
            <p>  {id}. "{title}" by {artist}</p>
            <p>
                <Link to={`/song/new`}>
                    <button>Click To Add New Song</button>
                </Link>
            </p>
        </article>
    )
}

export default SongCard;