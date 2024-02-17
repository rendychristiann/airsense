import CurrentValue from "./dashboardComponents/CurrentValue";
import DashboardHeader from "./dashboardComponents/DashboardHeader";
import ChartSection from "./dashboardComponents/ChartSection";

const Dashboard = ({indexData}) => {
  const latestIndex = indexData.slice(-1)[0];
  return (
    <section id="dashboard" className="pt-36 pb-5">
      <DashboardHeader indexData={indexData}/>
      <CurrentValue latestIndex={latestIndex}/>
      <ChartSection indexData={indexData}/>
    </section>
  );
};

export default Dashboard;
