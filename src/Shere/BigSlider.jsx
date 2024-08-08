import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../src/style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const BigSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1.5}
        centeredSlides={true}
        Autoplay={true}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1.5,
            spaceBetween: 30,
          },
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full"
              src="https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/95/7f/ab/957fabae-88d1-44ac-4563-99a2031940b9/495c4f92-6599-4726-9a25-28f82a134274.png/1250x703.jpg"
              alt="dummy-image"
            />
            <button className="absolute hidden md:block bottom-0 md:left-8 md:mb-10 bg-white text-blue px-4 py-2 rounded  m-2">
              Apply Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full"
              src="https://is1-ssl.mzstatic.com/image/thumb/h35-1VMy-HmXA9voJRCO2Q/1250x703.jpg"
              alt="dummy-image"
            />
            <button className="absolute hidden md:block bottom-0 md:left-8 md:mb-10 bg-white text-blue px-4 py-2 rounded  m-2">
              Apply Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full"
              src="https://is1-ssl.mzstatic.com/image/thumb/p-dFQhrrenz0eg8_smgu9w/1250x703.jpg"
              alt="dummy-image"
            />
            <button className="absolute hidden md:block bottom-0 md:left-8 md:mb-10 bg-white text-blue px-4 py-2 rounded  m-2">
              Apply Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full"
              src="https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/95/7f/ab/957fabae-88d1-44ac-4563-99a2031940b9/495c4f92-6599-4726-9a25-28f82a134274.png/1250x703.jpg"
              alt="dummy-image"
            />
            <button className="absolute hidden md:block bottom-0 md:left-8 md:mb-10 bg-white text-blue px-4 py-2 rounded  m-2">
              Apply Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full"
              src="https://is1-ssl.mzstatic.com/image/thumb/h35-1VMy-HmXA9voJRCO2Q/1250x703.jpg"
              alt="dummy-image"
            />
            <button className="absolute hidden md:block bottom-0 md:left-8 md:mb-10 bg-white text-blue px-4 py-2 rounded  m-2">
              Apply Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full"
              src="https://is1-ssl.mzstatic.com/image/thumb/p-dFQhrrenz0eg8_smgu9w/1250x703.jpg"
              alt="dummy-image"
            />
            <button className="absolute hidden md:block bottom-0 md:left-8 md:mb-10 bg-white text-blue px-4 py-2 rounded  m-2">
              Apply Now
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BigSlider;
