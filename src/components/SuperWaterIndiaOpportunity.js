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
      title: "Super Water™ India Opportunity",
      subtitle: "A rapidly growing market for enhanced hydration solutions",
      description: "With a population of 1.4 billion and growing health consciousness, India represents a significant market opportunity for our Super Water™ formulations.",
      stats: [
        { label: "Market Size India (2025)", value: "3.5B", icon: "📊" },
        { label: "Annual Growth", value: "16.8%", icon: "📈" },
        { label: "Projected Revenue (2030)", value: "$85M+", icon: "💰" },
        { label: "Target Urban Centers", value: "15+", icon: "🏙️" }
      ]
    },
    lifestyleWaters: {
      title: "Lifestyle-Specific Waters",
      products: [
        {
          name: "Traveler's Hydrate™",
          description: "Enhanced hydration solution designed specifically for frequent travelers, combating jet lag and travel-related dehydration.",
          benefits: [
            "Accelerated rehydration during long flights",
            "Reduced jet lag symptoms",
            "Improved focus and alertness during travel",
            "Enhanced immune support for travel-related stress"
          ],
          marketSize: "$805M",
          targetUsers: "Business travelers, tourists, aviation professionals",
          projectedRevenue: "$40M annually by 2030"
        },
        {
          name: "AlcoholDetox™",
          description: "Specialized formulation that supports liver function and accelerates recovery after alcohol consumption.",
          benefits: [
            "Rapid rehydration after alcohol consumption",
            "Supports natural detoxification processes",
            "Replenishes essential nutrients",
            "Reduces morning-after symptoms"
          ],
          marketSize: "$602M",
          targetUsers: "Urban professionals, hospitality industry, entertainment districts",
          projectedRevenue: "$30.5M annually by 2030"
        }
      ]
    },
    AgeDefyingWater: {
      title: "Age-Defying Specific Waters",
      products: [
        {
          name: "Anti-ageing Super Water™",
          description: "A refreshing hydration solution enriched with electrolytes and antioxidants to maintain cellular hydration and protect against oxidative stress, supporting a youthful appearance and energy.",
          benefits: [
            "Enhanced cellular hydration for skin elasticity",
            "Antioxidant protection against free radicals",
            "Improved circulation and nutrient delivery",
            "Support for collagen production and skin health"
          ],
          marketSize: "$800M",
          targetUsers: "Health-conscious adults 40+, wellness-focused professionals, beauty and anti-aging market",
          projectedRevenue: "$40M annually by 2030"
        },
        {
          name: "Age-Reversing Super Water™ ",
          description: "A revitalizing hydration solution infused with advanced nutrients and bioactive compounds to promote cellular repair and rejuvenation, helping to reverse signs of aging and restore youthful vitality.",
          benefits: [
            "Promotes cellular repair for renewed energy and resilience",
            "Bioactive compounds to reduce visible aging signs",
            "Enhanced hydration for improved skin firmness and glow",
            "Supports metabolic rejuvenation and overall vitality"
          ],
          marketSize: "$600M",
          targetUsers: "Adults 40+ in India seeking proactive age-reversal solutions, urban wellness enthusiasts, growing middle-class beauty consumers",
          projectedRevenue: "$30M annually by 2030"
        }
      ]
    },
    cognitiveWaters: {
      title: "Mood & Cognitive Function Waters",
      products: [
        {
          name: "Brain-Boost™",
          description: "Advanced hydration with cognitive enhancement properties, supporting mental clarity, focus and memory.",
          benefits: [
            "Enhanced mental clarity and focus",
            "Improved memory function",
            "Sustained cognitive performance",
            "Support for brain health"
          ],
          marketSize: "$710M",
          targetUsers: "Students, professionals, technology workers, seniors",
          projectedRevenue: "$35M annually by 2030"
        },
        {
          name: "Stress Management™",
          description: "Calming formulation that combines optimal hydration with stress-reduction properties.",
          benefits: [
            "Reduced stress and anxiety",
            "Improved sleep quality",
            "Enhanced mood balance",
            "Support for overall mental wellbeing"
          ],
          marketSize: "$505M",
          targetUsers: "Corporate professionals, healthcare workers, urban residents",
          projectedRevenue: "$18M annually by 2030"
        }
      ]
    },
    ageDefyingPetWaters: {
      title: "Age-Defying Pet Waters",
      products: [
        {
          name: "Anti-ageing Pet Water™",
          description: "A refreshing hydration solution enriched with electrolytes and antioxidants to maintain cellular hydration in pets, supporting vitality and a youthful appearance as they age.",
          benefits: [
            "Enhanced cellular hydration for coat health and energy",
            "Antioxidant protection against free radicals",
            "Improved nutrient absorption and circulation",
            "Supports joint hydration and overall wellness"
          ],
          marketSize: "$200M",
          targetUsers: "Pet owners with aging pets (dogs and cats 7+ years), urban health-conscious pet parents, premium pet care consumers in India",
          projectedRevenue: "$4M annually by 2030"
        },
        {
          name: "Age-Reversing Pet Water™",
          description: "A revitalizing hydration solution infused with advanced nutrients and bioactive compounds to promote cellular repair and rejuvenation in pets, helping to reverse signs of aging and restore youthful vigor.",
          benefits: [
            "Promotes cellular repair for renewed energy and resilience",
            "Bioactive compounds to reduce visible aging signs in pets",
            "Enhanced hydration for improved coat luster and mobility",
            "Supports metabolic renewal and longevity"
          ],
          marketSize: "$250M",
          targetUsers: "Pet owners with aging pets (dogs and cats 7+ years), urban wellness-focused pet parents, longevity enthusiasts, premium pet care consumers in India",
          projectedRevenue: "$5M annually by 2030"
        }
      ]
    },
    demographics: {
      title: "Target Demographics",
      segments: [
        {
          name: "Urban Centers",
          description: "Focusing on India's 15 largest metropolitan areas with combined population exceeding 150 million",
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
    },
    launchStrategy: {
      title: "Three-Phase Launch Strategy",
      phases: [
        {
          name: "Phase 1: Metropolitan Introduction (2025-2026)",
          steps: [
            "Launch in Delhi, Mumbai, Bangalore, Hyderabad and Chennai",
            "Partner with premium retailers, fitness centers and corporate offices",
            "Digital marketing campaign targeting urban professionals",
            "Establish local manufacturing and distribution partnerships"
          ]
        },
        {
          name: "Phase 2: Expansion (2027-2028)",
          steps: [
            "Expand to next 10 largest urban centers",
            "Introduce e-commerce and subscription model",
            "Develop regional marketing campaigns",
            "Launch additional product variants for regional preferences"
          ]
        },
        {
          name: "Phase 3: Nationwide Presence (2029-2030)",
          steps: [
            "Establish presence in Tier 2 and Tier 3 cities",
            "Scale manufacturing for nationwide distribution",
            "Introduce mass market variations at accessible price points",
            "Develop comprehensive retail network across India"
          ]
        }
      ]
    }
  };

  // Tab options
  const tabOptions = [
    { id: 'overview', label: 'Overview', icon: '📋' },
    { id: 'lifestyleWaters', label: 'Lifestyle Waters', icon: '🧳' },
    { id: 'AgeDefyingWater', label: 'Age Defying Waters', icon: '✨' },
    { id: 'cognitiveWaters', label: 'Cognitive Waters', icon: '🧠' },
    { id: 'ageDefyingPetWaters', label: 'Age Defying Pet Waters', icon: '🐾' },
    { id: 'demographics', label: 'Demographics', icon: '👥' },
    { id: 'launchStrategy', label: 'Launch Strategy', icon: '🚀' }
  ];

  // Stat card component
  const StatCard = ({ icon, label, value }) => (
    <div className="bg-white rounded-lg shadow p-4 flex items-center">
      <div className="text-2xl mr-3">{icon}</div>
      <div>
        <div className="text-lg font-bold text-blue-800">{value}</div>
        <div className="text-gray-600 text-sm">{label}</div>
      </div>
    </div>
  );

  // Progress bar component
  const ProgressBar = ({ label, percentage, growth, description }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="font-medium text-blue-900">{label}</span>
        <span className="text-sm font-medium text-blue-700">{percentage}% | +{growth}% growth</span>
      </div>
      <div className="w-full bg-blue-100 rounded-full h-2.5">
        <div 
          className="bg-blue-600 h-2.5 rounded-full" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
  );

  // Product card component
  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-blue-100 mb-6">
      <div className="p-4 bg-gradient-to-r from-blue-50 to-white border-b border-blue-100">
        <h3 className="text-xl font-semibold text-blue-800">{product.name}</h3>
      </div>
      <div className="p-4">
        <p className="text-gray-700 mb-4">{product.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="text-sm font-semibold text-blue-900">Market Size</div>
            <div className="text-lg font-bold text-blue-800">{product.marketSize}</div>
          </div>
          <div className="bg-green-50 p-3 rounded-lg">
            <div className="text-sm font-semibold text-green-900">Projected Revenue</div>
            <div className="text-lg font-bold text-green-800">{product.projectedRevenue}</div>
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="font-semibold text-blue-900 mb-2">Key Benefits:</h4>
          <ul className="space-y-1">
            {product.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-blue-900 mb-1">Target Users:</h4>
          <p className="text-sm text-gray-700">{product.targetUsers}</p>
        </div>
      </div>
    </div>
  );

  // Expandable section component with improved interaction
  const ExpandableSection = ({ id, title, children }) => (
    <div className="bg-white rounded-lg shadow overflow-hidden mb-4 relative z-10">
      <div
        className="p-4 flex justify-between items-center cursor-pointer bg-gradient-to-r from-blue-50 to-white relative z-20"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleSection(id);
        }}
        style={{ pointerEvents: 'auto' }}
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

  return (
    <section className="py-16 gradient-bg relative">
      {/* Background Particles with improved z-index */}
      <div className="particles-bg" style={{ zIndex: -1, pointerEvents: 'none' }}>
        {[...Array(10)].map((_, i) => (
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
      
      <div className="container-padding relative z-10" style={{ pointerEvents: 'auto' }}>
        <h2 className="heading text-center">
          Super Water™ India Market Opportunity
        </h2>
        <p className="paragraph text-center max-w-3xl mx-auto mb-8">
          Expanding our enhanced hydration solutions to one of the world's largest and fastest-growing markets.
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
              className={`px-4 py-3 rounded-full flex items-center relative z-20 ${
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

        {/* Content based on selected tab with improved interaction */}
        <div className="bg-white rounded-xl shadow overflow-hidden mb-8 relative z-10" style={{ pointerEvents: 'auto' }}>
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
                <p className="paragraph mb-6">{marketData.overview.description}</p>
                
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
                
                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Market Opportunity Breakdown</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Lifestyle-Specific Waters</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-xl mr-2">🧳</span>
                          <div>
                            <span className="font-medium">Traveler's Hydrate™</span>
                            <p className="text-sm text-gray-600">Enhanced hydration for travelers</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-xl mr-2">🍷</span>
                          <div>
                            <span className="font-medium">AlcoholDetox™</span>
                            <p className="text-sm text-gray-600">Recovery after alcohol consumption</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Age Defying Function Waters</h4>
                        <ul className="space-y-1">
                          <li className="flex items-start">
                            <span className="text-xl mr-2">✨</span>
                            <div>
                              <span className="font-medium">Anti-ageing Super Water™</span>
                              <p className="text-sm text-gray-600">Cellular hydration for youthful appearance</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-xl mr-2"> 🔄</span>
                            <div>
                              <span className="font-medium">Age-Reversing Super Water™</span>
                              <p className="text-sm text-gray-600">Cellular repair and rejuvenation technology</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Mood & Cognitive Function Waters</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-xl mr-2">🧠</span>
                          <div>
                            <span className="font-medium">Brain-Boost™</span>
                            <p className="text-sm text-gray-600">Enhanced mental clarity and focus</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-xl mr-2">🧘</span>
                          <div>
                            <span className="font-medium">Stress Management™</span>
                            <p className="text-sm text-gray-600">Calming formulation for stress reduction</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Age Defying Pet Waters</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-xl mr-2">🐾</span>
                          <div>
                            <span className="font-medium">Anti-ageing Pet Water™</span>
                            <p className="text-sm text-gray-600">Cellular hydration for pet vitality and coat health</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-xl mr-2">🔧</span>
                          <div>
                            <span className="font-medium">Age-Reversing Pet Water™</span>
                            <p className="text-sm text-gray-600">Cellular repair and rejuvenation for pets</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <ExpandableSection id="market" title="India Market Analysis">
                  <p className="mb-4">India's enhanced water market presents a significant opportunity with its large population, expanding middle class, and growing health consciousness. The market is expected to grow at a compound annual growth rate of 16.8% through 2030.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-blue-50 p-3 rounded-lg text-center">
                      <div className="text-sm font-semibold text-blue-900">Population</div>
                      <div className="text-xl font-bold text-blue-800">1.4 Billion</div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg text-center">
                      <div className="text-sm font-semibold text-blue-900">Middle Class</div>
                      <div className="text-xl font-bold text-blue-800">400+ Million</div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg text-center">
                      <div className="text-sm font-semibold text-blue-900">Urban Centers</div>
                      <div className="text-xl font-bold text-blue-800">15+ Major Cities</div>
                    </div>
                  </div>
                  
                  <p>Our Super Water™ product line is uniquely positioned to capitalize on this market with formulations that align with growing consumer interest in functional beverages with specific health benefits.</p>
                </ExpandableSection>
                
                <ExpandableSection id="competitors" title="Competitive Landscape in India">
                  <p className="mb-4">The enhanced water market in India is growing rapidly but still has relatively few established players with advanced functional formulations. Our Super Water™ products offer significant advantages over existing competitors:</p>
                  
                  <div className="overflow-x-auto mb-4">
                    <table className="min-w-full divide-y divide-blue-200">
                      <thead className="bg-blue-50">
                        <tr>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Competitor</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Product Type</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Market Share</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Key Differentiator</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Limitation</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-blue-100">
                        <tr>
                          <td className="px-4 py-2 text-sm font-medium text-blue-900">AquaVitality</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Vitamin-enhanced water</td>
                          <td className="px-4 py-2 text-sm text-gray-700">18%</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Wide distribution network</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Limited functional benefits</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm font-medium text-blue-900">Evocus</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Black alkaline water</td>
                          <td className="px-4 py-2 text-sm text-gray-700">14%</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Unique black color, alkaline pH</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Limited functional targeting</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm font-medium text-blue-900">Black Water</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Mineral-rich black water</td>
                          <td className="px-4 py-2 text-sm text-gray-700">11%</td>
                          <td className="px-4 py-2 text-sm text-gray-700">High mineral content</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Taste concerns, limited availability</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm font-medium text-blue-900">Liquid Death</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Premium canned water</td>
                          <td className="px-4 py-2 text-sm text-gray-700">9%</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Strong branding, eco-friendly</td>
                          <td className="px-4 py-2 text-sm text-gray-700">No functional benefits</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm font-medium text-blue-900">HydroPlus</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Electrolyte water</td>
                          <td className="px-4 py-2 text-sm text-gray-700">12%</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Sports performance focus</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Single-purpose formulation</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm font-medium text-blue-900">MindWell</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Nootropic water</td>
                          <td className="px-4 py-2 text-sm text-gray-700">8%</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Cognitive enhancement</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Premium pricing limits market</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm font-medium text-blue-900">AyurFlow</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Ayurvedic water</td>
                          <td className="px-4 py-2 text-sm text-gray-700">10%</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Traditional ingredients</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Inconsistent efficacy</td>
                        </tr>
                        <tr className="bg-blue-50">
                          <td className="px-4 py-2 text-sm font-bold text-blue-900">Super Water™</td>
                          <td className="px-4 py-2 text-sm font-semibold text-blue-700">Advanced functional water</td>
                          <td className="px-4 py-2 text-sm font-semibold text-blue-700">2% (projected)</td>
                          <td className="px-4 py-2 text-sm font-semibold text-green-700">Targeted formulations</td>
                          <td className="px-4 py-2 text-sm font-semibold text-blue-700">New market entrant</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Our Competitive Advantages</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">Scientifically formulated for specific use cases (vs. general wellness claims)</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">Superior efficacy with measurable benefits (unlike Evocus and Black Water)</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">Premium positioning with strong brand identity (similar to Liquid Death but with functional benefits)</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">Proprietary formulations with patent protection (unlike any competitor)</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">Targeted solutions for specific lifestyle needs (more specialized than HydroPlus)</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">Clinically validated formulations (unlike AyurFlow's traditional approach)</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Market Entry Strategy</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">Partner with premium retailers and fitness centers</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">Targeted digital marketing to urban professionals</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">Influencer partnerships with health & wellness leaders</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">Corporate wellness program integration</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ExpandableSection>
              </div>
            )}

            {activeTab === 'lifestyleWaters' && (
              <div>
                <p className="paragraph mb-6">Our Lifestyle-Specific Waters address particular needs related to common lifestyle challenges, offering specialized hydration solutions for specific use cases.</p>
                
                {marketData.lifestyleWaters.products.map((product) => (
                  <ProductCard key={product.name} product={product} />
                ))}
              </div>
            )}
            {activeTab === 'AgeDefyingWater' && (
              <div>
                <p className="paragraph mb-6">Our Age-Defying Specific Waters target the unique needs of aging gracefully, delivering specialized hydration solutions designed to support cellular vitality and a youthful appearance.</p>
                {marketData.AgeDefyingWater.products.map((product) => (
                  <ProductCard key={product.name} product={product} />
                ))}
              </div>
            )}
            {activeTab === 'cognitiveWaters' && (
              <div>
                <p className="paragraph mb-6">Our Mood & Cognitive Function Waters provide enhanced hydration with additional benefits for mental clarity, focus, and emotional wellbeing.</p>
                
                {marketData.cognitiveWaters.products.map((product) => (
                  <ProductCard key={product.name} product={product} />
                ))}
              </div>
            )}
            {activeTab === 'ageDefyingPetWaters' && (
              <div>
                <p className="paragraph mb-6">Our Age-Defying Pet Waters address the unique hydration needs of aging pets, providing specialized solutions to support cellular vitality and youthful vigor.</p>
                {marketData.ageDefyingPetWaters.products.map((product) => (
                  <ProductCard key={product.name} product={product} />
                ))}
              </div>
            )}
            {activeTab === 'demographics' && (
              <div>
                <p className="paragraph mb-6">Super Water™ India strategy targets specific demographic segments with the highest potential for adoption and market growth.</p>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
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
                  <div className="bg-white p-4 rounded-lg border border-blue-100">
                    <h4 className="font-semibold text-blue-900 mb-2">Key Urban Centers</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Surat"].map((city) => (
                        <div key={city} className="bg-blue-50 p-2 rounded text-center text-sm">
                          {city}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-blue-100">
                    <h4 className="font-semibold text-blue-900 mb-2">Target Consumer Profile</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">25-45 age demographic</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">Middle to upper income</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">Health and wellness conscious</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">Early adopters of health innovations</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">Urban professionals with active lifestyles</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'launchStrategy' && (
              <div>
                <p className="paragraph mb-6">Our three-phase strategy for entering and expanding in the Indian market is designed to build brand presence, establish distribution networks, and scale operations efficiently.</p>
                
                {marketData.launchStrategy.phases.map((phase, idx) => (
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
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Revenue Projection Timeline</h4>
                  <div className="relative h-16">
                    <div className="absolute inset-0 flex items-center">
                      <div className="h-1 w-full bg-blue-200"></div>
                    </div>
                    <div className="relative flex justify-between">
                      <div className="text-center">
                        <div className="w-4 h-4 rounded-full bg-blue-600 mb-1 mx-auto"></div>
                        <div className="text-sm font-medium">2025</div>
                        <div className="text-xs">$8M</div>
                      </div>
                      <div className="text-center">
                        <div className="w-4 h-4 rounded-full bg-blue-600 mb-1 mx-auto"></div>
                        <div className="text-sm font-medium">2027</div>
                        <div className="text-xs">$24M</div>
                      </div>
                      <div className="text-center">
                        <div className="w-4 h-4 rounded-full bg-blue-600 mb-1 mx-auto"></div>
                        <div className="text-sm font-medium">2030</div>
                        <div className="text-xs">$85M+</div>
                      </div>
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

export default SuperWaterIndiaOpportunity;