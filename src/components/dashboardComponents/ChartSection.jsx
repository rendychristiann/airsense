import PM25Chart from "./PM25Chart";
import SNRChart from "./SNRChart";
import RSSIChart from "./RSSIChart";

const ChartSection = ({ indexData }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4">
      <div className="w-full max-w-3xl mb-4 px-4 sm:px-6 lg:px-8">
        <PM25Chart indexData={indexData} />
      </div>
      <div className="w-full max-w-3xl mb-4 px-4 sm:px-6 lg:px-8">
        <SNRChart indexData={indexData} />
      </div>
      <div className="w-full max-w-3xl mb-4 px-4 sm:px-6 lg:px-8">
        <RSSIChart indexData={indexData} />
      </div>
    </div>
  );
};

export default ChartSection;
