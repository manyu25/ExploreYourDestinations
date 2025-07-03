import React, { useState } from "react";

const destinationsData = [
  {
    id: "north",
    name: "North",
    img: "https://media.istockphoto.com/id/821330386/photo/adalaj-stepwell-indian-heritage-tourist-place-ahmedabad-gujarat-world-heritage-city.jpg?s=612x612&w=0&k=20&c=DHBlcVJPnxsKdKt64Q088Z90-SKkI42cNmK8Yfwot2E=",
    locations: [
      "Kedarnath",
      "Badrinath",
      "Gangotri",
      "Yamunotri",
      "Manali",
      "Shimla",
      "Kedarkantha",
      "Haridwar",
      "Rishikesh",
      "Mussorrie",
      "Dehradun",
      "Jammu",
      "Kashmir",
      "Harshil Valley",
      "Delhi",
    ],
  },
  {
    id: "south",
    name: "South",
    img: "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
    locations: [
      "Goa",
      "Ooty",
      "Kanyakumari",
      "Jim Corbett",
      "Coorg",
      "Rameshwaram",
      "Nashik",
    ],
  },
  {
    id: "central",
    name: "Central",
    img: "https://media.istockphoto.com/id/978904956/photo/akshardham-temple-at-night.jpg?s=612x612&w=0&k=20&c=SunRGB2qBQEhVnAU5-RDPDp3OCAACPGzM2vwPiNZKe4=",
    locations: [
      "Agra",
      "Mathura",
      "Puri",
      "Kashi",
      "Ayodhya",
      "Amritsar",
      "Ujjain",
      "Vadodara",
    ],
  },
  {
    id: "east",
    name: "East",
    img: "https://media.istockphoto.com/id/1160316337/photo/tea-plantations.jpg?s=612x612&w=0&k=20&c=5gj1mezzy3cHlCQcqiOIM8pLBLeMyWoxW3e_R57eyv8=",
    locations: [
      "Tunganath",
      "Nainital",
      "Jaipur",
      "Udaipur",
      "Jodhpur",
      "Jaisalmer",
    ],
  },
  {
    id: "west",
    name: "West",
    img: "https://media.istockphoto.com/id/137336783/photo/vittala-temple-stone-chariot-hampi-karnataka-india.jpg?s=612x612&w=0&k=20&c=mQq4me5Nr_8uWnr4eQcJCSy5tcZ46H-QzIxrYsn6f2E=",
    locations: ["12 Jyotirling", "Leh Ladakh", "Mumbai"],
  },
];

const Destinations = () => {
  const [selected, setSelected] = useState(destinationsData[0].id);

  // Get currently selected region's locations
  const currentRegion = destinationsData.find((d) => d.id === selected);

  return (
    <section
      id="destinations"
      className="font-macondo max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Title */}
      <header className="flex justify-center items-center bg-yellow-400 py-8 rounded-xl shadow-md mb-8">
        <h1 className="text-4xl font-bold tracking-wide text-white">
          Our Destinations
        </h1>
      </header>

      <div className="flex flex-col sm:flex-row gap-8">
        {/* Sidebar */}
        <nav className="w-full sm:w-1/3 bg-white p-6 rounded-xl shadow-lg flex flex-col gap-6">
          {destinationsData.map(({ id, name, img }) => (
            <button
              key={id}
              onClick={() => setSelected(id)}
              className={`group flex items-center gap-4 p-4 rounded-lg cursor-pointer
                transition-all duration-300
                ${
                  selected === id
                    ? "bg-yellow-300 shadow-lg ring-2 ring-yellow-500"
                    : "bg-yellow-200 hover:ring-2 hover:ring-yellow-400"
                }
              `}
              aria-current={selected === id ? "true" : "false"}
            >
              <img
                src={img}
                alt={`${name} region`}
                className="h-16 w-20 rounded-lg object-cover shadow-sm"
                loading="lazy"
              />
              <span
                className={`text-lg font-semibold tracking-wide transition-colors duration-300
                ${
                  selected === id
                    ? "text-sky-900"
                    : "text-sky-700 group-hover:text-sky-900"
                }`}
              >
                {name}
              </span>
            </button>
          ))}
        </nav>

        {/* Main Content */}
        <main
          className="w-full sm:w-2/3 bg-yellow-200 rounded-xl p-6 shadow-inner overflow-y-auto max-h-[40rem]"
          aria-live="polite"
        >
          <h2 className="text-2xl font-bold text-sky-900 mb-6">
            {currentRegion.name} Destinations
          </h2>

          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-900 uppercase font-medium tracking-wider">
            {currentRegion.locations.map((location) => (
              <li
                key={location}
                className="bg-white rounded-md p-3 shadow-md flex items-center gap-2 hover:bg-sky-50 transition cursor-pointer"
              >
                <i className="fa-solid fa-location-arrow text-sky-600"></i>
                <span>{location}</span>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </section>
  );
};

export default Destinations;
