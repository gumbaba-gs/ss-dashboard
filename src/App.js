import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  // Generate random particles for background effect
  useEffect(() => {
    const createParticles = () => {
      const particleContainer = document.querySelector('.particles-bg');
      if (!particleContainer) return;
      
      // Clear existing particles
      particleContainer.innerHTML = '';
      
      // Create new particles
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size
        const size = Math.random() * 100 + 50;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        
        // Random animation delay
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        particleContainer.appendChild(particle);
      }
    };
    
    createParticles();
    window.addEventListener('resize', createParticles);
    
    return () => {
      window.removeEventListener('resize', createParticles);
    };
  }, []);
  
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Section 
        id="empty-section"
        title="Future Content Section"
        content="This section is ready for your content."
      />
      <Footer />
    </div>
  );
}

export default App;