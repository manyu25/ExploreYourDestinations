import React from "react";
import { useNavigate } from "react-router-dom";
import packageData from "../Assets/Data/Himachal";

const OurPackages = () => {
  const navigate = useNavigate();

  return (
    <div
      id="packages"
      className="bg-white py-16 px-6 lg:px-20 min-h-screen flex flex-col items-center"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-500 mb-12 text-center">
        ✨ Explore Our Exciting Packages
      </h2>

      {/* Package Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
        {packageData.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-yellow-50 border border-yellow-200 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group"
          >
            <img
              src={pkg.image1}
              alt={pkg.name}
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold text-yellow-600 mb-2">
                {pkg.name}
              </h3>

              <div className="space-y-1 text-gray-800">
                {/* <p>
                  <span className="font-semibold">💰 Price:</span> ${pkg.Price}
                </p> */}
                <p>
                  <span className="font-semibold">🕒 Duration:</span>{" "}
                  {pkg.No_of_days}
                </p>
                <p>
                  <span className="font-semibold">📍 Places:</span>{" "}
                  {pkg.Destination.join(", ")}
                </p>
              </div>

              <button
                onClick={() => navigate(`/packages/${pkg.id}`)}
                className="mt-5 bg-yellow-500 hover:bg-black text-white px-6 py-2 rounded-full transition"
              >
                Show More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPackages;
