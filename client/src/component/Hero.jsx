import React, { useState } from "react";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  
  const cities = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", 
    "Chennai", "Kolkata", "Pune", "Jaipur", "Lucknow",
  ];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value) {
      const filteredSuggestions = cities.filter((city) =>
        city.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (city) => {
    setSearchTerm(city);
    setSuggestions([]);
  };

  return (
    <section className="mt-20 bg-gradient-to-r from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-sky-600 mb-2">Freedom To Move</h1>
        <p className="text-lg text-sky-500 mb-6">
          Presenting the safe, reliable and affordable mobility solution
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center relative">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder="📍 Search City"
              className="border px-4 py-2 rounded-lg w-full"
            />
            {suggestions.length > 0 && (
              <ul className="absolute bg-white border rounded-lg mt-1 w-full max-h-40 overflow-y-auto">
                {suggestions.map((city, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(city)}
                    className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                  >
                    {city}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <input
            type="date"
            className="border px-4 py-2 rounded-lg w-full md:w-40"
          />
          <input
            type="date"
            className="border px-4 py-2 rounded-lg w-full md:w-40"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">Search</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;