import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'
import './App.css'

function App() {
  return (
    <Router>
      <div className='app-shell'>
        <header className='app-navbar'>
          <h1 className='app-brand'>SocialBoard</h1>
          <nav className='app-nav-links'>
            <NavLink
              to='/feed'
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Feed
            </NavLink>
            <NavLink
              to='/create-post'
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
               Create New Post
            </NavLink>
          </nav>
        </header>

        <main className='app-content'>
          <Routes>
            <Route path='/' element={<Navigate to='/feed' replace />} />
            <Route path='/create-post' element={<CreatePost />} />
            <Route path='/feed' element={<Feed />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App