import '../styles/App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterUser } from '../services/Auth'

function Register (){
  let navigate = useNavigate()
  const [name, setName]= useState('');
  const [email, setEmail]= useState('');
  const [username, setUsername]= useState('');
  const [password, setPassword]= useState('');
  const [confirmPassword, setConfirmPassword]=useState('');

  const handleSubmit = async (error) => {
    error.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('username', username);
    formData.append('password', password);
    await RegisterUser(formData);
    navigate('api/user/login')
  };

    return (
      <div>
         <h4>Register</h4>
         <form className="formregister" onSubmit={handleSubmit}>
            <div className='innerform'>
              <label htmlFor="firstName">Name</label>
              <input onChange={(e) => setName(e.target.value)} placeholder="John" value={name}/>
        
              <label htmlFor="username">Username</label>
              <input onChange={(e) => setUsername(e.target.value)} value={username}placeholder='username'/>

              <label htmlFor="email">Email Address</label>
              <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="myemail@email.com"/>
            
              <label htmlFor="password">Password</label>
              <input onChange={(e) => setPassword(e.target.value)} value={password}/>
           
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
            </div>
            <button
            disabled={!email || (!password && confirmPassword === password)}>
              Sign Up
            </button>
          </form>
          
      </div>
  
    )
  }
  export default Register