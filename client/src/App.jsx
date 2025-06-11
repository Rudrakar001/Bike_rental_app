import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';

import HomePage from './pages/HomePage';



function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<HomePage />} />

                
                    <Route path="/login" element={<Login/>} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
  
}


export default App;

