import React from "react";

function Genre({ genre }) {
    return (
        <div>
            <h1>Genre Generator: {genre} </h1>
            <button>Get New Genre</button>
        </div>

    )
}

export default Genre;