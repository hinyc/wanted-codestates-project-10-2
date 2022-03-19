import React from 'react';
import styled from 'styled-components';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

const TrackRankChart = () => {
  const rankArry = [];
  const labelsArry = [];
  for (let i = 30; i >= 1; i--) {
    labelsArry.push(i);
    rankArry.push(Math.floor(Math.random() * 8 + 1));
  }

  const data = {
    labels: [...labelsArry],
    datasets: [
      {
        label: '라이더비율',
        fill: true,
        backgroundColor: 'rgba(0, 119, 255, 0.1)',
        lineTension: 0.4,
        borderWidth: 1,
        borderColor: 'rgba(0, 119, 255, 1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(0, 119, 255, 1)',
        pointBackgroundColor: 'rgba(0, 119, 255, 0.1)',
        pointBorderWidth: 1,
        pointHoverRadius: 2,
        pointHoverBackgroundColor: 'rgba(0, 119, 255, 1)',
        pointHoverBorderColor: 'rgba(0, 119, 255, 1)',
        pointHoverBorderWidth: 2,
        pointRadius: 2,
        pointHitRadius: 1,

        data: [...rankArry],
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      Tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        display: true,
        reverse: true,
      },
      yAxis: {
        reverse: false,
      },
    },
  };

  return (
    <>
      <ChartContainer>
        <Line type="line" data={data} options={options} />
      </ChartContainer>
    </>
  );
};

const ChartContainer = styled.div`
  width: auto;
  height: auto;
  position: relative;
  z-index: 7;
`;

export default TrackRankChart;
