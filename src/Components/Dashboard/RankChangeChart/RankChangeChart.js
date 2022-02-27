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

const RankChangeChart = ({ recent50matches }) => {
  const rankArry = recent50matches
    .map((el) => el.player.matchRank)
    .filter((test) => test <= 8);

  const labelsArry = [];
  for (let i = 50; i >= 1; i--) {
    labelsArry.push(`이전 ${i}경기`);
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
        borderWidth: 1,
        borderColor: 'rgba(0, 119, 255, 1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(0, 119, 255, 1)',
        pointBackgroundColor: 'rgba(0, 119, 255, 1)',
        pointBorderWidth: 2,
        pointHoverRadius: 3,
        pointHoverBackgroundColor: 'rgba(0, 119, 255, 1)',
        pointHoverBorderColor: 'rgba(0, 119, 255, 1)',
        pointHoverBorderWidth: 2,
        pointRadius: 2,
        pointHitRadius: 1,
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
        suggestedMin: 1,
        suggestedMax: 8,
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
  height: 100%;
  position: relative;
  z-index: 7;
`;

export default RankChangeChart;
