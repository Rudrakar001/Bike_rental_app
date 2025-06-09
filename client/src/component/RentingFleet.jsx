import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import bike1 from "../assets/bike1.jpg";
import bike2 from "../assets/bike2.avif";
import scooter1 from "../assets/scooter1.jpeg";
import scooter2 from "../assets/scooter2.avif";

const RentingFleet = () => {
  // const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  const bikes = [
    {
      name: "Yamaha MT-15",
      image: bike1,
      price: "₹799/Day",
      features: ["Zero Security Deposit", "Doorstep Delivery"],
    },
    {
      name: "Royal Enfield Classic 350",
      image: bike2,
      price: "₹999/Day",
      features: ["Free Helmet", "Instant Booking"],
    },
  ];

  const scooters = [
    {
      name: "Honda Activa",
      image: scooter1,
      price: "₹499/Day",
      features: ["Mileage Friendly", "Easy to Ride"],
    },
    {
      name: "TVS Jupiter",
      image: scooter2,
      price: "₹549/Day",
      features: ["No Deposit", "Quick Pickup"],
    },
  ];

  const additionalBikes = [
    {
      name: "KTM Duke 390",
      image: bike1,
      price: "₹1199/Day",
      features: ["High Performance", "Sporty Design"],
    },
    {
      name: "Hero Xpulse 200",
      image: bike2,
      price: "₹699/Day",
      features: ["Adventure Ready", "Affordable"],
    },
  ];

  // const handleBookVehicle = () => {
  //   navigate("/signin");
  // };

  const handleShowMore = () => {
    setShowMore(true);
  };

  const handleShowLess = () => {
    setShowMore(false);
  };

  return (
    <section className="bg-gray-50 py-14" id="fleet">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Renting Fleet</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {[...bikes, ...scooters, ...(showMore ? additionalBikes : [])].map((vehicle, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-4 w-full max-w-xs hover:shadow-lg transition"
            >
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-40 object-contain rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{vehicle.name}</h3>
              <p className="text-sky-600 font-bold mt-1">{vehicle.price}</p>
              <ul className="text-sm text-gray-500 mt-2 mb-4 space-y-1">
                {vehicle.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
              <button
                // onClick={handleBookVehicle}
                className="bg-sky-600 text-white w-full py-2 rounded-lg hover:bg-sky-700 transition"
              >
                Book Vehicle
              </button>
            </div>
          ))}
        </div>

        {!showMore ? (
          <button
            onClick={handleShowMore}
            className="mt-10 text-sky-600 font-medium hover:underline"
          >
            Show More Options
          </button>
        ) : (
          <button
            onClick={handleShowLess}
            className="mt-10 text-sky-600 font-medium hover:underline"
          >
            Show Less Options
          </button>
        )}
      </div>
    </section>
  );
};

export default RentingFleet;
// a