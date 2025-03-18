import React, { useState, useEffect } from 'react';

const SuperFoodIndiaOpportunity = () => {
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
      title: "Super Food™ India Opportunity",
      subtitle: "A rapidly growing market for functional food solutions",
      description: "With a population of 1.4 billion and increasing health awareness, India represents a significant market opportunity for our Super Food™ formulations.",
      stats: [
        { label: "Market Size (2025)", value: "$12.5B", icon: "📊" },
        { label: "Annual Growth", value: "18.3%", icon: "📈" },
        { label: "Projected Revenue (2030)", value: "$95M+", icon: "💰" },
        { label: "Target Urban Centers", value: "15+", icon: "🏙️" }
      ]
    },
    disasterManagementFood: {
      title: "Disaster Management Food",
      products: [
        {
          name: "Protein Chocolate Surge™",
          description: "A high-energy protein chocolate designed to keep a person energized for 2-3 days during emergencies.",
          benefits: [
            "Sustained energy release for 2-3 days",
            "Complete nutritional profile",
            "Compact and portable format",
            "Extended shelf life for emergency storage"
          ],
          marketSize: "$3.8B",
          targetUsers: "Emergency response teams, disaster relief organizations, military, adventure enthusiasts",
          projectedRevenue: "$42M annually by 2030"
        }
      ]
    },
    lifestyleFoods: {
      title: "Lifestyle-Specific Foods",
      products: [
        {
          name: "Traveler's Fuel™",
          description: "Advanced nutritional bars designed specifically for frequent travelers, combating jet lag and travel-related fatigue.",
          benefits: [
            "Sustained energy during long journeys",
            "Reduced jet lag symptoms",
            "Improved focus and alertness during travel",
            "Enhanced immune support for travel-related stress"
          ],
          marketSize: "$4.5B",
          targetUsers: "Business travelers, tourists, aviation professionals, digital nomads",
          projectedRevenue: "$38M annually by 2030"
        },
        {
          name: "StressBuster Bars™",
          description: "Specialized nutritional bars that combine stress-reducing adaptogens with sustained energy release for high-pressure situations.",
          benefits: [
            "Reduced stress and anxiety",
            "Improved mental clarity under pressure",
            "Sustained energy without crashes",
            "Support for overall mental wellbeing"
          ],
          marketSize: "$5.2B",
          targetUsers: "Corporate professionals, healthcare workers, students during exams, high-stress occupation workers",
          projectedRevenue: "$45M annually by 2030"
        }
      ]
    },
    demographics: {
      title: "Target Demographics",
      segments: [
        {
          name: "Urban Centers",
          description: "Focusing on India's 15 largest metropolitan areas with combined population exceeding 150 million",
          percentage: 42,
          growth: 19.2
        },
        {
          name: "Middle Class Consumers",
          description: "India's rapidly expanding middle class with growing disposable income and health awareness",
          percentage: 38,
          growth: 22.5
        },
        {
          name: "Health-Conscious Segment",
          description: "Growing population of fitness enthusiasts and health-focused consumers",
          percentage: 12,
          growth: 26.3
        },
        {
          name: "Corporate Partnerships",
          description: "Strategic B2B opportunities with corporates, wellness centers and healthcare facilities",
          percentage: 8,
          growth: 16.8
        }
      ]
    },
    majorConsumers: {
      title: "Major Consumer Profiles",
      consumers: [
        {
          name: "Health-Conscious Professionals",
          description: "Urban professionals aged 25-45 with high disposable income and active interest in preventive health",
          percentage: 35,
          characteristics: [
            "Regular fitness regimen",
            "High digital engagement",
            "Willing to pay premium for quality",
            "Research-driven purchasing decisions"
          ],
          growthPotential: "Very High"
        },
        {
          name: "Wellness Enthusiasts",
          description: "Dedicated health and wellness practitioners who actively seek advanced nutritional solutions",
          percentage: 22,
          characteristics: [
            "Early adopters of health innovations",
            "Active in wellness communities",
            "Holistic health approach",
            "Influencers within social circles"
          ],
          growthPotential: "High"
        },
        {
          name: "Preventive Health Seekers",
          description: "Individuals focused on disease prevention and longevity through nutrition",
          percentage: 18,
          characteristics: [
            "Family health orientation",
            "Concern about chronic conditions",
            "Regular health monitoring",
            "Consistent supplement usage"
          ],
          growthPotential: "Medium"
        },
        {
          name: "Performance Optimizers",
          description: "Athletes and fitness enthusiasts seeking performance enhancement through nutrition",
          percentage: 15,
          characteristics: [
            "Competitive mindset",
            "Results-driven approach",
            "High brand loyalty when effective",
            "Community-based purchasing influence"
          ],
          growthPotential: "High"
        },
        {
          name: "Aging Population",
          description: "Seniors and pre-seniors seeking to maintain health and vitality through advanced nutrition",
          percentage: 10,
          characteristics: [
            "Health maintenance focus",
            "Increasing digital adoption",
            "Higher disposable income",
            "Brand loyal consumers"
          ],
          growthPotential: "Medium-High"
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
            "Partner with premium health food retailers, fitness centers and wellness clinics",
            "Digital marketing campaign targeting health-conscious urban professionals",
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
    { id: 'disasterManagementFood', label: 'Disaster Management', icon: '🆘' },
    { id: 'lifestyleFoods', label: 'Lifestyle Foods', icon: '🧳' },
    { id: 'demographics', label: 'Demographics', icon: '👥' },
    { id: 'majorConsumers', label: 'Major Consumers', icon: '🛒' },
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

  // Consumer profile card component
  const ConsumerProfileCard = ({ consumer }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-blue-100 mb-6">
      <div className="p-4 bg-gradient-to-r from-blue-50 to-white border-b border-blue-100">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-blue-800">{consumer.name}</h3>
          <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
            {consumer.percentage}% of market
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-700 mb-4">{consumer.description}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold text-blue-900 mb-2">Key Characteristics:</h4>
          <ul className="space-y-1">
            {consumer.characteristics.map((characteristic, idx) => (
              <li key={idx} className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">{characteristic}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-green-50 p-3 rounded-lg inline-block">
          <div className="text-sm font-semibold text-green-900">Growth Potential</div>
          <div className="text-lg font-bold text-green-800">{consumer.growthPotential}</div>
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
          Super Food™ India Market Opportunity
        </h2>
        <p className="paragraph text-center max-w-3xl mx-auto mb-8">
          Expanding our functional food solutions to one of the world's largest and fastest-growing markets.
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
                      <h4 className="font-semibold text-blue-900 mb-2">Disaster Management Food</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-xl mr-2">🆘</span>
                          <div>
                            <span className="font-medium">Protein Chocolate Surge™</span>
                            <p className="text-sm text-gray-600">2-3 days of energy in emergency situations</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Lifestyle-Specific Foods</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-xl mr-2">🧳</span>
                          <div>
                            <span className="font-medium">Traveler's Fuel™</span>
                            <p className="text-sm text-gray-600">Combat jet lag and travel fatigue</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-xl mr-2">😌</span>
                          <div>
                            <span className="font-medium">StressBuster Bars™</span>
                            <p className="text-sm text-gray-600">Reduce stress in high-pressure situations</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <ExpandableSection id="market" title="India Market Analysis">
                  <p className="mb-4">India's functional food market presents a significant opportunity with its large population, expanding middle class, and growing health consciousness. The market is expected to grow at a compound annual growth rate of 18.3% through 2030.</p>
                  
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
                  
                  <p>Our Super Food™ product line is uniquely positioned to capitalize on this market with formulations that align with growing consumer interest in functional foods with specific health benefits.</p>
                </ExpandableSection>
                
                <ExpandableSection id="competitors" title="Competitive Landscape in India">
                  <p className="mb-4">The functional food market in India is growing rapidly with several established players. Our Super Food™ products offer significant advantages over existing competitors:</p>
                  
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
                          <td className="px-4 py-2 text-sm font-medium text-blue-900">Patanjali</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Ayurvedic supplements</td>
                          <td className="px-4 py-2 text-sm text-gray-700">22%</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Traditional formulations</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Limited scientific validation</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm font-medium text-blue-900">Himalaya</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Herbal supplements</td>
                          <td className="px-4 py-2 text-sm text-gray-700">18%</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Established brand trust</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Limited innovation</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm font-medium text-blue-900">Amway Nutrilite</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Vitamin supplements</td>
                          <td className="px-4 py-2 text-sm text-gray-700">15%</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Global research backing</td>
                          <td className="px-4 py-2 text-sm text-gray-700">High price point</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm font-medium text-blue-900">Herbalife</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Nutritional supplements</td>
                          <td className="px-4 py-2 text-sm text-gray-700">12%</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Strong distribution network</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Limited targeting</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm font-medium text-blue-900">Dabur</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Traditional supplements</td>
                          <td className="px-4 py-2 text-sm text-gray-700">10%</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Mass market presence</td>
                          <td className="px-4 py-2 text-sm text-gray-700">Basic formulations</td>
                        </tr>
                        <tr className="bg-blue-50">
                          <td className="px-4 py-2 text-sm font-bold text-blue-900">Super Food™</td>
                          <td className="px-4 py-2 text-sm font-semibold text-blue-700">Advanced functional foods</td>
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
                          <span className="text-sm">Scientifically formulated for specific health needs (vs. general wellness claims)</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">Clinically validated efficacy (unlike Patanjali's traditional approach)</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">Premium positioning with accessible pricing (more accessible than Amway)</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">Proprietary formulations with patent protection (unlike any competitor)</span>
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
                          <span className="text-sm">Partner with premium retailers and wellness centers</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">Targeted digital marketing to health-conscious professionals</span>
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

            {activeTab === 'disasterManagementFood' && (
              <div>
                <p className="paragraph mb-6">Our Disaster Management Food products are designed to provide critical nutrition during emergency situations, with extended shelf life and complete nutritional profiles.</p>
                
                {marketData.disasterManagementFood.products.map((product) => (
                  <ProductCard key={product.name} product={product} />
                ))}
              </div>
            )}

            {activeTab === 'lifestyleFoods' && (
              <div>
                <p className="paragraph mb-6">Our Lifestyle-Specific Foods are tailored to address the unique nutritional needs of specific activities and situations, from travel to high-stress environments.</p>
                
                {marketData.lifestyleFoods.products.map((product) => (
                  <ProductCard key={product.name} product={product} />
                ))}
              </div>
            )}

            {activeTab === 'demographics' && (
              <div>
                <p className="paragraph mb-6">Super Food™ India strategy targets specific demographic segments with the highest potential for adoption and market growth.</p>
                
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

            {activeTab === 'majorConsumers' && (
              <div>
                <p className="paragraph mb-6">Understanding our major consumer profiles is critical for effective product development, marketing, and distribution strategies in the Indian market.</p>
                
                {marketData.majorConsumers.consumers.map((consumer) => (
                  <ConsumerProfileCard key={consumer.name} consumer={consumer} />
                ))}
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
                        <div className="text-xs">$10M</div>
                      </div>
                      <div className="text-center">
                        <div className="w-4 h-4 rounded-full bg-blue-600 mb-1 mx-auto"></div>
                        <div className="text-sm font-medium">2027</div>
                        <div className="text-xs">$35M</div>
                      </div>
                      <div className="text-center">
                        <div className="w-4 h-4 rounded-full bg-blue-600 mb-1 mx-auto"></div>
                        <div className="text-sm font-medium">2030</div>
                        <div className="text-xs">$95M+</div>
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

export default SuperFoodIndiaOpportunity;
