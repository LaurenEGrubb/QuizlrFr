import '../styles/App.css'
import { NewSet, CreateFlashcard, SetFlashcards,DeleteSet, GetSetsByUser, GetSets } from '../services/PostServices'
import { Navigate, useNavigate, useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import EditCreate from './EditCreate'
import { BASE_URL } from '../services/api'
import Client from '../services/api'
import '../styles/App.css'


const Create = ({ set, user, flashcard, showFlashcards, setSets, sets }) => {
const initialState = {
    userId: 1,
    
}
const showSets = async () => {
  const data = await axios.get(`${BASE_URL}/api/sets/`)
          setSets(data.data)
  
}
let navigate = useNavigate();

const [flashcards, setFlashcards] = useState([])
const [deleteSet, setDeleteSet] = useState(false)
  
let { userId } = useParams()

const [formState, setFormState] = useState(initialState)
const DeleteSet = async (setId) => {
  await axios.delete(`${BASE_URL}/api/sets/delete/${setId}`)
  GetSets()
  // navigate('/api/sets/learn')
}

const handleChange = (event) => { setFormState({...formState, [event.target.id]: event.target.value})}
const handleSubmit = async (event) => {
    event.preventDefault()
    // FormData.append('setname', setname)

    let res = await axios.post(`${BASE_URL}/api/sets/create`, formState)
    setFormState(initialState)
    GetSets()
 }
useEffect(() => {
  
    showSets()
}, [])

    return (
    <div className="create-watchlist">
      <form className="form" onSubmit={handleSubmit}>
        <div className="watchlistInputs">
          <label htmlFor="watchlist">User Name:</label>
       

          <label htmlFor="name">Set Name</label>
          <input
            type="text"
            id="setname"
            onChange={handleChange}
            value={formState.setname}
          />
      
        </div>
       <button type="submit">Create Set</button>
      </form>
      <div>
            {sets?.map((set, index) => (
                <div className='setcard' key={set.id}>
                <h3>{set.setname}</h3>
                <h2>{set.id}</h2>
                <button onClick={() => navigate('/api/sets/learn')}> Set Details</button>
                <button onClick={() => DeleteSet(set.id)}>Delete</button>
                <Link to={`/edit/${set.id}/${index}`}><button>Edit Me!</button></Link>
                </div>
            ))}
          </div>

      
    </div>
  )
  }

  
  export default Create