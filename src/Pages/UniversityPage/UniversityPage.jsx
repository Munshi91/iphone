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
            <h4 className="text-lg text-nowrap font-semibold">
              Institution Details
            </h4>
            <ul className="space-y-4  md:w-[500px] px-10 py-6 mt-6 rounded-lg shadow-md bg-white">
              <li className="flex justify-between">
                <span>Founded</span>
                <span>1952</span>
              </li>
            </ul>
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
