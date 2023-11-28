import React,{ useState } from "react";

function Lyrics({lyrics}) {
    const [showLyrics, setShowLyrics] = useState(false)

    function handleClick() {
        setShowLyrics(!showLyrics)
        console.log(showLyrics)
    }

    return (
        <>
            {setShowLyrics? <p>{lyrics}</p> : null}
            <button onClick={handleClick}>{setShowLyrics? <p>View Lyrics</p> : <p>Hide Lyrics</p>}</button>
        </>
    )
}

export default Lyrics;