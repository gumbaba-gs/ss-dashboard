import React, { useState, useEffect } from 'react';

const SuperWaterIndiaOpportunity = () => {
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
  
  // Market data for India
  const marketData = {
    overview: {
      title: "Z² Super Water™ India Opportunity",
      subtitle: "A rapidly growing market for enhanced hydration solutions",
      description: "With a population of 1.4 billion and growing health consciousness, India represents a significant market opportunity for our Super Water™ formulations.",
      stats: [
        { label: "Market Size India (2025)", value: "₹7,239 Cr", icon: "📊" },
        { label: "Annual Growth", value: "10.4%", icon: "📈" },
        { label: "Elite Segment (2025)", value: "₹800-1,200 Cr", icon: "💰" },
        { label: "Target Urban Centers", value: "8+", icon: "🏙️" }
      ]
    },
    elitePopulation: {
      title: "Elite Population Market",
      description: "The elite segment in India represents our primary target market with significant untapped potential.",
      stats: [
        { label: "Total Elite Population", value: "3.94M", icon: "👥" },
        { label: "Current Penetration", value: "11%", icon: "📈" },
        { label: "Target Penetration", value: "15-20%", icon: "🎯" },
        { label: "Daily Avg Consumption", value: "2.4L", icon: "💧" }
      ],
      cityDistribution: [
        { city: "Bangalore", population: 415500, penetration: 0.11 },
        { city: "Mumbai", population: 730300, penetration: 0.11 },
        { city: "Delhi NCR", population: 1017450, penetration: 0.11 },
        { city: "Hyderabad", population: 380000, penetration: 0.11 },
        { city: "Chennai", population: 385000, penetration: 0.11 },
        { city: "Pune", population: 257000, penetration: 0.11 },
        { city: "Kolkata", population: 475000, penetration: 0.11 },
        { city: "Ahmedabad", population: 277000, penetration: 0.11 }
      ],
      consumption: [
        { city: "Bangalore", liters: 3.2 },
        { city: "Mumbai", liters: 2.8 },
        { city: "Delhi NCR", liters: 2.7 },
        { city: "Hyderabad", liters: 2.5 },
        { city: "Chennai", liters: 2.3 },
        { city: "Pune", liters: 2.1 },
        { city: "Kolkata", liters: 1.8 },
        { city: "Ahmedabad", liters: 1.7 }
      ]
    },
    phasedExpansion: {
      title: "Phased Expansion Plan",
      phases: [
        {
          name: "Phase 1: Initial Launch (Q3 2025 - Q4 2025)",
          target: "Bangalore",
          stats: {
            targetPopulation: 457,
            dailyVolume: {
              min: 228.5,
              max: 1096.8
            },
            monthlyVolume: {
              min: 0,
              max: 33340,
            }
          },
          steps: [
            "Launch with online subscription model, e-commerce website, and mobile app targeting Bangalore",
            "Focus on 1% of current Super water Elite consumers (457 customers)",
            "Daily volume target: 1096.8 liters",
            "Establish digital brand presence and direct-to-consumer distribution network"
          ]
        },
        {
          name: "Phase 2: Key Metro Expansion (Q1 2026 - Q4 2026)",
          target: "Mumbai + Delhi NCR",
          stats: {
            targetPopulation: 1922,
            dailyVolume: {
              min: 961,
              max: 4612
            },
            monthlyVolume: {
              min: 28830,
              max: 140281
            }
          },
          steps: [
            "Expand to Mumbai (803 customers) and Delhi NCR (1,119 customers)",
            "Target 1% of existing Super water Elite consumers",
            "Daily volume target: 4612 liters",
            "Establish partnerships with premium gyms and wellness centers"
          ]
        },
        {
          name: "Phase 3: Southern & Western Expansion (Q1 2027 - Q4 2027)",
          target: "Hyderabad, Chennai, Pune + Existing Markets",
          stats: {
            newMarkets: {
              targetPopulation: 1125,
              dailyVolume: {
                min: 562.5,
                max: 2700
              },
              monthlyVolume: {
                min: 16875,
                max: 33750
              }
            },
            existingMarkets: {
              targetPopulation: 1926,
              dailyVolume: {
                min: 963,
                max: 4622
              },
              monthlyVolume: {
                min: 28890,
                max: 57780
              }
            },
            combinedMonthlyVolume: {
              min: 45765,
              max: 222710
            }
          },
          steps: [
            "Expand to Hyderabad (418), Chennai (424), and Pune (283)",
            "Increase penetration in existing markets by 0.1% of untapped elite",
            "Combined monthly volume target: 222,710 liters",
            "Establish local brand presence and distribution network"
          ]
        },
        {
          name: "Phase 4: National Expansion (Q1 2028 - Q4 2028)",
          target: "Kolkata, Ahmedabad + All Existing Markets",
          stats: {
            newMarkets: {
              targetPopulation: 828,
              dailyVolume: {
                min: 414,
                max: 828
              },
              monthlyVolume: {
                min: 12420,
                max: 60444
              }
            },
            phase3Cities: {
              targetPopulation: 910,
              dailyVolume: {
                min: 455,
                max: 910
              },
              monthlyVolume: {
                min: 13650,
                max: 66430
              }
            },
            phase12Cities: {
              targetPopulation: 9627,
              dailyVolume: {
                min: 4813.5,
                max: 9627
              },
              monthlyVolume: {
                min: 144405,
                max: 702771
              }
            }
          },
          steps: [
            "Expand to Kolkata (523) and Ahmedabad (305)",
            "Increase penetration in Phase 3 cities by 0.1% of untapped elite",
            "Increase penetration in Phase 1-2 cities by 0.5% of untapped elite",
            "Establish nationwide distribution network"
          ]
        }
      ]
    },
    revenueAnalysis: {
      title: "Revenue Analysis",
      description: "Projected revenue analysis based on our phased expansion plan and premium pricing strategy.",
      premiumPricing: [
        { package: "1L Bottle", pricePerUnit: 120, pricePerLiter: 120 },
        { package: "Monthly Subscription (30x2.4l)", pricePerUnit: 8640, pricePerLiter: 120 }
      ],
      projectedRevenue: [
        { 
          phase: "Phase 1 (Q3-Q4 2025)", 
          monthlyVolume: { min: 6855, max: 33340 },
          monthlyRevenue: { min: 2.4, max: 0.4 },
          annualizedRevenue: { min: 14.4, max: 4.8 }
        },
        { 
          phase: "Phase 2 (2026)", 
          monthlyVolume: { min: 28830, max: 140281 },
          monthlyRevenue: { min: 10.1, max: 1.68 },
          annualizedRevenue: { min: 121.2, max: 20.2 }
        },
        { 
          phase: "Phase 3 (2027)", 
          monthlyVolume: { min: 45765, max: 222710 },
          monthlyRevenue: { min: 16.0, max: 2.67 },
          annualizedRevenue: { min: 192.0, max: 32.0 }
        },
        { 
          phase: "Phase 4 (2028)", 
          monthlyVolume: { min: 170475, max: 829645 },
          monthlyRevenue: { min: 59.7, max: 9.95 },
          annualizedRevenue: { min: 716.4, max: 119.4 }
        }
      ]
    },
    profitAnalysis: {
      title: "Profit Analysis",
      description: "Projected profit analysis based on our expansion plan, including manufacturing costs, distribution expenses, and marketing investments.",
      costStructure: {
        manufacturing: 30, // % of revenue
        distribution: 15, // % of revenue
        marketing: 25, // % of revenue
        operations: 10, // % of revenue
        marginal: 20  // % of revenue
      },
      projectedProfits: [
        { 
          phase: "Phase 1 (Q3-Q4 2025)", 
          revenue: { min: 14.4, max: 4.8 },
          expenses: { min: 11.5, max: 3.84 },
          profit: { min: 2.9, max: 0.96 },
          marginPercentage: 20
        },
        { 
          phase: "Phase 2 (2026)", 
          revenue: { min: 121.2, max: 20.2 },
          expenses: { min: 97.0, max: 16.16 },
          profit: { min: 24.2, max: 4.04 },
          marginPercentage: 20
        },
        { 
          phase: "Phase 3 (2027)", 
          revenue: { min: 192.0, max: 32.0 },
          expenses: { min: 153.6, max: 25.6 },
          profit: { min: 38.4, max: 6.4 },
          marginPercentage: 20
        },
        { 
          phase: "Phase 4 (2028)", 
          revenue: { min: 716.4, max: 119.4 },
          expenses: { min: 573.1, max: 95.52 },
          profit: { min: 143.3, max: 18.88 },
          marginPercentage: 20
        }
      ],
      breakEvenAnalysis: {
        initialInvestment: {min: 50, Max: 2}, // in crores
        monthlyBreakEven: { min: 4, max: 12 }, // months
        cumulativeProfitYear3: { min: 208.8, max: 30.28 } // in crores
      }
    },
    demographics: {
      title: "Target Demographics",
      segments: [
        {
          name: "Urban Centers",
          description: "Focusing on India's 8 largest metropolitan areas with combined elite population of 3.94 million",
          percentage: 40,
          growth: 18.5
        },
        {
          name: "Middle Class Consumers",
          description: "India's rapidly expanding middle class with growing disposable income and health awareness",
          percentage: 35,
          growth: 21.2
        },
        {
          name: "Health-Conscious Segment",
          description: "Growing population of fitness enthusiasts and health-focused consumers",
          percentage: 15,
          growth: 24.7
        },
        {
          name: "Corporate Partnerships",
          description: "Strategic B2B opportunities with corporates, hotels, fitness centers and healthcare facilities",
          percentage: 10,
          growth: 15.3
        }
      ]
    }
  };

  // Tab options
  const tabOptions = [
    { id: 'overview', label: 'Overview', icon: '📋' },
    { id: 'elitePopulation', label: 'Elite Population', icon: '👥' },
    { id: 'phasedExpansion', label: 'Expansion Plan', icon: '🚀' },
    { id: 'revenueAnalysis', label: 'Revenue Analysis', icon: '💹' },
    { id: 'profitAnalysis', label: 'Profit Analysis', icon: '📈' },
    { id: 'demographics', label: 'Demographics', icon: '🏙️' }
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
  const ProgressBar = ({ label, percentage, growth, description }) => (
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
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
  );

  // Expandable section component with improved transitions
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

  // City Population Bar component with animation
  const CityPopulationBar = ({ city, population, maxPopulation }) => {
    const percentage = (population / maxPopulation) * 100;
    
    return (
      <div className="mb-3">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-blue-900">{city}</span>
          <span className="text-sm text-blue-700">{(population / 1000000).toFixed(2)}M</span>
        </div>
        <div className="w-full bg-blue-100 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out" 
            style={{ width: isVisible ? `${percentage}%` : '0%' }}
          ></div>
        </div>
      </div>
    );
  };

  // Revenue Phase Card component with hover animation
  const RevenuePhaseCard = ({ phase }) => (
    <div className="bg-white rounded-lg shadow-md border border-blue-100 mb-4 overflow-hidden transition-all duration-300 transform hover:shadow-lg hover:scale-105">
      <div className="p-3 bg-gradient-to-r from-blue-50 to-white border-b border-blue-100">
        <h4 className="font-semibold text-blue-800">{phase.phase}</h4>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="bg-blue-50 p-2 rounded">
            <div className="text-xs text-blue-700">Monthly Volume (L)</div>
            <div className="text-sm font-semibold">{phase.monthlyVolume.max.toLocaleString()}</div>
          </div>
          <div className="bg-green-50 p-2 rounded">
            <div className="text-xs text-green-700">Monthly Revenue (Cr)</div>
            <div className="text-sm font-semibold">₹{phase.monthlyRevenue.max}</div>
          </div>
        </div>
        <div className="bg-indigo-50 p-2 rounded">
          <div className="text-xs text-indigo-700">Annual Revenue (Cr)</div>
          <div className="text-sm font-semibold">₹{phase.annualizedRevenue.max}</div>
        </div>
      </div>
    </div>
  );

  // Profit Phase Card component with hover animation
  const ProfitPhaseCard = ({ phase }) => (
    <div className="bg-white rounded-lg shadow-md border border-blue-100 mb-4 overflow-hidden transition-all duration-300 transform hover:shadow-lg hover:scale-105">
      <div className="p-3 bg-gradient-to-r from-blue-50 to-white border-b border-blue-100">
        <h4 className="font-semibold text-blue-800">{phase.phase}</h4>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-3 gap-2 mb-3">
          <div className="bg-blue-50 p-2 rounded">
            <div className="text-xs text-blue-700">Revenue (Cr)</div>
            <div className="text-sm font-semibold">₹{phase.revenue.max}</div>
          </div>
          <div className="bg-red-50 p-2 rounded">
            <div className="text-xs text-red-700">Expenses (Cr)</div>
            <div className="text-sm font-semibold">₹{phase.expenses.max}</div>
          </div>
          <div className="bg-green-50 p-2 rounded">
            <div className="text-xs text-green-700">Profit (Cr)</div>
            <div className="text-sm font-semibold">₹{phase.profit.max}</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
            <div 
              className="bg-green-600 h-2.5 rounded-full transition-all duration-1000 ease-out" 
              style={{ width: isVisible ? `${phase.marginPercentage}%` : '0%' }}
            ></div>
          </div>
          <span className="text-xs font-semibold text-gray-700">{phase.marginPercentage}% margin</span>
        </div>
      </div>
    </div>
  );

  // Check icon component for lists
  const CheckIcon = () => (
    <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
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
          Z² Super Water™ India Market Opportunity
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-8 text-blue-700">
          Expanding our enhanced hydration solutions to the elite segment of India's premium water market.
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
              {marketData[activeTab].title}
            </h3>
            {marketData.overview.subtitle && activeTab === 'overview' && (
              <p className="text-gray-600">{marketData.overview.subtitle}</p>
            )}
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div>
                <p className="text-gray-700 mb-6">{marketData.overview.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {marketData.overview.stats.map((stat) => (
                    <StatCard
                      key={stat.label}
                      icon={stat.icon}
                      label={stat.label}
                      value={stat.value}
                    />
                  ))}
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6 mb-6 transition-all duration-300 transform hover:shadow-md">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Market Overview</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Market Segmentation</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-xl mr-2">💧</span>
                          <div>
                            <span className="font-medium">Flavored Water</span>
                            <p className="text-sm text-gray-600">₹283 crore by 2025 (10.72% CAGR)</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-xl mr-2">🔬</span>
                          <div>
                            <span className="font-medium">Fortified Water</span>
                            <p className="text-sm text-gray-600">₹6,956 crore by 2025 (10.37% CAGR)</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-xl mr-2">💎</span>
                          <div>
                            <span className="font-medium">Premium Bottled Water (Super Water™)</span>
                            <p className="text-sm text-gray-600">₹13,200 crore by 2030 (9.3% CAGR)</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Elite Population Focus</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-xl mr-2">👥</span>
                          <div>
                            <span className="font-medium">Elite Population</span>
                            <p className="text-sm text-gray-600">3.94 million across 8 key cities</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-xl mr-2">📊</span>
                          <div>
                            <span className="font-medium">Current Penetration</span>
                            <p className="text-sm text-gray-600">11% of elite segment (438,356 people)</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-xl mr-2">🎯</span>
                          <div>
                            <span className="font-medium">Target Penetration</span>
                            <p className="text-sm text-gray-600">15-20% of elite segment (591,000-788,000 people)</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <ExpandableSection id="market" title="Elite Market Analysis">
                  <p className="mb-4">India's elite segment represents a significant opportunity with its growing health consciousness and premium product preferences. The elite functional and flavored water market is estimated at ₹800-1,200 crore in 2025.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-blue-50 p-3 rounded-lg text-center transition-all duration-300 transform hover:shadow hover:bg-blue-100">
                      <div className="text-sm font-semibold text-blue-900">Elite Population</div>
                      <div className="text-xl font-bold text-blue-800">3.94 Million</div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg text-center transition-all duration-300 transform hover:shadow hover:bg-blue-100">
                      <div className="text-sm font-semibold text-blue-900">Current Buyers</div>
                      <div className="text-xl font-bold text-blue-800">438,356</div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg text-center transition-all duration-300 transform hover:shadow hover:bg-blue-100">
                      <div className="text-sm font-semibold text-blue-900">Market Value</div>
                      <div className="text-xl font-bold text-blue-800">₹800-1,200 Cr</div>
                    </div>
                  </div>
                  
                  <p className="mb-4">Our Super Water™ product line is uniquely positioned to capitalize on this market with premium formulations that address specific hydration needs of the elite segment.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Current Penetration</h4>
                      <div className="bg-blue-50 p-3 rounded">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-blue-900">Current</span>
                          <span className="text-sm text-blue-700">11%</span>
                        </div>
                        <div className="w-full bg-blue-200 rounded-full h-2.5">
                          <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out" style={{ width: isVisible ? '11%' : '0%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Target Penetration</h4>
                      <div className="bg-green-50 p-3 rounded">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-green-900">Target</span>
                          <span className="text-sm text-green-700">15-20%</span>
                        </div>
                        <div className="w-full bg-green-200 rounded-full h-2.5">
                          <div className="bg-green-600 h-2.5 rounded-full transition-all duration-1000 ease-out" style={{ width: isVisible ? '20%' : '0%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>
                
                <ExpandableSection id="phased" title="Phased Expansion Strategy">
                  <p className="mb-4">Our four-phase expansion strategy will systematically increase our presence in India's elite market, starting with Bangalore and expanding to all major urban centers by 2028.</p>
                  
                  <div className="relative py-6 mb-4">
                    <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-blue-200"></div>
                    
                    <div className="relative mb-6 flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10 transition-all duration-300 hover:scale-110 hover:shadow-md">1</div>
                      <div className="ml-6">
                        <h4 className="font-medium text-blue-800">Phase 1: Initial Launch (Q3-Q4 2025)</h4>
                        <p className="text-sm text-gray-600">Bangalore launch with 457 target customers</p>
                      </div>
                    </div>
                    
                    <div className="relative mb-6 flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10 transition-all duration-300 hover:scale-110 hover:shadow-md">2</div>
                      <div className="ml-6">
                        <h4 className="font-medium text-blue-800">Phase 2: Key Metro Expansion (2026)</h4>
                        <p className="text-sm text-gray-600">Mumbai & Delhi NCR with 1,922 target customers</p>
                      </div>
                    </div>
                    
                    <div className="relative mb-6 flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10 transition-all duration-300 hover:scale-110 hover:shadow-md">3</div>
                      <div className="ml-6">
                        <h4 className="font-medium text-blue-800">Phase 3: Southern & Western Expansion (2027)</h4>
                        <p className="text-sm text-gray-600">Hyderabad, Chennai, Pune + increased penetration in existing markets</p>
                      </div>
                    </div>
                    
                    <div className="relative flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10 transition-all duration-300 hover:scale-110 hover:shadow-md">4</div>
                      <div className="ml-6">
                        <h4 className="font-medium text-blue-800">Phase 4: National Expansion (2028)</h4>
                        <p className="text-sm text-gray-600">Kolkata, Ahmedabad + nationwide scale-up</p>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>
              </div>
            )}

            {activeTab === 'elitePopulation' && (
              <div>
                <p className="text-gray-700 mb-6">{marketData.elitePopulation.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {marketData.elitePopulation.stats.map((stat) => (
                    <StatCard
                      key={stat.label}
                      icon={stat.icon}
                      label={stat.label}
                      value={stat.value}
                    />
                  ))}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-4 rounded-lg shadow border border-blue-100 transition-all duration-300 transform hover:shadow-lg hover:scale-105">
                    <h4 className="font-semibold text-blue-900 mb-3">Elite Population by City</h4>
                    {marketData.elitePopulation.cityDistribution.map((city) => (
                      <CityPopulationBar 
                        key={city.city} 
                        city={city.city} 
                        population={city.population} 
                        maxPopulation={1017450} // Delhi NCR (max population)
                      />
                    ))}
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow border border-blue-100 transition-all duration-300 transform hover:shadow-lg hover:scale-105">
                    <h4 className="font-semibold text-blue-900 mb-3">Daily Water Consumption by City (Liters)</h4>
                    {marketData.elitePopulation.consumption.map((city) => (
                      <div key={city.city} className="mb-3">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-blue-900">{city.city}</span>
                          <span className="text-sm text-blue-700">{city.liters}L</span>
                        </div>
                        <div className="w-full bg-blue-100 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out" 
                            style={{ width: isVisible ? `${(city.liters / 3.2) * 100}%` : '0%' }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6 mb-6 transition-all duration-300 transform hover:shadow-md">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">Penetration Analysis</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-white p-3 rounded shadow text-center transition-all duration-300 transform hover:shadow-md hover:bg-blue-50">
                      <div className="text-sm font-semibold text-blue-900">Current Buyers</div>
                      <div className="text-xl font-bold text-blue-800">438,356</div>
                      <div className="text-xs text-gray-600">(11% of elite)</div>
                    </div>
                    <div className="bg-white p-3 rounded shadow text-center transition-all duration-300 transform hover:shadow-md hover:bg-blue-50">
                      <div className="text-sm font-semibold text-blue-900">Target Buyers (15%)</div>
                      <div className="text-xl font-bold text-blue-800">591,000</div>
                      <div className="text-xs text-gray-600">(+152,644 new buyers)</div>
                    </div>
                    <div className="bg-white p-3 rounded shadow text-center transition-all duration-300 transform hover:shadow-md hover:bg-blue-50">
                      <div className="text-sm font-semibold text-blue-900">Target Buyers (20%)</div>
                      <div className="text-xl font-bold text-blue-800">788,000</div>
                      <div className="text-xs text-gray-600">(+349,644 new buyers)</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow border border-blue-100 transition-all duration-300 transform hover:shadow-lg hover:scale-105">
                  <h4 className="font-semibold text-blue-900 mb-3">Elite Market Growth Potential</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="mb-4">
                        <h5 className="text-sm font-medium text-blue-800 mb-1">Volume Potential </h5>
                        <div className="flex justify-between mb-1">
                          <span className="text-xs text-gray-600">Current: 80M liters</span>
                          <span className="text-xs text-gray-600">Target: 107.86M liters</span>
                        </div>
                        <div className="w-full bg-blue-100 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: isVisible ? '75%' : '0%' }}></div>
                        </div>
                        <div className="text-xs text-blue-600 mt-1">+27.86M liters annually</div>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-medium text-blue-800 mb-1">Maximum Volume Potential </h5>
                        <div className="flex justify-between mb-1">
                          <span className="text-xs text-gray-600">Current: 120M liters</span>
                          <span className="text-xs text-gray-600">Target: 287.62M liters</span>
                        </div>
                        <div className="w-full bg-blue-100 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: isVisible ? '42%' : '0%' }}></div>
                        </div>
                        <div className="text-xs text-blue-600 mt-1">+167.62M liters annually</div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="mb-4">
                        <h5 className="text-sm font-medium text-green-800 mb-1">Value Potential (₹/year)</h5>
                        <div className="flex justify-between mb-1">
                          <span className="text-xs text-gray-600">Current: ₹800 Cr</span>
                          <span className="text-xs text-gray-600">Target: ₹1,079 Cr</span>
                        </div>
                        <div className="w-full bg-green-100 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: isVisible ? '74%' : '0%' }}></div>
                        </div>
                        <div className="text-xs text-green-600 mt-1">+₹279 Cr annually (35% increase)</div>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-medium text-green-800 mb-1">Maximum Value Potential</h5>
                        <div className="flex justify-between mb-1">
                          <span className="text-xs text-gray-600">Current: ₹1,200 Cr</span>
                          <span className="text-xs text-gray-600">Target: ₹2,876 Cr</span>
                        </div>
                        <div className="w-full bg-green-100 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: isVisible ? '42%' : '0%' }}></div>
                        </div>
                        <div className="text-xs text-green-600 mt-1">+₹1,676 Cr annually (140% increase)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'phasedExpansion' && (
              <div>
                <p className="text-gray-700 mb-6">Our phased expansion plan strategically targets key cities across India to maximize market penetration while minimizing operational risk.</p>
                
                {marketData.phasedExpansion.phases.map((phase, index) => (
                  <div key={phase.name} className="bg-white rounded-lg shadow-md border border-blue-100 mb-6 overflow-hidden transition-all duration-300 transform hover:shadow-lg hover:scale-105">
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-white border-b border-blue-100 flex items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-3 transition-transform duration-300 hover:scale-110">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-blue-800">{phase.name}</h3>
                        <p className="text-sm text-gray-600">Target: {phase.target}</p>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      {index === 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                          <div className="bg-blue-50 p-3 rounded transition-all duration-300 hover:bg-blue-100">
                            <div className="text-xs text-blue-700">Target Population</div>
                            <div className="text-lg font-semibold">{phase.stats.targetPopulation.toLocaleString()} customers</div>
                          </div>
                          <div className="bg-blue-50 p-3 rounded transition-all duration-300 hover:bg-blue-100">
                            <div className="text-xs text-blue-700">Daily Volume</div>
                            <div className="text-lg font-semibold">{phase.stats.dailyVolume.max}L</div>
                          </div>
                          <div className="bg-blue-50 p-3 rounded transition-all duration-300 hover:bg-blue-100">
                            <div className="text-xs text-blue-700">Monthly Volume</div>
                            <div className="text-lg font-semibold">{phase.stats.monthlyVolume.max.toLocaleString()}L</div>
                          </div>
                        </div>
                      )}
                      
                      {index === 1 && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                          <div className="bg-blue-50 p-3 rounded transition-all duration-300 hover:bg-blue-100">
                            <div className="text-xs text-blue-700">Target Population</div>
                            <div className="text-lg font-semibold">{phase.stats.targetPopulation.toLocaleString()} customers</div>
                          </div>
                          <div className="bg-blue-50 p-3 rounded transition-all duration-300 hover:bg-blue-100">
                            <div className="text-xs text-blue-700">Daily Volume</div>
                            <div className="text-lg font-semibold">{phase.stats.dailyVolume.max}L</div>
                          </div>
                          <div className="bg-blue-50 p-3 rounded transition-all duration-300 hover:bg-blue-100">
                            <div className="text-xs text-blue-700">Monthly Volume</div>
                            <div className="text-lg font-semibold">{phase.stats.monthlyVolume.max.toLocaleString()}L</div>
                          </div>
                        </div>
                      )}
                      
                      {index === 2 && (
                        <div className="mb-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                            <div>
                              <h4 className="font-medium text-blue-800 mb-2">New Markets</h4>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="bg-blue-50 p-2 rounded transition-all duration-300 hover:bg-blue-100">
                                  <div className="text-xs text-blue-700">Target</div>
                                  <div className="text-sm font-semibold">{phase.stats.newMarkets.targetPopulation.toLocaleString()}</div>
                                </div>
                                <div className="bg-blue-50 p-2 rounded transition-all duration-300 hover:bg-blue-100">
                                  <div className="text-xs text-blue-700">Daily Volume</div>
                                  <div className="text-sm font-semibold">{phase.stats.newMarkets.dailyVolume.max}L</div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-medium text-blue-800 mb-2">Existing Markets</h4>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="bg-blue-50 p-2 rounded transition-all duration-300 hover:bg-blue-100">
                                  <div className="text-xs text-blue-700">Target</div>
                                  <div className="text-sm font-semibold">{phase.stats.existingMarkets.targetPopulation.toLocaleString()}</div>
                                </div>
                                <div className="bg-blue-50 p-2 rounded transition-all duration-300 hover:bg-blue-100">
                                  <div className="text-xs text-blue-700">Daily Volume</div>
                                  <div className="text-sm font-semibold">{phase.stats.existingMarkets.dailyVolume.max}L</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-indigo-50 p-3 rounded transition-all duration-300 hover:bg-indigo-100">
                            <div className="text-xs text-indigo-700">Combined Monthly Volume</div>
                            <div className="text-lg font-semibold">{phase.stats.combinedMonthlyVolume.max.toLocaleString()}L</div>
                          </div>
                        </div>
                      )}
                      
                      {index === 3 && (
                        <div className="mb-4">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                            <div>
                              <h4 className="font-medium text-blue-800 mb-2">New Markets</h4>
                              <div className="bg-blue-50 p-2 rounded transition-all duration-300 hover:bg-blue-100">
                                <div className="text-xs text-blue-700">Target: {phase.stats.newMarkets.targetPopulation.toLocaleString()}</div>
                                <div className="text-sm font-semibold">{phase.stats.newMarkets.monthlyVolume.max.toLocaleString()}L/month</div>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-medium text-blue-800 mb-2">Phase 3 Cities</h4>
                              <div className="bg-blue-50 p-2 rounded transition-all duration-300 hover:bg-blue-100">
                                <div className="text-xs text-blue-700">Target: {phase.stats.phase3Cities.targetPopulation.toLocaleString()}</div>
                                <div className="text-sm font-semibold">{phase.stats.phase3Cities.monthlyVolume.max.toLocaleString()}L/month</div>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-medium text-blue-800 mb-2">Phase 1-2 Cities</h4>
                              <div className="bg-blue-50 p-2 rounded transition-all duration-300 hover:bg-blue-100">
                                <div className="text-xs text-blue-700">Target: {phase.stats.phase12Cities.targetPopulation.toLocaleString()}</div>
                                <div className="text-sm font-semibold">{phase.stats.phase12Cities.monthlyVolume.max.toLocaleString()}L/month</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <h4 className="font-medium text-blue-800 mb-2">Key Steps</h4>
                      <ul className="space-y-2 mb-4">
                        {phase.steps.map((step, stepIdx) => (
                          <li key={stepIdx} className="flex items-start">
                            <CheckIcon />
                            <span className="text-gray-700">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
                
                <div className="bg-white p-4 rounded-lg shadow border border-blue-100 transition-all duration-300 transform hover:shadow-lg">
                  <h4 className="font-medium text-blue-800 mb-3">National Expansion Summary</h4>
                  <div className="relative h-10 bg-blue-50 rounded overflow-hidden mb-2">
                    <div className="absolute left-0 top-0 h-full bg-blue-800 z-10 transition-all duration-1000 ease-out" style={{ width: isVisible ? '10%' : '0%' }}>
                      <span className="absolute text-xs text-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">P1</span>
                    </div>
                    <div className="absolute top-0 h-full bg-blue-600 z-10 transition-all duration-1000 ease-out" style={{ width: isVisible ? '15%' : '0%', left: '10%' }}>
                      <span className="absolute text-xs text-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">P2</span>
                    </div>
                    <div className="absolute top-0 h-full bg-blue-400 z-10 transition-all duration-1000 ease-out" style={{ width: isVisible ? '20%' : '0%', left: '25%' }}>
                      <span className="absolute text-xs text-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">P3</span>
                    </div>
                    <div className="absolute top-0 h-full bg-blue-300 z-10 transition-all duration-1000 ease-out" style={{ width: isVisible ? '55%' : '0%', left: '45%' }}>
                      <span className="absolute text-xs text-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">P4</span>
                    </div>
                  </div>
                  <div className="flex text-xs text-gray-600">
                    <div className="text-center" style={{ width: '10%' }}>457 customers</div>
                    <div className="text-center" style={{ width: '15%' }}>2,379 customers</div>
                    <div className="text-center" style={{ width: '20%' }}>4,414 customers</div>
                    <div className="text-center" style={{ width: '55%' }}>15,779 customers</div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'revenueAnalysis' && (
              <div>
                <p className="text-gray-700 mb-6">{marketData.revenueAnalysis.description}</p>
                
                <div className="bg-white p-4 rounded-lg shadow mb-6 border border-blue-100 transition-all duration-300 transform hover:shadow-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">Premium Pricing Strategy</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-blue-200">
                      <thead className="bg-blue-50">
                        <tr>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Package</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Price/Unit (₹)</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Price/Liter (₹)</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-blue-100">
                        {marketData.revenueAnalysis.premiumPricing.map((item) => (
                          <tr key={item.package} className="transition-colors duration-300 hover:bg-blue-50">
                            <td className="px-4 py-2 text-sm text-gray-700">{item.package}</td>
                            <td className="px-4 py-2 text-sm text-gray-700">{item.pricePerUnit}</td>
                            <td className="px-4 py-2 text-sm text-gray-700">{item.pricePerLiter}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 mb-6">
                  <h4 className="font-semibold text-blue-900 mb-3">Projected Revenue by Phase</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {marketData.revenueAnalysis.projectedRevenue.map((phase) => (
                      <RevenuePhaseCard key={phase.phase} phase={phase} />
                    ))}
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg transition-all duration-300 transform hover:shadow-md">
                  <h4 className="font-semibold text-blue-900 mb-3">Key Revenue Insights</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-700">Phase 4 represents a 373% increase over Phase 3 revenue projections</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-700">Premium pricing strategy allows for higher margins than standard bottled water</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-700">Subscription model provides stable recurring revenue beginning in Phase 1</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-700">Average revenue per customer increases 15% year-over-year as brand loyalty grows</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'profitAnalysis' && (
              <div>
                <p className="text-gray-700 mb-6">{marketData.profitAnalysis.description}</p>
                
                <div className="bg-white p-4 rounded-lg shadow mb-6 border border-blue-100 transition-all duration-300 transform hover:shadow-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">Cost Structure</h4>
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-4">
                    <div className="bg-blue-50 p-3 rounded text-center transition-all duration-300 hover:bg-blue-100">
                      <div className="text-sm font-medium text-blue-900 mb-1">Manufacturing</div>
                      <div className="text-lg font-bold text-blue-800">{marketData.profitAnalysis.costStructure.manufacturing}%</div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded text-center transition-all duration-300 hover:bg-blue-100">
                      <div className="text-sm font-medium text-blue-900 mb-1">Distribution</div>
                      <div className="text-lg font-bold text-blue-800">{marketData.profitAnalysis.costStructure.distribution}%</div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded text-center transition-all duration-300 hover:bg-blue-100">
                      <div className="text-sm font-medium text-blue-900 mb-1">Marketing</div>
                      <div className="text-lg font-bold text-blue-800">{marketData.profitAnalysis.costStructure.marketing}%</div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded text-center transition-all duration-300 hover:bg-blue-100">
                      <div className="text-sm font-medium text-blue-900 mb-1">Operations</div>
                      <div className="text-lg font-bold text-blue-800">{marketData.profitAnalysis.costStructure.operations}%</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded text-center transition-all duration-300 hover:bg-green-100">
                      <div className="text-sm font-medium text-green-900 mb-1">Profit Margin</div>
                      <div className="text-lg font-bold text-green-800">{marketData.profitAnalysis.costStructure.marginal}%</div>
                    </div>
                  </div>
                  
                  <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden mb-1">
                    <div 
                      className="absolute left-0 top-0 h-full bg-blue-800 transition-all duration-1000 ease-out" 
                      style={{ width: isVisible ? `${marketData.profitAnalysis.costStructure.manufacturing}%` : '0%' }}
                    ></div>
                    <div 
                      className="absolute top-0 h-full bg-blue-600 transition-all duration-1000 ease-out" 
                      style={{ 
                        width: isVisible ? `${marketData.profitAnalysis.costStructure.distribution}%` : '0%', 
                        left: isVisible ? `${marketData.profitAnalysis.costStructure.manufacturing}%` : '0%' 
                      }}
                    ></div>
                    <div 
                      className="absolute top-0 h-full bg-blue-400 transition-all duration-1000 ease-out" 
                      style={{ 
                        width: isVisible ? `${marketData.profitAnalysis.costStructure.marketing}%` : '0%', 
                        left: isVisible ? `${marketData.profitAnalysis.costStructure.manufacturing + marketData.profitAnalysis.costStructure.distribution}%` : '0%' 
                      }}
                    ></div>
                    <div 
                      className="absolute top-0 h-full bg-blue-300 transition-all duration-1000 ease-out" 
                      style={{ 
                        width: isVisible ? `${marketData.profitAnalysis.costStructure.operations}%` : '0%', 
                        left: isVisible ? `${marketData.profitAnalysis.costStructure.manufacturing + marketData.profitAnalysis.costStructure.distribution + marketData.profitAnalysis.costStructure.marketing}%` : '0%' 
                      }}
                    ></div>
                    <div 
                      className="absolute top-0 h-full bg-green-500 transition-all duration-1000 ease-out" 
                      style={{ 
                        width: isVisible ? `${marketData.profitAnalysis.costStructure.marginal}%` : '0%', 
                        left: isVisible ? `${marketData.profitAnalysis.costStructure.manufacturing + marketData.profitAnalysis.costStructure.distribution + marketData.profitAnalysis.costStructure.marketing + marketData.profitAnalysis.costStructure.operations}%` : '0%' 
                      }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Manufacturing</span>
                    <span>Distribution</span>
                    <span>Marketing</span>
                    <span>Operations</span>
                    <span>Profit</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 mb-6">
                  <h4 className="font-semibold text-blue-900 mb-3">Projected Profit by Phase</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {marketData.profitAnalysis.projectedProfits.map((phase) => (
                      <ProfitPhaseCard key={phase.phase} phase={phase} />
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-4 rounded-lg shadow border border-blue-100 transition-all duration-300 transform hover:shadow-lg hover:scale-105">
                    <h4 className="font-semibold text-blue-900 mb-3">Break-Even Analysis</h4>
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div className="bg-blue-50 p-3 rounded text-center transition-all duration-300 hover:bg-blue-100">
                        <div className="text-sm font-medium text-blue-900 mb-1">Initial Investment</div>
                        <div className="text-lg font-bold text-blue-800">₹{marketData.profitAnalysis.breakEvenAnalysis.initialInvestment.min} L - ₹{marketData.profitAnalysis.breakEvenAnalysis.initialInvestment.Max} Cr</div>
                      </div>
                      <div className="bg-green-50 p-3 rounded text-center transition-all duration-300 hover:bg-green-100">
                        <div className="text-sm font-medium text-green-900 mb-1">Break-Even Time</div>
                        <div className="text-lg font-bold text-green-800">{marketData.profitAnalysis.breakEvenAnalysis.monthlyBreakEven.min} - {marketData.profitAnalysis.breakEvenAnalysis.monthlyBreakEven.max} months</div>
                      </div>
                    </div>
                    
                    <div className="relative h-8 bg-gray-100 rounded overflow-hidden mb-2">
                      <div className="absolute left-0 top-0 h-full bg-red-500 flex items-center justify-center transition-all duration-1000 ease-out" style={{ width: isVisible ? '25%' : '0%' }}>
                        <span className="text-xs text-white font-bold">Investment</span>
                      </div>
                      <div className="absolute top-0 h-full bg-yellow-500 flex items-center justify-center transition-all duration-1000 ease-out" style={{ width: isVisible ? '30%' : '0%', left: isVisible ? '25%' : '0%' }}>
                        <span className="text-xs text-white font-bold">Break-Even</span>
                      </div>
                      <div className="absolute top-0 h-full bg-green-500 flex items-center justify-center transition-all duration-1000 ease-out" style={{ width: isVisible ? '45%' : '0%', left: isVisible ? '55%' : '0%' }}>
                        <span className="text-xs text-white font-bold">Profitability</span>
                      </div>
                    </div>
                    
                    <div className="text-sm text-center text-gray-600 mb-3">Phase 1 investment recovers during Phase 2</div>
                    
                    <div className="bg-green-50 p-3 rounded text-center transition-all duration-300 hover:bg-green-100">
                      <div className="text-sm font-medium text-green-900 mb-1">3-Year Cumulative Profit</div>
                      <div className="text-lg font-bold text-green-800">{marketData.profitAnalysis.breakEvenAnalysis.cumulativeProfitYear3.max.toFixed(1)} Cr</div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow border border-blue-100 transition-all duration-300 transform hover:shadow-lg hover:scale-105">
                    <h4 className="font-semibold text-blue-900 mb-3">Profit Distribution by Phase</h4>
                    <div className="h-48 relative mb-2 flex justify-center items-center">
                      {/* Simple SVG Pie Chart with animation */}
                      <div className="w-32 h-32 relative">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          {/* Background circle */}
                          <circle cx="50" cy="50" r="50" fill="#1e40af" className={`transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
                          
                          {/* Phase 3 - 18.2% */}
                          <path 
                            d="M50,50 L100,50 A50,50 0 0,1 14.6,85.4 Z" 
                            fill="#2563eb" 
                            className={`transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                            style={{ transitionDelay: '300ms' }}
                          />
                          
                          {/* Phase 2 - 11.5% */}
                          <path 
                            d="M50,50 L100,50 A50,50 0 0,1 85.4,14.6 Z" 
                            fill="#3b82f6" 
                            className={`transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                            style={{ transitionDelay: '600ms' }}
                          />
                          
                          {/* Phase 1 - 2.7% */}
                          <path 
                            d="M50,50 L85.4,14.6 A50,50 0 0,1 93.3,21.7 Z" 
                            fill="#93c5fd" 
                            className={`transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                            style={{ transitionDelay: '900ms' }}
                          />
                          
                          {/* Center circle for donut effect */}
                          <circle 
                            cx="50" cy="50" r="25" 
                            fill="white" 
                            className={`transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                            style={{ transitionDelay: '1200ms' }}
                          />
                        </svg>
                      </div>
                      
                      {/* Legend */}
                      <div className="grid grid-cols-1 gap-1 ml-4 text-xs">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-blue-300 mr-2 rounded-sm"></div>
                          <span>Phase 1: ₹0.96 Cr (2.7%)</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-blue-500 mr-2 rounded-sm"></div>
                          <span>Phase 2: ₹4.04 Cr (11.5%)</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-blue-600 mr-2 rounded-sm"></div>
                          <span>Phase 3: ₹6.4 Cr (18.2%)</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-blue-800 mr-2 rounded-sm"></div>
                          <span>Phase 4: ₹18.88 Cr (67.6%)</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-xs text-center text-gray-600 mt-6">
                      Annual profit distribution by phase (Total: ₹ Cr)
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg transition-all duration-300 hover:shadow-md">
                  <h4 className="font-semibold text-blue-900 mb-3">Key Profit Insights</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-700">Consistent 20% profit margin maintained throughout all phases</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-700">Economies of scale will improve margins beginning in Phase 3</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-700">Initial investment of ₹50 L to ₹2 Cr yields ₹30.28 Cr in cumulative profit by end of Year 3</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-700">ROI exceeds 3000% over a 3-year period in maximum projection scenario</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'demographics' && (
              <div>
                <p className="text-gray-700 mb-6">Z² Super Water™ India strategy targets specific demographic segments with the highest potential for adoption and market growth.</p>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-6 transition-all duration-300 hover:shadow-md">
                  {marketData.demographics.segments.map((segment) => (
                    <ProgressBar 
                      key={segment.name}
                      label={segment.name}
                      percentage={segment.percentage}
                      growth={segment.growth}
                      description={segment.description}
                    />
                  ))}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow border border-blue-100 transition-all duration-300 transform hover:shadow-lg hover:scale-105">
                    <h4 className="font-semibold text-blue-900 mb-3">Elite Population Demographics</h4>
                    <div className="space-y-3">
                      <div className="flex items-center transition-all duration-300 hover:bg-blue-50 p-2 rounded-lg">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xl mr-4 transition-all duration-300 hover:scale-110">
                          👔
                        </div>
                        <div>
                          <h5 className="font-medium text-blue-800">Urban Professionals</h5>
                          <p className="text-sm text-gray-600">High-income professionals in corporate sectors</p>
                        </div>
                      </div>
                      <div className="flex items-center transition-all duration-300 hover:bg-blue-50 p-2 rounded-lg">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xl mr-4 transition-all duration-300 hover:scale-110">
                          💼
                        </div>
                        <div>
                          <h5 className="font-medium text-blue-800">Business Owners</h5>
                          <p className="text-sm text-gray-600">Entrepreneurs and business leaders</p>
                        </div>
                      </div>
                      <div className="flex items-center transition-all duration-300 hover:bg-blue-50 p-2 rounded-lg">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xl mr-4 transition-all duration-300 hover:scale-110">
                          🏥
                        </div>
                        <div>
                          <h5 className="font-medium text-blue-800">Medical Professionals</h5>
                          <p className="text-sm text-gray-600">Doctors and healthcare practitioners</p>
                        </div>
                      </div>
                      <div className="flex items-center transition-all duration-300 hover:bg-blue-50 p-2 rounded-lg">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xl mr-4 transition-all duration-300 hover:scale-110">
                          🏛️
                        </div>
                        <div>
                          <h5 className="font-medium text-blue-800">Government Officials</h5>
                          <p className="text-sm text-gray-600">High-ranking civil servants and politicians</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow border border-blue-100 transition-all duration-300 transform hover:shadow-lg hover:scale-105">
                    <h4 className="font-semibold text-blue-900 mb-3">Target Consumer Profile</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start transition-all duration-300 hover:bg-blue-50 p-2 rounded-lg">
                        <CheckIcon />
                        <span className="text-gray-700">25-55 age demographic</span>
                      </li>
                      <li className="flex items-start transition-all duration-300 hover:bg-blue-50 p-2 rounded-lg">
                        <CheckIcon />
                        <span className="text-gray-700">Upper-middle to high income (Top 10% income bracket)</span>
                      </li>
                      <li className="flex items-start transition-all duration-300 hover:bg-blue-50 p-2 rounded-lg">
                        <CheckIcon />
                        <span className="text-gray-700">Health and wellness conscious</span>
                      </li>
                      <li className="flex items-start transition-all duration-300 hover:bg-blue-50 p-2 rounded-lg">
                        <CheckIcon />
                        <span className="text-gray-700">Early adopters of premium health products</span>
                      </li>
                      <li className="flex items-start transition-all duration-300 hover:bg-blue-50 p-2 rounded-lg">
                        <CheckIcon />
                        <span className="text-gray-700">Urban professionals with active lifestyles</span>
                      </li>
                      <li className="flex items-start transition-all duration-300 hover:bg-blue-50 p-2 rounded-lg">
                        <CheckIcon />
                        <span className="text-gray-700">Brand conscious and willing to pay premium for quality</span>
                      </li>
                      <li className="flex items-start transition-all duration-300 hover:bg-blue-50 p-2 rounded-lg">
                        <CheckIcon />
                        <span className="text-gray-700">Concerned about environmental impact of products</span>
                      </li>
                    </ul>
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

export default SuperWaterIndiaOpportunity;