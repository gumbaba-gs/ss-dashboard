import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Set visible after component mount to trigger animations
    setIsVisible(true);
  }, []);
  
  const categories = [
    {
      title: "Shelf life extension",
      description: "for fruits and vegetables",
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      delay: 0.2
    },
    {
      title: "Advanced produce and meat wash solutions",
      description: "for food safety and freshness",
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      delay: 0.4
    },
    {
      title: "Lifespan-enhancing superfoods",
      description: "for human and animal health",
      icon: (
        <svg className="w-12 h-12 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      delay: 0.6
    },
    {
      title: "Optimized hydration with Super Water™",
      description: "a breakthrough in sustainable wellness",
      icon: (
        <svg className="w-12 h-12 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      delay: 0.8
    }
  ];
  
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden" style={{background: 'linear-gradient(to right, #3B82F6, #ffffff)'}}>
      {/* Content container */}
      <div className="container-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl text-blue-900 font-extrabold mb-6 ${
                isVisible ? 'slide-in-left' : 'opacity-0'
              }`}
            >
              Spanex Sciences
            </h1>
            
            <p 
              className={`text-lg md:text-xl mb-8 ${
                isVisible ? 'fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.3s' }}
            >
              A pioneering scientific company with an extensive range of cutting-edge formulations across four innovative categories transforming multiple industries by enhancing <span className="font-semibold">preservation, sustainability, and human health</span>.
            </p>
            
            <button 
              className={`px-6 py-3 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg transition-all duration-300 ${isVisible ? 'slide-in-top' : 'opacity-0'}`}
              style={{ animationDelay: '1.2s' }}
            >
              Discover Our Solutions
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <div 
                key={index}
                className={`bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
                  isVisible ? 'fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${category.delay}s` }}
              >
                <div className="mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;