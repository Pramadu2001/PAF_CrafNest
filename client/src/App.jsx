import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Auth from './Components/Authentication/Auth'
import Homepage from './Components/Home page/homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 

function App() {
  return (
   <div className=''>
    <Routes>
      <Route path="/*" element={true ? <Homepage/> : <Auth/>}> 
      </Route>
    </Routes>
   </div>
  )
}

export default App


