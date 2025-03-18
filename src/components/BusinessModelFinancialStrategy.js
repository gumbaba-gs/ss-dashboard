import React, { useState, useEffect } from 'react';

const BusinessModelFinancialStrategy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('revenue');
  const [expandedSection, setExpandedSection] = useState('directSales');
  
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
  
  // Tab options
  const tabOptions = [
    { id: 'revenue', label: 'Revenue Streams', icon: '💰' },
    { id: 'pricing', label: 'Pricing Strategy', icon: '📈' },
    { id: 'funding', label: 'Funding Strategy', icon: '🏦' },
    { id: 'projections', label: 'Financial Projections', icon: '📊' }
  ];
  
  // Function to handle tab click
  const handleTabClick = (tabId) => {
    // Only update if it's a different tab
    if (activeTab !== tabId) {
      setActiveTab(tabId);
      
      // Reset expanded section when changing tabs
      setExpandedSection(null);
    }
  };

  // Revenue streams data
  const revenueStreams = [
    {
      id: 'directSales',
      title: 'Direct Sales',
      description: 'Direct sales to producers and distributors',
      details: [
        'Berry preservation formulations sold directly to major producers',
        'Avocado and flower preservation solutions for specialty distributors',
        'Produce wash solutions for processing facilities',
        'Super Water™ solutions for beverage manufacturers'
      ],
      percentage: 65,
      icon: '🏭'
    },
    {
      id: 'licensing',
      title: 'Technology Licensing',
      description: 'Licensing technology to strategic partners',
      details: [
        'Patent licensing for specialized applications',
        'White-label solutions for major agricultural brands',
        'Regional exclusivity agreements with key distributors',
        'Co-branded products with established market leaders'
      ],
      percentage: 20,
      icon: '📝'
    },
    {
      id: 'subscription',
      title: 'B2B Subscription Models',
      description: 'Subscription models for ongoing preservation needs',
      details: [
        'Monthly delivery programs for consistent usage',
        'Volume-based subscription tiers with scaling pricing',
        'Guaranteed supply contracts with major producers',
        'Integrated inventory management systems'
      ],
      percentage: 15,
      icon: '🔄'
    }
  ];

  // Pricing strategy data
  const pricingStrategy = {
    title: 'Premium Positioning Based on ROI',
    description: 'Our pricing strategy is built around the demonstrable ROI for customers through waste reduction, extended shelf life, and expanded market reach.',
    points: [
      {
        title: 'Value-Based Pricing',
        description: 'Prices set based on value delivered rather than production costs, with typical ROI of 300-500% for customers'
      },
      {
        title: 'Tiered Pricing Structure',
        description: 'Multiple pricing tiers based on volume, application method, and market segment'
      },
      {
        title: 'Geographic Differentiation',
        description: 'Market-specific pricing to account for local conditions, competition, and value perception'
      },
      {
        title: 'Early Adopter Incentives',
        description: 'Strategic pricing discounts for market leaders who can validate and showcase our products'
      }
    ],
    profitMargins: {
      target: '60-70%',
      industry: '35-45%'
    }
  };

  // Funding strategy data
  const fundingStrategy = {
    title: 'Strategic Investment Approach',
    description: 'Our funding strategy balances aggressive growth with maintaining founders\' equity and control.',
    rounds: [
      {
        name: 'Seed Round',
        timing: 'Current',
        amount: '$5-8M',
        purpose: 'Market entry and initial scale-up',
        milestones: [
          'Launch berry preservation in North America',
          'Complete regulatory approvals',
          'Establish initial production capabilities'
        ]
      },
      {
        name: 'Series A',
        timing: 'Q2 Next Year',
        amount: '$15-20M',
        purpose: 'Accelerate growth and market expansion',
        milestones: [
          'Expand to Australia/NZ markets',
          'Launch avocado preservation line',
          'Scale production capacity significantly'
        ]
      },
      {
        name: 'Strategic Investment',
        timing: 'Year 2-3',
        amount: '$30-50M',
        purpose: 'Global expansion and product diversification',
        milestones: [
          'Establish global presence',
          'Launch Super Water™ commercial applications',
          'Build dedicated production facilities'
        ]
      }
    ],
    valuation: {
      current: '$25-30M',
      year3: '$150-200M',
      year5: '$600M+'
    }
  };

  // Financial projections
  const financialProjections = {
    projections: [
      { year: 'Year 1', revenue: '$18M', description: 'North American berry market' },
      { year: 'Year 3', revenue: '$85M', description: 'Expanded produce categories' },
      { year: 'Year 5', revenue: '$320M', description: 'Multiple product lines across global markets' }
    ],
    margins: [
      { category: 'Gross Margin', year1: '65%', year3: '68%', year5: '72%' },
      { category: 'EBITDA', year1: '15%', year3: '25%', year5: '38%' },
      { category: 'Net Profit', year1: '8%', year3: '18%', year5: '28%' }
    ],
    keyMetrics: [
      { metric: 'CAC Payback', value: '4-6 months' },
      { metric: 'LTV:CAC Ratio', value: '8.5:1' },
      { metric: 'Revenue per Customer', value: '$680K annually' },
      { metric: 'Annual Contract Value Growth', value: '35% YoY' }
    ]
  };

  // Expandable section component with improved interaction
  const ExpandableSection = ({ id, title, children }) => (
    <div className="bg-white rounded-lg shadow overflow-hidden mb-4 hover:shadow-lg relative z-10">
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

  // Revenue stream card
  const RevenueStreamCard = ({ stream }) => (
    <div className="bg-white rounded-lg shadow p-4 border border-blue-100 transition-all duration-300 transform hover:shadow-lg hover:scale-105">
      <div className="flex items-center mb-3">
        <div className="text-2xl mr-3">{stream.icon}</div>
        <div>
          <h3 className="font-semibold text-blue-800">{stream.title}</h3>
          <p className="text-sm text-gray-600">{stream.description}</p>
        </div>
      </div>
      <div className="mb-3">
        <div className="flex justify-between text-sm mb-1">
          <span className="font-medium text-blue-900">Revenue Contribution</span>
          <span className="font-medium text-blue-700">{stream.percentage}%</span>
        </div>
        <div className="w-full bg-blue-100 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
            style={{ width: isVisible ? `${stream.percentage}%` : '0%' }}
          ></div>
        </div>
      </div>
      <ul className="space-y-1 mt-4">
        {stream.details.map((detail, idx) => (
          <li key={idx} className="flex items-start">
            <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  // Stat card component
  const StatCard = ({ icon, label, value, subtext }) => (
    <div className="bg-white rounded-lg shadow p-4 flex items-center transition-all duration-300 transform hover:shadow-lg hover:translate-y-[-5px]">
      <div className="text-2xl mr-3">{icon}</div>
      <div>
        <div className="text-lg font-bold text-blue-800">{value}</div>
        <div className="text-gray-600 text-sm">{label}</div>
        {subtext && <div className="text-gray-500 text-xs">{subtext}</div>}
      </div>
    </div>
  );

  return (
    <section className="py-16 gradient-bg relative">
      <div className={`container-padding relative z-10 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ pointerEvents: 'auto' }}>
        <h2 className="heading text-center">
          Business Model & Financial Strategy
        </h2>
        <p className="paragraph text-center max-w-3xl mx-auto mb-8">
          Our comprehensive approach to monetization, growth funding, and long-term financial success.
        </p>

        {/* Tab Navigation - Enhanced for better interaction */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 relative z-20" style={{ pointerEvents: 'auto' }}>
          {tabOptions.map((tab) => (
            <button
              key={tab.id}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleTabClick(tab.id);
              }}
              className={`px-4 py-3 rounded-full flex items-center transition-all duration-300 hover:scale-105 relative z-20 ${
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
            <h3 className="text-xl font-bold text-blue-900 transition-opacity duration-300">
              {activeTab === 'revenue' && "Revenue Streams"}
              {activeTab === 'pricing' && "Pricing Strategy"}
              {activeTab === 'funding' && "Funding Strategy"}
              {activeTab === 'projections' && "Financial Projections"}
            </h3>
            <p className="text-gray-600 transition-opacity duration-300">
              {activeTab === 'revenue' && "Diversified monetization approach across multiple channels"}
              {activeTab === 'pricing' && "Premium positioning based on customer ROI through waste reduction"}
              {activeTab === 'funding' && "Strategic investment approach balancing growth and control"}
              {activeTab === 'projections' && "Five-year financial outlook across product lines and markets"}
            </p>
          </div>

          {/* Tab Content */}
          <div className="p-6 transition-all duration-500 ease-in-out">
            {activeTab === 'revenue' && (
              <div>
                <p className="paragraph mb-6">
                  Our revenue model leverages three complementary streams to maximize market penetration and financial performance.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {revenueStreams.map(stream => (
                    <RevenueStreamCard key={stream.id} stream={stream} />
                  ))}
                </div>
                
                <ExpandableSection id="revenueDiversification" title="Revenue Diversification Strategy">
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-blue-900 mb-3">Geographic Revenue Split (Projected Year 3)</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>North America</span>
                          <span>45%</span>
                        </div>
                        <div className="w-full bg-blue-100 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Australia/NZ</span>
                          <span>22%</span>
                        </div>
                        <div className="w-full bg-blue-100 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '22%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Europe</span>
                          <span>18%</span>
                        </div>
                        <div className="w-full bg-blue-100 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '18%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Asia</span>
                          <span>15%</span>
                        </div>
                        <div className="w-full bg-blue-100 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '15%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-3">Product Category Revenue Split (Projected Year 3)</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Berry Preservation</span>
                          <span>40%</span>
                        </div>
                        <div className="w-full bg-blue-100 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Other Produce Preservation</span>
                          <span>30%</span>
                        </div>
                        <div className="w-full bg-blue-100 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Produce & Meat Wash</span>
                          <span>20%</span>
                        </div>
                        <div className="w-full bg-blue-100 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{ width: '20%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Super Water™</span>
                          <span>10%</span>
                        </div>
                        <div className="w-full bg-blue-100 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{ width: '10%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>
              </div>
            )}

            {activeTab === 'pricing' && (
              <div>
                <p className="paragraph mb-6">
                  {pricingStrategy.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {pricingStrategy.points.map((point, idx) => (
                    <div key={idx} className="bg-white rounded-lg shadow p-4 border border-blue-100">
                      <h4 className="font-semibold text-blue-800 mb-2">{point.title}</h4>
                      <p className="text-sm text-gray-700">{point.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-blue-900 mb-3">Profit Margin Comparison</h4>
                  <div className="flex items-center mb-4">
                    <div className="w-full">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Spanex Sciences Target Margin</span>
                        <span>{pricingStrategy.profitMargins.target}</span>
                      </div>
                      <div className="w-full bg-blue-100 rounded-full h-3">
                        <div className="bg-blue-600 h-3 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-full">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Industry Average</span>
                        <span>{pricingStrategy.profitMargins.industry}</span>
                      </div>
                      <div className="w-full bg-blue-100 rounded-full h-3">
                        <div className="bg-gray-400 h-3 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <ExpandableSection id="pricingExamples" title="Product Pricing Examples">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-blue-200">
                      <thead className="bg-blue-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Product</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Unit Size</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Price Range</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Customer ROI</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-blue-100">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-900">Berry Preservation Liquid</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">1 Liter</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">$80-$120</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-green-700">410%</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-900">Avocado Preservation Liquid</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">1 Liter</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">$95-$140</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-green-700">385%</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-900">Produce Wash Solution</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">5 Liters</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">$320-$450</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-green-700">325%</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-900">Sachets (Berry)</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Box of 100</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">$250-$320</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-green-700">480%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </ExpandableSection>
              </div>
            )}

            {activeTab === 'funding' && (
              <div>
                <p className="paragraph mb-6">
                  {fundingStrategy.description}
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                  {fundingStrategy.rounds.map((round, idx) => (
                    <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden border border-blue-100">
                      <div className="p-4 bg-gradient-to-r from-blue-50 to-white border-b border-blue-100">
                        <h3 className="text-xl font-semibold text-blue-800">{round.name}</h3>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-sm text-gray-600">{round.timing}</span>
                          <span className="text-lg font-bold text-blue-700">{round.amount}</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-gray-700 mb-3">{round.purpose}</p>
                        
                        <h4 className="font-semibold text-blue-900 mb-2 text-sm">Key Milestones:</h4>
                        <ul className="space-y-1">
                          {round.milestones.map((milestone, idx) => (
                            <li key={idx} className="flex items-start">
                              <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-sm">{milestone}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-blue-900 mb-3">Valuation Trajectory</h4>
                  <div className="relative h-20">
                    <div className="absolute inset-0 flex items-center">
                      <div className="h-1 w-full bg-blue-200"></div>
                    </div>
                    <div className="relative flex justify-between">
                      <div className="text-center">
                        <div className="w-4 h-4 rounded-full bg-blue-600 mb-1 mx-auto"></div>
                        <div className="text-sm font-medium">Current</div>
                        <div className="text-sm font-bold text-blue-800">{fundingStrategy.valuation.current}</div>
                      </div>
                      <div className="text-center">
                        <div className="w-4 h-4 rounded-full bg-blue-600 mb-1 mx-auto"></div>
                        <div className="text-sm font-medium">Year 3</div>
                        <div className="text-sm font-bold text-blue-800">{fundingStrategy.valuation.year3}</div>
                      </div>
                      <div className="text-center">
                        <div className="w-4 h-4 rounded-full bg-blue-600 mb-1 mx-auto"></div>
                        <div className="text-sm font-medium">Year 5</div>
                        <div className="text-sm font-bold text-blue-800">{fundingStrategy.valuation.year5}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <ExpandableSection id="investorProfile" title="Investor Target Profile">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg border border-blue-100">
                      <h5 className="font-semibold text-blue-900 mb-2">Strategic Investors</h5>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">Major agricultural producers and distributors</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">Food technology and supply chain innovators</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">ESG-focused funds with sustainability mandates</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-blue-100">
                      <h5 className="font-semibold text-blue-900 mb-2">Financial Investors</h5>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">Growth-stage VC firms with foodtech portfolios</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">Family offices with long-term investment horizons</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">Impact investors focused on food waste reduction</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ExpandableSection>
              </div>
            )}
            
            {activeTab === 'projections' && (
              <div>
                <p className="paragraph mb-6">
                  Our five-year financial projections demonstrate significant growth potential as we expand across markets and product categories.
                </p>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-blue-900 mb-3">Revenue Projections</h4>
                  <div className="space-y-4">
                    {financialProjections.projections.map((proj, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-28 flex-shrink-0">
                          <div className="text-sm font-semibold text-blue-900">{proj.year}</div>
                          <div className="text-xs text-gray-600">{proj.description}</div>
                        </div>
                        <div className="w-full h-8 bg-blue-100 rounded relative">
                          <div 
                            className="h-8 bg-blue-600 rounded flex items-center justify-end pr-2 text-white text-sm font-medium transition-all duration-1000"
                            style={{ width: idx === 0 ? '18%' : idx === 1 ? '42%' : '80%' }}
                          >
                            {proj.revenue}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full divide-y divide-blue-200">
                    <thead className="bg-blue-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Financial Metric</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Year 1</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Year 3</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Year 5</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-blue-100">
                      {financialProjections.margins.map((row, idx) => (
                        <tr key={idx}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-900">{row.category}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row.year1}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row.year3}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-green-700 font-medium">{row.year5}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <ExpandableSection id="keyMetrics" title="Key Business Metrics">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {financialProjections.keyMetrics.map((metric, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-lg border border-blue-100">
                        <h5 className="font-semibold text-blue-900 mb-1 text-sm">{metric.metric}</h5>
                        <div className="text-lg font-bold text-blue-700">{metric.value}</div>
                      </div>
                    ))}
                  </div>
                </ExpandableSection>
                
                <ExpandableSection id="breakeven" title="Breakeven Analysis">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-2">Per-Market Breakeven</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>North America</span>
                            <span className="font-medium">10 months</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Australia/NZ</span>
                            <span className="font-medium">12 months</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Europe</span>
                            <span className="font-medium">14 months</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Asia</span>
                            <span className="font-medium">16 months</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-2">Per-Product Breakeven</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Berry Preservation</span>
                            <span className="font-medium">8 months</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Avocado Preservation</span>
                            <span className="font-medium">11 months</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Produce Wash</span>
                            <span className="font-medium">10 months</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Super Water™</span>
                            <span className="font-medium">14 months</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>
              </div>
            )}
          </div>
        </div>

        {/* Background Particles with improved z-index */}
        <div className="particles-bg" style={{ zIndex: -1, pointerEvents: 'none' }}>
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`particle ${isVisible ? 'animate-float' : ''}`}
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: isVisible ? 0.7 : 0,
                pointerEvents: 'none'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessModelFinancialStrategy;