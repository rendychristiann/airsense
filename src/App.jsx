import Header from "./components/Header";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Dashboard from "./components/Dashboard";
import Author from "./components/Author";
import Footer from "./components/Footer";
import { getAll } from "./config/api";
import { useState, useEffect } from "react";

const App = () => {
  const [indexData, setIndexData] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  const fetchData = async () => {
    try {
      setLoadingData(true);
      const data = await getAll();
      // setIndexData(data);
      if (data.length === 0) {
        setIndexData([
          {
            PM25: 0,
            SNR: 0,
            RSSI: 0,
            timestamp: "",
            dateValue: new Date(),
          },
        ]);
        console.log(indexData);
      } else {
        setIndexData(data);
        console.log(indexData);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoadingData(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <Feature />
      {!loadingData && <Dashboard indexData={indexData} />}
      <Author />
      <Footer />
    </div>
  );
};
export default App;
