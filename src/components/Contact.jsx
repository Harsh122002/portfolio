import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";  // Importing the download icon from react-icons

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const googleWebAppURL = 'https://script.google.com/macros/s/AKfycbyg_kK9JwPwhWJ3ZSgCIti2qIX62KCezssZP9-HEVGZmqEaQ0z-ePdPk5CZypG_FJBg/exec';

      // Send the form data as JSON to the Google Apps Script Web App
      const response = await fetch(googleWebAppURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8', // Set the content type to JSON
        },
        body: JSON.stringify(formData), // Stringify the form data
      });

      const result = await response.json();

      if (result.result === "success") {
        alert("Form submitted successfully!");
        setFormData({ name: "", email: "", mobile: "", message: "" }); // Reset form
      } else {
        alert("There was an error submitting the form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-white flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Me</h2>

        {/* Name Input */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Your name"
            required
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Your email"
            required
          />
        </div>

        {/* Mobile Input */}
        <div className="mb-4">
          <label htmlFor="mobile" className="block text-sm mb-1">
            Mobile
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Your mobile number"
            required
          />
        </div>

        {/* Message Input */}
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Your message"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 bg-teal-500 rounded text-white font-semibold hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

        {/* Resume Download Button */}
        <div className="mt-6 text-center">
          <a
            href="/path-to-your-resume.pdf"
            download="Resume.pdf"
            className="inline-flex items-center py-2 px-4 bg-teal-500 rounded text-white font-semibold hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
          >
            <FaDownload className="w-5 h-5 mr-2 animate-bounce" />
            Download Resume
          </a>
        </div>
      </form>
    </div>
  );
}
