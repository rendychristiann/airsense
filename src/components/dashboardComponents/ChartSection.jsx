import PM25Chart from "./PM25Chart";

const ChartSection = ({ indexData }) => {
  return (
      <div className="flex flex-wrap justify-center items-center">
        <PM25Chart indexData={indexData} />
      </div>
  );
};

export default ChartSection;
