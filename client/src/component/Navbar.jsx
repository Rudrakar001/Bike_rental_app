import React from "react";
import register from "../assets/register.png"; // Updated path to the logo image
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full bg-gradient-to-r from-pink-500 to-blue-500 shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Updated logo */}
        <div className="flex items-center gap-2">
          <img src= {register} alt="Bike Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-white">BikeRent</span>
        </div>
        <nav className="flex gap-6 text-white">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Blogs</a>
          <a href="#">Partner With Us</a>
          <a href="#">Subscription</a>
        </nav>
        <Link to="/login">
        <button className="bg-white text-blue-600 px-4 py-2 rounded-lg">Sign In</button></Link>
        
      </div>
    </header>
  );
};

export default Navbar;
// a

