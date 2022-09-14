import '../styles/App.css'
import { NewSet, CreateFlashcard, SetFlashcards,DeleteSet, GetSetsByUser, GetSets } from '../services/PostServices'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import EditCreate from './EditCreate'
import { BASE_URL } from '../services/api'
import Client from '../services/api'
import '../styles/App.css'
// comment

const Create = ({ set, user, flashcard, showFlashcards }) => {
const initialState = {
    userId: 1,
    setname :""
}
const showSets = async () => {
  const data = await axios.get(`${BASE_URL}/api/sets/`)
          setSets(data.data)
  
}
let navigate = useNavigate();
const [sets, setSets] = useState([])
const [flashcards, setFlashcards] = useState([])
let { userId } = useParams()

const [formState, setFormState] = useState(initialState)
const SetDelete = async (setId) => {
  const res = await DeleteSet(setId)
  
  showSets()
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
          <div>
            {sets?.map((set, index) => (
                <div className='setcard' key={set.id}>
                <h3>{set.setname}</h3>
                <h2>{set.id}</h2>
                <button onClick={() => navigate('/api/sets/learn')}> Set Details</button>
                <button onClick={() => SetDelete(set.id)}>Delete</button>
                <EditCreate id={set.id} />

                </div>
            ))}
          </div>


        </div>
       
        <button type="submit">Create Set</button>
      </form>
    </div>
  )
  }

  
  export default Create