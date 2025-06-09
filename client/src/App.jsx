import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage';
<<<<<<< HEAD
import HomePage from './pages/HomePage';
=======
>>>>>>> 0e63142e57fb8f6459435eb3c8d90457913d64ed


function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
<<<<<<< HEAD
                    <Route path="/" element={<HomePage />} />
=======
                    <Route path="/" element={<h1>Home Page</h1>} />
>>>>>>> 0e63142e57fb8f6459435eb3c8d90457913d64ed
                    <Route path="/login" element={<h1>Login Page</h1>} />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
  
}

<<<<<<< HEAD
export default App;
=======
export default App
>>>>>>> 0e63142e57fb8f6459435eb3c8d90457913d64ed
