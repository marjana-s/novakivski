import React, {} from 'react';
import { Route, Routes,useRoutes } from 'react-router-dom';
import './App.css'
import Main from './components/main/Main';
import MapRoad from './components/MapRoad/MapRoad';
import AppRouter from './components/AppRouter/AppRouter';
import TimeLine from './components/TimeLine/TimeLine';
function App() {

  

  return (
    <div >

      {/* <Main></Main>
      <MapRoad></MapRoad> */}
      <TimeLine></TimeLine>
      <AppRouter></AppRouter>
      
    </div>
  );
}

export default App;
