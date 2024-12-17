import './App.css';
import {Brand, Cta, Navbar } from './Components';
import { Features,Blog, Footer, Header, Possibility,WhatGPT3 } from './Containers';

const App =() => {
  return (
    <div>
      {/* <h1>GPT-3</h1> */}
      <Navbar />
      <Header />
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility /> 
      <Cta />
      <Blog />
      <Footer />
      
    </div>
  );
}

export default App;
