import '../styles/App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterUser } from '../services/Auth'
import Client from '../services/api';
import { BASE_URL } from '../services/api'
function Register (){
  let navigate = useNavigate()
  const [username, setUsername]= useState('');
  const [password, setPassword]= useState('');
  const [confirmPassword, setConfirmPassword]=useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      username: username,
      password: password
    })
    // setFormValues({
    //   username: '',
    //   password:'',
    //   confirmPassword:''
    // })
    console.log(password)
  }

    return (
      <div>
         <h4>Register</h4>
         {/* <form className="formregister" onSubmit={handleSubmit}> */}
            <div className='innerform'>

        
              <label htmlFor="username">Username</label>
              <input onChange={(e) => setUsername(e.target.value)} value={username}placeholder='username'/>

            
            
              <label htmlFor="password">Password</label>
              <input onChange={(e) => setPassword(e.target.value)} value={password}/>
           
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
            </div>
            <button
            onClick={handleSubmit}
            disabled={(!password && confirmPassword === password)}>
              Sign Up
            </button>
          {/* </form> */}
          
      </div>
  
    )
  }
  export default Register