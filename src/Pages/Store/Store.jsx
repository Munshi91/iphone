import Store_Image from '/assets/images/bts-header-store-202406.jfif';
import CT_1 from '../../../public/assets/images/store-card-13-mac-nav-202310.png';
import CT_2 from '../../../public/assets/images/store-card-13-ipad-nav-202405.png';
import CT_3 from '../../../public/assets/images/store-card-13-iphone-nav-202309_GEO_US.png';
import CT_4 from '../../../public/assets/images/store-card-13-watch-nav-202309.png';
import CT_5 from '../../../public/assets/images/store-card-13-airpods-nav-202209.png';
import CT_6 from '../../../public/assets/images/store-card-13-airtags-nav-202108.png';
const Store = () => {
  return (
    <>
      <section className="bg-[#efefef]">
        <img className="mx-auto h-48" src={Store_Image} alt="" />
        <div className="md:flex justify-between max-w-screen-xl mx-auto  md:py-20 py-6">
          <div>
            <h2 className="text-5xl text-gray-200">
              <b className="text-black">Education Store.</b> The most <br />
              powerful tools for learning.
            </h2>
          </div>
          <div>
            <div>
              <h4 className="text-xl text-base-content">Need shopping help?</h4>
              <a className="cursor-pointer text-sm text-blue " href="">
                Ask a Specialist
              </a>
            </div>
            <div>
              <h4 className="text-xl text-base-content">Need shopping help?</h4>
              <a className="cursor-pointer text-sm text-blue " href="">
                Ask a Specialist
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#efefef] py-6">
        <div className="max-w-screen-xl mx-auto px-4 md:px-0 grid grid-cols-2 md:grid-cols-6 gap-4">
          <div>
            <img src={CT_1} width="150" height="130" alt="" />
            <h3 className="text-md text-center mt-4 font-bold text-black">
              Art, Media & Design
            </h3>
          </div>
          <div>
            <img src={CT_2} width="150" height="130" alt="" />
            <h3 className="text-md text-center mt-4 font-bold text-black">
              Business
            </h3>
          </div>
          <div>
            <img src={CT_3} width="150" height="130" alt="" />
            <h3 className="text-md text-center mt-4 font-bold text-black">
              Computing Sciences
            </h3>
          </div>
          <div>
            <img src={CT_4} width="150" height="130" alt="" />
            <h3 className="text-md text-center mt-4 font-bold text-black">
              Engineering
            </h3>
          </div>
          <div>
            <img src={CT_5} width="150" height="130" alt="" />
            <h3 className="text-md text-center mt-4 font-bold text-black">
              Humanities
            </h3>
          </div>
          <div>
            <img src={CT_6} width="150" height="130" alt="" />
            <h3 className="text-md text-center mt-4 font-bold text-black">
              Health Science
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Store;
