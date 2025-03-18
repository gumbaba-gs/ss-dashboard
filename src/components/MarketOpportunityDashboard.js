import React, { useState, useEffect } from 'react';

const MarketOpportunityDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);
  
  useEffect(() => {
    // Set visible after component mount to trigger animations
    setIsVisible(true);
  }, []);

  const toggleExpand = (cardId) => {
    if (expandedCard === cardId) {
      setExpandedCard(null);
    } else {
      setExpandedCard(cardId);
    }
  };
  
  const marketData = {
    overview: {
      title: "Total Preservation Market Opportunity",
      subtitle: "Combined impact across all categories",
      stats: [
        { label: "Total Market Size", value: "$42.7B", icon: "📊" },
        { label: "Annual Spoilage", value: "31%", icon: "📉" },
        { label: "Addressable Market", value: "$13.2B", icon: "🎯" },
        { label: "Estimated Market Share", value: "3.8%", icon: "📈" }
      ],
      description: "Our revolutionary preservation technologies deliver a 5x increase in shelf life across multiple markets, dramatically reducing waste while significantly improving sustainability and profitability throughout the supply chain."
    },
    berry: {
      title: "Berry Preservation",
      subtitle: "Strawberries, Blueberries, Raspberries, Blackberries",
      stats: [
        { label: "Market Size", value: "$21.5B", icon: "🍓" },
        { label: "Annual Spoilage", value: "40%", icon: "🗑️" },
        { label: "Addressable Market", value: "$8.6B", icon: "💰" },
        { label: "Current Solutions Efficacy", value: "15%", icon: "⚗️" }
      ],
      regions: [
        { name: "North America", marketShare: 42, growth: 6.7 },
        { name: "Australia/NZ", marketShare: 12, growth: 8.2 },
        { name: "Europe", marketShare: 30, growth: 5.5 },
        { name: "Asia Pacific", marketShare: 16, growth: 11.3 }
      ],
      impact: "Berry shelf-life extension increases marketable time by 5x (from 7 days to 35 days), dramatically reducing retail waste by up to 75% and significantly expanding distribution ranges for producers."
    },
    avocado: {
      title: "Avocado Preservation",
      subtitle: "Extended ripening control and freshness",
      stats: [
        { label: "Market Size", value: "$12.8B", icon: "🥑" },
        { label: "Annual Spoilage", value: "32%", icon: "🗑️" },
        { label: "Addressable Market", value: "$4.1B", icon: "💰" },
        { label: "Current Solutions Efficacy", value: "22%", icon: "⚗️" }
      ],
      regions: [
        { name: "North America", marketShare: 45, growth: 7.8 },
        { name: "Australia/NZ", marketShare: 13, growth: 9.3 },
        { name: "Europe", marketShare: 25, growth: 8.5 },
        { name: "Asia Pacific", marketShare: 17, growth: 12.6 }
      ],
      impact: "Avocado preservation technology extends the marketable window by 5x through controlled ripening rate, reducing waste by up to 70% and providing consistent quality to consumers across a much longer timeframe."
    },
    leafyGreens: {
      title: "Leafy Greens Preservation",
      subtitle: "Lettuce, Spinach, Kale, Arugula",
      stats: [
        { label: "Market Size", value: "$6.2B", icon: "🥬" },
        { label: "Annual Spoilage", value: "35%", icon: "🗑️" },
        { label: "Addressable Market", value: "$2.2B", icon: "💰" },
        { label: "Current Solutions Efficacy", value: "25%", icon: "⚗️" }
      ],
      regions: [
        { name: "North America", marketShare: 38, growth: 5.2 },
        { name: "Australia/NZ", marketShare: 10, growth: 6.5 },
        { name: "Europe", marketShare: 35, growth: 4.8 },
        { name: "Asia Pacific", marketShare: 17, growth: 9.4 }
      ],
      impact: "Leafy green preservation solutions extend freshness by 5x (from 4-6 days to 20-30 days), maintaining nutritional quality and appearance while reducing supply chain losses by up to 65%."
    },
    rose: {
      title: "Rose Preservation",
      subtitle: "Cut flowers and ornamentals",
      stats: [
        { label: "Market Size", value: "$2.2B", icon: "🌹" },
        { label: "Annual Spoilage", value: "25%", icon: "🗑️" },
        { label: "Addressable Market", value: "$550M", icon: "💰" },
        { label: "Current Solutions Efficacy", value: "30%", icon: "⚗️" }
      ],
      regions: [
        { name: "North America", marketShare: 32, growth: 4.3 },
        { name: "Australia/NZ", marketShare: 8, growth: 5.7 },
        { name: "Europe", marketShare: 42, growth: 3.8 },
        { name: "Asia Pacific", marketShare: 18, growth: 7.2 }
      ],
      impact: "Rose preservation formulations extend vase life by 5x (from 7 days to 35 days), dramatically reducing retail losses and significantly improving consumer satisfaction with much longer-lasting floral displays."
    },
    launchStrategy: {
      title: "Global Launch Strategy",
      subtitle: "Phased market entry for preservation solutions",
      description: "Our carefully developed launch strategy maximizes market penetration while ensuring regulatory compliance and localized product optimization.",
      phases: [
        {
          name: "Phase 1: Core Markets Entry (2025-2026)",
          steps: [
            "Initial launch in USA, Canada, and Australia - berry and avocado formulations",
            "Focus on regions with highest spoilage rates and premium produce",
            "Partnership with 5-8 major produce distributors in each market",
            "Establish baseline metrics for shelf-life extension and waste reduction"
          ]
        },
        {
          name: "Phase 2: Expansion and Diversification (2026-2027)",
          steps: [
            "Expansion to Mexico, New Zealand, and select European markets",
            "Introduction of leafy greens and rose preservation formulations",
            "Development of market-specific formulations based on Phase 1 data",
            "B2B marketing campaign targeting food service and retail chains"
          ]
        },
        {
          name: "Phase 3: Global Scale (2028-2029)",
          steps: [
            "Expansion to Asia Pacific markets including Japan, South Korea, and Singapore",
            "Launch of customized formulations for tropical fruits and regional specialties",
            "Establishment of regional manufacturing hubs for optimized distribution",
            "Development of consumer-facing retail products for home use"
          ]
        }
      ],
      projections: [
        { year: "2025", revenue: "$18M", markets: 3, products: 2 },
        { year: "2027", revenue: "$42M", markets: 8, products: 4 },
        { year: "2029", revenue: "$95M+", markets: 12, products: 8 }
      ]
    }
  };

  // Options for the dashboard tabs
  const tabOptions = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'berry', label: 'Berry', icon: '🍓' },
    { id: 'avocado', label: 'Avocado', icon: '🥑' },
    { id: 'leafyGreens', label: 'Leafy Greens', icon: '🥬' },
    { id: 'rose', label: 'Rose', icon: '🌹' },
    { id: 'launchStrategy', label: 'Launch Strategy', icon: '🚀' }
  ];

  // Current active data based on selected tab
  const activeData = marketData[activeTab];

  // Rendering a bar for the region visualization
  const RegionBar = ({ name, marketShare, growth }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-blue-900">{name}</span>
        <span className="text-sm font-medium text-blue-700">{marketShare}% | +{growth}% growth</span>
      </div>
      <div className="w-full bg-blue-100 rounded-full h-2.5 overflow-hidden">
        <div 
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000" 
          style={{ width: `${marketShare}%`, opacity: isVisible ? 1 : 0 }}
        ></div>
      </div>
    </div>
  );

  // Market stat card component
  const StatCard = ({ icon, label, value, delay = 0 }) => (
    <div 
      className={`bg-white rounded-lg shadow p-4 flex items-center transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-3xl mr-3">{icon}</div>
      <div>
        <div className="text-xl font-bold text-blue-800">{value}</div>
        <div className="text-gray-600 text-sm">{label}</div>
      </div>
    </div>
  );

  // Detailed insight card component with expandable content
  const InsightCard = ({ id, title, content, isExpanded, onToggle, icon, delay = 0 }) => (
    <div 
      className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div 
        className="p-4 cursor-pointer flex justify-between items-center"
        onClick={() => onToggle(id)}
      >
        <div className="flex items-center">
          <span className="text-xl mr-2">{icon}</span>
          <h3 className="text-lg font-semibold text-blue-800">{title}</h3>
        </div>
        <svg
          className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${isExpanded ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div 
        className={`px-4 pb-4 transition-all duration-300 ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}
      >
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );

  return (
    <section id="market-opportunity" className="relative min-h-screen gradient-bg py-16">
      <div className="container-padding relative z-10">
        <h2 className={`heading text-center ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          Market Opportunity: Preservations
        </h2>
        <p className={`paragraph text-center max-w-3xl mx-auto mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          Explore our revolutionary 5x shelf life extension solutions and their market-transforming potential across multiple categories.
        </p>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabOptions.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 rounded-full flex items-center transition duration-300 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-blue-800 hover:bg-blue-50'
              } ${isVisible ? 'fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <span className="mr-2">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Dashboard Content */}
        <div className="bg-white bg-opacity-90 rounded-xl shadow-lg overflow-hidden border border-blue-100 mb-8">
          <div className="p-6 bg-gradient-to-r from-blue-50 to-white border-b border-blue-100">
            <h3 className="subheading">{activeData.title}</h3>
            <p className="text-gray-600">{activeData.subtitle}</p>
          </div>

          <div className="p-6">
            {activeTab !== 'launchStrategy' ? (
              <>
                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {activeData.stats.map((stat, index) => (
                    <StatCard
                      key={stat.label}
                      icon={stat.icon}
                      label={stat.label}
                      value={stat.value}
                      delay={index * 100}
                    />
                  ))}
                </div>

                {/* Region Data (for specific categories) */}
                {activeTab !== 'overview' && (
                  <div className="mb-8">
                    <h4 className="font-semibold text-lg text-blue-800 mb-4">Regional Market Analysis</h4>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      {activeData.regions.map((region) => (
                        <RegionBar
                          key={region.name}
                          name={region.name}
                          marketShare={region.marketShare}
                          growth={region.growth}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Impact & Insights Cards */}
                <div className="space-y-4">
                  {activeTab !== 'overview' && (
                    <InsightCard
                      id="market-impact"
                      title="Market Impact"
                      content={activeData.impact}
                      isExpanded={expandedCard === 'market-impact'}
                      onToggle={toggleExpand}
                      icon="🚀"
                      delay={200}
                    />
                  )}

                  <InsightCard
                    id="sustainability"
                    title="Sustainability Impact"
                    content="By extending shelf life by 5x, our preservation technologies dramatically reduce food waste across the supply chain, resulting in significantly lower carbon emissions from production, transportation, and disposal. This represents a major breakthrough in sustainable food systems."
                    isExpanded={expandedCard === 'sustainability'}
                    onToggle={toggleExpand}
                    icon="♻️"
                    delay={300}
                  />

                  <InsightCard
                    id="financial"
                    title="Financial Opportunity"
                    content="By extending shelf life by 5x and dramatically reducing waste, our solutions create exceptional value for producers, distributors, retailers, and consumers. This breakthrough allows access to new markets, reduces logistics costs, and enables premium pricing strategies."
                    isExpanded={expandedCard === 'financial'}
                    onToggle={toggleExpand}
                    icon="💲"
                    delay={400}
                  />
                </div>
              </>
            ) : (
              <div>
                <p className="paragraph mb-6">{activeData.description}</p>
                
                {/* Launch Strategy Phases */}
                {activeData.phases.map((phase, idx) => (
                  <div key={phase.name} className="mb-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-3">
                        {idx + 1}
                      </div>
                      <h3 className="font-semibold text-lg text-blue-800">{phase.name}</h3>
                    </div>
                    <div className="ml-11">
                      <ul className="space-y-2">
                        {phase.steps.map((step, stepIdx) => (
                          <li key={stepIdx} className="flex items-start">
                            <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
                
                {/* Projections */}
                <div className="bg-blue-50 p-4 rounded-lg mt-8">
                  <h4 className="font-semibold text-lg text-blue-800 mb-4">Projected Growth</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {activeData.projections.map((projection) => (
                      <div key={projection.year} className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="text-lg font-bold text-blue-800 mb-1">{projection.year}</div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <div className="text-xs text-gray-600">Revenue</div>
                            <div className="text-base font-semibold text-blue-900">{projection.revenue}</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-600">Markets</div>
                            <div className="text-base font-semibold text-blue-900">{projection.markets}</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-600">Products</div>
                            <div className="text-base font-semibold text-blue-900">{projection.products}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Timeline visualization */}
                  <div className="relative h-16 mb-2">
                    <div className="absolute inset-0 flex items-center">
                      <div className="h-1 w-full bg-blue-200"></div>
                    </div>
                    <div className="relative flex justify-between">
                      {activeData.projections.map((projection) => (
                        <div key={projection.year} className="text-center">
                          <div className="w-4 h-4 rounded-full bg-blue-600 mb-1 mx-auto"></div>
                          <div className="text-sm font-medium">{projection.year}</div>
                          <div className="text-xs">{projection.revenue}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Key Success Factors */}
                <div className="mt-8">
                  <h4 className="font-semibold text-lg text-blue-800 mb-4">Key Success Factors</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-blue-100">
                      <h5 className="font-semibold text-blue-900 mb-2">Market Entry Strategy</h5>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">B2B focused approach with major distributors</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">Regulatory fast-tracking in key markets</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">Tailored formulations for regional needs</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-blue-100">
                      <h5 className="font-semibold text-blue-900 mb-2">Strategic Advantage</h5>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">Proprietary formulations with superior efficacy</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">ROI-driven value proposition for clients</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">Cross-product synergies with wash solutions</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

    </section>
  );
};

export default MarketOpportunityDashboard;