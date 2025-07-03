import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Popup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Send form data to email
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "your_service_id", // Replace with your EmailJS Service ID
        "your_template_id", // Replace with your EmailJS Template ID
        formData,
        "your_public_key" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert("Details sent successfully!");
          onClose(); // Close modal after sending
        },
        (error) => {
          alert("Failed to send! " + error.text);
        }
      );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 animate-fadeIn">
        <h2 className="text-xl font-bold mb-4">Enter Your Details</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>

        <button
          onClick={onClose}
          className="mt-3 text-red-500 hover:underline text-sm"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
