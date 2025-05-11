import React, { useState, useEffect } from 'react';

const PreservativesBusinessModel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSection, setExpandedSection] = useState('businessModel');
  
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
  // Business model data
  const businessData = {
    overview: {
      title: "Preservatives Business Model",
      subtitle: "Revolutionary shelf-life extension solutions for the global produce market",
      description: "Our innovative 5x shelf-life extension technology addresses the $42.7 billion global market for fresh produce preservation, dramatically reducing waste while transforming freshness, sustainability, and profitability throughout the supply chain.",
      stats: [
        { label: "Target Launch", value: "Q3 2025", icon: "🚀" },
        { label: "Initial Funding", value: "$5-8M", icon: "💰" },
        { label: "Pre-Money Valuation", value: "$25-30M", icon: "📈" },
        { label: "Target Markets (Y1)", value: "US, AU, CA", icon: "🌎" }
      ]
    },
    businessModel: {
      title: "Business Model Overview",
      description: "Our business model leverages proprietary formulations with flexible implementation options across multiple product categories.",
      components: [
        {
          title: "Product Offering",
          description: "Portfolio of preservation solutions across multiple categories",
          items: [
            "Berry preservation formulations (liquids, powders, sachets)",
            "Avocado preservation solutions with controlled ripening",
            "Flower preservation formulations for extended vase life",
            "Vegetable preservation solutions",
            "Expanded categories in development pipeline"
          ]
        },
        {
          title: "Supply Chain",
          description: "Efficient production model with strategic manufacturing partnerships",
          items: [
            "Centralized formulation production in key markets",
            "Strategic manufacturing partnerships in North America and Australia",
            "Just-in-time inventory management system",
            "Quality control and regulatory compliance oversight",
            "Multiple distribution channels based on product and market"
          ]
        },
        {
          title: "Distribution Model",
          description: "Multi-channel approach targeting various stakeholders",
          items: [
            "Direct sales to major producers and distributors",
            "Strategic partnerships with agricultural suppliers",
            "B2B subscription models for ongoing preservation needs",
            "Technology licensing for specialized applications",
            "Regional exclusive distribution partnerships"
          ]
        },
        {
          title: "Revenue Streams",
          description: "Diversified revenue model to maximize market penetration",
          items: [
            "Primary: Direct sales to producers and distributors (65%)",
            "Technology licensing to strategic partners (20%)",
            "B2B subscription models for ongoing preservation needs (15%)",
            "Future: Consumer retail products for home use",
            "Additional revenue from consulting and implementation services"
          ]
        }
      ]
    },
    salesChannels: {
      title: "Sales & Distribution Channels",
      channels: [
        {
          name: "Direct B2B Sales",
          description: "Direct sales to producers and distributors",
          percentage: 65,
          growth: 24.5,
          features: [
            "Dedicated sales teams in each key market",
            "Technical onboarding and implementation support",
            "ROI calculation tools for customer demonstrations",
            "Custom formulation adjustments for specific needs"
          ]
        },
        {
          name: "Strategic Licensing Partners",
          description: "Technology licensing to established partners",
          percentage: 20,
          growth: 18.2,
          features: [
            "White-label solutions for major agricultural brands",
            "Regional exclusivity agreements with partners",
            "Co-branded products with established market leaders",
            "Technology transfer and implementation support"
          ]
        },
        {
          name: "B2B Subscription Services",
          description: "Recurring revenue from preservation programs",
          percentage: 15,
          growth: 30.7,
          features: [
            "Monthly delivery programs for consistent usage",
            "Volume-based subscription tiers with scaling pricing",
            "Guaranteed supply contracts with major producers",
            "Integrated inventory management systems"
          ]
        }
      ]
    },
    marketingStrategy: {
      title: "Marketing & Growth Strategy",
      strategies: [
        {
          title: "Demonstrations & Pilots",
          description: "Side-by-side comparative demonstrations with untreated produce",
          details: [
            "Live demonstrations at industry trade shows",
            "Time-lapse video evidence of preservation efficacy",
            "Pilot programs with key potential customers",
            "30-day trial programs with satisfaction guarantee"
          ],
          icon: "🧪"
        },
        {
          title: "Scientific Publications",
          description: "Peer-reviewed studies and technical whitepapers",
          details: [
            "Publication of efficacy data in scientific journals",
            "Technical case studies with industry partners",
            "University research partnerships for validation",
            "Presentation at industry conferences and symposiums"
          ],
          icon: "📚"
        },
        {
          title: "Industry Partnerships",
          description: "Strategic alliances with key industry players",
          details: [
            "Co-marketing with complementary technology providers",
            "Integration with industry association initiatives",
            "Partnerships with sustainable agriculture programs",
            "Collaboration with food waste reduction campaigns"
          ],
          icon: "🤝"
        },
        {
          title: "ROI Calculator Tool",
          description: "Custom ROI analysis for potential customers",
          details: [
            "Interactive calculator showing waste reduction",
            "Market expansion potential analysis",
            "Supply chain efficiency calculations",
            "Environmental impact assessment"
          ],
          icon: "🧮"
        }
      ],
      growthHacks: [
        {
          title: "Early Adopter Program",
          description: "Special incentives for market leaders who adopt early",
          details: [
            "Discounted pricing for first wave of customers",
            "Co-marketing opportunities with early adopters",
            "Priority access to new formulations",
            "Customized implementation support"
          ],
          icon: "🚀"
        },
        {
          title: "Certification Program",
          description: "Create certification for extended shelf-life produce",
          details: [
            "\"5x Freshness Certified\" program for treated produce",
            "Consumer-facing labeling opportunities",
            "Retailer education about certification benefits",
            "Marketing materials for participating producers"
          ],
          icon: "✅"
        },
        {
          title: "Sustainability Partnerships",
          description: "Alliances with environmental organizations",
          details: [
            "Partnerships with food waste reduction initiatives",
            "Carbon footprint reduction certification",
            "Sustainable Development Goals alignment",
            "Environmental impact reporting for customers"
          ],
          icon: "♻️"
        },
        {
          title: "Distributor Incentive Program",
          description: "Commission-based program for sales partners",
          details: [
            "Performance-based incentive structure",
            "Comprehensive training and certification",
            "Marketing support and materials",
            "Territory exclusivity opportunities"
          ],
          icon: "💼"
        }
      ]
    },
    pricingStrategy: {
      title: "Pricing Strategy",
      description: "Premium positioning based on customer ROI through waste reduction",
      strategies: [
        {
          title: "Value-Based Pricing",
          description: "Pricing based on value delivered rather than production costs",
          details: [
            "Pricing structure tied to waste reduction percentage",
            "ROI-based pricing conversations with customers",
            "Premium positioning compared to traditional solutions",
            "Value demonstrations showing 300-500% customer ROI"
          ],
          icon: "💹"
        },
        {
          title: "Tiered Pricing Structure",
          description: "Multiple pricing tiers based on volume and application",
          details: [
            "Volume-based tiered discounts for large customers",
            "Application method pricing differentiation",
            "Subscription discounts for long-term commitments",
            "Custom pricing for enterprise-level implementations"
          ],
          icon: "🔢"
        },
        {
          title: "Geographic Differentiation",
          description: "Market-specific pricing to account for local conditions",
          details: [
            "Regional pricing based on local market conditions",
            "Strategic pricing for developing vs. established markets",
            "Consideration of local competitive landscape",
            "Currency and economic adjustments by region"
          ],
          icon: "🌎"
        }
      ],
      pricingTable: [
        { product: "Berry Preservation Liquid", price: "$80-$120", unit: "per liter" },
        { product: "Avocado Preservation Liquid", price: "$95-$140", unit: "per liter" },
        { product: "Flower Preservation Solution", price: "$70-$90", unit: "per liter" },
        { product: "Produce Wash Solution", price: "$320-$450", unit: "per 5 liters" },
        { product: "Preservation Sachets (Berry)", price: "$250-$320", unit: "per 100 units" },
        { product: "Annual Enterprise License", price: "$50,000+", unit: "per year" }
      ]
    },
    fundingRequest: {
      title: "Funding Request & Allocation",
      description: "Seeking $5-8 million for strategic growth, valuing the company at $25-30 million pre-money",
      allocation: [
        { category: "Manufacturing Scale-Up", amount: 3.2, percentage: 40, description: "Production capacity expansion" },
        { category: "Regulatory Approvals", amount: 2.0, percentage: 25, description: "Global certifications and compliance" },
        { category: "Sales & Marketing", amount: 1.6, percentage: 20, description: "Market expansion and customer acquisition" },
        { category: "R&D Pipeline", amount: 0.8, percentage: 10, description: "New formulation development" },
        { category: "Working Capital", amount: 0.4, percentage: 5, description: "Operational expenses" }
      ],
      keyMetrics: [
        { metric: "Pre-Money Valuation", value: "$25-30 Million" },
        { metric: "Funding Request", value: "$5-8 Million" },
        { metric: "Target Break-Even", value: "Month 14-18" },
        { metric: "Year 3 Revenue Target", value: "$95 Million" }
      ],
      certifications: [
        "FDA Approved",
        "FSANZ Approved",
        "Organic Compatible",
        "GRAS Certification"
      ]
    }
  };
  // Tab options
  const tabOptions = [
    { id: 'overview', label: 'Overview', icon: '📋' },
    { id: 'businessModel', label: 'Business Model', icon: '💼' },
    { id: 'salesChannels', label: 'Sales Channels', icon: '🛒' },
    { id: 'marketingStrategy', label: 'Marketing', icon: '📣' },
    { id: 'pricingStrategy', label: 'Pricing', icon: '💰' },
    { id: 'fundingRequest', label: 'Funding', icon: '💸' }
  ];

  // Stat card component
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

  // Feature card component
  const FeatureCard = ({ title, description, details, icon }) => (
    <div className="bg-white rounded-lg shadow-md border border-blue-100 overflow-hidden transition-all duration-300 transform hover:shadow-lg hover:scale-105 mb-4">
      <div className="p-4 bg-gradient-to-r from-blue-50 to-white border-b border-blue-100 flex items-center">
        <span className="text-2xl mr-3">{icon}</span>
        <h3 className="font-semibold text-blue-800">{title}</h3>
      </div>
      <div className="p-4">
        <p className="text-gray-700 mb-3">{description}</p>
        <ul className="space-y-1">
          {details.map((detail, idx) => (
            <li key={idx} className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  // Funding allocation card
  const FundingCard = ({ category, amount, percentage, description }) => (
    <div className="bg-white p-4 rounded-lg shadow-md border border-blue-100 transition-all duration-300 transform hover:shadow-lg hover:scale-105">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold text-blue-800">{category}</h4>
        <span className="text-lg font-bold text-green-700">${amount}M</span>
      </div>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-green-600 h-2 rounded-full transition-all duration-1000 ease-out" 
          style={{ width: isVisible ? `${percentage}%` : '0%' }}
        ></div>
      </div>
      <div className="text-xs text-right mt-1 text-gray-500">{percentage}%</div>
    </div>
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
          Preservatives Business Model
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-8 text-blue-700">
          Revolutionary shelf-life extension solutions for the global produce market
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
              {businessData[activeTab].title}
            </h3>
            {businessData.overview.subtitle && activeTab === 'overview' && (
              <p className="text-gray-600">{businessData.overview.subtitle}</p>
            )}
          </div>
          {/* Tab Content */}
          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div>
                <p className="text-gray-700 mb-6">{businessData.overview.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {businessData.overview.stats.map((stat) => (
                    <StatCard
                      key={stat.label}
                      icon={stat.icon}
                      label={stat.label}
                      value={stat.value}
                    />
                  ))}
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6 mb-6 transition-all duration-300 transform hover:shadow-md">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Business Model Highlights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Disruptive Technology</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-xl mr-2">⏱️</span>
                          <div>
                            <span className="font-medium">5x Shelf-Life Extension</span>
                            <p className="text-sm text-gray-600">Revolutionary preservation efficacy</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-xl mr-2">🔬</span>
                          <div>
                            <span className="font-medium">Proprietary Formulations</span>
                            <p className="text-sm text-gray-600">Patent-pending technology with market exclusivity</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-xl mr-2">✅</span>
                          <div>
                            <span className="font-medium">Regulatory Approved</span>
                            <p className="text-sm text-gray-600">FDA and FSANZ clearance for key products</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Market Advantage</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-xl mr-2">💰</span>
                          <div>
                            <span className="font-medium">Compelling ROI</span>
                            <p className="text-sm text-gray-600">300-500% customer return on investment</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-xl mr-2">🌍</span>
                          <div>
                            <span className="font-medium">Global Applicability</span>
                            <p className="text-sm text-gray-600">Solutions for major markets worldwide</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-xl mr-2">♻️</span>
                          <div>
                            <span className="font-medium">Sustainability Impact</span>
                            <p className="text-sm text-gray-600">Dramatic food waste reduction</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <ExpandableSection id="businessModel" title="Core Business Model">
                  <p className="mb-4">Our business model focuses on B2B sales of proprietary preservation formulations with multiple application methods for various produce categories, backed by ROI-driven pricing strategy.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-blue-50 p-3 rounded-lg text-center transition-all duration-300 transform hover:shadow hover:bg-blue-100">
                      <div className="text-sm font-semibold text-blue-900">Product Type</div>
                      <div className="text-xl font-bold text-blue-800">Preservation Solutions</div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg text-center transition-all duration-300 transform hover:shadow hover:bg-blue-100">
                      <div className="text-sm font-semibold text-blue-900">Revenue Model</div>
                      <div className="text-xl font-bold text-blue-800">Direct Sales & Licensing</div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg text-center transition-all duration-300 transform hover:shadow hover:bg-blue-100">
                      <div className="text-sm font-semibold text-blue-900">Target Segment</div>
                      <div className="text-xl font-bold text-blue-800">Producers & Distributors</div>
                    </div>
                  </div>
                  
                  <p className="mb-4">Our approach maximizes value for customers through proven shelf-life extension while offering flexible implementation options to suit various operational requirements.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Technology Advantage</h4>
                      <div className="bg-blue-50 p-3 rounded">
                        <ul className="space-y-1">
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">5x longer shelf life vs. competitors' 1.5-2.5x</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">Maintains flavor, texture, and nutrition</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">Patent-pending formulations for market exclusivity</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Implementation Flexibility</h4>
                      <div className="bg-green-50 p-3 rounded">
                        <ul className="space-y-1">
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">Liquid, powder, and sachet formulations</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">Multiple application methods (spray, dip, packaging)</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">Integration with existing processing equipment</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>
                
                <ExpandableSection id="phasedExpansion" title="Phased Expansion Strategy">
                  <p className="mb-4">Our expansion strategy will roll out systematically across key global markets with a focus on high-value produce categories.</p>
                  
                  <div className="relative py-6 mb-4">
                    <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-blue-200"></div>
                    
                    <div className="relative mb-6 flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10 transition-all duration-300 hover:scale-110 hover:shadow-md">1</div>
                      <div className="ml-6">
                        <h4 className="font-medium text-blue-800">Phase 1: Core Markets Entry (2025-2026)</h4>
                        <p className="text-sm text-gray-600">Initial launch in USA, Canada, and Australia</p>
                        <ul className="mt-2 space-y-1">
                          <li className="flex items-start">
                          <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-gray-700">Focus on berry and avocado preservation formulations</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-gray-700">Strategic partnerships with 5-8 major distributors per market</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="relative mb-6 flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10 transition-all duration-300 hover:scale-110 hover:shadow-md">2</div>
                      <div className="ml-6">
                        <h4 className="font-medium text-blue-800">Phase 2: European Expansion (2026-2027)</h4>
                        <p className="text-sm text-gray-600">Expansion to EU, UK, and New Zealand</p>
                        <ul className="mt-2 space-y-1">
                          <li className="flex items-start">
                            <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-gray-700">Introduction of flower and leafy greens formulations</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-gray-700">Expanded regulatory approvals and market presence</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="relative flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10 transition-all duration-300 hover:scale-110 hover:shadow-md">3</div>
                      <div className="ml-6">
                        <h4 className="font-medium text-blue-800">Phase 3: Global Scale (2028-2029)</h4>
                        <p className="text-sm text-gray-600">Expansion to Asia Pacific markets</p>
                        <ul className="mt-2 space-y-1">
                          <li className="flex items-start">
                            <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-gray-700">Launch in Japan, South Korea, and Singapore</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-gray-700">Introduction of customized formulations for tropical fruits</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>
                
                <ExpandableSection id="marketingApproach" title="Marketing & Growth Strategy">
                  <p className="mb-4">Our science-driven marketing approach focuses on clear demonstration of efficacy and ROI for business customers.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-blue-50 p-3 rounded">
                      <h5 className="font-medium text-blue-800 mb-2">Demonstrations & Pilots</h5>
                      <p className="text-sm text-gray-700 mb-2">Side-by-side comparisons of treated vs untreated produce</p>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-gray-600">Conviction Rate</span>
                        <span className="text-xs text-gray-600">High Conversion</span>
                      </div>
                      <div className="w-full bg-blue-100 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: isVisible ? '85%' : '0%' }}></div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-3 rounded">
                      <h5 className="font-medium text-blue-800 mb-2">ROI Calculator Tools</h5>
                      <p className="text-sm text-gray-700 mb-2">Customized analysis for each prospect's specific needs</p>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-gray-600">Decision Support</span>
                        <span className="text-xs text-gray-600">Value Communication</span>
                      </div>
                      <div className="w-full bg-blue-100 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: isVisible ? '80%' : '0%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-3 rounded-lg shadow border border-blue-100 mb-4">
                    <h5 className="font-medium text-blue-800 mb-2">Growth Initiatives</h5>
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <div>
                          <span className="font-medium">Early Adopter Program</span>
                          <p className="text-xs text-gray-600">Special incentives for market leaders</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <div>
                          <span className="font-medium">Certification Program</span>
                          <p className="text-xs text-gray-600">"5x Freshness Certified" for treated produce</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <div>
                          <span className="font-medium">Industry Partnerships</span>
                          <p className="text-xs text-gray-600">Strategic alliances with industry associations</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </ExpandableSection>
              </div>
            )}
            {/* Business Model Tab */}
            {activeTab === 'businessModel' && (
              <div>
                <p className="text-gray-700 mb-6">{businessData.businessModel.description}</p>
                
                {businessData.businessModel.components.map((component, idx) => (
                  <div key={idx} className="bg-white rounded-lg shadow-md border border-blue-100 mb-6 overflow-hidden transition-all duration-300 transform hover:shadow-lg">
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-white border-b border-blue-100">
                      <h3 className="font-semibold text-blue-800">{component.title}</h3>
                      <p className="text-sm text-gray-600">{component.description}</p>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-2">
                        {component.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start">
                            <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
                
                <div className="bg-blue-50 rounded-lg p-6 transition-all duration-300 transform hover:shadow-md">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">Key Business Model Innovations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow text-center transition-all duration-300 transform hover:shadow-md hover:scale-105">
                      <div className="text-3xl mb-2">⏱️</div>
                      <h4 className="font-medium text-blue-800 mb-1">5x Shelf Life</h4>
                      <p className="text-sm text-gray-600">Revolutionary preservation performance</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow text-center transition-all duration-300 transform hover:shadow-md hover:scale-105">
                      <div className="text-3xl mb-2">💰</div>
                      <h4 className="font-medium text-blue-800 mb-1">Value-Based Pricing</h4>
                      <p className="text-sm text-gray-600">Premium positioning based on ROI</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow text-center transition-all duration-300 transform hover:shadow-md hover:scale-105">
                      <div className="text-3xl mb-2">🌎</div>
                      <h4 className="font-medium text-blue-800 mb-1">Global Scalability</h4>
                      <p className="text-sm text-gray-600">Addressing worldwide markets</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Sales Channels Tab */}
            {activeTab === 'salesChannels' && (
              <div>
                <p className="text-gray-700 mb-6">Our multi-channel sales approach strategically targets key stakeholders across the produce supply chain.</p>
                
                {businessData.salesChannels.channels.map((channel) => (
                  <ProgressBar
                    key={channel.name}
                    label={channel.name}
                    percentage={channel.percentage}
                    growth={channel.growth}
                    description={channel.description}
                  />
                ))}
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  {businessData.salesChannels.channels.map((channel, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-lg shadow border border-blue-100 transition-all duration-300 transform hover:shadow-lg hover:scale-105">
                      <h4 className="font-semibold text-blue-900 mb-3">{channel.name}</h4>
                      <p className="text-sm text-gray-600 mb-3">{channel.description}</p>
                      <h5 className="text-sm font-medium text-blue-800 mb-2">Key Features:</h5>
                      <ul className="space-y-1">
                        {channel.features.map((feature, featureIdx) => (
                          <li key={featureIdx} className="flex items-start">
                            <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6 mt-6 transition-all duration-300 transform hover:shadow-md">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">Channel Strategy Insights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-blue-900 mb-2">Market Opportunity</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">$42.7B global produce preservation market</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">$13.2B immediately addressable market</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">31% annual spoilage presents enormous opportunity</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-900 mb-2">Channel Evolution</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Year 1-2: Focus on direct sales and early adoption</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Year 3-4: Expansion of licensing and subscription models</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Year 5+: Introduction of consumer retail products</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Marketing Strategy Tab */}
            {activeTab === 'marketingStrategy' && (
              <div>
                <p className="text-gray-700 mb-6">Our marketing approach focuses on clear demonstration of product efficacy and customer ROI through scientific validation and hands-on demonstrations.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {businessData.marketingStrategy.strategies.map((strategy, idx) => (
                    <FeatureCard
                      key={idx}
                      title={strategy.title}
                      description={strategy.description}
                      details={strategy.details}
                      icon={strategy.icon}
                    />
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Growth Hacking Strategies</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {businessData.marketingStrategy.growthHacks.map((strategy, idx) => (
                    <FeatureCard
                      key={idx}
                      title={strategy.title}
                      description={strategy.description}
                      details={strategy.details}
                      icon={strategy.icon}
                    />
                  ))}
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6 transition-all duration-300 transform hover:shadow-md">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">Target Customer Profile</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                      <div className="text-3xl mb-2">🏭</div>
                      <h4 className="font-medium text-blue-800 mb-1">Producers & Processors</h4>
                      <p className="text-sm text-gray-600">
                        Major berry, avocado, leafy greens, and flower producers seeking to reduce waste, 
                        extend market reach, and increase product quality. Decision makers include operations
                        and quality assurance executives.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                      <div className="text-3xl mb-2">🚚</div>
                      <h4 className="font-medium text-blue-800 mb-1">Distributors & Exporters</h4>
                      <p className="text-sm text-gray-600">
                        Produce distribution companies and exporters looking to improve inventory management,
                        reduce losses, and access new markets. Key stakeholders include logistics directors
                        and business development managers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Pricing Strategy Tab */}
            {activeTab === 'pricingStrategy' && (
              <div>
                <p className="text-gray-700 mb-6">{businessData.pricingStrategy.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {businessData.pricingStrategy.strategies.map((strategy, idx) => (
                    <FeatureCard
                      key={idx}
                      title={strategy.title}
                      description={strategy.description}
                      details={strategy.details}
                      icon={strategy.icon}
                    />
                  ))}
                </div>
                
                <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-white border-b border-blue-100">
                    <h3 className="font-semibold text-blue-800">Product Pricing Examples</h3>
                  </div>
                  <div className="p-4">
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-blue-200">
                        <thead className="bg-blue-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Product</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Price Range</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Unit</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-blue-100">
                          {businessData.pricingStrategy.pricingTable.map((item, idx) => (
                            <tr key={idx} className="transition-colors duration-300 hover:bg-blue-50">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-900">{item.product}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-green-700 font-medium">{item.price}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.unit}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6 transition-all duration-300 transform hover:shadow-md">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">Customer ROI Analysis</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                      <h4 className="font-medium text-blue-800 mb-2">Berry Producers</h4>
                      <div className="text-3xl font-bold text-green-600 mb-1">410%</div>
                      <p className="text-sm text-gray-600">ROI through waste reduction and extended market reach</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                      <h4 className="font-medium text-blue-800 mb-2">Avocado Producers</h4>
                      <div className="text-3xl font-bold text-green-600 mb-1">385%</div>
                      <p className="text-sm text-gray-600">ROI through controlled ripening and extended shelf life</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                      <h4 className="font-medium text-blue-800 mb-2">Retailers</h4>
                      <div className="text-3xl font-bold text-green-600 mb-1">650%</div>
                      <p className="text-sm text-gray-600">ROI through dramatically reduced in-store waste</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 text-center">
                    ROI calculations based on typical customer usage patterns and average industry spoilage rates.
                    Individual results may vary based on specific operating conditions and implementation.
                  </p>
                </div>
              </div>
            )}
            {/* Funding Request Tab */}
            {activeTab === 'fundingRequest' && (
              <div>
                <p className="text-gray-700 mb-6">{businessData.fundingRequest.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {businessData.fundingRequest.keyMetrics.map((metric, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-lg shadow border border-blue-100 transition-all duration-300 transform hover:shadow-lg hover:scale-105">
                      <div className="text-sm text-gray-600">{metric.metric}</div>
                      <div className="text-xl font-bold text-blue-800">{metric.value}</div>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Funding Allocation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
                  {businessData.fundingRequest.allocation.map((item, idx) => (
                    <FundingCard
                      key={idx}
                      category={item.category}
                      amount={item.amount}
                      percentage={item.percentage}
                      description={item.description}
                    />
                  ))}
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6 mb-6 transition-all duration-300 transform hover:shadow-md">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">Investment Rationale</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h4 className="font-medium text-blue-800 mb-2">Growth Potential</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">103% CAGR over 5 years</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">$13.2B addressable market</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Multiple revenue streams</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Expansion to multiple product categories</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h4 className="font-medium text-blue-800 mb-2">Competitive Advantage</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">5x shelf life vs. competitors' 1.5-2.5x</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Patent-pending technology</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Regulatory approvals in key markets</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Strong customer ROI value proposition</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-lg shadow overflow-hidden">
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-white border-b border-blue-100">
                      <h3 className="font-semibold text-blue-800">Key Milestones (Next 12 Months)</h3>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mr-2">1</div>
                          <div>
                            <div className="font-medium text-blue-800">Q3 2025: Market Launch</div>
                            <p className="text-sm text-gray-600">Launch berry preservation in North America</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mr-2">2</div>
                          <div>
                            <div className="font-medium text-blue-800">Q4 2025: Australia Launch</div>
                            <p className="text-sm text-gray-600">Expand to Australian market</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mr-2">3</div>
                          <div>
                            <div className="font-medium text-blue-800">Q1 2026: Avocado Line</div>
                            <p className="text-sm text-gray-600">Launch avocado preservation products</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mr-2">4</div>
                          <div>
                            <div className="font-medium text-blue-800">Q2 2026: European Entry</div>
                            <p className="text-sm text-gray-600">Begin European market expansion</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow overflow-hidden">
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-white border-b border-blue-100">
                      <h3 className="font-semibold text-blue-800">Regulatory Approvals & Certifications</h3>
                    </div>
                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-3">
                        {businessData.fundingRequest.certifications.map((cert, idx) => (
                          <div key={idx} className="bg-blue-50 p-3 rounded flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-blue-800 font-medium">{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6 transition-all duration-300 transform hover:shadow-md">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">Exit Potential</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                      <div className="text-3xl mb-2">🏢</div>
                      <h4 className="font-medium text-blue-800 mb-1">Strategic Acquisition</h4>
                      <p className="text-sm text-gray-600">
                        Target: Year 4-5<br />
                        Valuation: 8-10x revenue<br />
                        Potential acquirers include major agricultural companies, food technology firms
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                      <div className="text-3xl mb-2">📈</div>
                      <h4 className="font-medium text-blue-800 mb-1">Initial Public Offering</h4>
                      <p className="text-sm text-gray-600">
                        Target: Year 5-6<br />
                        Valuation: 10-12x revenue<br />
                        Positioned as a sustainability-focused food technology company
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                      <div className="text-3xl mb-2">🤝</div>
                      <h4 className="font-medium text-blue-800 mb-1">Private Equity Sale</h4>
                      <p className="text-sm text-gray-600">
                        Target: Year 3-4<br />
                        Valuation: 6-8x revenue<br />
                        Attractive to PE firms focused on AgTech and sustainability
                      </p>
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

export default PreservativesBusinessModel;