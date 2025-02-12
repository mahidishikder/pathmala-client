import React from 'react';
import './style.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

function Banner() {
  return (
    <div className="banner-container  mt-[97px]"> {/* Adjust margin top according to navbar height */}
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }} // 2 sec delay
        speed={1500} // Smooth transition (1.5 sec)
        className="swiper"
        breakpoints={{
          640: {
            slidesPerView: 1, // Show 1 slide on small screens
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 1, // Adjust as necessary for larger screens
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide>
          <img 
            src="https://www.bookswagon.com/bannerimages/70_inr.jpg?v=3.5" 
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="https://www.bookswagon.com/bannerimages/85_inr.jpg?v=3.5" 
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="https://www.bookswagon.com/bannerimages/32_inr.jpg?v=1.4" 
            alt="Slide 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="https://www.bookswagon.com/bannerimages/79_inr.jpg?v=3.5" 
            alt="Slide 4"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
