import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import CountUp from 'react-countup';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);

const DoughnutChart = ({ percent = 0, color = 'rgba(0,0,0,0.1)', delay }) => {
  const [hide, setHide] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setHide(false);
    }, delay);
  }, [delay]);
  const data = percent
    ? {
        labels: [],
        datasets: [
          {
            data: [percent, 100 - percent],
            backgroundColor: [color, 'rgba(0,0,0,0)'],
            borderColor: ['rgba(0,0,0,0)'],
            borderWidth: 1,
          },
        ],
      }
    : {
        labels: [],
        datasets: [
          {
            legend: {
              display: false,
            },
            data: [6, 13],
            backgroundColor: [color],
            borderColor: ['rgba(0,0,0,0)'],
            borderWidth: 1,
          },
        ],
      };
  const options = percent
    ? {
        responsive: true,
        maintainAspectRatio: true,
        animation: {},
        cutout: '80%',
        plugins: {
          tooltip: {
            enabled: false,
          },
        },
      }
    : {
        responsive: true,
        maintainAspectRatio: true,
        animation: false,
        cutout: '80%',
        plugins: {
          tooltip: {
            enabled: false,
          },
        },
      };
  return (
    <Container>
      {hide ? null : (
        <>
          {percent ? (
            <Doughnut data={data} options={options} />
          ) : (
            <Doughnut data={data} options={options} />
          )}
          <PercentText color={color}>
            {percent ? <CountUp end={percent} duration="0.5" /> : ''}
            {percent ? '%' : ''}
          </PercentText>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: -20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PercentText = styled.span`
  position: absolute;
  top: 48%;
  color: ${({ color }) => color};
  font-weight: bold;
`;

export default DoughnutChart;
