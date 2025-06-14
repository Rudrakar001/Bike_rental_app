<<<<<<< HEAD
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';

=======
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import React from 'react';
import './App.scss';
import RegisterPage from './pages/RegisterPage';
>>>>>>> 183aa22eec1c0ae9abf67048cd4f6be1eceb7dd6
import HomePage from './pages/HomePage';
import LoginPage from "./pages/LoginPage";




function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<HomePage />} />
<<<<<<< HEAD

                
                    <Route path="/login" element={<Login/>} />
                    <Route path="/signup" element={<Signup />} />
=======
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
>>>>>>> 183aa22eec1c0ae9abf67048cd4f6be1eceb7dd6
                </Routes>
            </BrowserRouter>
        </div>
    );
  
}


export default App;

