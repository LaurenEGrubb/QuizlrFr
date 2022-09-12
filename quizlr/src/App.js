
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Nav from './components/Nav'
import Create from './pages/Create'
import Flashcard from './components/Flashcard'
import Study from './pages/Study';
import Main from './pages/Main'
import '../src/styles/App.css'
import axios from 'axios'



function App() {

  const [user, setUser] = useState(null)
  
  const checkStatus = async () => {
    // const user = await CheckSession()
    setUser(user)
    // setAuthenticated(true)
  }
  useEffect(() => {
    const status = localStorage.getItem('token')
    if (status) {
      checkStatus()
    }
  }, [])

  
  return (
    <div>
     <header> <Nav /></header>
     <main>
      <Routes>
        <Route path="/api" element={<Main />} />
          <Route path="/api/users/login/" element={<Login />} /> 
          <Route path="/api/users/register/" element={<Register />} />
          <Route path="/login/create" element={<Create />} />
          <Route path="/login/learn" element={<Study />} /> 
      </Routes>
     </main>
      
      
      
      
      
      </div>
  );
}

export default App;
