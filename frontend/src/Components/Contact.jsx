import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_5qh5btq",
        "template_6q4fdcz",
        formData,
        "yvki4_jI4BmV-q1OF"
      )
      .then(
        () => {
          alert(
            "Your booking request has been sent successfully! You will be contacted soon"
          );
          setFormData({
            name: "",
            mobile: "",
            address: "",
            email: "",
          });
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send booking request. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-yellow-100 p-6"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-sky-900">
          Book Your Package
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Fill in the details to book your dream destination.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
          />

          <input
            type="text"
            name="address"
            placeholder="Your Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-black text-white font-bold py-3 rounded-lg transition"
          >
            Book Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
