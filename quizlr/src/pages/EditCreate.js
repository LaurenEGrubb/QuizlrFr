import { useState, useEffect } from 'react'
import { GetSets, EditSet } from '../services/PostServices'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../services/api'
import { useNavigate } from 'react-router-dom'
// comment
const EditCreate = ({id}) => {
  let navigate = useNavigate()
 
  const [set, setSet] = useState({})
  const [flashcards, setFlashcards] = useState([])

  const [formValue, setFormValue] = useState('')
  const handleChange = (error) => {
    setFormValue({ ...formValue, [error.target.setname]: error.target.value })
    
  }
 const showSets = async () => {
      const data = await GetSets()
      console.log(id)
      const singleSet = data.filter((set) => set.id == set.id)
      setSet(singleSet[0])
      setFormValue({
        setname: set?.setname,
        
      })
    }
  useEffect(() => {
   
    showSets()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(id)
    const payload = await EditSet(formValue, id)
    showSets()

    navigate('/login/createset')
  }

  return (
    <div>
      <form className="col" onSubmit={handleSubmit}>
        <div className="form-wrap">
          <label htmlFor="name">Edit Set Name</label>
          <input
            onChange={handleChange}
            setname="setname"
            type="text"
            value={formValue.setname}
            required
          />
        </div>
    
        <button>Confirm Changes</button>
      </form>
    </div>
  )
}

export default EditCreate