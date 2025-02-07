import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactUsPage = () => {
  const formRef = useRef(null); // Create a reference for the form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // Use formRef to pass the form element to emailjs
    emailjs
      .sendForm(
        "service_6jrikca", // Replace with your EmailJS service ID
        "template_d2wzul8", // Replace with your EmailJS template ID
        formRef.current, // Pass the form element
        "lIDKUFXwAM07Mwlhn" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response.status, response.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.error("Failed to send email:", error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <form
        ref={formRef} // Attach the reference to the form
        onSubmit={handleSubmit}
        className="bg-gradient-to-br from-purple-800 to-purple-900 p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="phone">
            Phone (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition-all"
        >
          Send Message
        </button>

        {/* Status Message */}
        <p className="mt-4 text-center text-sm">{status}</p>
      </form>
    </div>
  );
};

export default ContactUsPage;