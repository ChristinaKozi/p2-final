import React from "react";

function Genre({ genre,handleClick }) {

    return (
        <div>
            <h1>Genre Generator: </h1>
            <h2>{genre.toUpperCase()}</h2>
            <button onClick={handleClick} >Get New Genre</button>
        </div>

    )
}

export default Genre;