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
);

const RankChangeChart = () => {
  const rankArry = [];
  const labelsArry = [];
  for (let i = 50; i >= 1; i--) {
    labelsArry.push(`이전 ${i}경기`);
    rankArry.push(Math.floor(Math.random() * 8 + 1));
  }

  const data = {
    // 이전 1경기부터 50경기 x축
    labels: [...labelsArry],
    datasets: [
      {
        label: '순위',
        fill: false,
        lineTension: 0.4,
        backgroundColor: 'rgba(0, 119, 255, 1)',
        borderWidth: 1.2,
        borderColor: 'rgba(0, 119, 255, 1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(0, 119, 255, 1)',
        pointBackgroundColor: 'rgba(0, 119, 255, 1)',
        pointBorderWidth: 3,
        pointHoverRadius: 3,
        pointHoverBackgroundColor: 'rgba(0, 119, 255, 1))',
        pointHoverBorderColor: 'rgba(0, 119, 255, 1)',
        pointHoverBorderWidth: 1,
        pointRadius: 1,
        pointHitRadius: 10,
        // 이전 1경기부터 50경기 순위 데이터
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
        display: false,
      },
      yAxis: {
        reverse: true,
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
  width: 80vw;
  height: 40vh;
  position: relative;
`;

export default RankChangeChart;
