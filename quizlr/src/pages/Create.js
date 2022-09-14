import '../styles/App.css'
import { NewSet, CreateFlashcard, SetFlashcards, GetSetsByUser } from '../services/PostServices'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../services/api'


const Create = ({ set, user, flashcard, showFlashcards }) => {
const initialState = {
    userId: 1,
    setname :""
}
let { userId } = useParams()

const [formState, setFormState] = useState(initialState)

const handleChange = (event) => { setFormState({...formState, [event.target.id]: event.target.value})}
 const handleSubmit = async (event) => {
    event.preventDefault()

    let res = await axios.post(`${BASE_URL}/api/sets/create`, formState)
    setFormState(initialState)
    GetSetsByUser()
 }


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
    </div>
  )
  }

  
  export default Create