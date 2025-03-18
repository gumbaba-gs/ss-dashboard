import React, { useState, useEffect } from 'react';

const BerryMarketOpportunity = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState('market');
  
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
  
  // Market data
  const marketData = {
    usa: {
      blueberryProduction: 340, // million kg
      preservationMarket: 630, // million $
      untappedMarket: 85, // percent
      revenueAt5Percent: 1.06 // million $
    },
    canada: {
      blueberryProduction: 176.3, // million kg
      preservationMarket: 320, // million $
      untappedMarket: 88, // percent
      revenueAt5Percent: 0.55 // million $
    },
    mexico: {
      blueberryProduction: 53.4, // million kg
      preservationMarket: 95, // million $
      untappedMarket: 90, // percent
      revenueAt5Percent: 0.17 // million $
    },
    australia: {
      blueberryProduction: 24.2, // million kg
      preservationMarket: 45, // million $
      untappedMarket: 92.5, // percent
      revenueAt5Percent: 0.08 // million $
    },
    newZealand: {
      blueberryProduction: 12.5, // million kg
      preservationMarket: 23, // million $
      untappedMarket: 94, // percent
      revenueAt5Percent: 0.04 // million $
    },
    combined: {
      totalTAM: { min: 1050, max: 1500 }, // million $
      expansionPotential: { min: 5, max: 8 }, // billion $
      marketValueCreated: { min: 35, max: 70 } // million $
    },
    product: {
      shelfLifeExtension: "5x",
      treatmentCapacity: 800, // kg per liter
      pricingPerLiter: { min: 50, max: 100 }, // $ per liter
      applicationType: "Spray or Dip Coating"
    }
  };

  // Production trend data
  const productionData = [
    { year: 2023, usa: 322.6, canada: 168.0, mexico: 50.1, australia: 20.0, newZealand: 11.2 },
    { year: 2024, usa: 331.5, canada: 172.0, mexico: 51.7, australia: 22.1, newZealand: 11.8 },
    { year: 2025, usa: 340.0, canada: 176.3, mexico: 53.4, australia: 24.2, newZealand: 12.5 },
    { year: 2026, usa: 350.2, canada: 181.6, mexico: 55.0, australia: 26.6, newZealand: 13.3 },
    { year: 2027, usa: 360.7, canada: 187.0, mexico: 56.7, australia: 29.3, newZealand: 14.0 }
  ];

  // Tab options
  const tabOptions = [
    { id: 'overview', label: 'Market Overview', icon: '📊' },
    { id: 'countries', label: 'Target Countries', icon: '🌎' },
    { id: 'projections', label: 'Financial Projections', icon: '💰' },
    { id: 'strategy', label: 'Market Strategy', icon: '🚀' }
  ];

  // Expandable card component with improved interaction
  const ExpandableCard = ({ id, title, children }) => (
    <div className="bg-white rounded-lg shadow overflow-hidden mb-4 relative z-10">
      <div
        className="p-4 flex justify-between items-center cursor-pointer bg-gradient-to-r from-blue-50 to-white relative z-20"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleCard(id);
        }}
        style={{ pointerEvents: 'auto' }}
      >
        <h3 className="font-semibold text-lg text-blue-800">{title}</h3>
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
          expandedCard === id ? 'max-h-screen opacity-100 p-4' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        {children}
      </div>
    </div>
  );

  // Metric card component
  const MetricCard = ({ title, value, subtitle, icon }) => (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center mb-2">
        <div className="text-2xl text-blue-600 mr-2">{icon}</div>
        <h3 className="text-lg font-semibold text-blue-800">{title}</h3>
      </div>
      <div className="text-2xl font-bold text-blue-900">{value}</div>
      {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
    </div>
  );

  // Country card component
  const CountryCard = ({ country, data }) => (
    <div className="bg-blue-50 p-4 rounded-lg">
      <h3 className="font-semibold text-blue-800 text-lg mb-2">{country}</h3>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <p className="text-xs text-gray-600">Production</p>
          <p className="font-bold text-blue-700">{data.blueberryProduction}M kg</p>
        </div>
        <div>
          <p className="text-xs text-gray-600">Market Size</p>
          <p className="font-bold text-blue-700">${data.preservationMarket}M</p>
        </div>
        <div>
          <p className="text-xs text-gray-600">Untapped Market</p>
          <p className="font-bold text-blue-700">{data.untappedMarket}%</p>
        </div>
        <div>
          <p className="text-xs text-gray-600">Revenue at 5%</p>
          <p className="font-bold text-blue-700">${data.revenueAt5Percent}M</p>
        </div>
      </div>
    </div>
  );

  // Progress bar component
  const ProgressBar = ({ label, current, max, color = "bg-blue-600" }) => (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-blue-900">{label}</span>
        <span className="text-sm font-medium text-blue-700">{current}%</span>
      </div>
      <div className="w-full bg-blue-100 rounded-full h-2.5">
        <div className={`${color} h-2.5 rounded-full`} style={{ width: `${current}%` }}></div>
      </div>
    </div>
  );

  // Growth projection bar
  const GrowthProjectionBar = ({ year, baseline, projected, country }) => (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span className="font-medium text-blue-900">{year}</span>
        <span className="font-medium text-blue-700">{projected}M kg</span>
      </div>
      <div className="relative h-6 w-full bg-blue-100 rounded">
        <div 
          className="absolute top-0 left-0 h-6 bg-blue-300 rounded-l"
          style={{ width: `${(baseline / projected) * 100}%` }}
        ></div>
        <div 
          className="absolute top-0 left-0 h-6 bg-blue-600 rounded-l flex items-center justify-end pr-2"
          style={{ width: `100%` }}
        >
          <span className="text-xs text-white font-medium">
            {country} - {Math.round((projected - baseline) / baseline * 100)}% growth from 2023
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative py-16 gradient-bg">
      <div className="container-padding relative z-10" style={{ pointerEvents: 'auto' }}>
        <h2 className="heading text-center">
          Berry Market Opportunity
        </h2>
        <p className="paragraph text-center max-w-3xl mx-auto mb-8">
          Detailed analysis of the significant market opportunity for our 5x shelf life extension technology in the global berry industry.
        </p>

        {/* Tab Navigation - Enhanced for better interaction */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 relative z-20" style={{ pointerEvents: 'auto' }}>
          {tabOptions.map((tab) => (
            <button
              key={tab.id}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setActiveTab(tab.id);
              }}
              className={`px-4 py-3 rounded-full flex items-center transition duration-300 relative z-20 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-blue-800 hover:bg-blue-50'
              }`}
              style={{ pointerEvents: 'auto' }}
              type="button"
            >
              <span className="mr-2">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Container with improved interaction */}
        <div className="bg-white bg-opacity-90 rounded-xl shadow-lg overflow-hidden mb-8 relative z-10" style={{ pointerEvents: 'auto' }}>
          {/* Current Tab Header */}
          <div className="p-6 bg-gradient-to-r from-blue-50 to-white border-b border-blue-100 relative z-10">
            <h3 className="subheading">
              {activeTab === 'overview' && "Berry Market Overview"}
              {activeTab === 'countries' && "Target Country Analysis"}
              {activeTab === 'projections' && "Financial Projections"}
              {activeTab === 'strategy' && "Market Entry Strategy"}
            </h3>
            <p className="text-gray-600">
              {activeTab === 'overview' && "Snapshot of the significant global opportunity for berry preservation solutions"}
              {activeTab === 'countries' && "Country-specific market data and production volumes"}
              {activeTab === 'projections' && "Revenue potential and market penetration targets"}
              {activeTab === 'strategy' && "Strategic approach to market entry and expansion"}
            </p>
          </div>
          {/* Tab Content */}
          <div className="p-6">
            {/* Market Overview Tab */}
            {activeTab === 'overview' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <MetricCard 
                    title="Total Addressable Market" 
                    value={`$${marketData.combined.totalTAM.min}M-${marketData.combined.totalTAM.max}M`}
                    subtitle="Global berry preservation market"
                    icon="🌐"
                  />
                  <MetricCard 
                    title="Berry Production" 
                    value={`${productionData[2].usa + productionData[2].canada + productionData[2].mexico + productionData[2].australia + productionData[2].newZealand}M kg`}
                    subtitle="2025 production forecast"
                    icon="🍓"
                  />
                  <MetricCard 
                    title="Untapped Market" 
                    value="~90%"
                    subtitle="Average across target markets"
                    icon="🎯"
                  />
                  <MetricCard 
                    title="Value Creation" 
                    value={`$${marketData.combined.marketValueCreated.min}M-${marketData.combined.marketValueCreated.max}M`}
                    subtitle="Through waste reduction"
                    icon="💸"
                  />
                </div>

                <ExpandableCard id="market" title="Market Size & Opportunity">
                  <p className="mb-4">
                    The global berry market represents a significant opportunity for our preservation technology, with blueberries alone accounting for a 
                    ${marketData.combined.totalTAM.min}M-${marketData.combined.totalTAM.max}M addressable market across our target countries. Our 5x shelf life extension 
                    technology directly addresses the critical challenges of spoilage and waste in this high-value, highly perishable category.
                  </p>
                </ExpandableCard>
                
                <ExpandableCard id="product" title="Product Value Proposition">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-3">Key Features</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <span className="font-medium text-blue-800">5x Shelf Life Extension</span>
                            <p className="text-sm text-gray-600">Dramatically extends marketable life of berries</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <span className="font-medium text-blue-800">{marketData.product.applicationType}</span>
                            <p className="text-sm text-gray-600">Simple application process with existing equipment</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ExpandableCard>
              </div>
            )}

            {/* Target Countries Tab */}
            {activeTab === 'countries' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <CountryCard country="United States" data={marketData.usa} />
                  <CountryCard country="Canada" data={marketData.canada} />
                  <CountryCard country="Mexico" data={marketData.mexico} />
                  <CountryCard country="Australia" data={marketData.australia} />
                  <CountryCard country="New Zealand" data={marketData.newZealand} />
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-4 rounded-lg text-white">
                    <h3 className="font-semibold text-lg mb-2">Combined Opportunity</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-xs text-blue-100">Total Production</p>
                        <p className="font-bold text-xl">
                          {(marketData.usa.blueberryProduction + 
                          marketData.canada.blueberryProduction + 
                          marketData.mexico.blueberryProduction + 
                          marketData.australia.blueberryProduction + 
                          marketData.newZealand.blueberryProduction).toFixed(1)}M kg
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-blue-100">Total Market Size</p>
                        <p className="font-bold text-xl">
                          ${(marketData.usa.preservationMarket + 
                          marketData.canada.preservationMarket + 
                          marketData.mexico.preservationMarket + 
                          marketData.australia.preservationMarket + 
                          marketData.newZealand.preservationMarket)}M
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Financial Projections Tab */}
            {activeTab === 'projections' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Target Market Penetration</h3>
                    <div className="relative pt-1">
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <span className="text-xs font-semibold inline-block text-blue-800">5% Initial Target</span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold inline-block text-blue-800">$1.90M Annual Revenue</span>
                        </div>
                      </div>
                      <div className="flex h-2 mb-4 overflow-hidden text-xs bg-blue-200 rounded">
                        <div style={{ width: "5%" }} className="bg-blue-600 rounded"></div>
                      </div>
                      <p className="text-xs text-gray-600">Based on 5% market share at base pricing of $50/liter</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Market Strategy Tab */}
            {activeTab === 'strategy' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-center mb-2">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white mb-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-blue-800">Market Entry</h3>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-blue-200 text-blue-800 flex items-center justify-center text-xs font-medium mr-2 mt-0.5">1</div>
                        <span className="text-sm">Target USA & Australia producers</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-blue-200 text-blue-800 flex items-center justify-center text-xs font-medium mr-2 mt-0.5">2</div>
                        <span className="text-sm">Focus on blueberry segment</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-blue-200 text-blue-800 flex items-center justify-center text-xs font-medium mr-2 mt-0.5">3</div>
                        <span className="text-sm">Partner with key distributors</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
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

export default BerryMarketOpportunity;