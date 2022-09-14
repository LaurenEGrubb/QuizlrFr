import { useEffect, useState } from 'react'
import '../styles/App.css'
import { useNavigate, Link } from 'react-router-dom'
import { GetSets, DeleteSet, EditSet } from '../services/PostServices'
// comment
const Study = ({ user }) => {
    let navigate = useNavigate()
    const [updateFlashcard, setUpdateFlashcard] = useState(false)
    const [flashcard, setFlashcards] = useState([])
    const [deleteFlashcard, setDeleteFlashcard] = useState(false)
    const deleteSet = async (flashcardId) => {
        const res = await DeleteSet(flashcardId)
        setDeleteFlashcard(true)
    }
    useEffect(() => {
        const showFlashcards = async () => {
            const data = await GetSets()
            setFlashcards(data)
        }
        showFlashcards()
    }, [deleteFlashcard, EditSet])
    return (
      <div>
         <h4>Study</h4>
         <div>
        {flashcard?.map((flashcard) => (
          <div className="flash-card" key={flashcard.id}>
            <h3>{flashcard.term}</h3>
            <p>{flashcard.definition}</p>

    
            <Link className="editbutton"to={`/edit/${flashcard.id}`}>Edit Flashcard</Link>
            

            <div>
              <button onClick={() => deleteFlashcard(flashcard.id)} className="delete">X</button>
            </div>
          </div>
        ))}
      </div>
          
      </div>
  
    )
  }
  export default Study