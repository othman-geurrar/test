import React, { useState } from 'react';

import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import { ToastContainer } from 'react-toastify';


const App = () => {
  
return (
  <div>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/contact' element={<Contact />}/>
      
    </Routes>
    <ToastContainer />
  </div>
)
}

export default App;
