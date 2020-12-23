import React from 'react';
import Nabvar from './components/Nabvar';
import GlobalStyle from './globalStyles';
import Hero from './components/Hero';
import { SliderData } from './data/sliderData';



function App() {
  return (
    <>
    <GlobalStyle />
    <Nabvar />
    <Hero slides={SliderData} />
    </>
  );
}

export default App;
