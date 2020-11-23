import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Portfolio />
    </>
  )
}

export default App;
