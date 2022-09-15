import { useState, useEffect } from 'react'
import { GetSets, EditSet } from '../services/PostServices'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../services/api'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const EditCreate = ({ sets, setSets}) => {
  let navigate = useNavigate()
  
let { index, id } = useParams()
 
  const [set, setSet] = useState({})
 const initialState={
    setname: sets[index].setname
 }
console.log(sets[index].setname)
  const [formValue, setFormValue] = useState(initialState)
  const handleChange = (event) => {
    setFormValue({ ...formValue, [event.target.id]: event.target.value })
    console.log(formValue)
  }

console.log(sets[index].id)
  const handleSubmit = async (event) => {
    console.log("hello")
    event.preventDefault()
    console.log('world')
    console.log(formValue)
    let res = await axios.put(`${BASE_URL}/api/sets/${sets[index].id}`, formValue)
    // showSets()
    console.log("very great")
    setFormValue(initialState)
    navigate('/login/createset')
    
  }

  return (
    <div>
      <form className="col" onSubmit={handleSubmit}>
        <div className="form-wrap">
          <label htmlFor="name">Edit Set Name</label>
          <input
            onChange={handleChange}
            type="text"
            value={formValue.setname}
            id="setname"
            // required
          />
        </div>
    
        <button type="submit">Confirm Changes</button>
      </form>
    </div>
  )
}

export default EditCreate