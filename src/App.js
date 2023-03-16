import React, {} from 'react';
import { Route, Routes,useRoutes } from 'react-router-dom';
import './App.css'
import Main from './components/main/Main';
import MapRoad from './components/MapRoad/MapRoad';
import PostIdPage from './components/Posts/PostIdPage';
import PostsPage from './components/Posts/PostsPage';
import Article1 from './components/Article/Article1';

function App() {

  

  return (
    <div >

      {/* <Main></Main>
      <MapRoad></MapRoad> */}

      <Routes>
      <Route path='/posts' element={<PostsPage></PostsPage>}></Route>
      <Route  path='/posts/1' element={<PostIdPage></PostIdPage>}></Route>
      <Route  path='/posts/2' element={<Article1></Article1>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
