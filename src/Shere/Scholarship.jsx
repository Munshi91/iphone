import React, { useRef, useState } from 'react';
import Scholarship_1 from '../../public/assets/images/Scholarships 01.jpg';
import Scholarship_2 from '../../public/assets/images/Scholarships 02.jpg';
import Scholarship_3 from '../../public/assets/images/Scholarships 03.jpg';
import Scholarship_4 from '../../public/assets/images/Scholarships 04.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../src/style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Scholarship = () => {
  return (
    <>
      <Swiper
        centeredSlides={true}
        Autoplay={true}
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
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative cursor-pointer mb-6">
            <img
              className="w-full h-auto"
              src={Scholarship_1}
              alt="dummy-image"
            />
            <button className="absolute  hidden md:block bottom-0 md:left-8 md:mb-10 bg-white text-blue px-4 py-2 rounded  m-2">
              Apply Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative cursor-pointer mb-6">
            <img
              className="w-full h-auto"
              src={Scholarship_2}
              alt="dummy-image"
            />
            <button className="absolute hidden md:block bottom-0 md:left-8 md:mb-10 bg-white text-blue px-4 py-2 rounded  m-2">
              Apply Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative cursor-pointer mb-6">
            <img
              className="w-full h-auto"
              src={Scholarship_3}
              alt="dummy-image"
            />
            <button className="absolute hidden md:block bottom-0 md:left-8 md:mb-10 bg-white text-blue px-4 py-2 rounded  m-2">
              Apply Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative cursor-pointer mb-6">
            <img
              className="w-full h-auto"
              src={Scholarship_4}
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

export default Scholarship;
