import { useState, useEffect } from 'react';
import Header from './components/Header';
import EyeCatchingHero from './components/EyeCatchingHero';
import SimpleProductDetail from './components/SimpleProductDetail';

import Footer from './components/Footer';
import { products } from './data/products';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkedInProduct = products[0]; // Get LinkedIn optimization product

  return (
    <div className={`min-h-screen ${scrolled ? 'scrolled' : ''}`}>
      <Header />
      <main>
        <EyeCatchingHero />
        <SimpleProductDetail product={linkedInProduct} />
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
