import { useState } from "react";
import logoTA from "../Assets/logoTA.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-600 fixed w-full top-0 z-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <a href="/home">
            <img
              src={logoTA}
              alt="Logo"
              className="h-24 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              {["About", "Destinations", "Packages", "Testimonials"].map(
                (item) => (
                  <li key={item}>
                    <a
                      className="text-white text-lg hover:text-yellow-400"
                      href={`#${item.toLowerCase()}`}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Book Now Button */}
          <a
            className="hidden md:block rounded-md bg-yellow-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-black"
            href="#contact"
          >
            Book Now
          </a>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden p-2 text-gray-600 transition hover:text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              // Close Icon
              <svg
                className="w-6 h-6 bg-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                className="w-6 h-6 bg-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <nav className="absolute top-24 left-0 w-full bg-black bg-opacity-90 p-4 rounded-b-lg md:hidden">
            <ul className="flex flex-col items-center gap-4 text-white text-lg">
              {["About Us", "Destinations", "Packages", "Testimonials"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-yellow-400"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;
