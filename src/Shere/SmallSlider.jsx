import Marquee from 'react-fast-marquee';
import Health_Science from '../../public/assets/images/health-science.webp';
import Engineering from '../../public/assets/images/mechanics.webp';
import Slider02 from '../../public/assets/images/417x236.jpg';

const SmallSlider = () => {
  return (
    <div className="mt-6">
      <Marquee pauseOnHover className="text-gray">
        <div className="mx-4 relative cursor-pointer">
          <img src={Slider02} alt="" />
          <div className="absolute bottom-0  md:left-28 md:mb-24">
            <h2 className="text-2xl text-white font-bold leading-tight mb-4">
              Art, Media & Design
            </h2>
            <button className=" hidden md:block mx-auto text-md bg-white text-black px-4 py-2 rounded  m-2">
              Apply Now
            </button>
          </div>
        </div>
        <div className="mx-4 relative cursor-pointer">
          <img className="brightness-50" src={Health_Science} alt="" />
          <div className="absolute bottom-0  md:left-28 md:mb-24">
            <h2 className="text-2xl text-white font-bold leading-tight mb-4">
              Business
            </h2>
            <button className=" hidden md:block mx-auto text-md bg-white text-black px-4 py-2 rounded  m-2">
              Apply Now
            </button>
          </div>
        </div>
        <div className="mx-4 relative cursor-pointer">
          <img src={Slider02} alt="" />
          <div className="absolute bottom-0  md:left-28 md:mb-24">
            <h2 className="text-2xl text-white font-bold leading-tight mb-4">
              Computing Sciences
            </h2>
            <button className=" hidden md:block mx-auto text-md bg-white text-black px-4 py-2 rounded  m-2">
              Apply Now
            </button>
          </div>
        </div>
        <div className="mx-4 relative cursor-pointer">
          <img className="brightness-50" src={Engineering} alt="" />
          <div className="absolute bottom-0  md:left-28 md:mb-24">
            <h2 className="text-2xl text-white font-bold leading-tight mb-4">
              Engineering
            </h2>
            <button className=" hidden md:block mx-auto text-md bg-white text-black px-4 py-2 rounded  m-2">
              Apply Now
            </button>
          </div>
        </div>
        <div className="mx-4 relative cursor-pointer">
          <img src={Slider02} alt="" />
          <div className="absolute bottom-0  md:left-28 md:mb-24">
            <h2 className="text-2xl text-white font-bold leading-tight mb-4">
              Humanities
            </h2>
            <button className=" hidden md:block mx-auto text-md bg-white text-black px-4 py-2 rounded  m-2">
              Apply Now
            </button>
          </div>
        </div>
        <div className="mx-4 relative cursor-pointer">
          <img className="brightness-50" src={Health_Science} alt="" />
          <div className="absolute bottom-0  md:left-28 md:mb-24">
            <h2 className="text-2xl text-white font-bold leading-tight mb-4">
              Health Science
            </h2>
            <button className=" hidden md:block mx-auto text-md bg-white text-black px-4 py-2 rounded  m-2">
              Apply Now
            </button>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default SmallSlider;
