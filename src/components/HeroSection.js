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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 11.5C8.5 10.0858 8.5 9.37868 8.93934 8.93934C9.37868 8.5 10.0858 8.5 11.5 8.5H12.5C13.9142 8.5 14.6213 8.5 15.0607 8.93934C15.5 9.37868 15.5 10.0858 15.5 11.5V12.5C15.5 13.9142 15.5 14.6213 15.0607 15.0607C14.6213 15.5 13.9142 15.5 12.5 15.5H11.5C10.0858 15.5 9.37868 15.5 8.93934 15.0607C8.5 14.6213 8.5 13.9142 8.5 12.5V11.5Z M22 19H13C9.22876 19 7.34315 19 6.17157 17.8284C5.51839 17.1752 5.22937 16.3001 5.10149 15M5 11V2 M8 5H11C14.7712 5 16.6569 5 17.8284 6.17157C18.4816 6.82475 18.7706 7.69989 18.8985 9M2 5H5M19 19V22M19 13V16" />
        </svg>
      ),
      delay: 0.2
    },
    {
      title: "Advanced produce and meat wash solutions",
      description: "for food safety and freshness",
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 4.5c-0.5-0.1-1 0.2-1.1 0.7l-0.3 1.3c-0.6 0.05-1 0.2-1.4 0.3-0.4 0.14-0.7 0.25-1.4 0.25-0.7 0-1-0.11-1.4-0.25-0.5-0.16-1-0.35-2-0.35s-1.6 0.19-2 0.35c-0.4 0.14-0.7 0.25-1.4 0.25-0.7 0-1-0.11-1.4-0.25-0.5-0.16-1-0.35-2-0.35s-1.6 0.19-2 0.35c-0.4 0.14-0.7 0.25-1.4 0.25-0.7 0-1-0.11-1.4-0.25-0.4-0.13-0.8-0.28-1.4-0.33L2 4.5C1.5 4.4 1 4.7 0.9 5.2L4 19c0.1 0.4 0.5 0.7 0.9 0.7h15c0.4 0 0.8-0.3 0.9-0.7l3.1-14.3c0.1-0.5-0.3-1-0.9-1.2zM19 18H5L2.7 7.5C2.85 7.54 3 7.58 3.1 7.62c0.5 0.16 1 0.35 2 0.35s1.55-0.19 2-0.35C7.5 7.48 7.8 7.37 8.5 7.37c0.7 0 1 0.11 1.4 0.25 0.5 0.16 1 0.35 2 0.35s1.55-0.19 2-0.35c0.4-0.14 0.7-0.25 1.4-0.25 0.7 0 1 0.11 1.4 0.25 0.5 0.16 1 0.35 2 0.35s1.55-0.19 2-0.35c0.13-0.04 0.25-0.08 0.38-0.12L19 18zM10 12a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM14 12a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
        </svg>
      ),
      delay: 0.4
    },
    {
      title: "Lifespan-enhancing superfoods",
      description: "for humans and animals health",
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 1.25-0.4 2.45-1 3.5" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.5 10.5c0 0.83 0.67 1.5 1.5 1.5s1.5-0.67 1.5-1.5S9.83 9 9 9s-1.5 0.67-1.5 1.5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 14l2 2 2-2M15.5 16v-5M17.5 14c0-0.83-0.67-1.5-1.5-1.5h-1" />
        </svg>
      ),
      delay: 0.6
    },
    {
      title: "Optimized hydration with Super Water™",
      description: "for humans and animals health",
      icon: (
        <svg className="w-12 h-12 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 14.25c0 4.97-4.04 9-9 9s-9-4.03-9-9C3 9.44 11.12 1.31 11.48 0.97c0.29-0.29 0.76-0.29 1.05 0C12.88 1.31 21 9.44 21 14.25z M10.5 19.5c-2.48 0-4.5-2.02-4.5-4.5 M10.5 19.5c0.41 0 0.75-0.34 0.75-0.75s-0.34-0.75-0.75-0.75c-1.65 0-3-1.35-3-3 0-0.41-0.34-0.75-0.75-0.75" />
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
              A pioneering scientific company with an extensive range of cutting-edge formulations across four innovative categories transforming multiple industries by enhancing <span className="font-semibold">preservation, sustainability, human health and Pet care</span>.
            </p>

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