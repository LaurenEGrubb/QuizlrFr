import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { SetFlashcards, NewSet, DeleteFlashcard } from '../services/PostServices'

const SetDetails = ({ user }) => {
  const [set, setSet] = useState([])
  const [deleteFlashcard, setDeleteFlashcard] = useState(false)

  const flashcardDelete = async (flashcardId) => {
    const res = await DeleteFlashcard(flashcardId)
    setDeleteFlashcard(true)
  }

  const showFlashcards = async () => {
    const data = await SetFlashcards(flashcardId)
    console.log(data)
    setSet(data)
  }
  useEffect(() => {
    showFlashcards()
  }, [deleteFlashcard])

  

  return (
    <div>
      
      <h1>{set.setname}</h1>
      {set.flashcards?.map((flashcard) => (
        <div className="photo-card" key={flashcard.id}>
         
          <h3>{flashcard.term}</h3>
          <h3>{flashcard.description}</h3>
         
            <div>
              <button onClick={() => flashcardDelete(flashcard.id)}>X</button>
            </div>
          
            <div></div>
          
        </div>
      ))}
    </div>
  )
  
}

export default AlbumDetails