import React from 'react';
import Header from './components/HEADER/Header';
import Footer from './components/FOOTER/Footer';
import Hero from "./components/HERO/Hero"
import Welcome from "./components/WELCOME/Welcome"
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import ContactUs from "./components/ContactUs/ContactUs";
import Process from "./components/Process/Process";

const App = () => {
  return (
    <div>
      <Header />
      {/* Other components and content */}
      <Hero/>
      <Welcome/>
      <WhyChooseUs/>
      <Process/>
      <ContactUs/>
      <Footer />
    </div>
  );
}

export default App;
  