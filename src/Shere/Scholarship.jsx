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
            <div className="relative mt-4 md:mt-10 z-10 flex flex-col justify-center items-center  text-center">
              <h1 className="md:text-6xl text-3xl text-white font-bold leading-tight mb-4">
                Commonwealth Scholarships
              </h1>
              <p className="md:text-2xl text-xl text-white mb-4">
                We offer high-quality and professional <br />
                UK University Admission services
              </p>
              <div className="md:px-8 sm:items-start sm:justify-center md:pb-6 sm:px-0 md:space-x-5  md:flex">
                <a
                  href="#"
                  title=""
                  className="mb-3 sm:mb-0 inline-flex items-center justify-center w-full px-4 md:px-6 py-2 text-lg font-semibold text-white  bg-blue border hover:bg-transparent border-transparent hover:border-blue hover:text-blue sm:w-auto rounded-full  focus:outline-none "
                  role="button"
                >
                  Learn more
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
            <div className="relative mt-4 md:mt-10 z-10 flex flex-col justify-center items-center  text-center">
              <h1 className="md:text-6xl text-3xl text-white font-bold leading-tight mb-4">
                GREAT Scholarships...
              </h1>
              <p className="md:text-2xl text-xl text-white mb-4">
                We offer high-quality and professional <br />
                UK University Admission services
              </p>
              <div className="md:px-8 sm:items-start sm:justify-center md:pb-6 sm:px-0 md:space-x-5  md:flex">
                <a
                  href="#"
                  title=""
                  className="mb-3 sm:mb-0 inline-flex items-center justify-center w-full px-4 md:px-6 py-2 text-lg font-semibold text-white  bg-blue border hover:bg-transparent border-transparent hover:border-blue hover:text-blue sm:w-auto rounded-full  focus:outline-none "
                  role="button"
                >
                  Learn more
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
            <div className="relative mt-4 md:mt-10 z-10 flex flex-col justify-center items-center  text-center">
              <h1 className="md:text-6xl text-3xl text-white font-bold leading-tight mb-4">
                Chevening Scholarships
              </h1>
              <p className="md:text-2xl text-xl text-white mb-4">
                Since 1983, Chevening has brought over 60000 exceptional
                <br />
                professionals from around the world...
              </p>
              <div className="md:px-8 sm:items-start sm:justify-center md:pb-6 sm:px-0 md:space-x-5  md:flex">
                <a
                  href="#"
                  title=""
                  className="mb-3 sm:mb-0 inline-flex items-center justify-center w-full px-4 md:px-6 py-2 text-lg font-semibold text-white  bg-blue border hover:bg-transparent border-transparent hover:border-blue hover:text-blue sm:w-auto rounded-full  focus:outline-none "
                  role="button"
                >
                  Learn more
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
            <div className="relative mt-4 md:mt-10 z-10 flex flex-col justify-center items-center  text-center">
              <h1 className="md:text-6xl text-3xl text-white font-bold leading-tight mb-4">
                Others Scholarship...
              </h1>
              <p className="md:text-2xl text-xl text-white mb-4">
                We offer high-quality and professional <br />
                UK University Admission services
              </p>
              <div className="md:px-8 sm:items-start sm:justify-center md:pb-6 sm:px-0 md:space-x-5  md:flex">
                <a
                  href="#"
                  title=""
                  className="mb-3 sm:mb-0 inline-flex items-center justify-center w-full px-4 md:px-6 py-2 text-lg font-semibold text-white  bg-blue border hover:bg-transparent border-transparent hover:border-blue hover:text-blue sm:w-auto rounded-full  focus:outline-none "
                  role="button"
                >
                  Learn more
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
