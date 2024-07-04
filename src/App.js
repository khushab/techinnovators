import React from 'react';
import Header from './components/Header';
import OpeningSection from './components/OpeningSection';
import ContactSection from './components/ContactSection';
import ProductsSection from './components/ProductsSection/ProductsSection';
import FooterSection from './components/Footer/FooterSection';

const App = () => {
  return (
    <div className="App">
      <Header />
      <OpeningSection />
      <ProductsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default App;