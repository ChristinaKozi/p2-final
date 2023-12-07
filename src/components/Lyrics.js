import React,{ useState } from "react";

function Lyrics({ lyrics }) {
    const [showLyrics, setShowLyrics] = useState(false)

    function handleClick() {
        setShowLyrics(!showLyrics)
    }

    return (
        <>
            {showLyrics? <> <p>Lyrics:</p> <p className="lyrics">{lyrics}</p> </> : null}
            <button onClick={handleClick}>
                {showLyrics? 'Hide Lyrics' : 'View Lyrics'}
                </button>
        </>
    )
}

export default Lyrics;