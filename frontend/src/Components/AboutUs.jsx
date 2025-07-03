import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkedAlt,
  FaPlaneDeparture,
  FaCameraRetro,
} from "react-icons/fa";
import TravelVideo from "../Assets/Travel.mp4";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white font-macondo"
    >
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={TravelVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-5 max-w-5xl space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold"
        >
          Experience India Like Never Before🌏
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-gray-200"
        >
          At{" "}
          <span className="text-yellow-400 font-semibold">
            Explore Your Destination
          </span>
          , we transform your travel dreams into extraordinary memories—crafted
          with love, culture, and a touch of adventure.
        </motion.p>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {[
            {
              icon: <FaPlaneDeparture size={30} />,
              title: "Seamless Travel",
              desc: "Smooth journeys from source to destination.",
            },
            {
              icon: <FaCameraRetro size={30} />,
              title: "Capture Moments",
              desc: "Photogenic spots handpicked by travelers.",
            },
            {
              icon: <FaMapMarkedAlt size={30} />,
              title: "Curated Paths",
              desc: "Every itinerary crafted just for you.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md p-5 rounded-xl w-72 text-left hover:scale-105 transition transform"
            >
              <div className="text-yellow-400 mb-2">{item.icon}</div>
              <h4 className="text-xl font-semibold">{item.title}</h4>
              <p className="text-sm text-gray-200 mt-2">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          <a href="#contact">
            <button className="mt-6 bg-yellow-400 hover:bg-black hover:text-white text-black px-8 py-3 text-lg font-bold rounded-full shadow-xl transition-transform transform hover:scale-110">
              Start Your Journey
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
