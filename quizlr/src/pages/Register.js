import '../styles/App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    navigate('api/login')
  }

    return (
      <div>
         <h4>Register</h4>
         <form className="formregister">
            <div className='innerform'>
              <label htmlFor="firstName">Name</label>
              <input placeholder="John"/>
        
              <label htmlFor="username">Username</label>
              <input placeholder='username'/>

              <label htmlFor="email">Email Address</label>
              <input placeholder="myemail@email.com"/>
            
              <label htmlFor="password">Password</label>
              <input/>
           
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input/>
            </div>
            <button>
              Sign Up
            </button>
          </form>
          
      </div>
  
    )
  }
  export default Register