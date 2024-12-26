import { motion } from 'framer-motion';

function Banner() {
  return (
    <div className="carousel w-full">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://plus.unsplash.com/premium_photo-1721762724233-1332468b252f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Library Image"
          className="w-full h-[700px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white/80">
            <motion.h1
             initial={{ x: '-100%' }}  
             animate={{ x: 0 }}        
             transition={{ duration: 2 }}
             className="text-4xl sm:text-5xl font-bold">Explore a World of Books at Our Library</motion.h1>
            <motion.p
            initial={{ x: '100%' }}  
            animate={{ x: 0 }}       
            transition={{ duration: 2 }}
             className="mt-6 text-lg sm:text-xl">Welcome to our digital library, where knowledge, adventure, and imagination come alive. Browse through a wide collection of books across <br /> genres and discover new worlds, stories, and ideas.</motion.p>
            <div className="mt-8">
              <motion.a
               initial={{ opacity: 0 }}  
               animate={{ opacity: 1 }}  
               transition={{ duration: 2 }}
               href="#slide2" className="bg-[#0075FF] py-3 px-14 rounded mx-2">Book Borrow</motion.a>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1524578271613-d550eacf6090?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Library Image"
          className="w-full h-[700px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white/80">
            <h1 className="text-4xl sm:text-5xl font-bold">Unleash Your Imagination with Our Library</h1>
            <p className="mt-6 text-lg sm:text-xl">Dive into a world of endless possibilities with our digital library. With an ever-growing collection of books across all genres, we offer something for every reader. <br /> From educational resources to imaginative tales.</p>
            <div className="mt-8">
              <a href="#slide3" className="bg-[#0075FF] py-3 px-14 rounded mx-2">Learn More</a>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Library Image"
          className="w-full h-[700px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white/80">
            <h1 className="text-4xl sm:text-5xl font-bold">Discover New Horizons in Our Library</h1>
            <p className="mt-6 text-lg sm:text-xl">Step into a realm where every page turns into an adventure. Our digital library offers a diverse collection of books, from timeless classics to contemporary  <br />  masterpieces.Whether you're seeking knowledge.</p>
            <div className="mt-8">
              <a href="#slide1" className="bg-[#0075FF] py-3 px-14 rounded mx-2">Learn More</a>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
}

export default Banner;

