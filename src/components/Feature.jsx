const Feature = () => {
  return (
    <section id="feature" className="pt-28 pb-10">
      <div className="w-full">
        <div className="max-w-xl mx-auto text-center -mt-20 mb-10 px-10">
          <h2 className="moving font-semibold text-3xl  mb-4 lg:text-4xl">
            Feature Listing
          </h2>
          <h2 className="moving font-medium text-md">
            Explore the innovative features of this platform, designed to
            elevate your experience with advanced technology and user-friendly
            interfaces.
          </h2>
        </div>
      </div>
      <div className="container mx-auto flex flex-wrap items-center justify-center text-center">
        <div
          id="air-quality"
          className="w-16 h-28 lg:w-24 lg:h-24 mx-16 mb-28 "
        >
          <div className="moving img w-16 h-16 lg:w-24 lg:h-24 my-5 rounded-full flex justify-center items-center border-dark border-2 dark:border-slate-200 dark:bg-white hover:border-teal-900 hover:bg-primary hover:text-primary">
            <img
              src="/assets/air-quality.png"
              alt="Air Quality"
              className="moving fill-current w-10 h-10 lg:w-23 lg:h-23"
            />
          </div>
          <h3 className="moving font-semibold text-md  hover:text-primary">
            PM2.5, CO, and CO2 Detection
          </h3>
        </div>
        <div id="lora" className="w-16 h-28 lg:w-24 lg:h-24 mx-16 mb-28 ">
          <div className="moving img w-16 h-16 lg:w-24 lg:h-24 my-5 rounded-full flex justify-center items-center border-dark border-2 dark:border-slate-200 dark:bg-white hover:border-teal-900 hover:bg-primary hover:text-primary">
            <img
              src="/assets/lora.png"
              alt="LoRa Communication"
              className="moving fill-current w-10 h-10 lg:w-23 lg:h-23"
            />
          </div>
          <h3 className="moving font-semibold text-md  hover:text-primary">
            915 MHz Lora to Gateway
          </h3>
        </div>
        <div id="iot" className="w-16 h-28 lg:w-24 lg:h-24 mx-16 mb-28 ">
          <div className="moving img w-16 h-16 lg:w-24 lg:h-24 my-5 rounded-full flex justify-center items-center border-dark border-2 dark:border-slate-200 dark:bg-white hover:border-teal-900 hover:bg-primary hover:text-primary">
            <img
              src="/assets/iot.png"
              alt="IOT"
              className="moving fill-current w-10 h-10 lg:w-23 lg:h-23"
            />
          </div>
          <h3 className="moving font-semibold text-md  hover:text-primary ">
            2.4 GHz Wi-Fi for IoT
          </h3>
        </div>
        <div id="web" className="w-16 h-28 lg:w-24 lg:h-24 mx-16 mb-28 ">
          <div className="moving img w-16 h-16 lg:w-24 lg:h-24 my-5 rounded-full flex justify-center items-center border-dark border-2 dark:border-slate-200 dark:bg-white hover:border-teal-900 hover:bg-primary hover:text-primary">
            <img
              src="/assets/internet.png"
              alt="Website"
              className="moving fill-current w-10 h-10 lg:w-23 lg:h-23"
            />
          </div>
          <h3 className="moving font-semibold text-md  hover:text-primary ">
            Real Time Website
          </h3>
        </div>
      </div>
    </section>
  );
};
export default Feature;
