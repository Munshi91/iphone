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
          <div className="relative w-full md:h-[600px] h-[500px] overflow-hidden">
            <div className="absolute inset-0  flex justify-center md:justify-end">
              <img
                src={Scholarship_1}
                alt="Background Image"
                className="object-cover object-center"
              />
            </div>
            <div className="relative md:mt-10 z-10 flex flex-col justify-center items-center  text-center">
              <h1 className="md:text-6xl text-2xl text-white font-bold leading-tight mb-4">
                Your dreams emerge here...
              </h1>
              <p className="md:text-2xl text-xl text-white mb-4">
                We offer high-quality and professional <br />
                UK University Admission services
              </p>
              <div className="md:px-8 sm:items-start sm:justify-center md:pb-6 sm:px-0 md:space-x-5  md:flex">
                <a
                  href="#"
                  className="inline-flex  items-center px-4 justify-center w-full md:px-6 py-2 text-lg font-semibold text-blue hover:text-white bg-transparent border border-blue sm:w-auto rounded-full hover:bg-blue focus:outline-none"
                  role="button"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full md:h-[600px] h-[500px] overflow-hidden">
            <div className="absolute inset-0  flex justify-center md:justify-end">
              <img
                src={Scholarship_2}
                alt="Background Image"
                className="object-cover object-center"
              />
            </div>
            <div className="relative md:mt-10 z-10 flex flex-col justify-center items-center  text-center">
              <h1 className="md:text-6xl text-2xl text-white font-bold leading-tight mb-4">
                Your dreams emerge here...
              </h1>
              <p className="md:text-2xl text-xl text-white mb-4">
                We offer high-quality and professional <br />
                UK University Admission services
              </p>
              <div className="md:px-8 sm:items-start sm:justify-center md:pb-6 sm:px-0 md:space-x-5  md:flex">
                <a
                  href="#"
                  className="inline-flex  items-center px-4 justify-center w-full md:px-6 py-2 text-lg font-semibold text-blue hover:text-white bg-transparent border border-blue sm:w-auto rounded-full hover:bg-blue focus:outline-none"
                  role="button"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full md:h-[600px] h-[500px] overflow-hidden">
            <div className="absolute inset-0  flex justify-center md:justify-end">
              <img
                src={Scholarship_3}
                alt="Background Image"
                className="object-cover object-center"
              />
            </div>
            <div className="relative md:mt-10 z-10 flex flex-col justify-center items-center  text-center">
              <h1 className="md:text-6xl text-2xl text-white font-bold leading-tight mb-4">
                Your dreams emerge here...
              </h1>
              <p className="md:text-2xl text-xl text-white mb-4">
                We offer high-quality and professional <br />
                UK University Admission services
              </p>
              <div className="md:px-8 sm:items-start sm:justify-center md:pb-6 sm:px-0 md:space-x-5  md:flex">
                <a
                  href="#"
                  className="inline-flex  items-center px-4 justify-center w-full md:px-6 py-2 text-lg font-semibold text-blue hover:text-white bg-transparent border border-blue sm:w-auto rounded-full hover:bg-blue focus:outline-none"
                  role="button"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full md:h-[600px] h-[500px] overflow-hidden">
            <div className="absolute inset-0  flex justify-center md:justify-end">
              <img
                src={Scholarship_4}
                alt="Background Image"
                className="object-cover object-center"
              />
            </div>
            <div className="relative md:mt-10 z-10 flex flex-col justify-center items-center  text-center">
              <h1 className="md:text-6xl text-2xl text-white font-bold leading-tight mb-4">
                Your dreams emerge here...
              </h1>
              <p className="md:text-2xl text-xl text-white mb-4">
                We offer high-quality and professional <br />
                UK University Admission services
              </p>
              <div className="md:px-8 sm:items-start sm:justify-center md:pb-6 sm:px-0 md:space-x-5  md:flex">
                <a
                  href="#"
                  className="inline-flex  items-center px-4 justify-center w-full md:px-6 py-2 text-lg font-semibold text-blue hover:text-white bg-transparent border border-blue sm:w-auto rounded-full hover:bg-blue focus:outline-none"
                  role="button"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Scholarship;
