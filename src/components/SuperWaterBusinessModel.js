import React, { useState, useEffect } from 'react';

const SuperWaterBusinessModel = () => {
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
      title: "Z² Super Water™ Business Model",
      subtitle: "Premium functional water with unique health benefits",
      description: "Z² Super Water offers varieties of premium water with unique health benefits, targeting high-end consumers and health-conscious markets through innovative distribution and marketing strategies.",
      stats: [
        { label: "Target Launch", value: "Q3 2025", icon: "🚀" },
        { label: "Initial Funding", value: "₹50L - ₹2Cr", icon: "💰" },
        { label: "Pre-Money Valuation", value: "₹10Cr", icon: "📈" },
        { label: "Target Cities (Y1)", value: "Bangalore", icon: "🏙️" }
      ]
    },
    businessModel: {
        title: "Business Model Overview",
        description: "Z² Super Water operates on a premium D2C and B2B subscription model with innovative distribution channels.",
        components: [
          {
            title: "Product Offering",
            description: "Varieties of Z² Super Water with unique health benefits",
            items: [
              "Premium functional water variants with specific health benefits",
              "Proprietary formulations licensed from Spanex Sciences Australia",
              "1L premium bottles as standard unit size",
              "Ultra-filtered water enhanced with proprietary mineral blends"
            ]
          },
          {
            title: "Supply Chain",
            description: "Efficient just-in-time production model with third-party manufacturers",
            items: [
              "Local sourcing of raw materials for optimal freshness",
              "Partnership with third-party manufacturers to produce super water",
              "Strict quality control standards and certifications (FSSAI, Halal, Vegan)",
              "7% royalty fee to Spanex Sciences Australia for formula licensing"
            ]
          },
          {
            title: "Distribution Model",
            description: "Innovative last-mile delivery leveraging existing networks",
            items: [
              "Partnership with existing micro water can suppliers/delivery agents",
              "Just-in-time production based on customer orders",
              "Manufacturers supply to micro water distributors for final delivery",
              "Zero delivery fee for eco-friendly EV deliveries"
            ]
          },
          {
            title: "Revenue Streams",
            description: "Multiple revenue streams from direct and B2B channels",
            items: [
              "Primary: Direct-to-consumer subscriptions via website/app",
              "B2B subscriptions for offices and corporate clients",
              "Luxury Water Club memberships for premium customers",
              "Limited edition and co-branded specialty bottles"
            ]
          }
        ]
      },
      salesChannels: {
        title: "Sales & Distribution Channels",
        channels: [
          {
            name: "Direct Website & Mobile App",
            description: "Primary sales channel for D2C and B2B orders",
            percentage: 45,
            growth: 22.5,
            features: [
              "Seamless subscription management",
              "Personalized user dashboards",
              "Hydration tracking and rewards",
              "Auto-renewal with dynamic pricing"
            ]
          },
          {
            name: "Micro Water Distributor Network",
            description: "Leveraging existing delivery agents for efficient last-mile delivery",
            percentage: 30,
            growth: 18.2,
            features: [
              "Commission-based model for distributors",
              "Real-time order tracking",
              "Quality assurance protocols",
              "Training program for delivery agents"
            ]
          },
          {
            name: "Experience Zones & Partner Locations",
            description: "Physical presence in high-traffic premium locations",
            percentage: 15,
            growth: 24.7,
            features: [
              "Water tasting lounges in malls, gyms & airports",
              "On-site subscription sign-ups",
              "Product demonstrations",
              "Exclusive launch events"
            ]
          },
          {
            name: "Corporate & Wellness Partnerships",
            description: "B2B channels targeting offices and wellness centers",
            percentage: 10,
            growth: 15.3,
            features: [
              "Bulk subscription plans",
              "Branded dispensers",
              "Corporate wellness programs",
              "Employee health initiatives"
            ]
          }
        ]
      },
      marketingStrategy: {
        title: "Marketing & Growth Strategy",
        strategies: [
          {
            title: "Viral User-Generated Content Challenge",
            description: "₹1 Lakh Viral Video Challenge for college students, housewives, and influencers",
            details: [
              "Content creators promote Z2 Super Water through videos",
              "Videos reaching 1 million views earn ₹1,00,000 prize",
              "Creates organic buzz and authentic promotion",
              "Leverages existing social media platforms"
            ],
            icon: "🎬"
          },
          {
            title: "Influencer & Celebrity Barter Program",
            description: "Free 1-year subscriptions for influencers based on followers and engagement",
            details: [
              "Tiered program based on follower count and engagement",
              "Influencers receive free product in exchange for promotion",
              "Creates aspirational brand positioning",
              "Builds credibility through trusted voices"
            ],
            icon: "🌟"
          },
          {
            title: "Referral & Loyalty Program",
            description: "Cash incentives for customer referrals and loyalty rewards",
            details: [
              "₹100 cashback for every successful referral",
              "Bulk discounts for B2B referrals",
              "Points system for subscription longevity",
              "Gamified rewards for daily hydration goals"
            ],
            icon: "🔄"
          },
          {
            title: "Celebrity Co-Branded Bottles",
            description: "Signature edition bottles with fitness influencers and cricketers",
            details: [
              "Example: \"Virat Kohli's Hydration Formula\"",
              "Limited edition releases drive collectability",
              "Specialized formulas for sports recovery",
              "Exclusive packaging and premium positioning"
            ],
            icon: "🏏"
          }
        ],
        growthHacks: [
          {
            title: "Luxury Water Club Membership",
            description: "Premium subscription model with exclusive benefits",
            details: [
              "Access to exclusive flavors and formulations",
              "Free refills and personalized bottles",
              "Early access to new product launches",
              "VIP events and experiences"
            ],
            icon: "💎"
          },
          {
            title: "Water Tasting Experience Zones",
            description: "Physical locations for product demonstration and immediate sign-up",
            details: [
              "\"Water Tasting Lounges\" in premium locations",
              "Live demonstrations of health benefits",
              "Instant subscription sign-up stations",
              "Sensory marketing experience"
            ],
            icon: "🥤"
          },
          {
            title: "Micro-Influencer Affiliate Program",
            description: "Commission-based program for everyday customers and micro-influencers",
            details: [
              "Personal referral links for all customers",
              "Lifetime commission structure",
              "Tiered rewards based on referral volume",
              "Special promotions for top performers"
            ],
            icon: "👥"
          },
          {
            title: "Subscription Gamification",
            description: "Points-based system to encourage engagement and loyalty",
            details: [
              "Points for achieving daily hydration goals",
              "Rewards for social media shares and referrals",
              "Leaderboards and challenges",
              "Point redemption for discounts and free products"
            ],
            icon: "🎮"
          },
          {
            title: "EV Delivery Partnerships",
            description: "Eco-friendly delivery with electric vehicle partners",
            details: [
              "Zero delivery fee for green transport",
              "Carbon footprint reduction messaging",
              "Co-branding with sustainable delivery partners",
              "Enhances premium eco-conscious positioning"
            ],
            icon: "♻️"
          }
        ]
      },
      pricingStrategy: {
        title: "Pricing Strategy",
        description: "Multi-tiered pricing approach targeting different customer segments",
        strategies: [
          {
            title: "Dynamic Pricing",
            description: "Adaptive pricing based on customer behavior and loyalty",
            details: [
              "Lower renewal prices for consistent daily consumers",
              "First-month free trials for new users",
              "Introductory discounts for first-time subscribers",
              "Loyalty-based pricing tiers"
            ],
            icon: "⚡"
          },
          {
            title: "Bulk & Family Plans",
            description: "Volume-based discounts for families and businesses",
            details: [
              "Family Subscription: ₹1,999/month for 20L",
              "Business Plans: ₹9,999/month for corporate solutions",
              "Volume-based pricing tiers",
              "Annual subscription discounts"
            ],
            icon: "👨‍👩‍👧‍👦"
          },
          {
            title: "Premium Product Tiers",
            description: "Luxury options for high-end consumers",
            details: [
              "Gold-plated & Swarovski crystal bottles at ₹4,999",
              "Limited edition designer collaborations",
              "Personalized formula options at premium pricing",
              "Exclusive membership tiers with premium pricing"
            ],
            icon: "👑"
          }
        ],
        pricingTable: [
          { product: "Standard 1L Bottle (One-time)", price: "₹120", unit: "per bottle" },
          { product: "Monthly Subscription (30 x 1L)", price: "₹2,999", unit: "per month" },
          { product: "Family Plan (20L)", price: "₹1,999", unit: "per month" },
          { product: "Corporate Plan (100L)", price: "₹9,999", unit: "per month" },
          { product: "Luxury Bottle (Limited Edition)", price: "₹4,999", unit: "one-time" },
          { product: "Water Club Membership", price: "₹8,999", unit: "per year" }
        ]
      },
      fundingRequest: {
        title: "Funding Request & Allocation",
        description: "Seeking ₹50 lakhs to ₹2 crore for a equity stake, valuing Z² Super Water at ₹10 crore pre-money",
        allocation: [
          { category: "Bangalore Pilot Launch", amount: 50, percentage: 25, description: "Marketing and subscription acquisition" },
          { category: "R&D & Lab Setup", amount: 50, percentage: 25, description: "Formula testing and quality control" },
          { category: "Tech Infrastructure", amount: 50, percentage: 25, description: "Website, app, and manufacturing collaboration" },
          { category: "Working Capital", amount: 50, percentage: 25, description: "Inventory and operations" }
        ],
        keyMetrics: [
          { metric: "Pre-Money Valuation", value: "₹10 Crore" },
          { metric: "Funding Request", value: "₹50L - ₹2Cr" },
          { metric: "Target Break-Even", value: "Month 12" },
          { metric: "Year 3 Revenue Target", value: "₹30+ Crore" }
        ],
        certifications: [
          "FSSAI Nutraceutical",
          "Halal Certified",
          "Vegan Certified",
          "ISO 9001"
        ]
      },
      regulatoryStrategy: {
        title: "Regulatory Compliance Strategy",
        description: "Ensuring products remain under FSSAI Nutraceutical guidelines while supporting functional capabilities without making therapeutic claims",
        steps: [
          {
            title: "Position as Wellness Beverage",
            description: "Avoid CDSCO scrutiny by framing as food product under FSSAI",
            details: [
              "Market as 'Premium Mineral-Infused Hydration'",
              "Include 'NOT FOR MEDICINAL USE' disclaimer",
              "Emphasize lifestyle benefits over health fixes",
              "Stay within RDA limits for all ingredients"
            ]
          },
          {
            title: "Highlight Functional Capabilities",
            description: "Showcase benefits indirectly without therapeutic claims",
            details: [
              "Promote added minerals/vitamins as natural enhancers",
              "Use relatable scenarios in marketing",
              "Create educational content about nutrient support",
              "Use phrases like 'Supports daily life'"
            ]
          },
          {
            title: "Compliant Product Portfolio",
            description: "Ensure all variants align with FSSAI scope",
            details: [
              "Keep nutrient doses within RDA limits",
              "Use function-based categories with 'Supports' claims",
              "Label external use products clearly",
              "Maintain TDS <600 mg/L for palatability"
            ]
          },
          {
            title: "Soft Marketing Approach",
            description: "Introduce brand subtly to test market response",
            details: [
              "Focus on purity and strength messaging",
              "Position as daily wellness companions",,
              "Offer 'Hydration Starter Packs' with wellness tips",
              "Use slogans like 'Hydration with a Purpose'"
            ]
          },
          // {
          //   title: "Cultural and Lifestyle Appeal",
          //   description: "Tap into Indian consumer preferences",
          //   details: [
          //     "Market Zamzam-inspired variants for Muslim families",
          //     "Position as daily wellness companions",
          //     "Collaborate with wellness influencers",
          //     "Focus on purity and strength messaging"
          //   ]
          // },
          {
            title: "Education and Training",
            description: "Ensure proper understanding of product positioning",
            details: [
              "Train retailers on FSSAI compliance",
              "Include consumer guides with bottles",
              "Create online FAQs explaining product status",
              "Use clear labeling and disclaimers"
            ]
          },
          {
            title: "Monitoring and Adjustment",
            description: "Stay compliant and responsive to feedback",
            details: [
              "Collect consumer reviews via QR codes",
              "Assign compliance team for regulatory updates",
              "Optimize variants based on sales data",
              "Adjust claims if needed to stay FSSAI-compliant"
            ]
          }
        ],
        keyPrinciples: [
          "Maintain low nutrient doses within RDA",
          "Use only wellness claims with 'Supports' language",
          "Avoid any disease-related mentions",
          "Ensure clear labeling with FSSAI logo and disclaimers"
        ]
      }
    };
    // Tab options
  const tabOptions = [
    { id: 'overview', label: 'Overview', icon: '📋' },
    { id: 'businessModel', label: 'Business Model', icon: '💼' },
    { id: 'salesChannels', label: 'Sales Channels', icon: '🛒' },
    { id: 'marketingStrategy', label: 'Marketing', icon: '📣' },
    { id: 'regulatoryStrategy', label: 'Regulatory', icon: '📜' },
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
        <span className="text-lg font-bold text-green-700">₹{amount}L</span>
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
          Z² Super Water™ Business Model
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-8 text-blue-700">
          Premium functional water with unique health benefits
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
          
          {/* Tab Content - THIS IS THE CORRECTED SECTION */}
          <div className="p-6">{/* Overview Tab */}
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
                      <h4 className="font-semibold text-blue-900 mb-2">Premium Product Strategy</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-xl mr-2">💧</span>
                          <div>
                            <span className="font-medium">Super Water</span>
                            <p className="text-sm text-gray-600">Proprietary mineral and nutrient blends</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-xl mr-2">🏆</span>
                          <div>
                            <span className="font-medium">Premium Positioning</span>
                            <p className="text-sm text-gray-600">Targeting elite segment with luxury branding</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-xl mr-2">💫</span>
                          <div>
                            <span className="font-medium">Health & Wellness</span>
                            <p className="text-sm text-gray-600">Focus on specific health benefits and quality</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Innovative Business Approach</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-xl mr-2">🔄</span>
                          <div>
                            <span className="font-medium">Subscription Model</span>
                            <p className="text-sm text-gray-600">Recurring revenue from B2C and B2B clients</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-xl mr-2">🚚</span>
                          <div>
                            <span className="font-medium">Smart Distribution</span>
                            <p className="text-sm text-gray-600">Leveraging existing micro distributors</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-xl mr-2">🌱</span>
                          <div>
                            <span className="font-medium">Sustainability</span>
                            <p className="text-sm text-gray-600">Eco-friendly practices and partnerships</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <ExpandableSection id="businessModel" title="Core Business Model">
                  <p className="mb-4">Z² Super Water operates on a subscription-based model for premium functional water with unique health benefits, leveraging existing micro water can distributors for efficient delivery.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-blue-50 p-3 rounded-lg text-center transition-all duration-300 transform hover:shadow hover:bg-blue-100">
                      <div className="text-sm font-semibold text-blue-900">Product Type</div>
                      <div className="text-xl font-bold text-blue-800">Premium Super Water</div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg text-center transition-all duration-300 transform hover:shadow hover:bg-blue-100">
                      <div className="text-sm font-semibold text-blue-900">Revenue Model</div>
                      <div className="text-xl font-bold text-blue-800">Subscription</div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg text-center transition-all duration-300 transform hover:shadow hover:bg-blue-100">
                      <div className="text-sm font-semibold text-blue-900">Target Segment</div>
                      <div className="text-xl font-bold text-blue-800">Elite & Health-Conscious</div>
                    </div>
                  </div>
                  
                  <p className="mb-4">The business leverages a just-in-time production model with third-party manufacturers and partners with existing distribution networks for efficient last-mile delivery.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Manufacturing Approach</h4>
                      <div className="bg-blue-50 p-3 rounded">
                        <ul className="space-y-1">
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">Third-party manufacturing partners</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">Just-in-time production model</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">Licensed formulas (7% royalty fee)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Distribution Strategy</h4>
                      <div className="bg-green-50 p-3 rounded">
                        <ul className="space-y-1">
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">Existing micro water can suppliers</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">Commission-based partnerships</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">EV delivery partnerships</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>
                  
                <ExpandableSection id="phasedExpansion" title="Phased Expansion Strategy">
                <p className="mb-4">Z² Super Water will launch in Bangalore before expanding to other key metropolitan areas in India, following a strategic growth plan.</p>
                
                <div className="relative py-6 mb-4">
                    <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-blue-200"></div>
                    
                    <div className="relative mb-6 flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10 transition-all duration-300 hover:scale-110 hover:shadow-md">1</div>
                    <div className="ml-6">
                        <h4 className="font-medium text-blue-800">Phase 1: Bangalore Launch (Q3 2025)</h4>
                        <p className="text-sm text-gray-600">Initial market entry focused on elite customers</p>
                        <ul className="mt-2 space-y-1">
                        <li className="flex items-start">
                            <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-gray-700">Establish brand presence and distribution network</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-gray-700">Onboard first 450+ premium customers</span>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="relative mb-6 flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10 transition-all duration-300 hover:scale-110 hover:shadow-md">2</div>
                    <div className="ml-6">
                    <h4 className="font-medium text-blue-800">Phase 2: Mumbai & Delhi NCR (2026)</h4>
                    <p className="text-sm text-gray-600">Expansion to key metropolitan markets</p>
                    <ul className="mt-2 space-y-1">
                        <li className="flex items-start">
                        <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">Establish partnerships with premium gyms & wellness centers</span>
                        </li>
                        <li className="flex items-start">
                        <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">Build upon success of Bangalore launch</span>
                        </li>
                    </ul>
                    </div>
                </div>
                
                <div className="relative flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10 transition-all duration-300 hover:scale-110 hover:shadow-md">3</div>
                    <div className="ml-6">
                    <h4 className="font-medium text-blue-800">Phase 3: Pan-India Expansion (2027+)</h4>
                    <p className="text-sm text-gray-600">National rollout to all major urban centers</p>
                    <ul className="mt-2 space-y-1">
                        <li className="flex items-start">
                        <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">Expand to Hyderabad, Chennai, Pune, Kolkata, etc.</span>
                        </li>
                        <li className="flex items-start">
                        <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">Establish nationwide distribution network</span>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </ExpandableSection>
            <ExpandableSection id="marketingApproach" title="Marketing & Growth Strategy">
                <p className="mb-4">Our multi-faceted marketing approach drives viral growth through user-generated content, influencer partnerships, and innovative loyalty programs.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 p-3 rounded">
                    <h5 className="font-medium text-blue-800 mb-2">Viral Challenges</h5>
                    <p className="text-sm text-gray-700 mb-2">₹1 Lakh reward for videos reaching 1M views</p>
                    <div className="flex justify-between mb-1">
                    <span className="text-xs text-gray-600">Engagement</span>
                    <span className="text-xs text-gray-600">High ROI</span>
                    </div>
                    <div className="w-full bg-blue-100 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: isVisible ? '85%' : '0%' }}></div>
                    </div>
                </div>
                
                <div className="bg-blue-50 p-3 rounded">
                    <h5 className="font-medium text-blue-800 mb-2">Influencer Program</h5>
                    <p className="text-sm text-gray-700 mb-2">Free subscriptions for promotion</p>
                    <div className="flex justify-between mb-1">
                    <span className="text-xs text-gray-600">Reach</span>
                    <span className="text-xs text-gray-600">Credibility</span>
                    </div>
                    <div className="w-full bg-blue-100 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: isVisible ? '75%' : '0%' }}></div>
                    </div>
                </div>
                </div>
                
                <div className="bg-white p-3 rounded-lg shadow border border-blue-100 mb-4">
                <h5 className="font-medium text-blue-800 mb-2">Growth Hacking Initiatives</h5>
                <ul className="space-y-1">
                    <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                        <span className="font-medium">Luxury Water Club Membership</span>
                        <p className="text-xs text-gray-600">Exclusive flavors and benefits for VIP customers</p>
                    </div>
                    </li>
                    <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                        <span className="font-medium">Water Tasting Experience Zones</span>
                        <p className="text-xs text-gray-600">Physical locations for demos and sign-ups</p>
                    </div>
                    </li>
                    <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                        <span className="font-medium">Subscription Gamification</span>
                        <p className="text-xs text-gray-600">Points system for hydration goals and referrals</p>
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
                    <div className="text-3xl mb-2">💧</div>
                    <h4 className="font-medium text-blue-800 mb-1">Premium Product</h4>
                    <p className="text-sm text-gray-600">Proprietary formulations with real health benefits</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center transition-all duration-300 transform hover:shadow-md hover:scale-105">
                    <div className="text-3xl mb-2">🔄</div>
                    <h4 className="font-medium text-blue-800 mb-1">Subscription Revenue</h4>
                    <p className="text-sm text-gray-600">Predictable, recurring cash flow</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center transition-all duration-300 transform hover:shadow-md hover:scale-105">
                    <div className="text-3xl mb-2">🚚</div>
                    <h4 className="font-medium text-blue-800 mb-1">Asset-Light Model</h4>
                    <p className="text-sm text-gray-600">Leveraging existing infrastructure</p>
                </div>
                </div>
            </div>
            </div>
        )}
        {/* Sales Channels Tab */}
        {activeTab === 'salesChannels' && (
            <div>
            <p className="text-gray-700 mb-6">Z² Super Water utilizes multiple sales and distribution channels to reach customers efficiently.</p>
            
            {businessData.salesChannels.channels.map((channel) => (
                <ProgressBar
                key={channel.name}
                label={channel.name}
                percentage={channel.percentage}
                growth={channel.growth}
                description={channel.description}
                />
            ))}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Omnichannel Integration</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                <h4 className="font-medium text-blue-900 mb-2">Market Opportunity</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">₹7,239 Cr functional water market by 2025</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Elite segment worth ₹800-1,200 Cr</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">10.4% annual market growth</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-900 mb-2">Business Model Advantages</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Asset-light operations with third-party manufacturing</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Predictable revenue through subscription model</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Innovative marketing with low CAC</span>
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
                <p className="text-gray-700 mb-6">{businessData.marketingStrategy.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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
                
                <div className="bg-blue-50 rounded-lg p-6 transition-all duration-300 transform hover:shadow-md">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">Growth Hacks</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {businessData.marketingStrategy.growthHacks.map((hack, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-lg shadow text-center transition-all duration-300 transform hover:shadow-md hover:scale-105">
                        <div className="text-3xl mb-2">{hack.icon}</div>
                        <h4 className="font-medium text-blue-800 mb-1">{hack.title}</h4>
                        <p className="text-sm text-gray-600">{hack.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {/* Pricing Strategy Tab */}
            {activeTab === 'pricingStrategy' && (
              <div>
                <p className="text-gray-700 mb-6">{businessData.pricingStrategy.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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
                
                <div className="bg-blue-50 rounded-lg p-6 transition-all duration-300 transform hover:shadow-md">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">Pricing Table</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {businessData.pricingStrategy.pricingTable.map((item, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-lg shadow text-center transition-all duration-300 transform hover:shadow-md hover:scale-105">
                        <h4 className="font-medium text-blue-800 mb-1">{item.product}</h4>
                        <p className="text-lg font-bold text-blue-900">{item.price}</p>
                        <p className="text-sm text-gray-600">{item.unit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {/* Funding Request Tab */}
            {activeTab === 'fundingRequest' && (
              <div>
                <p className="text-gray-700 mb-6">{businessData.fundingRequest.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {businessData.fundingRequest.allocation.map((allocation, idx) => (
                    <FundingCard
                      key={idx}
                      category={allocation.category}
                      amount={allocation.amount}
                      percentage={allocation.percentage}
                      description={allocation.description}
                    />
                  ))}
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6 transition-all duration-300 transform hover:shadow-md">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">Key Metrics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {businessData.fundingRequest.keyMetrics.map((metric, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-lg shadow text-center transition-all duration-300 transform hover:shadow-md hover:scale-105">
                        <h4 className="font-medium text-blue-800 mb-1">{metric.metric}</h4>
                        <p className="text-lg font-bold text-blue-900">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {/* Regulatory Strategy Tab */}
            {activeTab === 'regulatoryStrategy' && (
              <div>
                <p className="text-gray-700 mb-6">{businessData.regulatoryStrategy.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {businessData.regulatoryStrategy.steps.map((step, idx) => (
                    <FeatureCard
                      key={idx}
                      title={step.title}
                      description={step.description}
                      details={step.details}
                      icon="📋"
                    />
                  ))}
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6 transition-all duration-300 transform hover:shadow-md">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">Key Principles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {businessData.regulatoryStrategy.keyPrinciples.map((principle, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-lg shadow text-center transition-all duration-300 transform hover:shadow-md hover:scale-105">
                        <h4 className="font-medium text-blue-800 mb-1">Principle {idx + 1}</h4>
                        <p className="text-sm text-gray-600">{principle}</p>
                      </div>
                    ))}
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

export default SuperWaterBusinessModel;