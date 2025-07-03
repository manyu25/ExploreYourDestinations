import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold">Explore Your Destination</h2>
          <p className="mt-2 text-gray-400">
            Explore India with our curated travel packages. Adventure awaits!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#hero" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#Packages" className="text-gray-400 hover:text-white">
                Packages
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p className="mt-2 text-gray-400">
            📧 Email: exploreyourdestinations@gmail.com
          </p>
          <p className="text-gray-400">
            📞 Phone: +91 8565069979, +91 7526000690, +91 8787257970
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/share/18bjPoDJJz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 text-2xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/exploreyourdestinations"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 text-2xl"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Explore Your Destinations. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
