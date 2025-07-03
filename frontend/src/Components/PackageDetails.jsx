import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import packageData from "../Assets/Data/Himachal";

const PackageDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the package by ID
  const packageInfo = packageData.find((pkg) => pkg.id === Number(id));

  if (!packageInfo) {
    return (
      <div className="text-center text-red-600 text-xl mt-10">
        Package not found
      </div>
    );
  }

  return (
    <div className="p-10 bg-yellow-100 min-h-screen">
      <button
        className="mb-4 px-5 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
        <img
          src={packageInfo.image2}
          alt={packageInfo.name}
          className="w-full h-90 object-cover rounded-md"
        />
        <h1 className="text-3xl font-bold mt-4">{packageInfo.name}</h1>
        <p className="text-gray-700 text-lg">
          <strong>Starting Point(s):</strong> {packageInfo.Starting.join(", ")}
        </p>
        <p className="text-gray-700 text-lg">
          <strong>Places Covered:</strong> {packageInfo.Destination.join(", ")}
        </p>
        <p className="text-gray-700 text-lg">
          <strong>Duration:</strong> {packageInfo.No_of_days}
        </p>

        <h2 className="text-2xl font-semibold mt-6">Itinerary:</h2>
        <div className="max-h-80 overflow-y-auto p-2 border rounded-lg mt-2">
          {packageInfo.Itenerary.map((day) => (
            <div key={day.day} className="mb-4">
              <h3 className="text-lg font-semibold">{`Day ${day.day}: ${day.loc} (${day.dist} km / ${day.time} hrs)`}</h3>
              <p className="text-gray-700">{day.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
