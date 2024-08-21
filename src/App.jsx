import React from 'react';
import Header from './components/HEADER/Header';
import Footer from './components/FOOTER/Footer';
import Hero from "./components/HERO/Hero"
import Welcome from "./components/WELCOME/Welcome"

const App = () => {
  return (
    <div>
      <Header />
      {/* Other components and content */}
      <Hero/>
      <Welcome/>
      <Footer />
    </div>
  );
}

export default App;
  