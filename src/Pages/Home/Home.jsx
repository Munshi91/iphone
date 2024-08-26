import BigSlider from '../../Shere/BigSlider';
import SmallSlider from '../../Shere/SmallSlider';
import Home_1 from '/assets/images/Home-1.jpg';
import Home_2 from '../../../public/assets/images/Home-2.jpg';
import Russell_Group from '../../../public/assets/images/Russell Group.jpg';
import Northumbria_uni from '../../../public/assets/images/northumbria university.jpg';
import Low_uni from '../../../public/assets/images/University of Law.jpg';
import ApplyInt from '../../../public/assets/images/Apply Intelligence.jpg';
import AI from '../../../public/assets/images/AI.jpg';
import Scholarship from '../../Shere/Scholarship';

const Home = () => {
  const uniLink = (
    <>
      <div className="space-x-4">
        <a
          href="/universitydetails"
          title=""
          className="mb-3 sm:mb-0 inline-flex items-center justify-center w-full md:px-6 py-2 text-lg font-semibold text-white  bg-blue border hover:bg-transparent border-transparent hover:border-blue hover:text-blue sm:w-auto rounded-full  focus:outline-none "
          role="button"
        >
          Learn more
        </a>
        <a
          href="/store"
          className="inline-flex items-center justify-center w-full md:px-6 py-2 text-lg font-semibold text-blue hover:text-white bg-transparent border border-blue sm:w-auto rounded-full hover:bg-blue focus:outline-none"
          role="button"
        >
          Apply Now
        </a>
      </div>
    </>
  );
  return (
    <main>
      <section className="pt-12 bg-black sm:pt-10">
        <div className="relative w-full md:h-[600px] h-[500px] overflow-hidden">
          <div className="absolute inset-0  flex justify-center md:justify-end">
            <img
              src={Home_2}
              alt="Background Image"
              className="object-cover object-center hidden md:block"
            />
            <img
              src={Home_2}
              alt="Background Image"
              className="object-cover object-center md:hidden"
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
              <div className="space-x-4">
                <a
                  href="/about"
                  title=""
                  className="mb-3 sm:mb-0 inline-flex items-center justify-center w-full md:px-6 py-2 text-lg font-semibold text-white  bg-blue border hover:bg-transparent border-transparent hover:border-blue hover:text-blue sm:w-auto rounded-full  focus:outline-none "
                  role="button"
                >
                  About Us
                </a>
                <a
                  href="/Apply"
                  className="inline-flex items-center justify-center w-full md:px-6 py-2 text-lg font-semibold text-blue hover:text-white bg-transparent border border-blue sm:w-auto rounded-full hover:bg-blue focus:outline-none"
                  role="button"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white py-1 "></div>

      <section className="pt-12 bg-black sm:pt-10  ">
        <div className="relative w-full md:h-[600px] h-[500px] overflow-hidden">
          <div className="absolute inset-0  flex justify-center md:justify-end">
            <img
              src={Home_1}
              alt="Background Image"
              className="object-cover object-center hidden md:block"
            />
            <img
              src={Home_1}
              alt="Background Image"
              className="object-cover object-center md:hidden"
            />
          </div>
          <div className="relative md:mt-10 z-10 flex flex-col justify-center items-center  text-center">
            <h1 className="md:text-6xl text-2xl text-white font-bold leading-tight mb-4">
              University of Hertfordshire <b>UH</b>
            </h1>
            <p className="md:text-2xl text-xl text-white mb-4">
              Only university to be awarded a King's <br />
              Award for Enterprise in 2024
            </p>
            <div className="md:px-8 sm:items-start sm:justify-center md:pb-6 sm:px-0 md:space-x-5  md:flex">
              {uniLink}
            </div>
          </div>
        </div>
      </section>
      <div className="bg-white py-1 "></div>

      <section className="pt-12 bg-black sm:pt-10  ">
        <div className="relative w-full md:h-[600px] h-[500px] overflow-hidden">
          <div className="absolute inset-0  flex justify-center md:justify-end">
            <img
              src={Russell_Group}
              alt="Background Image"
              className="object-cover object-center hidden md:block"
            />
            <img
              src={Russell_Group}
              alt="Background Image"
              className="object-cover object-center md:hidden"
            />
          </div>
          <div className="relative  md:mt-10 z-10 flex flex-col justify-center items-center ">
            <h2 className="md:text-6xl text-2xl   text-white font-bold leading-tight mb-4">
              Russell Group
            </h2>
            <p className="md:text-2xl text-xl  text-center text-white mb-4">
              A limited series event <br /> starring Jake Gyllenhaal.
            </p>
            <div className="md:px-8 sm:items-start sm:justify-center md:pb-6 sm:px-0 md:space-x-5 md:flex">
              {uniLink}
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white py-1 "></div>

      <section>
        <div className="flex flex-col md:mx-4   gap-4 md:flex-row items-center max-w-8xl">
          <div className="relative w-full md:w-1/2 h-[600px]  overflow-hidden">
            <div className="absolute inset-0  flex justify-center md:justify-end">
              <img
                src={Northumbria_uni}
                alt="Background Image"
                className="object-cover object-center hidden md:block"
              />
              <img
                src={Northumbria_uni}
                alt="Background Image"
                className="object-cover object-center md:hidden"
              />
            </div>
            <div className="relative mt-4 md:mt-10 z-10 flex flex-col justify-center items-center  text-center">
              <h1 className="text-4xl text-black font-bold leading-tight mb-4">
                Northumbria University
              </h1>
              <p className="text-xl text-black mb-4">
                New camera. New design. Newphoria.
              </p>
              <div className="md:px-8 sm:items-start sm:justify-center md:pb-6 sm:px-0 md:space-x-5 sm:flex">
                {uniLink}
              </div>
            </div>
          </div>
          <div className="relative w-full md:w-1/2 h-[600px] text-white overflow-hidden">
            <div className="absolute inset-0  flex justify-center md:justify-end">
              <img
                src={Low_uni}
                alt="Background Image"
                className="object-cover object-center hidden md:block"
              />
              <img
                src={Low_uni}
                alt="Background Image"
                className="object-cover object-center md:hidden"
              />
            </div>
            <div className="relative mt-4 md:mt-10 z-10 flex flex-col justify-center items-center  text-center">
              <h1 className="text-4xl text-white font-bold leading-tight mb-4">
                University of Law
              </h1>
              <p className="text-xl text-white mb-4">
                Unbelievably thin. Incredibly powerful.
              </p>
              <div className="md:px-8 sm:items-start sm:justify-center sm:px-0 md:space-x-5 sm:flex">
                {uniLink}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white py-1 "></div>

      <section className="mb-10">
        <div className="flex flex-col md:mx-4   gap-4 md:flex-row items-center max-w-8xl">
          <div className="relative w-full md:w-1/2 h-[600px]  overflow-hidden">
            <div className="absolute inset-0  flex justify-center md:justify-end">
              <img
                src={ApplyInt}
                alt="Background Image"
                className="object-cover object-center hidden md:block"
              />
              <img
                src={ApplyInt}
                alt="Background Image"
                className="object-cover object-center md:hidden"
              />
            </div>
            <div className="relative mt-4 md:mt-10 z-10 flex flex-col justify-center items-center  text-center">
              <h2 className="text-4xl text-black font-bold leading-tight mb-4">
                UCAS Application
              </h2>
              <p className="text-xl text-black mb-4">
                We will give steps to apply.
              </p>
              <div className="md:px-8 sm:items-start sm:justify-center sm:px-0 md:space-x-5 sm:flex">
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
          <div className="relative w-full md:w-1/2 h-[600px] text-black overflow-hidden">
            <div className="absolute inset-0  flex justify-center md:justify-end">
              <img
                src={AI}
                alt="Background Image"
                className="object-cover object-center hidden md:block"
              />
              <img
                src={AI}
                alt="Background Image"
                className="object-cover object-center md:hidden"
              />
            </div>
            <div className="relative mt-4 md:mt-10 z-10 flex flex-col justify-center items-center  text-center">
              <h2 className="text-4xl text-black font-bold leading-tight mb-4">
                Accommodation
              </h2>
              <p className="text-xl text-black mb-4">
                Unbelievably thin. Incredibly powerful.
              </p>
              <div className="md:px-8 sm:items-start sm:justify-center sm:px-0 md:space-x-5 sm:flex">
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
        </div>
      </section>
      <div className="bg-white py-1 "></div>

      <section className="mb-10">
        <div className="flex flex-col md:mx-4   gap-4 md:flex-row items-center max-w-8xl">
          <div className="relative w-full md:w-1/2 h-[600px]  overflow-hidden">
            <div className="absolute inset-0  flex justify-center md:justify-end">
              <img
                src={ApplyInt}
                alt="Background Image"
                className="object-cover object-center hidden md:block"
              />
              <img
                src={ApplyInt}
                alt="Background Image"
                className="object-cover object-center md:hidden"
              />
            </div>
            <div className="relative mt-4 md:mt-10 z-10 flex flex-col justify-center items-center  text-center">
              <h2 className="text-4xl text-black font-bold leading-tight mb-4">
                Apply Intelligence
              </h2>
              <p className="text-xl text-black mb-4">
                We will give steps to apply.
              </p>
              <div className="md:px-8 sm:items-start sm:justify-center sm:px-0 md:space-x-5 sm:flex">
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
          <div className="relative w-full md:w-1/2 h-[600px] text-black overflow-hidden">
            <div className="absolute inset-0  flex justify-center md:justify-end">
              <img
                src={AI}
                alt="Background Image"
                className="object-cover object-center hidden md:block"
              />
              <img
                src={AI}
                alt="Background Image"
                className="object-cover object-center md:hidden"
              />
            </div>
            <div className="relative mt-4 md:mt-10 z-10 flex flex-col justify-center items-center  text-center">
              <h2 className="text-4xl text-black font-bold leading-tight mb-4">
                AI
              </h2>
              <p className="text-xl text-black mb-4">
                Unbelievably thin. Incredibly powerful.
              </p>
              <div className="md:px-8 sm:items-start sm:justify-center sm:px-0 md:space-x-5 sm:flex">
                <a
                  href="#"
                  className="inline-flex  items-center px-4 justify-center w-full md:px-6 py-2 text-lg font-semibold text-blue hover:text-white bg-transparent border border-blue sm:w-auto rounded-full hover:bg-blue focus:outline-none"
                  role="button"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white py-1 "></div>
      <Scholarship />
      <div className="bg-white py-1 "></div>
      <BigSlider />
      <SmallSlider />
    </main>
  );
};

export default Home;
