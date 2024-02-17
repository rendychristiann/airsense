import Header from "./components/Header";
import Hero from "./components/Hero";
import Definition from "./components/Definition";
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
      setIndexData(data);
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
      <Definition />
      <Feature />
      {!loadingData && <Dashboard indexData={indexData} />}
      <Author />
      <Footer />
    </div>
  );
};
export default App;
