import React, { useState, useEffect } from 'react';

const ScaleUpRoadmap = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState('phase1');
  
  useEffect(() => {
    // Set visible after component mount to trigger animations
    setIsVisible(true);
  }, []);

  const toggleCard = (cardId) => {
    if (expandedCard === cardId) {
      setExpandedCard(null);
    } else {
      setExpandedCard(cardId);
    }
  };

  // Roadmap phases data
  const roadmapData = [
    {
      id: 'phase1',
      title: 'Phase 1 (Next 3 Months)',
      description: 'Initial market entry and regulatory approvals',
      steps: [
        'Open initial R&D labs in India',
        'Establish initial production capabilities',
        'Complete regulatory approvals for initial markets',
        'Launch blueberry liquid formulations in North American market'
      ],
      color: 'bg-blue-600',
      icon: '🚀'
    },
    {
      id: 'phase2',
      title: 'Phase 2 (Starting September)',
      description: 'Market expansion and production scaling',
      steps: [
        'Launch berry liquid and sachets in Australia and New Zealand markets',
        'Scale production capabilities for both liquids and sachets',
        'Expand berry applications to additional varieties'
      ],
      color: 'bg-green-600',
      icon: '📈'
    },
    {
      id: 'phase3',
      title: 'Phase 3 (Q1 Next Year)',
      description: 'Infrastructure development and product diversification',
      steps: [
        'Establish production units in strategic locations',
        'Open R&D labs in Australia and America',
        'Begin avocado and flower preservation commercial rollout',
        'Launch Advanced Wash Solutions in North American market markets'
      ],
      color: 'bg-purple-600',
      icon: '🔬'
    },
    {
      id: 'phase4',
      title: 'Phase 4 (Year 2)',
      description: 'Global expansion and diversification',
      steps: [
        'Expand to additional produce categories',
        'Introduce Super Water™ commercial applications',
        'Introduce Super Food™ commercial applications',
        'Scale globally with strategic partnerships'
      ],
      color: 'bg-indigo-600',
      icon: '🌐'
    }
  ];

  // Expandable card component with improved interaction
  const ExpandableCard = ({ id, title, description, steps, color, icon }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-4 relative z-10">
      <div
        className={`p-4 flex justify-between items-center cursor-pointer bg-gradient-to-r from-blue-50 to-white relative z-20`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleCard(id);
        }}
        style={{ pointerEvents: 'auto' }}
      >
        <div className="flex items-center">
          <div className={`w-10 h-10 ${color} rounded-full flex items-center justify-center text-white mr-3`}>
            <span className="text-xl">{icon}</span>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-blue-800">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
        <svg
          className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${expandedCard === id ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div
        className={`transition-all duration-300 ${
          expandedCard === id ? 'max-h-96 p-4 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <ul className="space-y-2">
          {steps.map((step, idx) => (
            <li key={idx} className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <section className="py-16 gradient-bg relative">
      <div className="container-padding relative z-10" style={{ pointerEvents: 'auto' }}>
        <h2 className={`heading text-center ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          Roadmap for Scale-Up
        </h2>
        <p className={`paragraph text-center max-w-3xl mx-auto mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          Our comprehensive plan for scaling operations, expanding market presence, and accelerating growth over the next 24 months.
        </p>

        {/* Timeline Visualization with improved interaction */}
        <div className="hidden md:block bg-white p-6 rounded-xl shadow-lg mb-8 relative z-10" style={{ pointerEvents: 'auto' }}>
          <div className="relative">
            <div className="absolute left-0 w-full h-1 bg-blue-100 top-6"></div>
            <div className="flex justify-between">
              {roadmapData.map((phase, index) => (
                <div key={phase.id} className="relative z-10 text-center" style={{ width: '24%' }}>
                  <div 
                    className={`w-12 h-12 ${phase.color} rounded-full mx-auto flex items-center justify-center text-white mb-2 transition-all duration-500 ${isVisible ? 'scale-100' : 'scale-0'}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <span className="text-xl">{phase.icon}</span>
                  </div>
                  <h3 className="font-semibold text-blue-800 text-sm">{phase.title}</h3>
                  <p className="text-xs text-gray-600 mt-1">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Phase Descriptions */}
        <div className="space-y-4">
          {roadmapData.map((phase, index) => (
            <div 
              key={phase.id} 
              className={`transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
            >
              <ExpandableCard 
                id={phase.id}
                title={phase.title}
                description={phase.description}
                steps={phase.steps}
                color={phase.color}
                icon={phase.icon}
              />
            </div>
          ))}
        </div>

        {/* Key Performance Indicators with improved interaction */}
        <div
          className={`mt-8 bg-white rounded-xl shadow-lg p-6 transition-all duration-500 relative z-10 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
          style={{ transitionDelay: '0.6s', pointerEvents: 'auto' }}
        >
          <h3 className="font-bold text-xl text-blue-900 mb-4">Key Performance Indicators</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Market Penetration</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Phase 1</span>
                    <span>5%</span>
                  </div>
                  <div className="w-full bg-blue-100 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '5%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Phase 2</span>
                    <span>12%</span>
                  </div>
                  <div className="w-full bg-blue-100 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '12%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Phase 3</span>
                    <span>25%</span>
                  </div>
                  <div className="w-full bg-blue-100 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Phase 4</span>
                    <span>40%</span>
                  </div>
                  <div className="w-full bg-blue-100 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Revenue Growth</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Phase 1</span>
                    <span>$12M</span>
                  </div>
                  <div className="w-full bg-green-100 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Phase 2</span>
                    <span>$28M</span>
                  </div>
                  <div className="w-full bg-green-100 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '24%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Phase 3</span>
                    <span>$52M</span>
                  </div>
                  <div className="w-full bg-green-100 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Phase 4</span>
                    <span>$110M+</span>
                  </div>
                  <div className="w-full bg-green-100 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Production Capacity</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Phase 1</span>
                    <span>1,000 L/month</span>
                  </div>
                  <div className="w-full bg-purple-100 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '8%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Phase 2</span>
                    <span>5,000 L/month</span>
                  </div>
                  <div className="w-full bg-purple-100 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Phase 3</span>
                    <span>20,000 L/month</span>
                  </div>
                  <div className="w-full bg-purple-100 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Phase 4</span>
                    <span>50,000+ L/month</span>
                  </div>
                  <div className="w-full bg-purple-100 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Particles with improved z-index */}
        <div className="particles-bg" style={{ zIndex: -1, pointerEvents: 'none' }}>
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                pointerEvents: 'none'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScaleUpRoadmap;