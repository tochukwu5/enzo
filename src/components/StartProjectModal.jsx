import { useState } from "react";

export const ProjectModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-6 relative animate-fadeIn">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Let’s Start Your Project
        </h2>

        {/* Form */}
        <form className="grid gap-4 text-gray-800">

          <input
            type="text"
            placeholder="Name"
            className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-600"
          />

          <input
            type="email"
            placeholder="Email"
            className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-600"
          />

          <input
            type="text"
            placeholder="Project Type"
            className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-600"
          />

          <input
            type="text"
            placeholder="Budget"
            className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-600"
          />

          <input
            type="text"
            placeholder="Timeline"
            className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-600"
          />

          <textarea
            placeholder="Project Details"
            rows="4"
            className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-600"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Project
          </button>

        </form>
      </div>
    </div>
  );
};