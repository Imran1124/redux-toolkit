import React, { lazy } from 'react'
import { Routes, Route } from 'react-router-dom';

const NavBar = lazy(() => import('./component/NavBar'))
const Profile = lazy(() => import('./pages/Profile'));
const FetchData = lazy(() => import('./pages/FetchData'))

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Profile />} />
        <Route path='/fetch' element={<FetchData />} />
      </Routes>
    </div>
  )
}

export default App
