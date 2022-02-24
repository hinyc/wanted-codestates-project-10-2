import React from 'react';
import NavigationBar from '../Components/NavigationBar';
import OverallRecord from '../Components/OverallRecord';
import UserinfoBox from '../Components/UserinfoBox';

const username = 'BBEESSTT';
export default function Main() {
  return (
    <>
      <NavigationBar />
      <UserinfoBox username={username} />
      <OverallRecord />
    </>
  );
}
