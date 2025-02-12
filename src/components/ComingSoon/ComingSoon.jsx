import React from "react";

function ComingSoon() {
  return (
    <div className="flex items-center justify-center mt-24 h-screen bg-gradient-to-r from-[#EF2547] to-purple-600 text-white">
      <div className="text-center">
        <h1 className="md:text-5xl  text-3xl  font-bold mb-4 animate-bounce">Coming Soon 🚀</h1>
        <p className="text-lg opacity-90">Please wait, exciting updates are on the way!</p>
        <div className="mt-6">
          <svg
            className="animate-spin h-10 w-10 mx-auto text-white"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4"></circle>
            <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
