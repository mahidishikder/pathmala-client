import React from "react";
import { Helmet } from "react-helmet";

function About() {
  return (
   <div className="dark:bg-slate-700 ">
     <div className="max-w-7xl mx-auto px-6 py-16 mt-20  ">
      <Helmet>
        <title>About Us - Borrow Library</title>
      </Helmet>
      <h1 className="text-2xl md:text-4xl  font-bold text-center dark:text-white/90 text-gray-800  mb-12">
        About Borrow Library
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="text-lg text-gray-700 dark:text-white/70">
          <p className="mb-6 ">
            Welcome to Borrow Library, your go-to platform for borrowing books
            online! We aim to provide a vast collection of books across various
            categories for readers of all ages. Whether you're interested in
            fiction, non-fiction, educational resources, or comics, we've got
            you covered.
          </p>
          <p className="mb-6">
            At Borrow Library, we make borrowing books easy and convenient. Our
            simple and user-friendly interface allows you to browse through our
            collection, select books, and borrow them directly from the website.
            We offer both physical and digital books, depending on availability.
          </p>
          <p className="mb-6">
            We believe in promoting a culture of reading and learning. Our mission
            is to make books accessible to everyone, regardless of location or
            financial constraints. We also provide a user-friendly "Borrow Now"
            feature, making it easy for you to get your hands on your favorite
            books quickly.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src="https://assets.penguinrandomhouse.com/wp-content/uploads/2023/03/21115910/EM_1080x1080_refresh-3.jpg"
            alt="Library"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <h2 className="text-2xl font-semibold dark:text-white/80  text-center text-gray-800 mt-12 mb-6">
        How It Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center">
          <div className="bg-[#F24F6B] p-6 rounded-full text-white mb-4">
            <i className="fas fa-book"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2 dark:text-white/70">Browse Books</h3>
          <p className="text-gray-600 dark:text-white/70">
            Explore our vast collection of books across various categories.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-[#F24F6B] p-6 rounded-full text-white mb-4">
            <i className="fas fa-search"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2 dark:text-white/70">Select Your Book</h3>
          <p className="text-gray-600 dark:text-white/70">
            Pick the book you want to borrow and click on the "Borrow Now" button.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-[#F24F6B] p-6 rounded-full text-white mb-4">
            <i className="fas fa-handshake"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2 dark:text-white/70">Borrow and Enjoy</h3>
          <p className="text-gray-600 dark:text-white/70">
            Borrow your selected book and start reading it right away. Happy reading!
          </p>
        </div>
      </div>
    </div>
   </div>
  );
}

export default About;

