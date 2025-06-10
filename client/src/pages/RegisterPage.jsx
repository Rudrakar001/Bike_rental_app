import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

// Import images correctly (assuming they are in src/assets)
import AdminImg from '../assets/admin.jpg';  // Changed from DoctorImg to AdminImg for clarity
import UserImg from '../assets/user.jpg';   // Using same image for both for now, replace with actual user image

export default function Register() {
    const navigate = useNavigate();

    useEffect(() => {
        if (Cookies.get("userToken")) {
            const userData = JSON.parse(Cookies.get("userData"));
            const getRole = userData?.role;
            
            if (getRole === "admin") {
                navigate("/admin-dashboard");
            } else {
                navigate("/dashboard");
            }
        }
    }, [navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your registration logic here
    };

    return (
        <div className="login-wrap">
            <div className="login-wrap-left pt-4">
                <h1>Welcome to Bike Hook</h1>
            </div>
            
            <div className="login-wrap-right d-flex align-items-center py-5 px-3 flex-column">
                <h1>Create your account</h1>
                
                <div className="form-wrapper">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <Form.Label>Choose User Type</Form.Label>
                            <div>
                                <label className="custom-radio-btn">
                                    <input 
                                        type='radio' 
                                        name='userType' 
                                        value="admin" 
                                        required 
                                    />
                                    <span className="checkMark">
                                        <img src={AdminImg} alt='admin' width="50" height="50" />
                                        Admin
                                    </span>
                                </label>
                                
                                <label className="custom-radio-btn ms-3">
                                    <input 
                                        type='radio' 
                                        name='userType' 
                                        value="user" 
                                        required 
                                    />
                                    <span className="checkMark">
                                        <img src={UserImg} alt='user' width="50" height="50" />
                                        User
                                    </span>
                                </label>
                            </div>
                        </div>
                        
                        <div className="mb-3">
                            <Form.Label htmlFor="fname">First Name</Form.Label>
                            <Form.Control
                                type="text"
                                id="fname"
                                required
                            />
                        </div>
                        
                        <div className="mb-3">
                            <Form.Label htmlFor="lname">Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                id="lname"
                                required
                            />
                        </div>
                        
                        <div className="mb-3">
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control
                                type="email"
                                id="email"
                                required
                                aria-describedby="emailHelpBlock"
                            />
                        </div>
                        
                        <div className="mb-3">
                            <Form.Label htmlFor="password">Password</Form.Label>
                            <Form.Control
                                type="password"
                                id="password"
                                required
                                minLength="6"
                                aria-describedby="passwordHelpBlock"
                            />
                        </div>
                        
                        <div className="text-center mt-5 mb-5">
                            <Button variant="success" className="login-btn" type='submit'>
                                Register
                            </Button>
                        </div>
                    </form>
                    
                    <p className="text-center small">
                        Already have an account? <Link to="/login">Login</Link> here
                    </p>
                </div>
            </div>
        </div>
    );
}