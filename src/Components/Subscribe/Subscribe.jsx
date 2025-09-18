import React from "react";

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-slate-300 dark:bg-gray-800 text-white"
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>

          {/* Input */}
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Enter your email"
            className="w-full p-3 bg-white text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          {/* Centered Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-full hover:bg-white hover:text-black transition-colors duration-200"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
