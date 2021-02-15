import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
import BannerComponent from './components/BannerComponent/BannerComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <BannerComponent></BannerComponent>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
