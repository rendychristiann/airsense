import PM25Chart from "./PM25Chart";
import SNRChart from "./SNRChart";
import RSSIChart from "./RSSIChart";

const ChartSection = ({ indexData }) => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      <PM25Chart indexData={indexData} />
      <SNRChart indexData={indexData} />
      <RSSIChart indexData={indexData} />
    </div>
  );
};

export default ChartSection;
