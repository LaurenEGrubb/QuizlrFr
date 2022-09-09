import React, { useState } from 'react'

const Flashcard = ({ flashcard }) => {
    const [flip, setFlip] = useState(false)
    

    return (
        <div onClick={() => setFlip(!flip)}>
            { flip? flashcard.term : flashcard.definition }
        </div>
    )
}

export default Flashcard