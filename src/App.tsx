import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import Footer from './components/Footer';
import './styles/global.css';
import './styles/components.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Projects />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
