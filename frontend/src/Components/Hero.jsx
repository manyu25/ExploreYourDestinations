import { useState, useEffect } from "react";

const Hero = () => {
  const destinations = ["Delhi", "Goa", "Mumbai", "Manali", "Jaipur"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % destinations.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full h-[100vh] bg-cover bg-center flex flex-col justify-center items-center text-center"
      style={{
        backgroundImage:
          "url('https://www.muchbetteradventures.com/magazine/content/images/2024/04/mount-everest-at-sunset-1.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

      {/* Content */}
      <div className="relative z-10 px-4 max-w-3xl mt-20 md:mt-0">
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
          Discover best place to enjoy your next{" "}
          <span className="text-yellow-400">Vacation</span>
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          Escape the busy days. Let us guide you to your dream destination 🌍
        </p>

        {/* Ticket Box */}
        <div className="mt-10 bg-white rounded-full shadow-xl px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 max-w-2xl mx-auto">
          <div className="text-left">
            <label className="text-sm font-medium text-gray-500">
              Destination
            </label>
            <div className="text-lg font-semibold text-gray-700">
              {destinations[current]}
            </div>
          </div>
          <div className="text-left">
            <label className="text-sm font-medium text-gray-500">Start</label>
            <div className="text-lg font-semibold text-gray-700">Today</div>
          </div>
          <button className="bg-yellow-500 hover:bg-black text-white font-bold px-6 py-3 rounded-full transition">
            <a href="#packages">Book Now</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
