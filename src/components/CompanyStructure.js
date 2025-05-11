import React, { useState, useEffect } from 'react';

const CompanyStructure = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSection, setExpandedSection] = useState('parent');
  
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
  // Companies data
  const companiesData = {
    overview: {
      title: "Spanex Global Company Structure",
      subtitle: "Strategic organization of our global operations and subsidiaries",
      description: "Spanex Sciences operates with a centralized R&D and IP management hub in Australia, with specialized subsidiaries focused on specific product lines and regional markets. This structure optimizes our global operations while maintaining strong IP protection and regional market focus.",
      stats: [
        { label: "Global HQ", value: "Melbourne, Australia", icon: "🏢" },
        { label: "Subsidiaries", value: "4", icon: "🏣" },
        { label: "Countries", value: "3", icon: "🌎" },
        { label: "Product Lines", value: "4", icon: "📦" }
      ]
    },
    companies: [
      {
        id: 'parent',
        name: 'Spanex Sciences (Lab)',
        location: 'Melbourne, Australia',
        role: 'Global headquarters, R&D hub, and IP owner (patents, formulations, trademarks). Licenses IP to subsidiaries and oversees strategy.',
        structure: 'Proprietary Limited Company (Pty Ltd) in Australia',
        additionalInfo: 'Retains R&D tax incentives and a strong base for IP management, even with limited initial sales in Australia.',
        color: 'bg-blue-600',
        icon: (
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        )
      },
      {
        id: 'agtech',
        name: 'Spanex Shelf Life',
        location: 'Manufacturing in India, sales in USA & Australia',
        role: 'Shelf Life Extension (Preservatives for fruits and vegetables)',
        structure: 'Private Limited Company in India; LLC in USA; branch or Pty Ltd in Australia',
        markets: 'USA and Australia',
        color: 'bg-green-600',
        icon: (
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
          </svg>
        )
      },
      {
        id: 'wash',
        name: 'Spanex Super Wash',
        location: 'Manufacturing in India, sales in USA',
        role: 'Advanced Produce & Meat Wash Solutions',
        structure: 'Private Limited Company in India; LLC in USA',
        markets: 'USA only',
        color: 'bg-blue-500',
        icon: (
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        )
      },
      {
        id: 'food',
        name: 'Spanex Super Foods',
        location: 'Manufacturing and sales in India',
        role: 'Lifespan-Enhancing Superfoods',
        structure: 'Private Limited Company in India',
        markets: 'India only',
        color: 'bg-purple-600',
        icon: (
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
          </svg>
        )
      },
      {
        id: 'water',
        name: 'Z² Super Water',
        location: 'Manufacturing and sales in India',
        role: 'Optimized Hydration with Super Water™',
        structure: 'Private Limited Company in India',
        markets: 'India only',
        color: 'bg-cyan-500',
        icon: (
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )
      }
    ],
    legalStructure: {
      title: "Legal Structure by Region",
      description: "Our legal structure is designed to optimize operations in each region while maintaining strong IP protection and efficient tax management. The parent company in Australia holds all core IP, which is licensed to regional subsidiaries.",
      entities: [
        { company: "Spanex Sciences", region: "Australia", structure: "Proprietary Limited Company (Pty Ltd)", advantage: "R&D tax incentives, IP protection" },
        { company: "Spanex Shelf Life", region: "India", structure: "Private Limited Company", advantage: "Manufacturing cost advantages" },
        { company: "Spanex Shelf Life", region: "USA", structure: "Limited Liability Company (LLC)", advantage: "Market access, liability protection" },
        { company: "Spanex Super Wash", region: "India", structure: "Private Limited Company", advantage: "Manufacturing cost advantages" },
        { company: "Spanex Super Wash", region: "USA", structure: "Limited Liability Company (LLC)", advantage: "Market access, liability protection" },
        { company: "Spanex Super Foods", region: "India", structure: "Private Limited Company", advantage: "Local market focus, regulatory compliance" },
        { company: "Z² Super Water", region: "India", structure: "Private Limited Company", advantage: "Local market focus, regulatory compliance" }
      ],
      ipStrategy: [
        "All core IP centralized in Australian parent company",
        "Licensing agreements with subsidiaries for regional use",
        "Regional patent filings in key markets",
        "Royalty structure optimized for tax efficiency"
      ]
    },
    markets: {
      title: "Global Market Presence",
      description: "Our global market strategy focuses on key regions with the highest growth potential for each product line, with manufacturing centralized in India and sales operations in target markets.",
      regions: [
        { name: "USA Market", status: "Primary", focus: "Shelf Life & Super Wash" },
        { name: "India Market", status: "Growing", focus: "Super Foods & Super Water" },
        { name: "Australia Market", status: "Secondary", focus: "Shelf Life & R&D Hub" }
      ],
      productMarkets: [
        { product: "Shelf Life Extension", markets: "USA, Australia", manufacturing: "India", strategy: "B2B focus on produce industry" },
        { product: "Produce & Meat Wash", markets: "USA", manufacturing: "India", strategy: "B2B focus on food processing" },
        { product: "Super Foods", markets: "India", manufacturing: "India", strategy: "B2C premium consumer market" },
        { product: "Super Water", markets: "India", manufacturing: "India", strategy: "B2C premium consumer market" }
      ],
      expansion: {
        phase1: {
          title: "Phase 1: Current Markets (2023-2025)",
          steps: [
            "Strengthen USA position for Shelf Life and Super Wash",
            "Expand India market for Super Foods and Super Water",
            "Grow Australian market for Shelf Life"
          ]
        },
        phase2: {
          title: "Phase 2: New Markets (2026-2028)",
          steps: [
            "Expand Shelf Life to EU and UK markets",
            "Introduce Super Wash to Canada and Mexico",
            "Launch Super Foods and Super Water in Southeast Asia"
          ]
        }
      }
    }
  };

  // Tab options
  const tabOptions = [
    { id: 'overview', label: 'Overview', icon: '📋' },
    { id: 'subsidiaries', label: 'Company Details', icon: '🏢' },
    { id: 'structure', label: 'Legal Structure', icon: '⚖️' },
    { id: 'markets', label: 'Markets', icon: '🌎' }
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

  // Company card component
  const CompanyCard = ({ company }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-blue-100 mb-6 transition-all duration-300 transform hover:shadow-lg hover:scale-105">
      <div className="p-4 bg-gradient-to-r from-blue-50 to-white border-b border-blue-100">
        <div className="flex items-center">
          <div className={`rounded-full p-3 ${company.color} mr-4`}>
            {company.icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-800">{company.name}</h3>
            <p className="text-gray-600">{company.location}</p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="mb-4">
          <h4 className="font-semibold text-blue-900 mb-2">Role & Focus:</h4>
          <p className="text-gray-700">{company.role}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="text-sm font-semibold text-blue-900">Legal Structure</div>
            <div className="text-sm text-blue-800">{company.structure}</div>
          </div>
          {company.markets && (
            <div className="bg-green-50 p-3 rounded-lg">
              <div className="text-sm font-semibold text-green-900">Target Markets</div>
              <div className="text-sm text-green-800">{company.markets}</div>
            </div>
          )}
        </div>
        
        {company.additionalInfo && (
          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="text-sm font-semibold text-blue-900 mb-1">Additional Information:</div>
            <p className="text-sm text-gray-700">{company.additionalInfo}</p>
          </div>
        )}
      </div>
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
          Spanex Global Company Structure
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-8 text-blue-700">
          Our strategic global structure optimizes R&D, manufacturing, and market-specific operations across multiple regions.
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
              {activeTab === 'overview' ? 'Global Company Structure' :
               activeTab === 'subsidiaries' ? 'Spanex Subsidiaries' :
               activeTab === 'structure' ? 'Legal Structure by Region' : 'Global Market Presence'}
            </h3>
            {activeTab === 'overview' && (
              <p className="text-gray-600">Strategic organization of our global operations and subsidiaries</p>
            )}
          </div>

          {/* Tab Content */}
          <div className="p-6">

         {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div>
                <p className="text-gray-700 mb-6">{companiesData.overview.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {companiesData.overview.stats.map((stat) => (
                    <StatCard
                      key={stat.label}
                      icon={stat.icon}
                      label={stat.label}
                      value={stat.value}
                    />
                  ))}
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6 mb-6 transition-all duration-300 transform hover:shadow-md">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Global Structure Overview</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Parent Company</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-xl mr-2">🏢</span>
                          <div>
                            <span className="font-medium">Spanex Sciences (Lab)</span>
                            <p className="text-sm text-gray-600">Melbourne, Australia - Global HQ & R&D</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Key Subsidiaries</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-xl mr-2">🌱</span>
                          <div>
                            <span className="font-medium">Spanex Shelf Life</span>
                            <p className="text-sm text-gray-600">Shelf Life Extension Technology</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-xl mr-2">💧</span>
                          <div>
                            <span className="font-medium">Spanex Super Washes</span>
                            <p className="text-sm text-gray-600">Advanced Produce & Meat Wash</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-xl mr-2">🧳</span>
                          <div>
                            <span className="font-medium">Z² Super Waters</span>
                            <p className="text-sm text-gray-600">Optimized Hydration with Super Water</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-xl mr-2">✨</span>
                          <div>
                            <span className="font-medium">Spanex Super Foods</span>
                            <p className="text-sm text-gray-600">Lifespan-Enhancing Super foods</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <ExpandableSection id="parent" title="Parent Company Details">
                  <CompanyCard company={companiesData.companies[0]} />
                </ExpandableSection>
                
                <ExpandableSection id="subsidiaries" title="Subsidiary Companies">
                  <div className="grid grid-cols-1 gap-4">
                    {companiesData.companies.slice(1).map(company => (
                      <CompanyCard key={company.id} company={company} />
                    ))}
                  </div>
                </ExpandableSection>
                
                <ExpandableSection id="globalStrategy" title="Strategic Benefits">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">IP Protection & Management</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Centralized IP ownership in Australian parent</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Strong patent protection in Australia</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">R&D tax incentives from Australian government</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Licensing structure to subsidiaries for royalty streams</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">Operational Advantages</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Cost-effective manufacturing in India</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Market-specific sales entities for localization</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Tailored legal structures for each region</span>
                        </li>
                        <li className="flex items-start">
                          <CheckIcon />
                          <span className="text-gray-700">Efficient tax planning through corporate structure</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ExpandableSection>
              </div>
            )}
            {/* Subsidiaries Tab */}
            {activeTab === 'subsidiaries' && (
              <div>
                <p className="text-gray-700 mb-6">
                  Our specialized subsidiaries focus on specific product lines and regional markets, allowing for targeted
                  development, manufacturing, and market strategies while leveraging the core IP and research from our parent company.
                </p>
                
                <div className="mb-6">
                  <CompanyCard company={companiesData.companies[0]} />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {companiesData.companies.slice(1).map(company => (
                    <CompanyCard key={company.id} company={company} />
                  ))}
                </div>
              </div>
            )}
            {/* Legal Structure Tab */}
            {activeTab === 'structure' && (
              <div>
                <p className="text-gray-700 mb-6">{companiesData.legalStructure.description}</p>
                
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full divide-y divide-blue-200">
                    <thead className="bg-blue-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Company</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Region</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Legal Structure</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Key Advantage</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-blue-100">
                      {companiesData.legalStructure.entities.map((entity, idx) => (
                        <tr key={idx} className="transition-colors duration-300 hover:bg-blue-50">
                          <td className="px-4 py-2 text-sm font-medium text-blue-900">{entity.company}</td>
                          <td className="px-4 py-2 text-sm text-gray-700">{entity.region}</td>
                          <td className="px-4 py-2 text-sm text-gray-700">{entity.structure}</td>
                          <td className="px-4 py-2 text-sm text-gray-700">{entity.advantage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">IP Management Strategy</h4>
                  <ul className="space-y-1">
                    {companiesData.legalStructure.ipStrategy.map((strategy, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">{strategy}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            {/* Markets Tab */}
            {activeTab === 'markets' && (
              <div>
                <p className="text-gray-700 mb-6">{companiesData.markets.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {companiesData.markets.regions.map((region) => (
                    <div key={region.name} className="bg-blue-50 p-3 rounded-lg text-center">
                      <div className="text-sm font-semibold text-blue-900">{region.name}</div>
                      <div className="text-xl font-bold text-blue-800">{region.status}</div>
                      <p className="text-sm text-gray-600">{region.focus}</p>
                    </div>
                  ))}
                </div>
                
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full divide-y divide-blue-200">
                    <thead className="bg-blue-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Product Line</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Primary Markets</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Manufacturing</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase">Market Strategy</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-blue-100">
                    {companiesData.markets.productMarkets.map((product, idx) => (
                        <tr key={idx} className="transition-colors duration-300 hover:bg-blue-50">
                          <td className="px-4 py-2 text-sm font-medium text-blue-900">{product.product}</td>
                          <td className="px-4 py-2 text-sm text-gray-700">{product.markets}</td>
                          <td className="px-4 py-2 text-sm text-gray-700">{product.manufacturing}</td>
                          <td className="px-4 py-2 text-sm text-gray-700">{product.strategy}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <ExpandableSection id="expansion" title="Future Market Expansion">
                  <p className="mb-4">Our phased market expansion strategy focuses on establishing strong positions in current markets before expanding to new regions:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">{companiesData.markets.expansion.phase1.title}</h4>
                      <ul className="space-y-1">
                        {companiesData.markets.expansion.phase1.steps.map((step, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">{companiesData.markets.expansion.phase2.title}</h4>
                      <ul className="space-y-1">
                        {companiesData.markets.expansion.phase2.steps.map((step, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ExpandableSection>
                <ExpandableSection id="globalVisualization" title="Global Structure Visualization">
                  <div className="bg-white p-4 rounded-lg shadow border border-blue-100 mb-4">
                    <h4 className="font-semibold text-blue-900 mb-3 text-center">Spanex Global Structure</h4>
                    
                    <div className="flex justify-center mb-6">
                      <div className="relative w-full max-w-2xl">
                        {/* Parent Company */}
                        <div className="bg-blue-600 text-white p-4 rounded-lg shadow-lg mb-6 max-w-md mx-auto relative z-10">
                          <div className="flex items-center">
                            <div className="rounded-full bg-white p-2 mr-3">
                              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                            </div>
                            <div>
                              <h5 className="font-bold">Spanex Sciences (Lab)</h5>
                              <p className="text-sm text-blue-100">Melbourne, Australia</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Central connector line */}
                        <div className="absolute left-1/2 top-[4.5rem] w-0.5 h-12 bg-blue-400 transform -translate-x-1/2"></div>
                        
                        {/* IP Licensing Box */}
                        <div className="bg-blue-100 text-blue-800 p-2 rounded max-w-xs mx-auto mb-4 text-center text-sm">
                          IP Licensing & Royalty Flow
                        </div>
                        
                        {/* Subsidiaries */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {companiesData.companies.slice(1).map((company, idx) => (
                            <div key={company.id} className={`${company.color} text-white p-3 rounded-lg shadow-md relative z-10`}>
                              <div className="flex items-center">
                                <div className="rounded-full bg-white p-2 mr-3">
                                  {React.cloneElement(company.icon, { className: `w-6 h-6 ${company.color.replace('bg-', 'text-')}` })}
                                </div>
                                <div>
                                  <h5 className="font-bold text-sm">{company.name}</h5>
                                  <p className="text-xs">{company.location}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-sm text-center text-gray-600">
                      IP and formulations flow from the parent company to subsidiaries, with revenue returning as royalties.
                    </div>
                  </div>
                </ExpandableSection>
              </div>
            )}
            {/* Additional section that appears in all tabs */}
            <div className="bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg mt-6 border border-blue-100">
              <h4 className="font-semibold text-blue-900 mb-3">Key Advantages of Our Global Structure</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-3 rounded shadow text-center transition-all duration-300 transform hover:shadow-md hover:scale-105">
                  <div className="text-center text-xl text-blue-500 mb-2">🔒</div>
                  <div className="font-medium text-blue-800">IP Protection</div>
                  <p className="text-xs text-gray-600">Centralized ownership in Australia with strong legal protections</p>
                </div>
                <div className="bg-white p-3 rounded shadow text-center transition-all duration-300 transform hover:shadow-md hover:scale-105">
                  <div className="text-center text-xl text-blue-500 mb-2">🏭</div>
                  <div className="font-medium text-blue-800">Manufacturing Efficiency</div>
                  <p className="text-xs text-gray-600">Cost-effective production in India with quality controls</p>
                </div>
                <div className="bg-white p-3 rounded shadow text-center transition-all duration-300 transform hover:shadow-md hover:scale-105">
                  <div className="text-center text-xl text-blue-500 mb-2">📊</div>
                  <div className="font-medium text-blue-800">Market Optimization</div>
                  <p className="text-xs text-gray-600">Dedicated entities for each region's regulatory and market needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStructure;