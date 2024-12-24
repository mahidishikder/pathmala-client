function About() {
  return (
    <div className="p-6 bg-gray-50 max-w-7xl mx-auto py-16 rounded-xl my-24">
      {/* Section Title */}
      <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
        About Our Library Management System
      </h2>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to our Library Management System (LMS), your ultimate partner
          for managing library operations efficiently. Our system bridges the
          gap between readers and libraries, offering a user-friendly platform
          to enhance book management, reading experiences, and much more.
        </p>
        <div className="mt-8 ">
        <iframe className="mx-auto rounded-md" width="560" height="315" src="https://www.youtube.com/embed/1gzXwNt3lWA?si=XoNufTZN2kOcWTZl" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen></iframe>
        </div>
      </div>

      {/* History, Mission, Vision */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* History */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Our History
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Founded in 2023, our LMS was created to digitize and simplify library
            services. Starting as a small project, we’ve now evolved into a
            trusted partner for libraries globally.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-600 leading-relaxed">
            To empower libraries with innovative solutions, enabling seamless
            access to books and resources for readers of all ages.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Our Vision
          </h3>
          <p className="text-gray-600 leading-relaxed">
            To create a world where knowledge is accessible to everyone,
            fostering a lifelong love for reading and learning.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16">
        <h3 className="text-4xl font-semibold text-gray-800 text-center mb-10">
          What We Offer
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-blue-50 shadow-md rounded-lg p-6">
            <h4 className="text-xl font-bold text-gray-700 mb-3">
              Seamless Book Management
            </h4>
            <p className="text-gray-600">
              Manage extensive book collections with ease using advanced search,
              categorization, and filtering options.
            </p>
          </div>
          <div className="bg-green-50 shadow-md rounded-lg p-6">
            <h4 className="text-xl font-bold text-gray-700 mb-3">
              Personalized Recommendations
            </h4>
            <p className="text-gray-600">
              Help readers discover their next favorite book with our
              AI-powered recommendation engine.
            </p>
          </div>
          <div className="bg-yellow-50 shadow-md rounded-lg p-6">
            <h4 className="text-xl font-bold text-gray-700 mb-3">
              Real-Time Notifications
            </h4>
            <p className="text-gray-600">
              Keep readers informed about due dates, upcoming events, and new
              arrivals in real time.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-20 bg-gray-100 py-16">
        <h3 className="text-4xl font-semibold text-gray-800 text-center mb-10">
          What Our Users Say
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="bg-white shadow-md rounded-lg p-6">
            <p className="text-gray-600 italic">
              "This platform has completely transformed our library operations.
              The user interface is fantastic, and the features are top-notch."
            </p>
            <p className="mt-4 text-gray-800 font-bold">- Sarah Johnson</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <p className="text-gray-600 italic">
              "I love how easy it is to manage and borrow books. The
              notifications and recommendations are incredibly helpful!"
            </p>
            <p className="mt-4 text-gray-800 font-bold">- Mark Lee</p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mt-16 bg-blue-100 py-12">
        <h3 className="text-4xl font-semibold text-gray-800 text-center mb-6">
          Get in Touch
        </h3>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-6">
          Have questions or need support? Reach out to us anytime. We're here to
          help!
        </p>
        <div className="text-center">
          <p className="text-gray-800 font-semibold">
            Email: support@libraryms.com
          </p>
          <p className="text-gray-800 font-semibold">
            Phone: +1 (234) 567-890
          </p>
          <p className="text-gray-800 font-semibold">
            Address: 123 Library Lane, Booktown
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
