// This should replace your src/App.js
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import InventorySection from './components/InventorySection';
import MarketOpportunityDashboard from './components/MarketOpportunityDashboard';
import ProduceWashOpportunity from './components/ProduceWashOpportunity';
import SuperWaterIndiaOpportunity from './components/SuperWaterIndiaOpportunity';
import ProductValidation from './components/ProductValidation';
import BerryMarketOpportunity from './components/BerryMarketOpportunity';
import Section from './components/Section';
import Footer from './components/Footer';

// Particle component for better React implementation
const Particle = ({ size, posX, posY, delay }) => {
  return (
    <div 
      className="particle"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${posX}%`,
        top: `${posY}%`,
        animationDelay: `${delay}s`
      }}
    />
  );
};

// Background particle container component
const ParticleBackground = () => {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 15; i++) {
        newParticles.push({
          id: i,
          size: Math.random() * 100 + 50,
          posX: Math.random() * 100,
          posY: Math.random() * 100,
          delay: Math.random() * 5
        });
      }
      setParticles(newParticles);
    };
    
    generateParticles();
    
    const handleResize = () => {
      generateParticles();
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className="particles-bg">
      {particles.map(particle => (
        <Particle 
          key={particle.id}
          size={particle.size}
          posX={particle.posX}
          posY={particle.posY}
          delay={particle.delay}
        />
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="App relative">
      <ParticleBackground />
      {/* Wrap all content in a div with higher z-index to ensure it's above the particles */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <InventorySection />
        <MarketOpportunityDashboard/>
        <ProduceWashOpportunity/>
        <SuperWaterIndiaOpportunity/>
        <ProductValidation/>
        {/* <BerryMarketOpportunity/> */}
        <Section
          id="about"
          title="About Spanex Sciences"
          content="We are a pioneering scientific company dedicated to enhancing preservation, sustainability, and human health through innovative solutions."
        />
        <Section
          id="products"
          title="Our Products"
          content="Discover our range of cutting-edge formulations across four innovative categories."
        />
        <Section
          id="contact"
          title="Contact Us"
          content="Get in touch with our team to learn more about our solutions."
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;