import Marquee from 'react-fast-marquee';
import Slider01 from '../../public/assets/images/417x236 (1).jpg';
import Slider02 from '../../public/assets/images/417x236.jpg';

const SmallSlider = () => {
  return (
    <div className="mt-6">
      <Marquee pauseOnHover className="text-gray">
        <div className="mx-4 relative cursor-pointer">
          <img src={Slider02} alt="" />
          <button className="absolute hidden md:block bottom-0  md:left-28 md:mb-24 bg-white text-blue px-4 py-2 rounded  m-2">
            Apply Now
          </button>
        </div>
        <div className="mx-4 relative cursor-pointer">
          <img src={Slider01} alt="" />
          <button className="absolute hidden md:block bottom-0  md:left-28 md:mb-24 bg-white text-blue px-4 py-2 rounded  m-2">
            Apply Now
          </button>
        </div>
        <div className="mx-4 relative cursor-pointer">
          <img src={Slider02} alt="" />
          <button className="absolute hidden md:block bottom-0  md:left-28 md:mb-24 bg-white text-blue px-4 py-2 rounded  m-2">
            Apply Now
          </button>
        </div>
        <div className="mx-4 relative cursor-pointer">
          <img src={Slider01} alt="" />
          <button className="absolute hidden md:block bottom-0  md:left-28 md:mb-24 bg-white text-blue px-4 py-2 rounded  m-2">
            Apply Now
          </button>
        </div>
        <div className="mx-4 relative cursor-pointer">
          <img src={Slider02} alt="" />
          <button className="absolute hidden md:block bottom-0  md:left-28 md:mb-24 bg-white text-blue px-4 py-2 rounded  m-2">
            Apply Now
          </button>
        </div>
        <div className="mx-4 relative cursor-pointer">
          <img src={Slider01} alt="" />
          <button className="absolute hidden md:block bottom-0  md:left-28 md:mb-24 bg-white text-blue px-4 py-2 rounded  m-2">
            Apply Now
          </button>
        </div>
      </Marquee>
    </div>
  );
};

export default SmallSlider;
