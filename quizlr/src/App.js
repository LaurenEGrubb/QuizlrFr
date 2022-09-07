
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import { Nav } from './components/Nav'
import Create from './pages/Create'
import FlashCard from './components/FlashCard'
import Study from './pages/Study';
import Main from './pages/Main'

function App() {


  return (
    <div>
      <header>
      <Nav></Nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="login" element={<Login />} />
          {/* <Route path="/login/profile" element={<Profile user={user} />} /> */}
          <Route path="/login/create" element={<Create  />} />
          <Route path="/login/learn" element={<Study  />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
