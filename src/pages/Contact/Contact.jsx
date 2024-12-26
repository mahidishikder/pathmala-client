import { Helmet } from "react-helmet";

function Contact() {
  return (
    <div className="bg-gray-50 py-12 max-w-7xl mx-auto  my-24 rounded">
      <Helmet>
        <title>Contact</title>
      </Helmet>
      {/* Section Title */}
      <h2 className="text-5xl font-extrabold text-gray-800 text-center mb-12">
        Get in Touch
      </h2>

      {/* Contact Details and Form */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-6">
        {/* Contact Information */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-gray-700">Contact Information</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            We're here to help and answer any questions you might have. Reach
            out to us through any of the following ways.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="bg-blue-500 text-white p-3 rounded-full">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="text-gray-700 font-medium">
                Email: <a href="mailto:support@libraryms.com" className="text-blue-500">support@libraryms.com</a>
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="bg-green-500 text-white p-3 rounded-full">
                <i className="fas fa-phone"></i>
              </span>
              <span className="text-gray-700 font-medium">
                Phone: <a href="tel:+1234567890" className="text-green-500">+1 (234) 567-890</a>
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="bg-yellow-500 text-white p-3 rounded-full">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <span className="text-gray-700 font-medium">
                Address: 123 Library Lane, Booktown
              </span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-3xl font-bold text-gray-700 mb-6">Send Us a Message</h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300"
                placeholder="Write your message here"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16">
        <h3 className="text-3xl font-bold text-gray-700 text-center mb-6">
          Find Us Here
        </h3>
        <div className="w-full h-96 rounded-lg shadow-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509465!2d144.9556513153185!3d-37.81733497975153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xfb7b9b9f8dd4c0e1!2sState%20Library%20Victoria!5e0!3m2!1sen!2sbd!4v1672589029371!5m2!1sen!2sbd"
            allowFullScreen
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
