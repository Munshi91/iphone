import University_Hertfordshire from '../../public/assets/images/University of Hertfordshire.png';
import Northumbria_University from '../../public/assets/images/Northumbria University.webp';
import Ulster_University from '../../public/assets/images/Ulster University.webp';
import Canterbury_Christ_University from '../../public/assets/images/Canterbury-Christ-Church-University.webp';
import University_Law from '../../public/assets/images/University of Law.webp';
import University_Chester from '../../public/assets/images/University of Chester.webp';

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
        // slidesPerView={1.5}
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
              src={University_Hertfordshire}
              alt="dummy-image"
            />
            <div className="absolute bottom-0 md:left-8 md:mb-10">
              <h2 className="md:text-4xl text-2xl px-2 md:px-0 text-white font-bold leading-tight mb-10 md:mb-4">
                University of Hertfordshire
              </h2>
              <button className=" hidden md:block   bg-white text-blue px-4 py-2 rounded  m-2">
                Apply Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full"
              src={Northumbria_University}
              alt="dummy-image"
            />
            <div className="absolute bottom-0 md:left-8 md:mb-10">
              <h2 className="md:text-4xl text-2xl px-2 md:px-0 text-white font-bold leading-tight mb-10 md:mb-4">
                Northumbria University
              </h2>
              <button className=" hidden md:block  bg-white text-blue px-4 py-2 rounded  m-2">
                Apply Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="w-full" src={Ulster_University} alt="dummy-image" />
            <div className="absolute bottom-0 md:left-8 md:mb-10">
              <h2 className="md:text-4xl text-2xl px-2 md:px-0 text-white font-bold leading-tight mb-10 md:mb-4">
                Ulster University
              </h2>
              <button className=" hidden md:block bg-white text-blue px-4 py-2 rounded  m-2">
                Apply Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full"
              src={Canterbury_Christ_University}
              alt="dummy-image"
            />

            <div className="absolute bottom-0 md:left-8 md:mb-10">
              <h2 className="md:text-4xl text-2xl px-2 md:px-0 text-white font-bold leading-tight mb-10 md:mb-4">
                Canterbury Christ Church University
              </h2>
              <button className=" hidden md:block   bg-white text-blue px-4 py-2 rounded  m-2">
                Apply Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="w-full" src={University_Law} alt="dummy-image" />

            <div className="absolute bottom-0 md:left-8 md:mb-10">
              <h2 className="md:text-4xl text-2xl px-2 md:px-0 text-white font-bold leading-tight mb-10 md:mb-4">
                University of Law
              </h2>
              <button className=" hidden md:block   bg-white text-blue px-4 py-2 rounded  m-2">
                Apply Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full"
              src={University_Chester}
              alt="dummy-image"
            />
            <div className="absolute bottom-0 md:left-8 md:mb-10">
              <h2 className="md:text-4xl text-2xl px-2 md:px-0 text-white font-bold leading-tight mb-10 md:mb-4">
                University of Chester
              </h2>
              <button className=" hidden md:block   bg-white text-blue px-4 py-2 rounded  m-2">
                Apply Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BigSlider;
