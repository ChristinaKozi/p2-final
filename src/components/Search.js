import React from "react";
import './Search.css'

function Search({ searchTerm,onSearch }) {
    return (
        <div className = "search">
            <label>Search Songs:</label>
            <input 
                type="text" 
                id="search" 
                placeholder="Search Title..." 
                value={searchTerm} 
                onChange={(e)=>onSearch(e.target.value)}> 
            </input>

        </div>
    )
}

export default Search