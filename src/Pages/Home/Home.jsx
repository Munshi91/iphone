import BigSlider from '../../Shere/BigSlider';
import SmallSlider from '../../Shere/SmallSlider';
import Home_1 from '../../../public/assets/images/Home-1.jpg';
import Home_2 from '../../../public/assets/images/Home-2.jpg';

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
              src={Home_1}
              alt="Background Image"
              className="object-cover object-center hidden md:block"
            />
            <img
              src="assets/images/hero_iphonesmall.jpg"
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
              src={Home_2}
              alt="Background Image"
              className="object-cover object-center hidden md:block"
            />
            <img
              src="assets/images/hero_pi__esjmx2w8f90m_small_2x.jpg"
              alt="Background Image"
              className="object-cover object-center md:hidden"
            />
          </div>
          <div className="relative mt-80 md:mt-80 z-10 flex flex-col justify-center items-center ">
            <h2 className="md:text-6xl text-2xl uppercase  text-white font-extrabold leading-tight mb-4">
              Presumed Innocent
            </h2>
            <p className="md:text-2xl text-xl font-semibold text-center text-white mb-4">
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
                src="assets/images/promo_iphone15_announce__fmxxi8r9fkuy_large.jpg"
                alt="Background Image"
                className="object-cover object-center hidden md:block"
              />
              <img
                src="assets/images/promo_iphone15_announce__fmxxi8r9fkuy_small_2x.jpg"
                alt="Background Image"
                className="object-cover object-center md:hidden"
              />
            </div>
            <div className="relative mt-4 md:mt-10 z-10 flex flex-col justify-center items-center  text-center">
              <h1 className="text-4xl text-black font-bold leading-tight mb-4">
                iPhone 15
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
                src="assets/images/promo_ipadpro__ch217v9v7no2_large.jpg"
                alt="Background Image"
                className="object-cover object-center hidden md:block"
              />
              <img
                src="assets/images/promo_ipadpro__ch217v9v7no2_small_2x.jpg"
                alt="Background Image"
                className="object-cover object-center md:hidden"
              />
            </div>
            <div className="relative mt-4 md:mt-10 z-10 flex flex-col justify-center items-center  text-center">
              <h1 className="text-4xl text-white font-bold leading-tight mb-4">
                iPad Pro
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
                src="assets/images/promo_apple_card__5cm7draujpey_large.jpg"
                alt="Background Image"
                className="object-cover object-center hidden md:block"
              />
              <img
                src="assets/images/promo_apple_card__5cm7draujpey_small_2x.jpg"
                alt="Background Image"
                className="object-cover object-center md:hidden"
              />
            </div>
            <div className="relative  md:mt-4 z-10 flex flex-col justify-center items-center  text-center">
              <h2 className="text-4xl text-black font-bold leading-tight mb-4">
                <span className="text-transparent">Apple Card</span>
                <svg
                  className="hero-logo"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 113 34"
                >
                  <path fill="none" d="M0 0h113v34H0z"></path>
                  <path d="M18.56 6.18c1.06-1.33 1.78-3.11 1.59-4.93-1.56.08-3.45 1.02-4.55 2.35-.99 1.14-1.86 2.99-1.63 4.74 1.75.15 3.49-.87 4.59-2.16m1.57 2.5c-2.54-.15-4.69 1.44-5.9 1.44S11.16 8.76 9.16 8.8c-2.61.04-5.03 1.51-6.36 3.86-2.73 4.69-.72 11.65 1.93 15.47 1.29 1.89 2.84 3.97 4.88 3.9 1.93-.08 2.69-1.25 5.04-1.25s3.03 1.25 5.07 1.21c2.12-.04 3.45-1.89 4.73-3.78 1.48-2.15 2.08-4.23 2.12-4.35-.04-.04-4.09-1.59-4.13-6.24-.04-3.89 3.18-5.75 3.33-5.86-1.82-2.68-4.66-2.99-5.64-3.06m10.63 8.9c0-8.98 5.08-14.65 13.01-14.65 6.44 0 11.3 3.95 12.05 9.87h-4.37c-.79-3.64-3.82-6.02-7.68-6.02-5.16 0-8.51 4.23-8.51 10.79s3.31 10.81 8.53 10.81c3.96 0 6.77-2.02 7.66-5.45h4.39c-1.08 5.86-5.53 9.3-12.07 9.3-7.97 0-13.01-5.62-13.01-14.66zm27.12 8.32c0-3.62 2.78-5.84 7.7-6.11l5.67-.33v-1.59c0-2.3-1.56-3.68-4.15-3.68-2.46 0-4 1.18-4.37 3.03h-4.02c.24-3.74 3.43-6.49 8.54-6.49s8.23 2.65 8.23 6.8V31.8H71.4v-3.4h-.1c-1.2 2.3-3.82 3.75-6.54 3.75-4.06 0-6.89-2.52-6.89-6.23zm13.37-1.87v-1.63l-5.1.31c-2.54.18-3.98 1.3-3.98 3.07s1.5 2.99 3.78 2.99c2.97 0 5.3-2.04 5.3-4.74zm8.35-12.93h4.06v3.52h.1c.69-2.42 2.54-3.85 4.98-3.85.61 0 1.14.1 1.46.16v3.95c-.33-.14-1.08-.24-1.91-.24-2.74 0-4.43 1.83-4.43 4.76V31.8h-4.25V11.1zm11.38 10.34c0-6.53 3.47-10.67 8.66-10.67 2.97 0 5.34 1.49 6.5 3.77h.08V3.41h4.27v28.37h-4.13v-3.52h-.08c-1.22 2.36-3.58 3.87-6.6 3.87-5.24 0-8.7-4.17-8.7-10.69zm4.35 0c0 4.36 2.11 7.1 5.47 7.1s5.45-2.77 5.45-7.1-2.19-7.1-5.45-7.1-5.47 2.75-5.47 7.1z"></path>
                </svg>
              </h2>
              <p className="text-xl text-center font-semibold text-black mb-4">
                Get up to 3% Daily Cash back <br /> with every purchase.
              </p>
              <div className="md:px-8 sm:items-start sm:justify-center md:pb-6 sm:px-0 md:space-x-5 sm:flex">
                {uniLink}
              </div>
            </div>
          </div>
          <div className="relative w-full md:w-1/2 h-[600px] text-white overflow-hidden">
            <div className="absolute inset-0  flex justify-center md:justify-end">
              <img
                src="assets/images/promo_iphone_tradein__bugw15ka691e_large.jpg"
                alt="Background Image"
                className="object-cover object-center hidden md:block"
              />
              <img
                src="assets/images/promo_iphone_tradein__bugw15ka691e_small_2x.jpg"
                alt="Background Image"
                className="object-cover object-center md:hidden"
              />
            </div>
            <div className="relative md:mt-4 z-10 flex flex-col justify-center items-center  text-center">
              <h1 className="text-4xl text-black font-bold leading-tight mb-4">
                <span className="text-transparent">Apple Trade In</span>{' '}
                <img
                  src="assets/images/apple-trade-in-logo-202303.png"
                  alt=""
                />
              </h1>
              <p className="text-xl font-semibold text-center text-black mb-4">
                Get $170-$630 in credit when you <br /> trade in iPhone 11 or
                higher.
              </p>
              <div className="md:px-8 sm:items-start sm:justify-center sm:px-0 md:space-x-5 sm:flex">
                {uniLink}
              </div>
            </div>
          </div>
        </div>
      </section>

      <BigSlider />
      <SmallSlider />
    </main>
  );
};

export default Home;
