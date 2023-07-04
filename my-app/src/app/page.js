// import { ApexCharts } from "apexcharts"
import dynamic from 'next/dynamic';
import Chart from './Chart';

export default function Home() {

  return (
    <div>
      <h1><center>Doughnut Chart</center></h1>
      <Chart />
    </div>
    
  );
}
