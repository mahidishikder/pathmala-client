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
                src="https://images.squarespace-cdn.com/content/v1/5e29a9b234f10469ac7c3685/21b359d1-3ea1-4fde-adfe-89687f3f89da/woman-choosing-library-book.jpg" 
                alt="Slide 1"
                className="w-full h-auto object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-2">
              <img 
                src="https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/93D7/production/_88574873_thinkstockphotos-78436286.jpg" 
                alt="Slide 2"
                className="w-full h-auto object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-2">
              <img 
                src="https://www.press-citizen.com/gcdn/presto/2018/09/19/PIOC/0b3b4a08-5679-4002-8be8-5eb270f77e72-0919-Library-001.JPG?crop=4895,2742,x0,y129&width=3200&height=1793&format=pjpg&auto=webp" 
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
