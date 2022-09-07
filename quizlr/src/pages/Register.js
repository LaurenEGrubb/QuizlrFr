import '../styles/App.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Register (){
    return (
      <div>
         <h4>Register</h4>
         <form className="formregister">
            <div>
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