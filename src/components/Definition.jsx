const Definition = () => {
  return (
    <section className="pt-36 pb-10">
      <div className="w-full">
        <div className="max-w-xl mx-auto text-center -mt-20 mb-10 px-10">
          <h2 className="moving font-semibold text-3xl  mb-4 lg:text-4xl">
            Air Pollutants
          </h2>
        </div>

        <div className="w-full flex flex-wrap pb-10">
          <div className="w-1/2 md:w-1/3 lg:w-1/4 flex justify-center items-center">
            <div className="moving img w-20 h-20 rounded-full flex justify-center bg-light items-center border-dark border hover:border-teal-900 hover:bg-primary ">
              <img
                src="/assets/PM25.png"
                alt="PM25"
                className="moving fill-current w-10 h-10 lg:w-23 lg:h-23"
              />
            </div>
          </div>
          <div className="w-1/2 md:w-2/3 lg:w-3/4">
            <h2 className="text-xl text-primary pr-10 font-bold pb-5 lg:pb-0">
              Particulate Matter (PM) 2.5
            </h2>
            <p className="max-w-full text-base pr-10">
              PM2.5, fine particulate matter found in air pollution from sources
              like vehicle exhaust and industrial emissions, poses significant
              health risks. Inhaling these tiny particles can lead to
              respiratory and cardiovascular issues, including aggravated
              asthma, bronchitis, and an increased risk of heart attacks and
              strokes.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-wrap pb-10">
          <div className="w-1/2 md:w-1/3 lg:w-1/4 flex justify-center items-center">
            <div className="moving img w-20 h-20 rounded-full flex justify-center bg-light items-center border-dark border hover:border-teal-900 hover:bg-primary ">
              <img
                src="/assets/CO.png"
                alt="CO"
                className="moving fill-current w-10 h-10 lg:w-23 lg:h-23"
              />
            </div>
          </div>
          <div className="w-1/2 md:w-2/3 lg:w-3/4">
            <h2 className="text-xl text-primary pr-10 font-bold pb-5 lg:pb-0">
              Carbon Monoxide (CO)
            </h2>
            <p className="max-w-full text-base pr-10">
              Carbon Monoxide (CO) is a colorless gas produced by incomplete
              combustion of fuels. Inhaled CO binds to hemoglobin, reducing
              oxygen transport and causing symptoms like headache and nausea.
              Prolonged exposure can lead to chronic health issues.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-wrap">
          <div className="w-1/2 md:w-1/3 lg:w-1/4 flex justify-center items-center">
            <div className="moving img w-20 h-20 rounded-full flex justify-center bg-light items-center border-dark border hover:border-teal-900 hover:bg-primary ">
              <img
                src="/assets/CO2.png"
                alt="PM25"
                className="moving fill-current w-10 h-10 lg:w-23 lg:h-23"
              />
            </div>
          </div>
          <div className="w-1/2 md:w-2/3 lg:w-3/4">
            <h2 className="text-xl text-primary pr-10 font-bold pb-5 lg:pb-0">
              Carbon Dioxide (CO2)
            </h2>
            <p className="max-w-full text-base pr-10">
              Carbon dioxide (CO2) is a colorless, odorless gas made of one
              carbon and two oxygen atoms, crucial in Earths atmosphere for the
              greenhouse effect. Excessive CO2 emissions from human activities
              resulting in global warming and climate change. High CO2 levels
              trap heat, causing temperature rise, altered weather patterns, and
              environmental impacts. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Definition;
