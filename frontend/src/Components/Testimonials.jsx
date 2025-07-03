import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Vipul Mishra",
    role: "Travel Enthusiast",
    text: "This was an unforgettable experience! Everything was well organized, and the guides were amazing. Highly recommend!",
  },
  {
    name: "Abhimanyu Tripathi",
    role: "Adventure Seeker",
    text: "I had the best time! The itinerary was perfect, and every moment was filled with excitement and breathtaking views.",
  },
  {
    name: "Pratyush Mishra",
    role: "Solo Traveler",
    text: "Absolutely loved this trip! Great accommodations, friendly staff, and incredible locations. Can't wait for my next adventure!",
  },
  {
    name: "Sonali Kashyap",
    role: "Nature Lover",
    text: "The best trip of my life! Everything was well managed, and I got to see some of the most breathtaking landscapes.",
  },
  {
    name: "Piyush Mishra",
    role: "Explorer",
    text: "An extraordinary trip! The landscapes, the people, and the adventures were beyond my expectations. Would do it again!",
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);

  // Auto-scroll carousel
  useEffect(() => {
    const scroll = scrollRef.current;
    const interval = setInterval(() => {
      if (scroll) {
        scroll.scrollBy({ left: 300, behavior: "smooth" });
        if (scroll.scrollLeft + scroll.offsetWidth >= scroll.scrollWidth - 10) {
          scroll.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="testimonials" className="bg-white py-20 px-5 md:px-10">
      <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-500 text-center mb-10">
        🌟 What Our Travelers Say
      </h2>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar px-2 md:px-10 py-6 scroll-smooth"
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-yellow-100 border border-yellow-300 rounded-2xl shadow-lg w-80 min-w-[20rem] p-6 flex-shrink-0 hover:scale-105 transition-transform duration-300"
          >
            <FaQuoteLeft className="text-yellow-400 text-2xl mb-3" />
            <p className="text-gray-800 italic">"{testimonial.text}"</p>
            <FaQuoteRight className="text-yellow-400 text-2xl mt-3" />
            <h3 className="text-yellow-600 mt-4 text-lg font-bold">
              {testimonial.name}
            </h3>
            <p className="text-yellow-500 text-sm">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
