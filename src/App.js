import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Header from "./component/Header";
import "./App.css";

import loader from "./loader.gif";
import Filter from "./component/Filter";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setVisible] = useState(false);

  //Data fetching
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/data")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  //Country wise Filtering of total intensity, total likelihood, totalrelevance
  const [isCountry, setCountry] = useState(false);

  const calculateCountryData = (country) => {
    const filteredData = data.filter((item) => item.country === country);
    const result = {
      country: country,
      intensity: 0,
      likelihood: 0,
      relevance: 0,
    };

    filteredData.forEach((item) => {
      result.intensity += item.intensity;
      result.likelihood += item.likelihood;
      result.relevance += item.relevance;
    });

    return result;
  };

  const countryDataArray = [
    calculateCountryData("India"),
    calculateCountryData("Russia"),
    calculateCountryData("China"),
  ];

  //Topic wise Filtering of total intensity, total likelihood, totalrelevance

  const [isTopic, setTopic] = useState(false);

  const calculateTopicData = (topic) => {
    const filteredData = data.filter((item) => item.topic === topic);
    const result = {
      topic: topic,
      intensity: 0,
      likelihood: 0,
      relevance: 0,
    };

    filteredData.forEach((item) => {
      result.intensity += item.intensity;
      result.likelihood += item.likelihood;
      result.relevance += item.relevance;
    });

    return result;
  };

  const topicDataArray = [
    calculateTopicData("oil"),
    calculateTopicData("gas"),
    calculateTopicData("robot"),
  ];

  //Year wise Filtering of total intensity, total likelihood, totalrelevance
  const [isYear, setYear] = useState(false);

  const calculateYearData = (year) => {
    const filteredData = data.filter((item) => item.end_year === year);
    const result = {
      end_year: year,
      intensity: 0,
      likelihood: 0,
      relevance: 0,
    };

    filteredData.forEach((item) => {
      result.intensity += item.intensity;
      result.likelihood += item.likelihood;
      result.relevance += item.relevance;
    });

    return result;
  };

  const yearDataArray = [
    calculateYearData(2016),
    calculateYearData(2025),
    calculateYearData(2040),
  ];

  //Sector wise Filtering of total intensity, total likelihood, totalrelevance

  const [isSector, setSector] = useState(false);

  const calculateSectorData = (sector) => {
    const filteredData = data.filter((item) => item.sector === sector);
    const result = {
      sector: sector,
      intensity: 0,
      likelihood: 0,
      relevance: 0,
    };

    filteredData.forEach((item) => {
      result.intensity += item.intensity;
      result.likelihood += item.likelihood;
      result.relevance += item.relevance;
    });

    return result;
  };

  const sectorDataArray = [
    calculateSectorData("Energy"),
    calculateSectorData("Retail"),
    calculateSectorData("Environment"),
  ];

  //Pestle wise Filtering of total intensity, total likelihood, totalrelevance
  const [isPestle, setPestle] = useState(false);

  const calculatePestleData = (pestle) => {
    const filteredData = data.filter((item) => item.pestle === pestle);
    const result = {
      pestle: pestle,
      intensity: 0,
      likelihood: 0,
      relevance: 0,
    };

    filteredData.forEach((item) => {
      result.intensity += item.intensity;
      result.likelihood += item.likelihood;
      result.relevance += item.relevance;
    });

    return result;
  };

  const pestleDataArray = [
    calculatePestleData("Industries"),
    calculatePestleData("Economic"),
    calculatePestleData("Political"),
  ];

  if (loading) {
    return (
      <div className="Loader">
        <img src={loader} alt="" />
      </div>
    );
  }

  return (
    <div className="App">
      <Header
        isVisible={isVisible}
        setVisible={setVisible}
        setCountry={setCountry}
        setTopic={setTopic}
        setYear={setYear}
        setSector={setSector}
        setPestle={setPestle}
        isCountry={isCountry}
        isTopic={isTopic}
        isYear={isYear}
        isSector={isSector}
        isPestle={isPestle}
      />
      <Routes>
        <Route
          path="/"
          element={<Dashboard data={data} isVisible={isVisible} />}
        />
        <Route
          path="/filter"
          element={
            <Filter
              isVisible={isVisible}
              countryDataArray={countryDataArray}
              topicDataArray={topicDataArray}
              yearDataArray={yearDataArray}
              sectorDataArray={sectorDataArray}
              pestleDataArray={pestleDataArray}
              isCountry={isCountry}
              isTopic={isTopic}
              isYear={isYear}
              isSector={isSector}
              isPestle={isPestle}
              data={data}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
