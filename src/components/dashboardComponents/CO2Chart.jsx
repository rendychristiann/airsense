import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CO2Chart = ({ indexData }) => {
  const labels = indexData
    .map((entry) => entry.timestamp)
    .sort((a, b) => a - b);
  const data = {
    labels,
    datasets: [
      {
        label: "CO2",
        data: indexData.map((entry) => entry.CO2),
        borderColor: "rgb(0, 255, 0)",
        backgroundColor: "rgba(0, 255, 0, 0.5)",
      },
    ],
  };
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3 justify-center">
        <div className="bg-primary rounded-2xl shadow-xl overflow-hidden mb-10">
          <div className="py-4">
            <h3
              className="block font-bold text-xl text-center text-dark hover:text-white"
              id="coTrends"
            >
              CO Current Trends
            </h3>
          </div>
          <div className="flex h-72 bg-light justify-center items-center">
            <Line data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CO2Chart;
