
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Nav from './components/Nav'
import Create from './pages/Create'
import EditCreate from './pages/EditCreate'
import Flashcard from './components/Flashcard'
import Study from './pages/Study';
import Main from './pages/Main'
import '../src/styles/App.css'
import axios from 'axios'
import { CheckSession } from './services/Auth'
import SetDetails from './pages/SetDetails'


function App() {
  const [authenticated, toggleAuthenticated] = useState(false)

  const [user, setUser] = useState(null)
  
  const checkStatus = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
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
          <Route path="/api/users/login" element={<Login 
          user={user}
          setUser={setUser}
          toggleAuthenticated={toggleAuthenticated}
          authenticated={authenticated}/>} 
          
          
          /> 
          <Route path="/users/register/" element={<Register />} />
          <Route path="/login/createset" element={<Create 
          user={user}/>} />
          <Route path="/api/sets/learn" element={<SetDetails />} /> 
          <Route path="/login/createset/edit" element={<EditCreate 
          user={user}/>} />
      </Routes>
     </main>
      
      
      
      
      
      </div>
  );
}

export default App;
