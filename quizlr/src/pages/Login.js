import { useState } from 'react'
import '../styles/App.css'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'



const Login = ({ setUser }) => {
    let navigate = useNavigate();
    const [formValues, setFormValues] = useState({ username:'', password: ''})
    const handleChange = async (error) => {
        error.preventDefault()
        const payload = await SignInUser(formValues)
        setFormValues({ username:'', password: ''})
        setUser(payload)
        navigate('/:user_id')
    }

  return (
    <div>
         <form className="loginform">
          
            <label htmlFor="username">Username</label>
            <input onChange={handleChange} value={formValues.username}name="username"type="username"placeholder="Username"required/>
         
            <label htmlFor="password">Password</label>
            <input onChange={handleChange} value={formValues.password} required name="password"type="password"placeholder='Password'/>
        
          <button disabled={!formValues.username || !formValues.password}>
            Login
          </button>
        </form>
        
    </div>

  )
}
export default Login