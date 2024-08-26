import { HiOutlineCurrencyPound } from 'react-icons/hi';

import React, { useState } from 'react';
import {
  Image_1,
  Image_2,
  Image_3,
  Image_4,
  Location,
  UK,
} from '../UniversityPage/UniversityResurce';

const UniversityPage = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = index => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="bg-[#F1F7FF]">
      {/* Main Content */}
      <div className="bg-[#f8f9fe]">
        <div className="flex-1 max-w-screen-2xl mx-auto  md:p-6">
          <div className=" p-4 ">
            {/* Header Section */}
            <div className="md:flex items-center justify-between">
              <div className="md:flex items-center">
                <img
                  className="w-24 h-24 hidden md:block rounded-full"
                  src="https://photos.applyboard.com/schools/000/001/449/logos/original/University_of_Hertfordshire_Landing_Page_Logo.png?1578349662"
                  alt="University of Hertfordshire Logo"
                />
                <div className="md:ml-4">
                  <h1 className="md:text-5xl text-2xl text-black font-bold">
                    University of Hertfordshire
                  </h1>
                  <div className="flex items-center md:justify-center text-gray-600 mt-2 md:mt-4">
                    <img
                      className="md:w-8 md:h-8 w-6 h-6 rounded-full mr-2"
                      src={UK}
                      alt="UK Flag"
                    />

                    <span className="text-md font-semibold md:text-lg">
                      Hertfordshire, East of England, GB
                    </span>
                    <br />
                    <div className="md:flex hidden md:space-x-4">
                      <span className="md:ml-4">
                        <img
                          className="w-6 h-6 hidden md:block rounded-full "
                          src={Location}
                          alt="Location"
                        />
                      </span>
                      <span className="text-md md:text-lg">
                        De Havilland Campus, Mosquito Way, Hatfield
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                View Photos
              </button>
            </div>
            {/* Image Gallery */}
            <div className="md:flex">
              <picture className="md:mt-6 mt-4">
                <img
                  className="rounded-md shadow-md w-full md:w-[560px] md:h-[360px]"
                  src={Image_2}
                  alt="Campus 1"
                />
              </picture>
              <ul className="grid grid-cols-1 md:grid-cols-3 md:ml-4 gap-4 mt-4 md:mt-6">
                <li>
                  <picture>
                    <img
                      className="rounded-md shadow-md w-full md:w-[284px] md:h-[172px]"
                      src={Image_1}
                      alt="Campus 2"
                    />
                  </picture>
                </li>
                <li>
                  <picture>
                    <img
                      className="rounded-md shadow-md w-full md:w-[284px] md:h-[172px]"
                      src={Image_3}
                      alt="Campus 3"
                    />
                  </picture>
                </li>
                <li className="md:block hidden">
                  <picture>
                    <img
                      className="rounded-md  shadow-md w-full md:w-[284px] md:h-[172px]"
                      src={Image_4}
                      alt="Campus 4"
                    />
                  </picture>
                </li>
                <li className="md:block hidden">
                  <picture>
                    <img
                      className="rounded-md shadow-md w-full md:w-[284px] md:h-[172px]"
                      src={Image_3}
                      alt="Campus 5"
                    />
                  </picture>
                </li>
                <li className="md:block hidden">
                  <picture>
                    <img
                      className="rounded-md shadow-md w-full md:w-[284px] md:h-[172px]"
                      src={Image_1}
                      alt="Campus 6"
                    />
                  </picture>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="max-w-screen-2xl mx-auto">
        <div className="md:flex gap-10">
          {/* About Section */}
          <section id="about" className="mt-4 md:mt-6 md:max-w-5xl">
            <h2 className=" hidden md:block md:text-4xl text-black font-semibold">
              About
            </h2>

            <div className="bg-white md:mt-6 mt-4 shadow-md rounded-lg">
              <h2 className=" px-4 py-6 md:hidden text-2xl text-black font-semibold">
                About
              </h2>
              <p className="px-6 py-4 text-gray-700">
                The University of Hertfordshire is the UK's leading
                business-facing university and an exemplar in the sector. It is
                innovative and enterprising and challenges individuals and
                organizations to excel. The University of Hertfordshire is one
                of the region's largest employers with over 2,700 staff and a
                turnover of more than £238 million. With a student community of
                over 25,300 including more than 2,800 international students
                from 100 different countries, the University has a global
                network of over 210,000 alumni. It continues to rise up the
                national rankings.
              </p>
              <p className=" bg-white md:px-6 px-4 hidden md:block  text-gray-700">
                <b>Why the University of Hertfordshire</b>
              </p>

              <ul className=" bg-white  px-4 md:px-6 py-4 hidden md:block md:space-y-4 space-y-2 rounded-lg text-gray-700">
                <li>
                  . <span className="underline">High-Quality Education: </span>
                  The University is of the highest quality in the UK as it has
                  been awarded Gold in the Teaching Excellence and Student
                  Outcomes Framework. Over 96.5% of Herts students are employed
                  within the first six months of graduating.
                </li>
                <li>
                  . <span className="underline">Physical Well-Being: </span>
                  Active Students is an excellent program designed to help
                  students of all backgrounds stay fit and healthy on campus.
                  There is a wide variety of classes to choose from, including
                  Pilates, Weight Training, Smash HIIT, and so much more.
                </li>
                <li className=" md:mb-10  mb-4">
                  .{' '}
                  <span className="underline">
                    Convenient Campus and Facilities:
                  </span>{' '}
                  Herts students are surrounded by culture and entertainment to
                  suit all tastes and interests! Some of these include: Access
                  to great music and theatre communities, restaurants on and
                  off-campus, museums and galleries, live sporting events, and
                  outside spaces and parks on and off-campus.
                </li>
              </ul>
            </div>
          </section>
          {/* Sidebar */}
          <div className="text-black  mt-4 md:mt-6   p-4">
            <div>
              <h4 className="text-lg text-nowrap font-semibold">
                Institution Details
              </h4>
              <ul className="space-y-4  md:w-[500px] px-10 py-6 mt-6 rounded-lg shadow-md bg-white">
                <li className="flex justify-between">
                  <span>Founded</span>
                  <span>1952</span>
                </li>
                <li className="flex justify-between">
                  <span>School ID</span>
                  <span>1449</span>
                </li>
                <li className="flex justify-between">
                  <span>Provider ID number</span>
                  <span>10007147</span>
                </li>
                <li className="flex justify-between">
                  <span>Institution type</span>
                  <span>Public</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg md:mt-10 mt-4 text-nowrap font-semibold">
                Cost and Duration
              </h4>
              <ul className="space-y-4  md:w-[500px] px-10 py-6 mt-6 rounded-lg shadow-md bg-white">
                <li className="flex space-x-2">
                  <span>
                    <svg
                      aria-hidden="true"
                      role="img"
                      viewBox="0 0 48 48"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-black w-12 h-12 flex-shrink-0"
                    >
                      <path d="M26.9994 9.36008V7H24.9994V9.2085C23.9923 9.36116 23.1196 10.0537 22.764 11.0521C22.1872 12.671 23.179 14.4252 24.8636 14.7655L26.7536 15.1475C27.1771 15.233 27.4647 15.6285 27.4157 16.0578C27.3633 16.516 26.9483 16.8443 26.4904 16.7898L24.1184 16.5074C23.57 16.4421 23.0725 16.8338 23.0072 17.3822C22.9419 17.9306 23.3336 18.4281 23.882 18.4934L24.9994 18.6264V21H26.9994V18.7664C28.2398 18.5855 29.2536 17.5901 29.4027 16.2849C29.5697 14.824 28.591 13.4783 27.1497 13.1871L25.2597 12.8052C24.7689 12.706 24.4799 12.1949 24.648 11.7232C24.7781 11.3581 25.1455 11.1334 25.5298 11.184L27.8697 11.4918C28.4173 11.5639 28.9196 11.1784 28.9916 10.6308C29.0637 10.0833 28.6782 9.58097 28.1306 9.50892L26.9994 9.36008Z"></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M25.9994 2C19.372 2 13.9994 7.37258 13.9994 14C13.9994 20.6274 19.372 26 25.9994 26C32.6268 26 37.9994 20.6274 37.9994 14C37.9994 7.37258 32.6268 2 25.9994 2ZM15.9994 14C15.9994 8.47715 20.4765 4 25.9994 4C31.5222 4 35.9994 8.47715 35.9994 14C35.9994 19.5228 31.5222 24 25.9994 24C20.4765 24 15.9994 19.5228 15.9994 14Z"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.99939 30C4.99939 28.8954 5.89482 28 6.99939 28H11.9994C13.104 28 13.9994 28.8954 13.9994 30V30.0719L15.996 29.3459C17.5609 28.7768 19.2345 28.5705 20.8908 28.7424L33.0544 30.0049C33.564 30.0578 33.9512 30.4872 33.9512 30.9995V32.049C33.9512 34.0173 32.5192 35.693 30.575 36L26.9051 36.5795L29.9385 37.143C30.1739 37.1867 30.4153 37.1878 30.6511 37.1462L41.8259 35.176C42.117 35.1247 42.4159 35.2048 42.6423 35.3948C42.8688 35.5848 42.9995 35.8652 42.9995 36.1608V40.1027C42.9995 41.8816 41.8249 43.4467 40.1169 43.9435L33.8127 45.7775C28.7395 47.2533 23.3129 46.9375 18.4452 44.8832L13.9994 43.0069C13.9956 44.1083 13.1017 45 11.9994 45H6.99939C5.89482 45 4.99939 44.1046 4.99939 43V30ZM13.9994 40.8361V32.2L16.6795 31.2255C17.9598 30.7599 19.3292 30.591 20.6843 30.7317L31.9512 31.9011V32.049C31.9512 33.0331 31.2352 33.871 30.2631 34.0245L26.5932 34.604C24.3731 34.9545 24.33 38.1353 26.5398 38.5458L29.5733 39.1093C30.0441 39.1968 30.5268 39.199 30.9983 39.1159L40.9995 37.3526V40.1027C40.9995 40.9922 40.4122 41.7747 39.5582 42.0231L33.254 43.8571C28.622 45.2046 23.6673 44.9162 19.2228 43.0406L13.9994 40.8361ZM11.9994 30H6.99939V43H11.9994V30Z"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <p className="font-bold">£0.00 GBP</p>
                    <p>Application fee</p>
                  </span>
                </li>
                <li className="flex space-x-2">
                  <span>
                    <svg
                      aria-hidden="true"
                      role="img"
                      viewBox="0 0 48 48"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-black w-12 h-12 flex-shrink-0"
                    >
                      <path d="M17 31H11V33H17V31Z"></path>
                      <path d="M21 25H27V27H21V25Z"></path>
                      <path d="M17 25H11V27H17V25Z"></path>
                      <path d="M21 31H27V33H21V31Z"></path>
                      <path d="M37 25H31V27H37V25Z"></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15 9V6H13V9H7C5.89543 9 5 9.89543 5 11V39C5 40.1046 5.89543 41 7 41H41C42.1046 41 43 40.1046 43 39V11C43 9.89543 42.1046 9 41 9H35V6H33V9H25V6H23V9H15ZM33 11H25V14H23V11H15V14H13V11H7L7 17H41V11H35V14H33V11ZM7 39L7 19H41V39H7Z"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <p className="font-bold">1 year</p>
                    <p>Average graduate program</p>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features Accordion */}
        <section
          id="features"
          className="mt-6 bg-white p-6 shadow-md rounded-md"
        >
          <h2 className="text-xl font-semibold">Features</h2>
          <div className="mt-4">
            <Accordion
              title="Post Graduation Permit"
              isOpen={openAccordion === 0}
              toggle={() => toggleAccordion(0)}
            />
            <Accordion
              title="Co-op/Internship Participation"
              isOpen={openAccordion === 1}
              toggle={() => toggleAccordion(1)}
            />
            <Accordion
              title="Work While Studying"
              isOpen={openAccordion === 2}
              toggle={() => toggleAccordion(2)}
            />
            <Accordion
              title="Conditional Offer Letter"
              isOpen={openAccordion === 3}
              toggle={() => toggleAccordion(3)}
            />
            <Accordion
              title="Accommodations"
              isOpen={openAccordion === 4}
              toggle={() => toggleAccordion(4)}
            />
          </div>
        </section>
        {/* Location Section */}
        <section
          id="location"
          className="mt-6 bg-white p-6 shadow-md rounded-md"
        >
          <h2 className="text-xl font-semibold">Location</h2>
          <div className="mt-4">
            <iframe
              className="w-full h-64 rounded-md shadow-md"
              src="https://maps.google.com/maps?q=University%20of%20Hertfordshire&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="University Location"
            ></iframe>
          </div>
        </section>
        {/* Programs Section */}
        <section
          id="programs"
          className="mt-6 bg-white p-6 shadow-md rounded-md"
        >
          <h2 className="text-xl font-semibold">Programs</h2>
          <div className="mt-4 space-y-4">
            <ProgramCard
              title="Bachelor of Arts (Honours) - Accounting and Finance"
              tuition="£15,500.00 GBP"
              intake="Sep 2025"
            />
            <ProgramCard
              title="Bachelor of Engineering (Honours) - Aerospace Engineering"
              tuition="£15,500.00 GBP"
              intake="Sep 2025"
            />
            <ProgramCard
              title="Integrated Masters - Master of Engineering (MEng) (Honours) - Aerospace Engineering"
              tuition="£15,500.00 GBP"
              intake="Sep 2025"
            />
          </div>
        </section>
      </section>
    </div>
  );
};

const Accordion = ({ title, isOpen, toggle }) => (
  <div className="border-b border-gray-300">
    <button onClick={toggle} className="w-full text-left py-2">
      <div className="flex justify-between items-center">
        <span className="text-gray-800">{title}</span>
        <span className="text-gray-600">{isOpen ? '-' : '+'}</span>
      </div>
    </button>
    {isOpen && (
      <div className="p-4 text-gray-700">
        Detailed information about {title}.
      </div>
    )}
  </div>
);

const ProgramCard = ({ title, tuition, intake }) => (
  <div className="bg-gray-50 p-4 shadow-sm rounded-md">
    <h3 className="text-lg font-medium">{title}</h3>
    <p>Tuition: {tuition}</p>
    <p>Intake: {intake}</p>
    <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
      Check Eligibility Now
    </button>
  </div>
);

export default UniversityPage;
