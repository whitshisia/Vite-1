import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import Layout from './Layout';
import Contacts from './Pages/Contacts';
import Addbooking from './Pages/Addbooking';
import Booking from './Pages/Booking';
import NoPage from './Pages/NoPage';
function App() {

  return (
   
     <BrowserRouter >
    <Routes>
      <Route path='/' element={<Layout />}> 
      <Route path='/' element={<Home />} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path='/addbooking' element={<Addbooking />} />
      <Route path="*" element={<NoPage />} />
      <Route path='booking' element={<Booking />} />
       </Route>
    </Routes>
    
    </BrowserRouter>
    
  )
}

export default App
