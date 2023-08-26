import { Route, Routes } from 'react-router-dom'
import Intro from './pages/Auth/Intro/WelcomeScreen'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'
import Home from './pages/Home/Home'
import CreatePost from './pages/Create/CreatePost'
import DetailPost from './pages/DetailPost/DetailPost'
import CreateUsername from './pages/Auth/Register/CreateUsername'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/register/create" element={<CreateUsername/>} />
        <Route path="/home" element={<Home/>} />
        <Route path='/create' element={<CreatePost/>} />
        <Route path='post/:id' element={<DetailPost/>} />
      </Routes>
    </>
  )
}

export default App
