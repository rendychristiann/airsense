import PM25Chart from "./PM25Chart";
import COChart from "./COChart";
import CO2Chart from "./CO2Chart";

const ChartSection = ({ indexData }) => {
  return (
      <div className="flex flex-wrap justify-center items-center">
        <PM25Chart indexData={indexData} />
        <COChart indexData={indexData} />
        <CO2Chart indexData={indexData} />
      </div>
  );
};

export default ChartSection;
