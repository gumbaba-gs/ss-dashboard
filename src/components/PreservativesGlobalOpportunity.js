import React, { useState, useEffect } from 'react';

const PreservativesGlobalOpportunity = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSection, setExpandedSection] = useState('market');
  
  useEffect(() => {
    // Set visible after component mount to trigger animations
    setIsVisible(true);
  }, []);

  const toggleSection = (sectionId) => {
    if (expandedSection === sectionId) {
      setExpandedSection(null);
    } else {
      setExpandedSection(sectionId);
    }
  };
  // Market data
  const marketData = {
    overview: {
      title: "Preservatives Global Opportunity",
      subtitle: "Revolutionary shelf-life extension technologies for fresh produce",
      description: "Our innovative 5x shelf-life extension technology addresses the $42.7 billion global market for fresh produce preservation, with significant potential to revolutionize freshness, reduce waste, and transform global supply chains.",
      stats: [
        { label: "Total Market Size", value: "$42.7B", icon: "📊" },
        { label: "Annual Spoilage", value: "31%", icon: "📉" },
        { label: "Addressable Market", value: "$13.2B", icon: "🎯" },
        { label: "Current Solutions", value: "1.5-2x", icon: "⚗️" }
      ]
    },
    berryMarket: {
      title: "Berry Preservation Market",
      subtitle: "Strawberries, Blueberries, Raspberries, Blackberries",
      description: "The berry market represents our primary entry point, with high value, significant waste reduction potential, and strong demand for extended shelf-life solutions.",
      stats: [
        { label: "Market Size", value: "$21.5B", icon: "🍓" },
        { label: "Annual Spoilage", value: "40%", icon: "🗑️" },
        { label: "Addressable Market", value: "$8.6B", icon: "💰" },
        { label: "Our Extension", value: "5x", icon: "⏱️" }
      ],
      regionData: [
        { region: "North America", marketShare: 42, growth: 6.7, value: "$3.61B" },
        { region: "Australia/NZ", marketShare: 12, growth: 8.2, value: "$1.03B" },
        { region: "Europe", marketShare: 30, growth: 5.5, value: "$2.58B" },
        { region: "Asia Pacific", marketShare: 16, growth: 11.3, value: "$1.38B" }
      ],
      keyInsights: [
        "Current shelf life: 7-10 days maximum under optimal conditions",
        "Our technology extends to 35-50 days (5x improvement)",
        "Reduces retail waste by up to 75%",
        "Enables new distribution channels and export markets",
        "Maintains flavor profile and nutritional integrity"
      ]
    },
    avocadoMarket: {
      title: "Avocado Preservation Market",
      subtitle: "Extended ripening control and freshness",
      description: "The avocado market presents a significant opportunity with its unique preservation challenges, high value, and growing global demand.",
      stats: [
        { label: "Market Size", value: "$12.8B", icon: "🥑" },
        { label: "Annual Spoilage", value: "32%", icon: "🗑️" },
        { label: "Addressable Market", value: "$4.1B", icon: "💰" },
        { label: "Our Extension", value: "5x", icon: "⏱️" }
      ],
      regionData: [
        { region: "North America", marketShare: 45, growth: 7.8, value: "$1.85B" },
        { region: "Australia/NZ", marketShare: 13, growth: 9.3, value: "$0.53B" },
        { region: "Europe", marketShare: 25, growth: 8.5, value: "$1.03B" },
        { region: "Asia Pacific", marketShare: 17, growth: 12.6, value: "$0.70B" }
      ],
      keyInsights: [
        "Current shelf life: 2-3 weeks from harvest to consumption",
        "Challenging ripening window of only 2-3 days at optimal quality",
        "Our technology extends optimal quality window to 10-15 days (5x improvement)",
        "Reduces waste by up to 70%",
        "Enables consistent quality across much longer timeframes"
      ]
    },
    vegetableMarket: {
      title: "Vegetable Preservation Market",
      subtitle: "Leafy Greens, Tomatoes, and Other Vegetables",
      description: "The vegetable market, particularly leafy greens, represents a significant opportunity with high spoilage rates and strong demand for extended freshness.",
      stats: [
        { label: "Market Size", value: "$6.2B", icon: "🥬" },
        { label: "Annual Spoilage", value: "35%", icon: "🗑️" },
        { label: "Addressable Market", value: "$2.2B", icon: "💰" },
        { label: "Our Extension", value: "5x", icon: "⏱️" }
      ],
      regionData: [
        { region: "North America", marketShare: 38, growth: 5.2, value: "$0.84B" },
        { region: "Australia/NZ", marketShare: 10, growth: 6.5, value: "$0.22B" },
        { region: "Europe", marketShare: 35, growth: 4.8, value: "$0.77B" },
        { region: "Asia Pacific", marketShare: 17, growth: 9.4, value: "$0.37B" }
      ],
      keyInsights: [
        "Current shelf life: 4-6 days for leafy greens under optimal conditions",
        "Our technology extends to 20-30 days (5x improvement)",
        "Reduces supply chain losses by up to 65%",
        "Maintains nutritional quality and appearance",
        "Particularly valuable for high-value organic produce"
      ]
    },
    flowerMarket: {
      title: "Flower Preservation Market",
      subtitle: "Cut flowers and ornamentals",
      description: "The cut flower market represents a high-margin opportunity with significant waste reduction potential and strong demand for vase-life extension.",
      stats: [
        { label: "Market Size", value: "$2.2B", icon: "🌹" },
        { label: "Annual Spoilage", value: "25%", icon: "🗑️" },
        { label: "Addressable Market", value: "$550M", icon: "💰" },
        { label: "Our Extension", value: "5x", icon: "⏱️" }
      ],
      regionData: [
        { region: "North America", marketShare: 32, growth: 4.3, value: "$176M" },
        { region: "Australia/NZ", marketShare: 8, growth: 5.7, value: "$44M" },
        { region: "Europe", marketShare: 42, growth: 3.8, value: "$231M" },
        { region: "Asia Pacific", marketShare: 18, growth: 7.2, value: "$99M" }
      ],
      keyInsights: [
        "Current vase life: 7 days average for cut roses",
        "Our technology extends to 35 days (5x improvement)",
        "Reduces retail losses by up to 60%",
        "Dramatically improves consumer satisfaction",
        "Enables new market opportunities for premium floral products"
      ]
    },
    revenueProjections: {
      title: "Revenue Projections",
      subtitle: "5-Year Global Revenue Forecast",
      description: "Our phased market entry strategy focuses on high-value produce categories with the greatest potential for impact and profitability.",
      projections: [
        { 
          year: "Year 1", 
          revenue: "$18M",
          markets: "North America, Australia",
          products: "Berry, Avocado",
          penetration: "0.5%"
        },
        { 
          year: "Year 2", 
          revenue: "$42M",
          markets: "Adding Europe",
          products: "Adding Flowers",
          penetration: "1.2%"
        },
        { 
          year: "Year 3", 
          revenue: "$95M",
          markets: "Adding Asia Pacific",
          products: "Adding Vegetables",
          penetration: "2.8%"
        },
        { 
          year: "Year 4", 
          revenue: "$175M",
          markets: "Global Expansion",
          products: "All Categories",
          penetration: "5.1%"
        },
        { 
          year: "Year 5", 
          revenue: "$310M",
          markets: "Global Dominance",
          products: "Full Product Line",
          penetration: "9.0%"
        }
      ],
      keyInsights: [
        "CAGR of 103% over five years",
        "Expansion from 2 to 12 major markets",
        "Product line expansion from 2 to 8 formulations",
        "Market penetration growth from 0.5% to 9.0%",
        "Potential for accelerated growth through strategic partnerships"
      ]
    },
    competitiveAnalysis: {
      title: "Competitive Analysis",
      subtitle: "Market Positioning and Competitive Advantage",
      description: "Our 5x shelf life extension technology provides significant advantages over existing market solutions.",
      competitors: [
        { 
          name: "Apeel Sciences", 
          technology: "Edible coatings",
          extension: "1.8-2.2x",
          marketShare: "28%",
          limitation: "Alters taste profile",
          founded: 2012
        },
        { 
          name: "FreshTech Solutions", 
          technology: "Modified atmosphere packaging",
          extension: "1.5-2x",
          marketShare: "22%",
          limitation: "High implementation cost",
          founded: 2008
        },
        { 
          name: "AgriLongevity", 
          technology: "Cold chain optimization",
          extension: "1.3-1.7x",
          marketShare: "18%",
          limitation: "High energy requirements",
          founded: 2010
        },
        { 
          name: "BioExtend", 
          technology: "Antimicrobial films",
          extension: "2.0-2.5x",
          marketShare: "15%",
          limitation: "Limited product compatibility",
          founded: 2015
        },
        { 
          name: "Spanex Sciences", 
          technology: "Proprietary formulations",
          extension: "5.0x",
          marketShare: "New market entrant",
          limitation: "New market entrant",
          founded: 2022
        }
      ],
      keyAdvantages: [
        "More than double the shelf life extension of nearest competitor",
        "Maintains product taste, texture, and nutritional profile",
        "Compatible with organic certification",
        "Cost-effective implementation requiring minimal infrastructure changes",
        "Applicable across multiple produce categories"
      ]
    },
    marketEntry: {
      title: "Market Entry Strategy",
      subtitle: "Phased Global Expansion Plan",
      description: "Our carefully developed launch strategy maximizes market penetration while ensuring regulatory compliance and localized product optimization.",
      phases: [
        {
          name: "Phase 1: Core Markets Entry (2025-2026)",
          target: "USA, Canada, Australia",
          focus: "Berry and Avocado Formulations",
          approach: [
            "Initial launch in regions with highest spoilage rates and premium produce",
            "Partnership with 5-8 major produce distributors in each market",
            "Establish baseline metrics for shelf-life extension and waste reduction",
            "Focus on regulatory approvals and compliance certification"
          ]
        },
        {
          name: "Phase 2: Expansion and Diversification (2026-2027)",
          target: "EU, UK, New Zealand",
          focus: "Adding Flowers and Leafy Greens",
          approach: [
            "Expansion to select European markets with high-value produce chains",
            "Introduction of flower preservation formulations",
            "Development of market-specific formulations based on Phase 1 data",
            "B2B marketing campaign targeting food service and retail chains"
          ]
        },
        {
          name: "Phase 3: Global Scale (2028-2029)",
          target: "Asia Pacific Markets",
          focus: "Full Product Line Expansion",
          approach: [
            "Expansion to Japan, South Korea, and Singapore",
            "Launch of customized formulations for tropical fruits and regional specialties",
            "Establishment of regional manufacturing hubs for optimized distribution",
            "Development of consumer-facing retail products for home use"
          ]
        }
      ],
      keyTactics: [
        "B2B focused approach with major distributors",
        "Regulatory fast-tracking in key markets",
        "Premium pricing model based on ROI for customers",
        "Tailored formulations for regional produce varieties",
        "Strategic partnerships with major agricultural players"
      ]
    },
    sustainability: {
      title: "Sustainability Impact",
      subtitle: "Environmental and Social Benefits",
      description: "Beyond commercial success, our technology delivers significant environmental and social benefits through waste reduction and improved food security.",
      impacts: [
        {
          category: "Food Waste Reduction",
          metrics: [
            "30-75% reduction in waste across the supply chain",
            "Potential to save 14.8 million tons of produce annually at full market penetration",
            "Reduces greenhouse gas emissions from decomposing food waste",
            "Decreases landfill burden from discarded produce"
          ]
        },
        {
          category: "Resource Efficiency",
          metrics: [
            "Reduces water consumption through decreased production needs",
            "Lowers energy usage in cold chain logistics",
            "Minimizes land usage requirements for agriculture",
            "Decreases fuel consumption from reduced transportation frequency"
          ]
        },
        {
          category: "Social Impact",
          metrics: [
            "Improves food security through extended availability",
            "Increases access to nutritious produce in food deserts",
            "Enables small-scale farmers to reach larger markets",
            "Reduces food costs by minimizing waste-related price increases"
          ]
        }
      ],
      keyMetrics: [
        "Carbon reduction potential: 7.2M metric tons CO2 equivalent annually",
        "Water savings potential: 1.8 trillion liters annually",
        "Potential 2% reduction in global food insecurity at scale",
        "Support for 7 UN Sustainable Development Goals"
      ]
    },
    investment: {
      title: "Investment Opportunity",
      subtitle: "Financial Projections and Return Potential",
      description: "Our technology presents an exceptional investment opportunity with strong growth potential and attractive returns.",
      metrics: [
        {
          category: "Revenue Growth",
          data: [
            { year: "Year 1", value: "$18M" },
            { year: "Year 2", value: "$42M" },
            { year: "Year 3", value: "$95M" },
            { year: "Year 4", value: "$175M" },
            { year: "Year 5", value: "$310M" }
          ]
        },
        {
          category: "Margin Projection",
          data: [
            { year: "Year 1", value: "20%" },
            { year: "Year 2", value: "23%" },
            { year: "Year 3", value: "27%" },
            { year: "Year 4", value: "30%" },
            { year: "Year 5", value: "32%" }
          ]
        },
        {
          category: "EBITDA Projection",
          data: [
            { year: "Year 1", value: "$3.6M" },
            { year: "Year 2", value: "$9.7M" },
            { year: "Year 3", value: "$25.7M" },
            { year: "Year 4", value: "$52.5M" },
            { year: "Year 5", value: "$99.2M" }
          ]
        }
      ],
      keyHighlights: [
        "103% CAGR over 5 years",
        "Payback period of 14-18 months on initial investment",
        "Multiple potential exit strategies with 8-12x revenue multiples",
        "Addressing a $13.2B addressable market with disruptive technology",
        "Strong intellectual property portfolio with 7 patents pending"
      ]
    }
  };
  // Tab options
  const tabOptions = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'berryMarket', label: 'Berry Market', icon: '🍓' },
    { id: 'avocadoMarket', label: 'Avocado Market', icon: '🥑' },
    { id: 'vegetableMarket', label: 'Vegetables', icon: '🥬' },
    { id: 'flowerMarket', label: 'Flowers', icon: '🌹' },
    { id: 'revenueProjections', label: 'Revenue', icon: '💰' },
    { id: 'competitiveAnalysis', label: 'Competition', icon: '🏆' },
    { id: 'marketEntry', label: 'Strategy', icon: '🚀' },
    { id: 'sustainability', label: 'Sustainability', icon: '♻️' },
    { id: 'investment', label: 'Investment', icon: '💲' }
  ];

  // Stat card component with enhanced hover animations
  const StatCard = ({ icon, label, value }) => (
    <div className="bg-white rounded-lg shadow p-4 flex items-center border border-blue-100 transition-all duration-300 transform hover:shadow-lg hover:scale-105">
      <div className="text-2xl mr-3">{icon}</div>
      <div>
        <div className="text-lg font-bold text-blue-800">{value}</div>
        <div className="text-gray-600 text-sm">{label}</div>
      </div>
    </div>
  );

  // Progress bar component with animation
  const ProgressBar = ({ label, percentage, growth, value }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="font-medium text-blue-900">{label}</span>
        <span className="text-sm font-medium text-blue-700">{percentage}% | +{growth}% growth</span>
      </div>
      <div className="w-full bg-blue-100 rounded-full h-2.5">
        <div 
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out" 
          style={{ width: isVisible ? `${percentage}%` : '0%' }}
        ></div>
      </div>
      <p className="text-sm text-gray-600 mt-1">Market value: {value}</p>
    </div>
  );

  // Expandable section component
  const ExpandableSection = ({ id, title, children }) => (
    <div className="bg-white rounded-lg shadow overflow-hidden mb-4 relative z-10 border border-blue-100 transition-all duration-300 transform hover:shadow-md">
      <div
        className="p-4 flex justify-between items-center cursor-pointer bg-gradient-to-r from-blue-50 to-white relative z-20"
        onClick={() => toggleSection(id)}
      >
        <h3 className="font-semibold text-lg text-blue-800">{title}</h3>
        <svg
          className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${expandedSection === id ? 'transform rotate-180' : ''}`}
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
          expandedSection === id ? "p-4 max-h-[2000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {children}
      </div>
    </div>
  );

  // Check icon component for lists
  const CheckIcon = () => (
    <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
  const activeData = marketData[activeTab];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white relative">
      {/* Background Particles */}
      <div className="particles-bg absolute inset-0 overflow-hidden opacity-40 pointer-events-none z-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="particle absolute rounded-full bg-blue-200 animate-float"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </div>
      
      <div 
        className={`container mx-auto px-4 relative z-10 transition-opacity duration-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-2">
          Global Market Opportunity: Preservations
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-8 text-blue-700">
          Explore our revolutionary 5x shelf life extension solutions and their market-transforming potential across multiple categories.
        </p>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 relative z-20">
          {tabOptions.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 rounded-full flex items-center relative z-20 transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-blue-800 hover:bg-blue-50 hover:shadow'
              }`}
              type="button"
            >
              <span className="mr-2">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
        {/* Content based on selected tab */}
        <div className="bg-white rounded-xl shadow overflow-hidden mb-8 relative z-10 border border-blue-100 transition-all duration-300 transform hover:shadow-lg">
          {/* Tab Header */}
          <div className="p-6 bg-gradient-to-r from-blue-50 to-white border-b border-blue-100 relative z-10">
            <h3 className="text-xl font-bold text-blue-900">
              {activeData.title}
            </h3>
            {activeData.subtitle && (
              <p className="text-gray-600">{activeData.subtitle}</p>
            )}
          </div>

          {/* Tab Content */}
          <div className="p-6">
          {activeTab === 'overview' && (
            <div>
              <p className="text-gray-700 mb-6">{activeData.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {activeData.stats.map((stat) => (
                    <StatCard
                      key={stat.label}
                      icon={stat.icon}
                      label={stat.label}
                      value={stat.value}
                    />
                  ))}
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6 mb-6 transition-all duration-300 transform hover:shadow-md">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Global Preservation Market Overview</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Market Segments</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-xl mr-2">🍓</span>
                          <div>
                            <span className="font-medium">Berry Preservation</span>
                            <p className="text-sm text-gray-600">$21.5B market with 40% annual spoilage</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-xl mr-2">🥑</span>
                          <div>
                            <span className="font-medium">Avocado Preservation</span>
                            <p className="text-sm text-gray-600">$12.8B market with 32% annual spoilage</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-xl mr-2">🥬</span>
                          <div>
                            <span className="font-medium">Vegetable Preservation</span>
                            <p className="text-sm text-gray-600">$6.2B market with 35% annual spoilage</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-xl mr-2">🌹</span>
                          <div>
                            <span className="font-medium">Flower Preservation</span>
                            <p className="text-sm text-gray-600">$2.2B market with 25% annual spoilage</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Key Value Propositions</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-xl mr-2">⏱️</span>
                          <div>
                            <span className="font-medium">Extended Shelf Life</span>
                            <p className="text-sm text-gray-600">5x increase from current standards</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-xl mr-2">🔄</span>
                          <div>
                            <span className="font-medium">Reduced Waste</span>
                            <p className="text-sm text-gray-600">Up to 75% waste reduction across supply chain</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-xl mr-2">🌍</span>
                          <div>
                            <span className="font-medium">Extended Market Reach</span>
                            <p className="text-sm text-gray-600">Access to previously unreachable markets</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-xl mr-2">💰</span>
                          <div>
                            <span className="font-medium">Economic Impact</span>
                            <p className="text-sm text-gray-600">$13.2B addressable market opportunity</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <ExpandableSection id="market" title="Competitive Landscape">
                  <p className="mb-4">The global produce preservation market is currently dominated by solutions offering only 1.5-2.5x shelf life extension, creating a significant opportunity for our 5x technology.</p>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-blue-200">
                      <thead className="bg-blue-50">
                        <tr>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Competitor</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Technology</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Shelf Life Extension</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Market Share</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Key Limitation</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-blue-100">
                        <tr>
                          <td className="px-4 py-2 text-sm font-medium text-blue-900">Apeel Sciences</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Edible coatings</td>
                          <td className="px-4 py-2 text-sm text-gray-700">1.8-2.2x</td>
                          <td className="px-4 py-2 text-sm text-gray-700">28%</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Alters taste profile</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm font-medium text-blue-900">FreshTech Solutions</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Modified atmosphere packaging</td>
                          <td className="px-4 py-2 text-sm text-gray-700">1.5-2x</td>
                          <td className="px-4 py-2 text-sm text-gray-700">22%</td>
                          <td className="px-4 py-2 text-sm text-gray-700">High implementation cost</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm font-medium text-blue-900">AgriLongevity</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Cold chain optimization</td>
                          <td className="px-4 py-2 text-sm text-gray-700">1.3-1.7x</td>
                          <td className="px-4 py-2 text-sm text-gray-700">18%</td>
                          <td className="px-4 py-2 text-sm text-gray-700">High energy requirements</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm font-medium text-blue-900">BioExtend</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Antimicrobial films</td>
                          <td className="px-4 py-2 text-sm text-gray-700">2.0-2.5x</td>
                          <td className="px-4 py-2 text-sm text-gray-700">15%</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Limited product compatibility</td>
                        </tr>
                        <tr className="bg-blue-50">
                          <td className="px-4 py-2 text-sm font-bold text-blue-900">Spanex Sciences</td>
                          <td className="px-4 py-2 text-sm font-semibold text-blue-700">Proprietary formulations</td>
                          <td className="px-4 py-2 text-sm font-semibold text-green-700">5.0x</td>
                          <td className="px-4 py-2 text-sm font-semibold text-blue-700">New market entrant</td>
                          <td className="px-4 py-2 text-sm font-semibold text-blue-700">New market entrant</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <p className="text-sm text-gray-700 mt-4">Our proprietary technology offers more than double the shelf life extension of the nearest competitor while maintaining product quality, taste, and nutritional value.</p>
                </ExpandableSection>
                
                <ExpandableSection id="strategy" title="Market Entry Strategy">
                  <p className="mb-4">Our phased expansion strategy targets high-value markets with significant spoilage challenges and strong regulatory frameworks.</p>
                  
                  <div className="relative py-6 mb-4">
                    <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-blue-200"></div>
                    
                    <div className="relative mb-6 flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10 transition-all duration-300 hover:scale-110 hover:shadow-md">1</div>
                      <div className="ml-6">
                        <h4 className="font-medium text-blue-800">Phase 1: Core Markets (2025-2026)</h4>
                        <p className="text-sm text-gray-600">USA, Canada, Australia with berry and avocado formulations</p>
                      </div>
                    </div>
                    
                    <div className="relative mb-6 flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10 transition-all duration-300 hover:scale-110 hover:shadow-md">2</div>
                      <div className="ml-6">
                        <h4 className="font-medium text-blue-800">Phase 2: European Expansion (2026-2027)</h4>
                        <p className="text-sm text-gray-600">EU, UK, New Zealand with flowers and leafy greens</p>
                      </div>
                    </div>
                    
                    <div className="relative flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10 transition-all duration-300 hover:scale-110 hover:shadow-md">3</div>
                      <div className="ml-6">
                        <h4 className="font-medium text-blue-800">Phase 3: Global Scale (2028-2029)</h4>
                        <p className="text-sm text-gray-600">Asia Pacific markets with full product line expansion</p>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>
              </div>
            )}
            {activeTab === 'berryMarket' && (
              <div>
                <p className="text-gray-700 mb-6">{activeData.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {activeData.stats.map((stat) => (
                    <StatCard
                      key={stat.label}
                      icon={stat.icon}
                      label={stat.label}
                      value={stat.value}
                    />
                  ))}
                </div>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-lg text-blue-800 mb-4">Regional Market Analysis</h4>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    {activeData.regionData.map((region) => (
                      <ProgressBar
                        key={region.region}
                        label={region.region}
                        percentage={region.marketShare}
                        growth={region.growth}
                        value={region.value}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-4 rounded-lg shadow border border-blue-100 transition-all duration-300 transform hover:shadow-lg hover:scale-105">
                    <h4 className="font-semibold text-blue-900 mb-3">Key Market Insights</h4>
                    <ul className="space-y-2">
                      {activeData.keyInsights.map((insight, index) => (
                        <li key={index} className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow border border-blue-100 transition-all duration-300 transform hover:shadow-lg hover:scale-105">
                    <h4 className="font-semibold text-blue-900 mb-3">Market Impact</h4>
                    <p className="text-gray-700 mb-4">
                      Our Berry preservation technology extends shelf life from 7-10 days to 35-50 days (5x improvement), dramatically reducing retail waste by up to 75% and significantly expanding distribution capabilities.
                    </p>
                    <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden">
                      <div className="absolute top-0 h-full w-full">
                        <div className="absolute left-0 h-full bg-red-100 flex items-center pl-2 transition-all duration-1000" style={{ width: '14%' }}>
                          <span className="text-xs text-red-800 font-medium">Current: 7 days</span>
                        </div>
                        <div className="absolute left-0 h-full bg-green-100 flex items-center pl-2 transition-all duration-1000" style={{ width: isVisible ? '70%' : '14%' }}>
                          <span className="text-xs text-green-800 font-medium">With Our Technology: 35 days</span>
                        </div>
                      </div>
                      <div className="absolute top-0 h-full w-full flex items-center justify-center">
                        <span className="text-sm font-bold text-blue-900 bg-white px-2 py-1 rounded shadow-sm">5x Extension</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <ExpandableSection id="valueChain" title="Berry Value Chain Impact">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-3 rounded transition-all duration-300 hover:bg-blue-100">
                      <h5 className="font-medium text-blue-800 mb-2">Producers</h5>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm text-gray-700">Reduced harvest-to-market losses</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm text-gray-700">Expanded market reach</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm text-gray-700">Higher product quality at delivery</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm text-gray-700">Premium pricing opportunities</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 p-3 rounded transition-all duration-300 hover:bg-blue-100">
                      <h5 className="font-medium text-blue-800 mb-2">Distributors</h5>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm text-gray-700">Reduced in-transit losses</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm text-gray-700">Extended distribution windows</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm text-gray-700">New market access</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm text-gray-700">Reduced cold chain costs</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 p-3 rounded transition-all duration-300 hover:bg-blue-100">
                      <h5 className="font-medium text-blue-800 mb-2">Retailers</h5>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm text-gray-700">75% reduction in spoilage</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm text-gray-700">Extended shelf display time</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm text-gray-700">Maintained quality appearance</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm text-gray-700">Increased profit margins</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ExpandableSection>
                
                <ExpandableSection id="berryROI" title="Return on Investment Analysis">
                  <p className="mb-4">Implementation of our berry preservation technology delivers exceptional ROI across the supply chain:</p>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-blue-200">
                      <thead className="bg-blue-50">
                        <tr>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Stakeholder</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Implementation Cost</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Annual Benefit</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">ROI</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Payback Period</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-blue-100">
                        <tr>
                          <td className="px-4 py-2 text-sm font-medium text-blue-900">Producers</td>
                          <td className="px-4 py-2 text-sm text-gray-700">$0.03-0.05 per pound</td>
                          <td className="px-4 py-2 text-sm text-gray-700">$0.18-0.25 per pound</td>
                          <td className="px-4 py-2 text-sm text-gray-700">400-500%</td>
                          <td className="px-4 py-2 text-sm text-gray-700">~3 months</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm font-medium text-blue-900">Distributors</td>
                          <td className="px-4 py-2 text-sm text-gray-700">$0.02-0.04 per pound</td>
                          <td className="px-4 py-2 text-sm text-gray-700">$0.12-0.20 per pound</td>
                          <td className="px-4 py-2 text-sm text-gray-700">400-600%</td>
                          <td className="px-4 py-2 text-sm text-gray-700">~2 months</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm font-medium text-blue-900">Retailers</td>
                          <td className="px-4 py-2 text-sm text-gray-700">$0.04-0.06 per pound</td>
                          <td className="px-4 py-2 text-sm text-gray-700">$0.30-0.45 per pound</td>
                          <td className="px-4 py-2 text-sm text-gray-700">650-750%</td>
                          <td className="px-4 py-2 text-sm text-gray-700">~1.5 months</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </ExpandableSection>
              </div>
            )}
            {activeTab === 'avocadoMarket' && (
              <div>
                <p className="text-gray-700 mb-6">{activeData.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {activeData.stats.map((stat) => (
                    <StatCard
                      key={stat.label}
                      icon={stat.icon}
                      label={stat.label}
                      value={stat.value}
                    />
                  ))}
                </div>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-lg text-blue-800 mb-4">Regional Market Analysis</h4>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    {activeData.regionData.map((region) => (
                      <ProgressBar
                        key={region.region}
                        label={region.region}
                        percentage={region.marketShare}
                        growth={region.growth}
                        value={region.value}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-4 rounded-lg shadow border border-blue-100 transition-all duration-300 transform hover:shadow-lg hover:scale-105">
                    <h4 className="font-semibold text-blue-900 mb-3">Key Market Insights</h4>
                    <ul className="space-y-2">
                      {activeData.keyInsights.map((insight, index) => (
                        <li key={index} className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow border border-blue-100 transition-all duration-300 transform hover:shadow-lg hover:scale-105">
                    <h4 className="font-semibold text-blue-900 mb-3">Market Impact</h4>
                    <p className="text-gray-700 mb-4">
                      Our avocado preservation technology extends the optimal ripeness window from 2-3 days to 10-15 days (5x improvement), dramatically reducing waste by up to 70% and providing consistent quality to consumers across a much longer timeframe.
                    </p>
                    <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden">
                      <div className="absolute top-0 h-full w-full">
                        <div className="absolute left-0 h-full bg-red-100 flex items-center pl-2 transition-all duration-1000" style={{ width: '14%' }}>
                          <span className="text-xs text-red-800 font-medium">Current: 3 days</span>
                        </div>
                        <div className="absolute left-0 h-full bg-green-100 flex items-center pl-2 transition-all duration-1000" style={{ width: isVisible ? '70%' : '14%' }}>
                          <span className="text-xs text-green-800 font-medium">With Our Technology: 15 days</span>
                        </div>
                      </div>
                      <div className="absolute top-0 h-full w-full flex items-center justify-center">
                        <span className="text-sm font-bold text-blue-900 bg-white px-2 py-1 rounded shadow-sm">5x Extension</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <ExpandableSection id="avocadoChallenge" title="The Avocado Challenge">
                  <p className="mb-4">Avocados present unique preservation challenges that our technology specifically addresses:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-medium text-blue-800 mb-2">Current Market Challenges</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Extremely narrow ripeness window (2-3 days)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Unpredictable ripening patterns</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">High rate of consumer dissatisfaction</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">30-40% wastage at retail level</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Limited export market potential</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-medium text-green-800 mb-2">Our Solution Benefits</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Extended optimal ripeness window (10-15 days)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Controlled, predictable ripening</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Consistent quality for consumers</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Retail waste reduction up to 70%</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Expanded global export opportunities</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ExpandableSection>
                
                <ExpandableSection id="avocadoROI" title="Return on Investment Analysis">
                  <p className="mb-4">Implementation of our avocado preservation technology delivers exceptional ROI across the supply chain:</p>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-blue-200">
                      <thead className="bg-blue-50">
                        <tr>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Stakeholder</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Implementation Cost</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Annual Benefit</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">ROI</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Payback Period</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-blue-100">
                        <tr>
                          <td className="px-4 py-2 text-sm font-medium text-blue-900">Producers</td>
                          <td className="px-4 py-2 text-sm text-gray-700">$0.04-0.07 per unit</td>
                          <td className="px-4 py-2 text-sm text-gray-700">$0.25-0.38 per unit</td>
                          <td className="px-4 py-2 text-sm text-gray-700">450-550%</td>
                          <td className="px-4 py-2 text-sm text-gray-700">~2.5 months</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm font-medium text-blue-900">Distributors</td>
                          <td className="px-4 py-2 text-sm text-gray-700">$0.03-0.05 per unit</td>
                          <td className="px-4 py-2 text-sm text-gray-700">$0.20-0.30 per unit</td>
                          <td className="px-4 py-2 text-sm text-gray-700">500-600%</td>
                          <td className="px-4 py-2 text-sm text-gray-700">~2 months</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm font-medium text-blue-900">Retailers</td>
                          <td className="px-4 py-2 text-sm text-gray-700">$0.05-0.08 per unit</td>
                          <td className="px-4 py-2 text-sm text-gray-700">$0.40-0.56 per unit</td>
                          <td className="px-4 py-2 text-sm text-gray-700">700-800%</td>
                          <td className="px-4 py-2 text-sm text-gray-700">~1.5 months</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </ExpandableSection>
              </div>
            )}
            {activeTab === 'vegetableMarket' && (
              <div>
                <p className="text-gray-700 mb-6">{activeData.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {activeData.stats.map((stat) => (
                    <StatCard
                      key={stat.label}
                      icon={stat.icon}
                      label={stat.label}
                      value={stat.value}
                    />
                  ))}
                </div>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-lg text-blue-800 mb-4">Regional Market Analysis</h4>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    {activeData.regionData.map((region) => (
                      <ProgressBar
                        key={region.region}
                        label={region.region}
                        percentage={region.marketShare}
                        growth={region.growth}
                        value={region.value}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-4 rounded-lg shadow border border-blue-100 transition-all duration-300 transform hover:shadow-lg hover:scale-105">
                    <h4 className="font-semibold text-blue-900 mb-3">Key Market Insights</h4>
                    <ul className="space-y-2">
                      {activeData.keyInsights.map((insight, index) => (
                        <li key={index} className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow border border-blue-100 transition-all duration-300 transform hover:shadow-lg hover:scale-105">
                    <h4 className="font-semibold text-blue-900 mb-3">Market Impact</h4>
                    <p className="text-gray-700 mb-4">
                      Our vegetable preservation technology extends shelf life from 4-6 days to 20-30 days (5x improvement), maintaining nutritional quality and appearance while reducing supply chain losses by up to 65%.
                    </p>
                    <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden">
                      <div className="absolute top-0 h-full w-full">
                        <div className="absolute left-0 h-full bg-red-100 flex items-center pl-2 transition-all duration-1000" style={{ width: '14%' }}>
                          <span className="text-xs text-red-800 font-medium">Current: 6 days</span>
                        </div>
                        <div className="absolute left-0 h-full bg-green-100 flex items-center pl-2 transition-all duration-1000" style={{ width: isVisible ? '70%' : '14%' }}>
                          <span className="text-xs text-green-800 font-medium">With Our Technology: 30 days</span>
                        </div>
                      </div>
                      <div className="absolute top-0 h-full w-full flex items-center justify-center">
                        <span className="text-sm font-bold text-blue-900 bg-white px-2 py-1 rounded shadow-sm">5x Extension</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <ExpandableSection id="vegCategories" title="Key Vegetable Categories">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-medium text-blue-800 mb-2">Leafy Greens</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Market size: $2.8B</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Current shelf life: 4-5 days</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Current waste: 45-55%</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Our solution: 20-25 day shelf life</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Waste reduction: Up to 70%</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-medium text-blue-800 mb-2">Tomatoes</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Market size: $1.9B</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Current shelf life: 5-7 days</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Current waste: 30-40%</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Our solution: 25-35 day shelf life</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Waste reduction: Up to 65%</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-medium text-blue-800 mb-3">Implementation Flexibility</h4>
                    <p className="text-gray-700 mb-4">
                      Our vegetable preservation solutions are adaptable to various implementation methods:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded shadow text-center transition-all duration-300 hover:shadow-md hover:bg-blue-50">
                        <div className="text-xl mb-2">🌱</div>
                        <div className="font-medium text-blue-900">Post-Harvest Spray</div>
                        <p className="text-xs text-gray-600">For processing facilities</p>
                      </div>
                      <div className="bg-white p-3 rounded shadow text-center transition-all duration-300 hover:shadow-md hover:bg-blue-50">
                        <div className="text-xl mb-2">💧</div>
                        <div className="font-medium text-blue-900">Dip Solution</div>
                        <p className="text-xs text-gray-600">For bulk processing</p>
                      </div>
                      <div className="bg-white p-3 rounded shadow text-center transition-all duration-300 hover:shadow-md hover:bg-blue-50">
                        <div className="text-xl mb-2">📦</div>
                        <div className="font-medium text-blue-900">Packaging Integration</div>
                        <p className="text-xs text-gray-600">For retail preparation</p>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>
                
                <ExpandableSection id="vegROI" title="Return on Investment Analysis">
                  <p className="mb-4">Implementation of our vegetable preservation technology delivers exceptional ROI across the supply chain:</p>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-blue-200">
                      <thead className="bg-blue-50">
                        <tr>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Stakeholder</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Implementation Cost</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Annual Benefit</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">ROI</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Payback Period</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-blue-100">
                        <tr>
                          <td className="px-4 py-2 text-sm font-medium text-blue-900">Producers</td>
                          <td className="px-4 py-2 text-sm text-gray-700">$0.03-0.05 per kg</td>
                          <td className="px-4 py-2 text-sm text-gray-700">$0.15-0.25 per kg</td>
                          <td className="px-4 py-2 text-sm text-gray-700">400-500%</td>
                          <td className="px-4 py-2 text-sm text-gray-700">~3 months</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm font-medium text-blue-900">Packagers</td>
                          <td className="px-4 py-2 text-sm text-gray-700">$0.02-0.04 per kg</td>
                          <td className="px-4 py-2 text-sm text-gray-700">$0.10-0.18 per kg</td>
                          <td className="px-4 py-2 text-sm text-gray-700">350-450%</td>
                          <td className="px-4 py-2 text-sm text-gray-700">~3.5 months</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm font-medium text-blue-900">Retailers</td>
                          <td className="px-4 py-2 text-sm text-gray-700">$0.04-0.06 per kg</td>
                          <td className="px-4 py-2 text-sm text-gray-700">$0.28-0.42 per kg</td>
                          <td className="px-4 py-2 text-sm text-gray-700">600-700%</td>
                          <td className="px-4 py-2 text-sm text-gray-700">~1.7 months</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </ExpandableSection>
              </div>
            )}
            {activeTab === 'flowerMarket' && (
              <div>
                <p className="text-gray-700 mb-6">{activeData.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {activeData.stats.map((stat) => (
                    <StatCard
                      key={stat.label}
                      icon={stat.icon}
                      label={stat.label}
                      value={stat.value}
                    />
                  ))}
                </div>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-lg text-blue-800 mb-4">Regional Market Analysis</h4>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    {activeData.regionData.map((region) => (
                      <ProgressBar
                        key={region.region}
                        label={region.region}
                        percentage={region.marketShare}
                        growth={region.growth}
                        value={region.value}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-4 rounded-lg shadow border border-blue-100 transition-all duration-300 transform hover:shadow-lg hover:scale-105">
                    <h4 className="font-semibold text-blue-900 mb-3">Key Market Insights</h4>
                    <ul className="space-y-2">
                      {activeData.keyInsights.map((insight, index) => (
                        <li key={index} className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow border border-blue-100 transition-all duration-300 transform hover:shadow-lg hover:scale-105">
                    <h4 className="font-semibold text-blue-900 mb-3">Market Impact</h4>
                    <p className="text-gray-700 mb-4">
                      Our flower preservation technology extends vase life from 7 days to 35 days (5x improvement), dramatically reducing retail losses and significantly improving consumer satisfaction with longer-lasting floral displays.
                    </p>
                    <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden">
                      <div className="absolute top-0 h-full w-full">
                        <div className="absolute left-0 h-full bg-red-100 flex items-center pl-2 transition-all duration-1000" style={{ width: '14%' }}>
                          <span className="text-xs text-red-800 font-medium">Current: 7 days</span>
                        </div>
                        <div className="absolute left-0 h-full bg-green-100 flex items-center pl-2 transition-all duration-1000" style={{ width: isVisible ? '70%' : '14%' }}>
                          <span className="text-xs text-green-800 font-medium">With Our Technology: 35 days</span>
                        </div>
                      </div>
                      <div className="absolute top-0 h-full w-full flex items-center justify-center">
                        <span className="text-sm font-bold text-blue-900 bg-white px-2 py-1 rounded shadow-sm">5x Extension</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <ExpandableSection id="flowerApplications" title="Market Applications">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg transition-all duration-300 hover:bg-blue-100">
                      <h5 className="font-medium text-blue-800 mb-2">Commercial Florists</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm text-gray-700">Reduced inventory waste</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm text-gray-700">Extended display life</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm text-gray-700">Improved customer satisfaction</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm text-gray-700">Premium pricing opportunities</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg transition-all duration-300 hover:bg-blue-100">
                      <h5 className="font-medium text-blue-800 mb-2">Event Planning</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm text-gray-700">Earlier preparation time</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm text-gray-700">Extended event displays</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm text-gray-700">Reduced last-minute replacements</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm text-gray-700">Higher quality arrangements</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg transition-all duration-300 hover:bg-blue-100">
                      <h5 className="font-medium text-blue-800 mb-2">Consumer Market</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm text-gray-700">Long-lasting bouquets</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm text-gray-700">Consumer loyalty increase</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm text-gray-700">Higher purchase frequency</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm text-gray-700">Improved gift experiences</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <p className="text-gray-700">
                    Our flower preservation technology is compatible with roses, tulips, lilies, chrysanthemums, and many other popular cut flower varieties. The solution can be applied at grower facilities, distribution centers, or retail locations.
                  </p>
                </ExpandableSection>
                
                <ExpandableSection id="flowerROI" title="Return on Investment Analysis">
                  <p className="mb-4">Implementation of our flower preservation technology delivers exceptional ROI across the supply chain:</p>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-blue-200">
                      <thead className="bg-blue-50">
                        <tr>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Stakeholder</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Implementation Cost</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Annual Benefit</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">ROI</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Payback Period</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-blue-100">
                        <tr>
                          <td className="px-4 py-2 text-sm font-medium text-blue-900">Growers</td>
                          <td className="px-4 py-2 text-sm text-gray-700">$0.02-0.04 per stem</td>
                          <td className="px-4 py-2 text-sm text-gray-700">$0.12-0.20 per stem</td>
                          <td className="px-4 py-2 text-sm text-gray-700">400-500%</td>
                          <td className="px-4 py-2 text-sm text-gray-700">~3 months</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm font-medium text-blue-900">Wholesalers</td>
                          <td className="px-4 py-2 text-sm text-gray-700">$0.03-0.05 per stem</td>
                          <td className="px-4 py-2 text-sm text-gray-700">$0.15-0.25 per stem</td>
                          <td className="px-4 py-2 text-sm text-gray-700">400-500%</td>
                          <td className="px-4 py-2 text-sm text-gray-700">~2.5 months</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm font-medium text-blue-900">Retailers</td>
                          <td className="px-4 py-2 text-sm text-gray-700">$0.04-0.06 per stem</td>
                          <td className="px-4 py-2 text-sm text-gray-700">$0.30-0.45 per stem</td>
                          <td className="px-4 py-2 text-sm text-gray-700">650-750%</td>
                          <td className="px-4 py-2 text-sm text-gray-700">~1.5 months</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </ExpandableSection>
              </div>
            )}
            {activeTab === 'revenueProjections' && (
              <div>
                <p className="text-gray-700 mb-6">{activeData.description}</p>
                
                <div className="bg-white p-4 rounded-lg shadow mb-6 border border-blue-100 transition-all duration-300 transform hover:shadow-lg">
                  <h4 className="font-semibold text-blue-900 mb-4">5-Year Revenue Projection</h4>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-blue-200">
                      <thead className="bg-blue-50">
                        <tr>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Timeline</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Revenue</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Markets</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Products</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Market Penetration</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-blue-100">
                        {activeData.projections.map((projection) => (
                          <tr key={projection.year} className="transition-colors duration-300 hover:bg-blue-50">
                            <td className="px-4 py-3 text-sm font-medium text-blue-900">{projection.year}</td>
                            <td className="px-4 py-3 text-sm font-bold text-green-700">{projection.revenue}</td>
                            <td className="px-4 py-3 text-sm text-gray-700">{projection.markets}</td>
                            <td className="px-4 py-3 text-sm text-gray-700">{projection.products}</td>
                            <td className="px-4 py-3 text-sm text-gray-700">{projection.penetration}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-6 transition-all duration-300 transform hover:shadow-md">
                  <h4 className="font-semibold text-blue-900 mb-3">Revenue Growth Visualization</h4>
                  
                  <div className="h-60 relative mb-4">
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-300"></div>
                    <div className="absolute left-0 bottom-0 top-0 w-1 bg-gray-300"></div>
                    
                    {activeData.projections.map((projection, index) => {
                      const height = `${(parseInt(projection.revenue.replace(/[^0-9]/g, '')) / 310) * 100}%`;
                      const left = `${(index / (activeData.projections.length - 1)) * 100}%`;
                      return (
                        <div 
                          key={projection.year}
                          className="absolute bottom-0 w-12 bg-blue-600 rounded-t transition-all duration-1000 ease-out flex justify-center items-end"
                          style={{ 
                            height: isVisible ? height : '0%', 
                            left: `calc(${left} - 1.5rem)`,
                            transitionDelay: `${index * 200}ms`
                          }}
                        >
                          <div className="text-white text-xs font-bold p-1">{projection.revenue}</div>
                        </div>
                      );
                    })}
                    
                    <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-xs text-gray-600">
                      {activeData.projections.map((projection) => (
                        <div key={projection.year}>{projection.year}</div>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-sm text-center text-gray-600">Projected revenue growth over 5 years (CAGR 103%)</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-4 rounded-lg shadow border border-blue-100 transition-all duration-300 transform hover:shadow-lg hover:scale-105">
                    <h4 className="font-semibold text-blue-900 mb-3">Key Revenue Drivers</h4>
                    <ul className="space-y-2">
                      {activeData.keyInsights.map((insight, index) => (
                        <li key={index} className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow border border-blue-100 transition-all duration-300 transform hover:shadow-lg hover:scale-105">
                    <h4 className="font-semibold text-blue-900 mb-3">Revenue Breakdown by Category (Year 5)</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-blue-900">Berry Products</span>
                          <span className="text-sm text-blue-700">$155M (50%)</span>
                        </div>
                        <div className="w-full bg-blue-100 rounded-full h-2.5">
                          <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out" style={{ width: isVisible ? '50%' : '0%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-blue-900">Avocado Products</span>
                          <span className="text-sm text-blue-700">$93M (30%)</span>
                        </div>
                        <div className="w-full bg-blue-100 rounded-full h-2.5">
                          <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out" style={{ width: isVisible ? '30%' : '0%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-blue-900">Vegetable Products</span>
                          <span className="text-sm text-blue-700">$40.3M (13%)</span>
                        </div>
                        <div className="w-full bg-blue-100 rounded-full h-2.5">
                          <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out" style={{ width: isVisible ? '13%' : '0%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-blue-900">Flower Products</span>
                          <span className="text-sm text-blue-700">$21.7M (7%)</span>
                        </div>
                        <div className="w-full bg-blue-100 rounded-full h-2.5">
                          <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out" style={{ width: isVisible ? '7%' : '0%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <ExpandableSection id="revenuePlanning" title="Revenue Planning Assumptions">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-medium text-blue-800 mb-2">Market Penetration Strategy</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Year 1: Focused targeting of high-value clients (0.5% market penetration)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Year 2: Expansion within core markets (1.2% market penetration)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Year 3: Geographic expansion (2.8% market penetration)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Year 4: Accelerated global growth (5.1% market penetration)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Year 5: Market leadership positioning (9.0% market penetration)</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-medium text-blue-800 mb-2">Pricing Strategy</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Value-based pricing tied to ROI for customers</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Premium positioning against current 1.5-2.5x extension solutions</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Strategic discounting for large-volume adoption</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Geographic pricing adjusted to local market conditions</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Long-term contract incentives for stable revenue</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ExpandableSection>
              </div>
            )}
            {activeTab === 'competitiveAnalysis' && (
              <div>
                <p className="text-gray-700 mb-6">{activeData.description}</p>
                
                <div className="bg-white p-4 rounded-lg shadow mb-6 border border-blue-100 transition-all duration-300 transform hover:shadow-lg">
                  <h4 className="font-semibold text-blue-900 mb-4">Competitive Landscape</h4>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-blue-200">
                      <thead className="bg-blue-50">
                        <tr>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Competitor</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Technology</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Shelf Life Extension</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Market Share</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Key Limitation</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Founded</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-blue-100">
                      {activeData.competitors.map((competitor) => (
                          <tr 
                            key={competitor.name}
                            className={`transition-colors duration-300 hover:bg-blue-50 ${competitor.name === 'Spanex Sciences' ? 'bg-blue-50' : ''}`}
                          >
                            <td className="px-4 py-3 text-sm font-medium text-blue-900">{competitor.name}</td>
                            <td className="px-4 py-3 text-sm text-gray-700">{competitor.technology}</td>
                            <td className="px-4 py-3 text-sm text-gray-700">{competitor.extension}</td>
                            <td className="px-4 py-3 text-sm text-gray-700">{competitor.marketShare}</td>
                            <td className="px-4 py-3 text-sm text-gray-700">{competitor.limitation}</td>
                            <td className="px-4 py-3 text-sm text-gray-700">{competitor.founded}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-4 rounded-lg shadow border border-blue-100 transition-all duration-300 transform hover:shadow-lg hover:scale-105">
                    <h4 className="font-semibold text-blue-900 mb-3">Competitive Advantages</h4>
                    <ul className="space-y-2">
                      {activeData.keyAdvantages.map((advantage, index) => (
                        <li key={index} className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">{advantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow border border-blue-100 transition-all duration-300 transform hover:shadow-lg hover:scale-105">
                    <h4 className="font-semibold text-blue-900 mb-3">Shelf Life Extension Comparison</h4>
                    <div className="h-60 relative mb-4">
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-300"></div>
                      <div className="absolute left-0 bottom-0 top-0 w-1 bg-gray-300"></div>
                      
                      <div 
                        className="absolute bottom-0 w-12 bg-gray-400 rounded-t transition-all duration-1000 ease-out flex justify-center items-end"
                        style={{ 
                          height: isVisible ? '32%' : '0%', 
                          left: '5%',
                        }}
                      >
                        <div className="text-white text-xs font-bold p-1">1.6x</div>
                      </div>
                      
                      <div 
                        className="absolute bottom-0 w-12 bg-gray-400 rounded-t transition-all duration-1000 ease-out flex justify-center items-end"
                        style={{ 
                          height: isVisible ? '40%' : '0%', 
                          left: '25%',
                          transitionDelay: '200ms'
                        }}
                      >
                        <div className="text-white text-xs font-bold p-1">2.0x</div>
                      </div>
                      
                      <div 
                        className="absolute bottom-0 w-12 bg-gray-400 rounded-t transition-all duration-1000 ease-out flex justify-center items-end"
                        style={{ 
                          height: isVisible ? '50%' : '0%', 
                          left: '45%',
                          transitionDelay: '400ms'
                        }}
                      >
                        <div className="text-white text-xs font-bold p-1">2.5x</div>
                      </div>
                      
                      <div 
                        className="absolute bottom-0 w-12 bg-blue-600 rounded-t transition-all duration-1000 ease-out flex justify-center items-end"
                        style={{ 
                          height: isVisible ? '100%' : '0%', 
                          left: '65%',
                          transitionDelay: '600ms'
                        }}
                      >
                        <div className="text-white text-xs font-bold p-1">5.0x</div>
                      </div>
                      
                      <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-xs text-gray-600" style={{ paddingLeft: '5%', paddingRight: '25%' }}>
                        <div>AgriLongevity</div>
                        <div>FreshTech</div>
                        <div>BioExtend</div>
                        <div>Spanex</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <ExpandableSection id="competitiveTrends" title="Market Trends Analysis">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-medium text-blue-800 mb-2">Current Industry Trends</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Growing investment in shelf-life extension technologies</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Increasing consumer demand for fresh, less-processed foods</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Expanding global supply chains creating preservation challenges</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Growing sustainability focus and food waste reduction initiatives</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Regulatory movement towards natural, food-safe preservatives</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-medium text-blue-800 mb-2">Competitive Response Strategy</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Strong IP protection for core technology and formulations</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Rapid market penetration to establish market leadership</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Strategic partnerships with major industry players</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Continuous R&D investment to maintain competitive edge</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Development of complementary technologies for full ecosystem</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ExpandableSection>
                
                <ExpandableSection id="barrierEntry" title="Barriers to Entry & Competitive Moats">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-3 rounded shadow border border-blue-100 transition-all duration-300 hover:shadow-md hover:bg-blue-50">
                      <div className="text-xl mb-2 text-center">🧬</div>
                      <div className="font-medium text-blue-900 text-center">Proprietary Formulations</div>
                      <p className="text-sm text-gray-600 text-center">7 patent-pending formulations with unique efficacy profiles</p>
                    </div>
                    <div className="bg-white p-3 rounded shadow border border-blue-100 transition-all duration-300 hover:shadow-md hover:bg-blue-50">
                      <div className="text-xl mb-2 text-center">📊</div>
                      <div className="font-medium text-blue-900 text-center">Data Advantage</div>
                      <p className="text-sm text-gray-600 text-center">Extensive testing across produce varieties and conditions</p>
                    </div>
                    <div className="bg-white p-3 rounded shadow border border-blue-100 transition-all duration-300 hover:shadow-md hover:bg-blue-50">
                      <div className="text-xl mb-2 text-center">🏭</div>
                      <div className="font-medium text-blue-900 text-center">Manufacturing Scale</div>
                      <p className="text-sm text-gray-600 text-center">Specialized production capabilities with economies of scale</p>
                    </div>
                    <div className="bg-white p-3 rounded shadow border border-blue-100 transition-all duration-300 hover:shadow-md hover:bg-blue-50">
                      <div className="text-xl mb-2 text-center">🧪</div>
                      <div className="font-medium text-blue-900 text-center">Regulatory Approvals</div>
                      <p className="text-sm text-gray-600 text-center">Established compliance in key markets with high barriers</p>
                    </div>
                    <div className="bg-white p-3 rounded shadow border border-blue-100 transition-all duration-300 hover:shadow-md hover:bg-blue-50">
                      <div className="text-xl mb-2 text-center">🤝</div>
                      <div className="font-medium text-blue-900 text-center">Industry Partnerships</div>
                      <p className="text-sm text-gray-600 text-center">Strategic relationships with key industry players</p>
                    </div>
                    <div className="bg-white p-3 rounded shadow border border-blue-100 transition-all duration-300 hover:shadow-md hover:bg-blue-50">
                      <div className="text-xl mb-2 text-center">🔬</div>
                      <div className="font-medium text-blue-900 text-center">R&D Pipeline</div>
                      <p className="text-sm text-gray-600 text-center">Continuous innovation creating future competitive advantages</p>
                    </div>
                  </div>
                </ExpandableSection>
              </div>
            )}
            {activeTab === 'marketEntry' && (
              <div>
                <p className="text-gray-700 mb-6">{activeData.description}</p>
                
                <div className="relative py-6 mb-6">
                  <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-blue-200"></div>
                  
                  {activeData.phases.map((phase, index) => (
                    <div key={phase.name} className="relative mb-8 last:mb-0">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10 transition-all duration-300 hover:scale-110 hover:shadow-md">
                          {index + 1}
                        </div>
                        <div className="ml-6">
                          <h4 className="font-medium text-blue-800 text-lg">{phase.name}</h4>
                          <p className="text-blue-600 font-medium">Target: {phase.target}</p>
                          <p className="text-blue-700">Focus: {phase.focus}</p>
                          <div className="mt-3 space-y-2 bg-blue-50 p-4 rounded-lg">
                            <h5 className="font-medium text-blue-800">Strategic Approach:</h5>
                            <ul className="space-y-2">
                              {phase.approach.map((item, idx) => (
                                <li key={idx} className="flex items-start">
                                  <CheckIcon />
                                  <span className="text-gray-700">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-4 rounded-lg shadow border border-blue-100 transition-all duration-300 transform hover:shadow-lg hover:scale-105">
                    <h4 className="font-semibold text-blue-900 mb-3">Key Strategic Tactics</h4>
                    <ul className="space-y-2">
                      {activeData.keyTactics.map((tactic, index) => (
                        <li key={index} className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">{tactic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow border border-blue-100 transition-all duration-300 transform hover:shadow-lg hover:scale-105">
                    <h4 className="font-semibold text-blue-900 mb-3">Market Entry Visualization</h4>
                    <div className="h-40 rounded-lg bg-blue-50 p-3 mb-2 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center">
                        <div className="h-0.5 bg-blue-200 w-full"></div>
                      </div>
                      <div className="relative flex justify-between">
                        <div className="text-center">
                          <div className="w-4 h-4 rounded-full bg-blue-500 mb-1 mx-auto"></div>
                          <div className="text-xs font-medium">2025</div>
                          <div className="text-xs">Core</div>
                        </div>
                        <div className="text-center">
                          <div className="w-4 h-4 rounded-full bg-blue-500 mb-1 mx-auto"></div>
                          <div className="text-xs font-medium">2026</div>
                          <div className="text-xs">Expand</div>
                        </div>
                        <div className="text-center">
                          <div className="w-4 h-4 rounded-full bg-blue-500 mb-1 mx-auto"></div>
                          <div className="text-xs font-medium">2027</div>
                          <div className="text-xs">Grow</div>
                        </div>
                        <div className="text-center">
                          <div className="w-4 h-4 rounded-full bg-blue-500 mb-1 mx-auto"></div>
                          <div className="text-xs font-medium">2028</div>
                          <div className="text-xs">Scale</div>
                        </div>
                        <div className="text-center">
                          <div className="w-4 h-4 rounded-full bg-blue-500 mb-1 mx-auto"></div>
                          <div className="text-xs font-medium">2029</div>
                          <div className="text-xs">Dominate</div>
                        </div>
                      </div>
                      
                      <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center mt-4">
                        <div className="w-full flex justify-center">
                          <div 
                            className="h-6 bg-blue-400 rounded transition-all duration-1000 ease-out flex items-center justify-center text-white text-xs font-bold"
                            style={{ width: isVisible ? '20%' : '0%' }}
                          >
                            N. America
                          </div>
                        </div>
                        <div className="w-full flex justify-center mt-1">
                          <div 
                            className="h-6 bg-green-400 rounded transition-all duration-1000 ease-out flex items-center justify-center text-white text-xs font-bold"
                            style={{ width: isVisible ? '40%' : '0%', transitionDelay: '200ms' }}
                          >
                            Europe
                          </div>
                        </div>
                        <div className="w-full flex justify-center mt-1">
                          <div 
                            className="h-6 bg-purple-400 rounded transition-all duration-1000 ease-out flex items-center justify-center text-white text-xs font-bold"
                            style={{ width: isVisible ? '60%' : '0%', transitionDelay: '400ms' }}
                          >
                            Asia Pacific
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-center text-gray-600">Geographic expansion strategy over time</p>
                  </div>
                </div>
                
                <ExpandableSection id="entryExecution" title="Execution Strategy">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-medium text-blue-800 mb-2">Regulatory Fast-Tracking</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm text-gray-700">Pre-submission consultations with regulatory bodies</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm text-gray-700">Parallel submission process across markets</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm text-gray-700">Expert regulatory consultants in each market</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm text-gray-700">Expedited review applications where available</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm text-gray-700">Comprehensive data packages to minimize questions</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-medium text-blue-800 mb-2">Distribution Strategy</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm text-gray-700">Strategic partnerships with major distributors</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm text-gray-700">Direct relationships with key retail chains</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm text-gray-700">Industry association partnerships and endorsements</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm text-gray-700">Localized manufacturing to reduce logistics costs</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm text-gray-700">Just-in-time inventory management system</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-medium text-blue-800 mb-2">Go-to-Market Approach</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm text-gray-700">B2B sales team with industry expertise</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm text-gray-700">Trade show presentations and demonstrations</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm text-gray-700">Scientific publication and validation studies</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm text-gray-700">Pilot programs with key potential customers</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-sm text-gray-700">ROI analysis tools for customer value demonstration</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ExpandableSection>
                
                <ExpandableSection id="marketChallenges" title="Market Entry Challenges & Mitigation">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-blue-200">
                      <thead className="bg-blue-50">
                        <tr>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Challenge</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Risk Level</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Mitigation Strategy</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-blue-100">
                        <tr>
                          <td className="px-4 py-3 text-sm font-medium text-blue-900">Regulatory delays</td>
                          <td className="px-4 py-3 text-sm text-red-700">High</td>
                          <td className="px-4 py-3 text-sm text-gray-700">Pre-application consultations, comprehensive data packages, regulatory experts in each market</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-medium text-blue-900">Competitive response</td>
                          <td className="px-4 py-3 text-sm text-yellow-700">Medium</td>
                          <td className="px-4 py-3 text-sm text-gray-700">Strong IP protection, accelerated market entry, strategic partnerships with key industry players</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-medium text-blue-900">Customer adoption hesitancy</td>
                          <td className="px-4 py-3 text-sm text-yellow-700">Medium</td>
                          <td className="px-4 py-3 text-sm text-gray-700">Pilot programs, ROI tools, comprehensive efficacy data, testimonials from early adopters</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-medium text-blue-900">Manufacturing scale-up</td>
                          <td className="px-4 py-3 text-sm text-green-700">Low</td>
                          <td className="px-4 py-3 text-sm text-gray-700">Phased production capacity increases, strategic manufacturing partnerships, redundant supply chains</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </ExpandableSection>
              </div>
            )}
            {activeTab === 'sustainability' && (
              <div>
                <p className="text-gray-700 mb-6">{activeData.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {activeData.impacts.map((impact) => (
                    <div 
                      key={impact.category}
                      className="bg-white p-4 rounded-lg shadow border border-blue-100 transition-all duration-300 transform hover:shadow-lg hover:scale-105"
                    >
                      <h4 className="font-semibold text-blue-900 mb-3">{impact.category}</h4>
                      <ul className="space-y-2">
                        {impact.metrics.map((metric, index) => (
                          <li key={index} className="flex items-start">
                            <CheckIcon />
                            <span className="text-gray-700">{metric}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-green-800 mb-3">Key Sustainability Metrics</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeData.keyMetrics.map((metric, index) => (
                      <div 
                        key={index}
                        className="bg-white p-3 rounded shadow border border-green-100 transition-all duration-300 hover:shadow-md hover:bg-green-50 flex items-center"
                      >
                        <span className="text-xl mr-3">♻️</span>
                        <span className="text-gray-700">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <ExpandableSection id="sdgContribution" title="UN Sustainable Development Goals Contribution">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-2">2</div>
                        <h5 className="font-medium text-blue-800">Zero Hunger</h5>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Our technology extends the availability of nutritious fresh produce, reducing food insecurity and improving access to healthy food options.
                      </p>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-2">8</div>
                        <h5 className="font-medium text-blue-800">Decent Work and Economic Growth</h5>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Creates new economic opportunities throughout the food supply chain, particularly for small-scale producers in developing regions.
                      </p>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-2">9</div>
                        <h5 className="font-medium text-blue-800">Industry, Innovation and Infrastructure</h5>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Promotes technological innovation in the food preservation sector, creating more sustainable and efficient supply chain infrastructure.
                      </p>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-2">12</div>
                        <h5 className="font-medium text-blue-800">Responsible Consumption and Production</h5>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Dramatically reduces food waste throughout the supply chain, promoting more sustainable consumption and production patterns.
                      </p>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-2">13</div>
                        <h5 className="font-medium text-blue-800">Climate Action</h5>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Reduces greenhouse gas emissions from food waste decomposition and decreases the carbon footprint of global food production and transportation.
                      </p>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-2">17</div>
                        <h5 className="font-medium text-blue-800">Partnerships for the Goals</h5>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Fosters collaboration between industry, government, and non-profit organizations to address global food security and sustainability challenges.
                      </p>
                    </div>
                  </div>
                </ExpandableSection>
                
                <ExpandableSection id="carbonImpact" title="Carbon Impact Analysis">
                  <p className="mb-4">
                    Our technology significantly reduces the carbon footprint associated with global fresh produce:
                  </p>
                  <div className="bg-white p-4 rounded shadow mb-4">
                    <h5 className="font-medium text-blue-800 mb-3">Carbon Reduction Potential</h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <div className="text-sm font-medium text-blue-900 mb-1">Reduced Food Production</div>
                        <div className="flex justify-between mb-1">
                          <span className="text-xs text-gray-600">Current</span>
                          <span className="text-xs text-gray-600">With Technology</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5 mb-1">
                          <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5 mb-2">
                          <div className="bg-green-500 h-2.5 rounded-full transition-all duration-1000 ease-out" style={{ width: isVisible ? '70%' : '100%' }}></div>
                        </div>
                        <p className="text-xs text-gray-600">Potential reduction: 4.1M metric tons CO2e</p>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium text-blue-900 mb-1">Reduced Transportation</div>
                        <div className="flex justify-between mb-1">
                          <span className="text-xs text-gray-600">Current</span>
                          <span className="text-xs text-gray-600">With Technology</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5 mb-1">
                          <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5 mb-2">
                          <div className="bg-green-500 h-2.5 rounded-full transition-all duration-1000 ease-out" style={{ width: isVisible ? '65%' : '100%' }}></div>
                        </div>
                        <p className="text-xs text-gray-600">Potential reduction: 1.8M metric tons CO2e</p>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium text-blue-900 mb-1">Reduced Landfill Waste</div>
                        <div className="flex justify-between mb-1">
                          <span className="text-xs text-gray-600">Current</span>
                          <span className="text-xs text-gray-600">With Technology</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5 mb-1">
                          <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5 mb-2">
                          <div className="bg-green-500 h-2.5 rounded-full transition-all duration-1000 ease-out" style={{ width: isVisible ? '25%' : '100%' }}></div>
                        </div>
                        <p className="text-xs text-gray-600">Potential reduction: 1.3M metric tons CO2e</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded shadow">
                      <h5 className="font-medium text-blue-800 mb-3">Water Conservation Impact</h5>
                      <p className="text-gray-700 mb-3">
                        By reducing food waste, our technology conserves the water used in agricultural production:
                      </p>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-blue-900">Berry Production</span>
                            <span className="text-sm text-blue-700">650B liters saved</span>
                          </div>
                          <div className="w-full bg-blue-100 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out" style={{ width: isVisible ? '65%' : '0%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-blue-900">Avocado Production</span>
                            <span className="text-sm text-blue-700">420B liters saved</span>
                          </div>
                          <div className="w-full bg-blue-100 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out" style={{ width: isVisible ? '42%' : '0%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-blue-900">Vegetable Production</span>
                            <span className="text-sm text-blue-700">540B liters saved</span>
                          </div>
                          <div className="w-full bg-blue-100 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out" style={{ width: isVisible ? '54%' : '0%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-blue-900">Flower Production</span>
                            <span className="text-sm text-blue-700">190B liters saved</span>
                          </div>
                          <div className="w-full bg-blue-100 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out" style={{ width: isVisible ? '19%' : '0%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded shadow">
                      <h5 className="font-medium text-blue-800 mb-3">Social Impact Metrics</h5>
                      <p className="text-gray-700 mb-3">
                        Our technology contributes to social sustainability through:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Potential 2% reduction in global food insecurity at scale</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Increased fresh produce access for 35M+ people in food deserts</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Support for 250,000+ small-scale farmers through extended market reach</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Job creation throughout the supply chain and distribution network</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Reduced food costs through waste reduction and improved logistics</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ExpandableSection>
              </div>
            )}
            {activeTab === 'investment' && (
              <div>
                <p className="text-gray-700 mb-6">{activeData.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {activeData.metrics.map((metric) => (
                    <div 
                      key={metric.category}
                      className="bg-white p-4 rounded-lg shadow border border-blue-100 transition-all duration-300 transform hover:shadow-lg hover:scale-105"
                    >
                      <h4 className="font-semibold text-blue-900 mb-3">{metric.category}</h4>
                      <div className="space-y-3">
                        {metric.data.map((item) => (
                          <div key={item.year}>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium text-blue-900">{item.year}</span>
                              <span className="text-sm text-blue-700">{item.value}</span>
                            </div>
                            <div className="w-full bg-blue-100 rounded-full h-2.5">
                              <div 
                                className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                                style={{ 
                                  width: isVisible ? `${
                                    metric.category === "Revenue Growth" ? 
                                      (parseInt(item.value.replace(/[^0-9]/g, '')) / 310) * 100 : 
                                    metric.category === "Margin Projection" ? 
                                      parseInt(item.value.replace(/%/g, '')) : 
                                    (parseInt(item.value.replace(/[^0-9.]/g, '')) / 99.2) * 100
                                  }%` : '0%',
                                  transitionDelay: `${metric.data.indexOf(item) * 100}ms`
                                }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow mb-6 border border-blue-100 transition-all duration-300 transform hover:shadow-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">Investment Highlights</h4>
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {activeData.keyHighlights.map((highlight, index) => (
                      <div 
                        key={index}
                        className="bg-blue-50 p-3 rounded transition-all duration-300 hover:bg-blue-100 text-center"
                      >
                        <div className="text-xl mb-2">💰</div>
                        <p className="text-sm text-gray-700">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <ExpandableSection id="investmentOpportunity" title="Investment Opportunity">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-medium text-blue-800 mb-2">Capital Requirements</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Seed Funding (Completed): $2.5M</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Series A (Current Round): $12M</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Series B (Projected Year 2): $25-30M</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Series C (Projected Year 3-4): $50-75M</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-medium text-blue-800 mb-2">Use of Funds (Series A)</h5>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-blue-900">Manufacturing Scale-Up</span>
                            <span className="text-sm text-blue-700">$4.8M (40%)</span>
                          </div>
                          <div className="w-full bg-blue-200 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out" style={{ width: isVisible ? '40%' : '0%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-blue-900">Regulatory Approvals</span>
                            <span className="text-sm text-blue-700">$3M (25%)</span>
                          </div>
                          <div className="w-full bg-blue-200 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out" style={{ width: isVisible ? '25%' : '0%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-blue-900">Sales & Marketing</span>
                            <span className="text-sm text-blue-700">$2.4M (20%)</span>
                          </div>
                          <div className="w-full bg-blue-200 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out" style={{ width: isVisible ? '20%' : '0%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-blue-900">R&D Pipeline</span>
                            <span className="text-sm text-blue-700">$1.2M (10%)</span>
                          </div>
                          <div className="w-full bg-blue-200 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out" style={{ width: isVisible ? '10%' : '0%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-blue-900">Working Capital</span>
                            <span className="text-sm text-blue-700">$0.6M (5%)</span>
                          </div>
                          <div className="w-full bg-blue-200 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out" style={{ width: isVisible ? '5%' : '0%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h5 className="font-medium text-blue-800 mb-3">Potential Exit Strategies</h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded shadow border border-blue-100 transition-all duration-300 hover:shadow-md hover:bg-blue-50">
                        <div className="text-xl mb-2 text-center">🏢</div>
                        <div className="font-medium text-blue-900 text-center">Strategic Acquisition</div>
                        <p className="text-xs text-gray-600 text-center mt-1">Target: Year 4-5</p>
                        <p className="text-xs text-gray-600 text-center">Valuation: 8-10x revenue</p>
                        <p className="text-xs text-gray-600 text-center">Potential acquirers include major agricultural companies, food technology firms, and chemical corporations</p>
                      </div>
                      <div className="bg-white p-3 rounded shadow border border-blue-100 transition-all duration-300 hover:shadow-md hover:bg-blue-50">
                        <div className="text-xl mb-2 text-center">📈</div>
                        <div className="font-medium text-blue-900 text-center">Initial Public Offering</div>
                        <p className="text-xs text-gray-600 text-center mt-1">Target: Year 5-6</p>
                        <p className="text-xs text-gray-600 text-center">Valuation: 10-12x revenue</p>
                        <p className="text-xs text-gray-600 text-center">Positioned as a sustainability-focused food technology company with strong ESG credentials</p>
                      </div>
                      <div className="bg-white p-3 rounded shadow border border-blue-100 transition-all duration-300 hover:shadow-md hover:bg-blue-50">
                        <div className="text-xl mb-2 text-center">🤝</div>
                        <div className="font-medium text-blue-900 text-center">Private Equity Sale</div>
                        <p className="text-xs text-gray-600 text-center mt-1">Target: Year 3-4</p>
                        <p className="text-xs text-gray-600 text-center">Valuation: 6-8x revenue</p>
                        <p className="text-xs text-gray-600 text-center">Attractive to PE firms focused on AgTech and sustainability investments</p>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>
                
                <ExpandableSection id="financialProjections" title="Detailed Financial Projections">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-blue-200">
                      <thead className="bg-blue-50">
                        <tr>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Financial Metric</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Year 1</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Year 2</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Year 3</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Year 4</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Year 5</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-blue-100">
                        <tr>
                          <td className="px-4 py-3 text-sm font-medium text-blue-900">Revenue</td>
                          <td className="px-4 py-3 text-sm text-gray-700">$18M</td>
                          <td className="px-4 py-3 text-sm text-gray-700">$42M</td>
                          <td className="px-4 py-3 text-sm text-gray-700">$95M</td>
                          <td className="px-4 py-3 text-sm text-gray-700">$175M</td>
                          <td className="px-4 py-3 text-sm text-gray-700">$310M</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-medium text-blue-900">Gross Profit</td>
                          <td className="px-4 py-3 text-sm text-gray-700">$9M</td>
                          <td className="px-4 py-3 text-sm text-gray-700">$22.3M</td>
                          <td className="px-4 py-3 text-sm text-gray-700">$53.2M</td>
                          <td className="px-4 py-3 text-sm text-gray-700">$105M</td>
                          <td className="px-4 py-3 text-sm text-gray-700">$192.2M</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-medium text-blue-900">Gross Margin</td>
                          <td className="px-4 py-3 text-sm text-gray-700">50%</td>
                          <td className="px-4 py-3 text-sm text-gray-700">53%</td>
                          <td className="px-4 py-3 text-sm text-gray-700">56%</td>
                          <td className="px-4 py-3 text-sm text-gray-700">60%</td>
                          <td className="px-4 py-3 text-sm text-gray-700">62%</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-medium text-blue-900">EBITDA</td>
                          <td className="px-4 py-3 text-sm text-gray-700">$3.6M</td>
                          <td className="px-4 py-3 text-sm text-gray-700">$9.7M</td>
                          <td className="px-4 py-3 text-sm text-gray-700">$25.7M</td>
                          <td className="px-4 py-3 text-sm text-gray-700">$52.5M</td>
                          <td className="px-4 py-3 text-sm text-gray-700">$99.2M</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-medium text-blue-900">EBITDA Margin</td>
                          <td className="px-4 py-3 text-sm text-gray-700">20%</td>
                          <td className="px-4 py-3 text-sm text-gray-700">23%</td>
                          <td className="px-4 py-3 text-sm text-gray-700">27%</td>
                          <td className="px-4 py-3 text-sm text-gray-700">30%</td>
                          <td className="px-4 py-3 text-sm text-gray-700">32%</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-medium text-blue-900">Net Income</td>
                          <td className="px-4 py-3 text-sm text-gray-700">$1.8M</td>
                          <td className="px-4 py-3 text-sm text-gray-700">$6.3M</td>
                          <td className="px-4 py-3 text-sm text-gray-700">$19M</td>
                          <td className="px-4 py-3 text-sm text-gray-700">$42M</td>
                          <td className="px-4 py-3 text-sm text-gray-700">$83.7M</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-medium text-blue-900">Net Margin</td>
                          <td className="px-4 py-3 text-sm text-gray-700">10%</td>
                          <td className="px-4 py-3 text-sm text-gray-700">15%</td>
                          <td className="px-4 py-3 text-sm text-gray-700">20%</td>
                          <td className="px-4 py-3 text-sm text-gray-700">24%</td>
                          <td className="px-4 py-3 text-sm text-gray-700">27%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </ExpandableSection>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreservativesGlobalOpportunity;