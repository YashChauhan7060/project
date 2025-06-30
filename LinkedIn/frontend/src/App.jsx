import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import { useContext } from 'react'
import { userDataContext } from './context/userContext'
import { Navigate } from 'react-router-dom'
import Network from './pages/Network'

function App() {
  let {userData}=useContext(userDataContext)
  return (
    <Routes>
      <Route path="/" element={userData?<Home/>:<Navigate to="/login" />} />
      <Route path="/signup" element={userData?<Navigate to="/" />: <SignUp/>} />
      <Route path="/login" element={userData?<Navigate to="/" />:<Login/>} />
      <Route path='/network' element={userData?<Network/>:<Navigate to="/login"/>}/>
    </Routes>
  )
}

export default App
