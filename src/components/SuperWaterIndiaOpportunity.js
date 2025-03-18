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
        { label: "Market Size (2025)", value: "$9.2B", icon: "📊" },
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
          marketSize: "$3.8B",
          targetUsers: "Business travelers, tourists, aviation professionals",
          projectedRevenue: "$28M annually by 2030"
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
          marketSize: "$2.6B",
          targetUsers: "Urban professionals, hospitality industry, entertainment districts",
          projectedRevenue: "$22M annually by 2030"
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
          marketSize: "$4.5B",
          targetUsers: "Students, professionals, technology workers, seniors",
          projectedRevenue: "$32M annually by 2030"
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
          marketSize: "$2.9B",
          targetUsers: "Corporate professionals, healthcare workers, urban residents",
          projectedRevenue: "$18M annually by 2030"
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
    { id: 'cognitiveWaters', label: 'Cognitive Waters', icon: '🧠' },
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

  // Expandable section component
  const ExpandableSection = ({ id, title, children }) => (
    <div className="bg-white rounded-lg shadow overflow-hidden mb-4">
      <div 
        className="p-4 flex justify-between items-center cursor-pointer bg-gradient-to-r from-blue-50 to-white"
        onClick={() => toggleSection(id)}
      >
        <h3 className="font-semibold text-lg text-blue-800">{title}</h3>
        <svg
          className="w-5 h-5 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div className={expandedSection === id ? "p-4" : "hidden"}>
        {children}
      </div>
    </div>
  );

  return (
    <section className="py-16 gradient-bg">
      {/* Background Particles - using existing site design */}
      <div className="particles-bg">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="particle"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      <div className="container-padding relative z-10">
        <h2 className="heading text-center">
          Super Water™ India Market Opportunity
        </h2>
        <p className="paragraph text-center max-w-3xl mx-auto mb-8">
          Expanding our enhanced hydration solutions to one of the world's largest and fastest-growing markets.
        </p>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabOptions.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 rounded-full flex items-center ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-blue-800 hover:bg-blue-50'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content based on selected tab */}
        <div className="bg-white rounded-xl shadow overflow-hidden mb-8">
          {/* Tab Header */}
          <div className="p-6 bg-gradient-to-r from-blue-50 to-white border-b border-blue-100">
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

            {activeTab === 'cognitiveWaters' && (
              <div>
                <p className="paragraph mb-6">Our Mood & Cognitive Function Waters provide enhanced hydration with additional benefits for mental clarity, focus, and emotional wellbeing.</p>
                
                {marketData.cognitiveWaters.products.map((product) => (
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