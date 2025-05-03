import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/navbar/navbar'
import Homepage from './component/homepage/homepage'
import { Routes, Route} from 'react-router-dom'
import Templates from './component/templates/templates'
import Buildresume from './component/files/Buildresume'
import ResumeForm from './component/files/Resumeform'
import SignUp from './component/files/signup'
import Upload from './component/files/upload'
function App() {


  return (
    <>
      <Navbar />


      <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/buildresume' element={<Buildresume />}/>
      <Route path='/template' element={<Templates />}/>
      <Route path= '/form' element={<ResumeForm />}/>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/upload' element={<Upload />}/>
    </Routes>
    </>
  )
}

export default App
