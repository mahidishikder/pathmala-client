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
    <div className="banner-container mt-[93px]"> {/* Adjust margin top according to navbar height */}
      <div className="max-w-screen-2xl mx-auto">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }} // 2 sec delay
          speed={1500} // Smooth transition (1.5 sec)
          className="swiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <div className="px-2">
              <img 
                src="https://www.panjeree.org/DIR/Com/ECO/banner/main_banner/HomeBanner68.webp?id=20250423" 
                alt="Slide 1"
                className="w-full h-auto object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-2">
              <img 
                src="https://www.panjeree.org/DIR/Com/ECO/banner/main_banner/HomeBanner75.webp?id=20250423" 
                alt="Slide 2"
                className="w-full h-auto object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-2">
              <img 
                src="https://www.panjeree.org/DIR/Com/ECO/banner/main_banner/HomeBanner57.webp?id=20250423" 
                alt="Slide 3"
                className="w-full h-auto object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-2">
              <img 
                src="https://www.panjeree.org/DIR/Com/ECO/banner/main_banner/HomeBanner74.webp?id=20250423" 
                alt="Slide 4"
                className="w-full h-auto object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Banner;
