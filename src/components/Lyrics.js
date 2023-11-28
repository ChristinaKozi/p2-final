import React,{ useState } from "react";

function Lyrics({ lyrics }) {
    const [showLyrics, setShowLyrics] = useState(false)

    function handleClick() {
        setShowLyrics(!showLyrics)
    }

    return (
        <>
            {showLyrics? <> <p>Lyrics:</p> <p>{lyrics}</p> </> : null}
            <button onClick={handleClick}>
                {showLyrics? <p>Hide Lyrics</p> : <p>View Lyrics</p>}
                </button>
        </>
    )
}

export default Lyrics;