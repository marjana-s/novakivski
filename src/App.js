import React from 'react';
import logo from './logo.svg';
import Header from './components/header'
import Home from './components/home';
import Artgallery from './components/ArtGallery'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/artgaery" element={<Artgallery/>} />
      </Routes>
        <Footer></Footer>
      </Router>
 </div>
  );
}

export default App;
