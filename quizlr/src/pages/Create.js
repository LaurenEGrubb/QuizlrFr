import '../styles/App.css'
import { NewSet, CreateFlashcard, SetFlashcards, GetSetsByUser, GetSets } from '../services/PostServices'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../services/api'
import Client from '../services/api'
import '../styles/App.css'


const Create = ({ set, user, flashcard, showFlashcards }) => {
const initialState = {
    userId: 1,
    setname :""
}
let navigate = useNavigate();
const [sets, setSets] = useState([])
const [flashcards, setFlashcards] = useState([])
let { userId } = useParams()

const [formState, setFormState] = useState(initialState)

const handleChange = (event) => { setFormState({...formState, [event.target.id]: event.target.value})}
const handleSubmit = async (event) => {
    event.preventDefault()
    // FormData.append('setname', setname)

    let res = await axios.post(`${BASE_URL}/api/sets/create`, formState)
    setFormState(initialState)
    GetSets()
 }
useEffect(() => {
    const showSets = async () => {
        const data = await axios.get(`${BASE_URL}/api/sets/`)
                setSets(data.data)
        
    }
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
            {sets?.map((set) => (
                <div className='setcard' key={set.id}>
                <h3>{set.setname}</h3>
                <button onClick={() => navigate('/api/sets/learn')}> Set Details</button>
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