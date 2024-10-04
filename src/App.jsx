import React from "react";
import Header from "./components/HEADER/Header";
import Footer from "./components/FOOTER/Footer";
import Hero from "./components/HERO/Hero";
import Welcome from "./components/WELCOME/Welcome";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Process from "./components/Process/Process";
import Material from "./components/Material/Material";
import ProductApplication from "./components/ProductAppliation/ProductApplication";
import Whatsapp from "./components/WhatsApp/WhatsApp";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <section id="welcome">
        <Welcome />
      </section>
      <WhyChooseUs />
      <section id="process">
        <Process />
      </section>
      <section id="material">
        <Material />
      </section>
      <section id="productapplication">
        <ProductApplication />
      </section>
      <section id="contactus">
        <ContactUs />
      </section>
      <Footer />
      <Whatsapp/>
    </div>
  );
};

export default App;
