import { useState } from 'react'
import '../styles/App.css'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'
import react from 'react'
import BASE_URL from '../services/api'

const Login = ({ setUser, toggleAuthenticated, user }) => {
    const navigate = useNavigate()
    const [formValues, setFormValues] = useState({ username: '', password: '' })
    const handleChange = (e) => {
      setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
      e.preventDefault()
      const payload = await SignInUser(formValues)
      setFormValues({ username:'', password:''})
      setUser(payload)
      toggleAuthenticated(true)
      navigate('/login/createset')
    }

  return (
    <div>
         <form className="loginform" onSubmit={handleSubmit}>
          
            <label htmlFor="username">Username</label>
            <input onChange={handleChange} value={formValues.username}name="username"type="username"placeholder="Username"required/>
         
            <label htmlFor="password">Password</label>
            <input onChange={handleChange} value={formValues.password} required name="password"type="password"placeholder='Password'/>
        
          <button disabled={!formValues.username || !formValues.password} onClick={handleSubmit}>
            Login
          </button>
        </form>
        
    </div>

  )
}
export default Login