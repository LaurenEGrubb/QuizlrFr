import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { SetFlashcards, NewSet, DeleteFlashcard } from '../services/PostServices'
import axios from 'axios'
import { BASE_URL } from '../services/api'

const SetDetails = ({ user }) => {
  const [set, setSet] = useState([])
  const [deleteFlashcard, setDeleteFlashcard] = useState(false)
  const [flashcards, setFlashcards] = useState([])
  const showFlashcards = async () => {
    const data = await axios.get(`${BASE_URL}/api/sets/details/`)
            setFlashcards(data.data)
            console.log(flashcards)
    
}
  const flashcardDelete = async (flashcardId) => {
    const res = await DeleteFlashcard(flashcardId)
    setDeleteFlashcard(true)
    showFlashcards()
  }
  const initialState = {
    flashcardId: 1,
    term :"",
    definition: ""
}
const [formState, setFormState] = useState(initialState)
  useEffect(() => {
  
    showFlashcards()
}, [])
  

  return (
    <div>
      
      <h1>{set.setname}</h1>
      {flashcards?.map((flashcard) => (
        <div className="flash-card" key={flashcard.id}>
         
          <h3>{flashcard.term}</h3>
          <h3>{flashcard.definition}</h3>
         
            <div>
              <button onClick={() => flashcardDelete(flashcard.id)}>X</button>
            </div>
          
            <div>
            <button type="submit"></button>
            </div>
          
        </div>
      ))}
    </div>
  )
  
}

export default SetDetails