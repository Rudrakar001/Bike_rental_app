import { Routes, Route, BrowserRouter } from 'react-router-dom'
import React from 'react';
import './App.scss';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import LoginPage from "./pages/LoginPage";




function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
  
}


export default App;

