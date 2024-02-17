const CurrentValue = ({latestIndex}) => {
  // console.log(latestIndex);
  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-72 px-4 justify-center">
          <div className="bg-primary rounded-2xl shadow-xl overflow-hidden mb-10">
            <div className="py-4 ">
              <h3 className="block font-bold text-xl text-center text-dark hover:text-white">
                PM2.5 Index
              </h3>
            </div>
            <div className="bg-white h-16">
              <h2
                className="text-2xl text-black font-bold pt-4 text-center justify-center items-center"
                id="pmIndex"
              >{latestIndex.PM25}</h2>
            </div>
          </div>
        </div>

        <div className="w-72 px-4 justify-center">
          <div className="bg-primary rounded-2xl shadow-xl overflow-hidden mb-10">
            <div className="py-4">
              <h3 className="block font-bold text-xl text-center text-dark hover:text-white">
                CO Index
              </h3>
            </div>
            <div className="bg-white h-16">
              <h2
                className="text-2xl text-black font-bold pt-4 text-center justify-center items-center"
                id="coIndex"
              >{latestIndex.CO}</h2>
            </div>
          </div>
        </div>

        <div className="w-72 px-4 justify-center">
          <div className="bg-primary rounded-2xl shadow-xl overflow-hidden mb-10">
            <div className="py-4">
              <h3 className="block font-bold text-xl text-center text-dark hover:text-white">
                CO2 Index
              </h3>
            </div>

            <div className="bg-white h-16">
              <h2
                className="text-2xl text-black font-bold pt-4 text-center justify-center items-center"
                id="co2Index"
              >{latestIndex.CO2}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentValue;
