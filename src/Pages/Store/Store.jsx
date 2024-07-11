const Store = () => {
  return (
    <>
      <div className="md:flex justify-between screen-max-width md:py-20 py-6">
        <div>
          <h2 className="text-5xl text-gray-200">
            <b className="text-black">Store.</b> The best way to buy the <br />
            products you love.
          </h2>
        </div>
        <div>
          <h4 className="text-xl text-base-content">Need shopping help?</h4>
          <a className="cursor-pointer text-sm text-blue " href="">
            Ask a Specialist
          </a>
        </div>
      </div>
    </>
  );
};

export default Store;
