const Definition = () => {
  return (
    <section className="pt-36 pb-10">
      <div className="w-full">
        <div className="max-w-xl mx-auto text-center -mt-20 mb-10 px-10">
          <h2 className="moving font-semibold text-3xl  mb-4 lg:text-4xl">
            What is Particulate Matter (PM) 2.5?
          </h2>
        </div>

        <div className="w-full flex flex-wrap pb-10">
          <div className="w-1/2 flex justify-center items-center">
            <div className="moving img w-20 h-20 rounded-full flex justify-center bg-light items-center border-dark border hover:border-teal-900 hover:bg-primary ">
              <img
                src="/assets/PM25.png"
                alt="PM25"
                className="moving fill-current w-10 h-10 lg:w-23 lg:h-23"
              />
            </div>
          </div>
          <div className="w-1/2 lg:-ml-20">
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
      </div>
    </section>
  );
};

export default Definition;
