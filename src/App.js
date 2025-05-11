import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import PreservativesInventory from './components/PreservativeInventory';
import MarketOpportunityDashboard from './components/PreservativesGlobalOpportunity';
import BusinessModelFinancialStrategy from './components/PreservativesBusinessModel';
import CompanyStructure from './components/CompanyStructure';
import SuperWaterInventory from './components/SuperWaterInventory';
import SuperWaterIndiaOpportunity from './components/SuperWaterIndiaOpportunity';
import SuperWaterBusinessModel from './components/SuperWaterBusinessModel';



const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentView, setCurrentView] = useState("home");

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

  // Function to handle category selection
  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentView("category");
    
    // Scroll to top when a category is selected
    window.scrollTo(0, 0);
  };

  // Function to navigate back to home
  const handleBackToHome = () => {
    setSelectedCategory(null);
    setCurrentView("home");
    
    // Scroll to top when going back to home
    window.scrollTo(0, 0);
  };

  // Function to navigate to a specific inventory view
  const navigateTo = (viewId) => {
    setCurrentView(viewId);
  };

  // Render content based on selected category
  const renderCategoryContent = () => {
    if (!selectedCategory) return null;

    // Coming soon component for Produce Wash and Super Food
    if (selectedCategory === 'produceWash' || selectedCategory === 'superFood') {
      return (
        <div className="py-16 gradient-bg">
          <div className="container-padding">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-6xl mb-6">🚧</div>
              <h2 className="text-3xl font-bold text-blue-800 mb-4">
                Coming Soon!
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {selectedCategory === 'produceWash' ? 
                  "Our Advanced Produce and Meat Wash solutions are currently in development." :
                  "Our Lifespan-enhancing Superfoods lineup is currently in development."}
              </p>
              <p className="text-md text-gray-600 mb-8">
                We're working hard to bring these innovative products to market. Check back soon for updates!
              </p>
              <button 
                onClick={handleBackToHome}
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    // BackButton component
    const BackButton = () => (
      <div className="container-padding pt-6 pb-0">
        <button 
          onClick={handleBackToHome}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </button>
      </div>
    );

    if (selectedCategory === 'preservatives') {
      return (
        <>
          <BackButton />
          <PreservativesInventory />
          <MarketOpportunityDashboard />
          <BusinessModelFinancialStrategy />
          <CompanyStructure />
        </>
      );
    }

    if (selectedCategory === 'superWater') {
      // For Super Water, we need to handle different views
      switch (currentView) {
        case "category":
          return (
            <>
              <BackButton />
              <SuperWaterInventory navigateTo={navigateTo} />
              <SuperWaterIndiaOpportunity />
              <SuperWaterBusinessModel />
              <CompanyStructure />
            </>
          );
        default:
          return (
            <>
              <BackButton />
              <SuperWaterInventory navigateTo={navigateTo} />
              <SuperWaterIndiaOpportunity />
              <SuperWaterBusinessModel />
              <CompanyStructure />
            </>
          );
      }
    }

    return null;
  };

  return (
    <div className="App relative">
      <ParticleBackground />
      {/* Wrap all content in a div with higher z-index to ensure it's above the particles */}
      <div className="relative z-10">
        {currentView === "home" ? (
          <>
            <HeroSection onCategorySelect={handleCategorySelect} />
            <Footer />
          </>
        ) : (
          <>
            {renderCategoryContent()}
            <Footer />
          </>
        )}
      </div>
    </div>
  );
};

export default App;