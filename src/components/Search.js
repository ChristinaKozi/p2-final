import React from "react";

function Search({ searchTerm }) {
    return (
        <div>
            <label>Search Songs:</label>
            <input type="text" id="search" placeholder="Search Title..." value={searchTerm} onChange={(e)=>console.log("searching...")}></input>

        </div>
    )
}

export default Search