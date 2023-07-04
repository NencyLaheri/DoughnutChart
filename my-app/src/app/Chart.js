"use client"
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const Chart = () => {


  const options = { labels: ["Comedy", "Action", "Romance", "Drama", "SciFi"] };
  const series = [4, 5, 6, 1, 5];

  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  return (
    <>
      {!IsLoading && (
        <ApexCharts options={options} series={series} type="donut" height={350}/>
      )}
    </>
  );
};

export default Chart;
