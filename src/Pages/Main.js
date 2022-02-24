import React from 'react';
import OverallRecord from '../Components/OverallRecord';
import UserinfoBox from '../Components/UserinfoBox';

const username = 'BBEESSTT';
export default function Main() {
  return (
    <div>
      <UserinfoBox username={username} />
      <OverallRecord />
    </div>
  );
}
