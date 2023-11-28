import React, { useState } from "react"
import NavBar from "../components/NavBar"

function Songs() {
    const [songs, setSongs] = useState([])
    
    return (
        <div>
            <header>
                <NavBar />
            </header>
            Songs
        </div>
    )
}

export default Songs