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

  const companies = [
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 11.5C8.5 10.0858 8.5 9.37868 8.93934 8.93934C9.37868 8.5 10.0858 8.5 11.5 8.5H12.5C13.9142 8.5 14.6213 8.5 15.0607 8.93934C15.5 9.37868 15.5 10.0858 15.5 11.5V12.5C15.5 13.9142 15.5 14.6213 15.0607 15.0607C14.6213 15.5 13.9142 15.5 12.5 15.5H11.5C10.0858 15.5 9.37868 15.5 8.93934 15.0607C8.5 14.6213 8.5 13.9142 8.5 12.5V11.5Z M22 19H13C9.22876 19 7.34315 19 6.17157 17.8284C5.51839 17.1752 5.22937 16.3001 5.10149 15M5 11V2 M8 5H11C14.7712 5 16.6569 5 17.8284 6.17157C18.4816 6.82475 18.7706 7.69989 18.8985 9M2 5H5M19 19V22M19 13V16" />
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 4.5c-0.5-0.1-1 0.2-1.1 0.7l-0.3 1.3c-0.6 0.05-1 0.2-1.4 0.3-0.4 0.14-0.7 0.25-1.4 0.25-0.7 0-1-0.11-1.4-0.25-0.5-0.16-1-0.35-2-0.35s-1.6 0.19-2 0.35c-0.4 0.14-0.7 0.25-1.4 0.25-0.7 0-1-0.11-1.4-0.25-0.5-0.16-1-0.35-2-0.35s-1.6 0.19-2 0.35c-0.4 0.14-0.7 0.25-1.4 0.25-0.7 0-1-0.11-1.4-0.25-0.4-0.13-0.8-0.28-1.4-0.33L2 4.5C1.5 4.4 1 4.7 0.9 5.2L4 19c0.1 0.4 0.5 0.7 0.9 0.7h15c0.4 0 0.8-0.3 0.9-0.7l3.1-14.3c0.1-0.5-0.3-1-0.9-1.2zM19 18H5L2.7 7.5C2.85 7.54 3 7.58 3.1 7.62c0.5 0.16 1 0.35 2 0.35s1.55-0.19 2-0.35C7.5 7.48 7.8 7.37 8.5 7.37c0.7 0 1 0.11 1.4 0.25 0.5 0.16 1 0.35 2 0.35s1.55-0.19 2-0.35c0.4-0.14 0.7-0.25 1.4-0.25 0.7 0 1 0.11 1.4 0.25 0.5 0.16 1 0.35 2 0.35s1.55-0.19 2-0.35c0.13-0.04 0.25-0.08 0.38-0.12L19 18zM10 12a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM14 12a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 1.25-0.4 2.45-1 3.5" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.5 10.5c0 0.83 0.67 1.5 1.5 1.5s1.5-0.67 1.5-1.5S9.83 9 9 9s-1.5 0.67-1.5 1.5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 14l2 2 2-2M15.5 16v-5M17.5 14c0-0.83-0.67-1.5-1.5-1.5h-1" />
          <circle cx="15" cy="16" r="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          <circle cx="8" cy="16" r="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          <circle cx="8" cy="9" r="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
      )
    },
    {
      id: 'water',
      name: 'Spanex Super Water',
      location: 'Manufacturing and sales in India',
      role: 'Optimized Hydration with Super Water™',
      structure: 'Private Limited Company in India',
      markets: 'India only',
      color: 'bg-cyan-500',
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 14.25c0 4.97-4.04 9-9 9s-9-4.03-9-9C3 9.44 11.12 1.31 11.48 0.97c0.29-0.29 0.76-0.29 1.05 0C12.88 1.31 21 9.44 21 14.25z M10.5 19.5c-2.48 0-4.5-2.02-4.5-4.5 M10.5 19.5c0.41 0 0.75-0.34 0.75-0.75s-0.34-0.75-0.75-0.75c-1.65 0-3-1.35-3-3 0-0.41-0.34-0.75-0.75-0.75" />
        </svg>
      )
    }
  ];

  // Tab options
  const tabOptions = [
    { id: 'overview', label: 'Overview', icon: '📋' },
    { id: 'subsidiaries', label: 'Company Details', icon: '🏢' },
    { id: 'structure', label: 'Legal Structure', icon: '⚖️' },
    { id: 'markets', label: 'Markets', icon: '🌎' }
  ];

  // Company card component
  const CompanyCard = ({ company }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-blue-100 mb-6">
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
          Spanex Global Company Structure
        </h2>
        <p className="paragraph text-center max-w-3xl mx-auto mb-8">
          Our strategic global structure optimizes R&D, manufacturing, and market-specific operations across multiple regions.
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
            {activeTab === 'overview' && (
              <div>
                <p className="paragraph mb-6">
                  Spanex Sciences operates with a centralized R&D and IP management hub in Australia, with specialized subsidiaries
                  focused on specific product lines and regional markets. This structure optimizes our global operations while
                  maintaining strong IP protection and regional market focus.
                </p>
                
                <div className="bg-blue-50 rounded-lg p-6 mb-6">
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
                            <span className="font-medium">Spanex Super Waters</span>
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
                
                {/* <ExpandableSection id="parent" title="Parent Company Details">
                  <CompanyCard company={companies[0]} />
                </ExpandableSection>
                
                <ExpandableSection id="subsidiaries" title="Subsidiary Companies">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {companies.slice(1).map(company => (
                      <div key={company.id} className="flex flex-col h-full">
                        <div className="bg-white rounded-lg shadow p-4 border border-blue-100 h-full">
                          <div className="flex items-center mb-3">
                            <div className={`rounded-full p-2 ${company.color} mr-3`}>
                              {company.icon}
                            </div>
                            <h3 className="font-bold text-blue-900">{company.name}</h3>
                          </div>
                          
                          <div className="text-sm">
                            <p className="mb-2 text-gray-700">{company.location}</p>
                            <p className="mb-2"><span className="font-semibold">Focus:</span> {company.role}</p>
                            <p className="mb-2"><span className="font-semibold">Markets:</span> {company.markets}</p>
                            <p><span className="font-semibold">Structure:</span> {company.structure}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ExpandableSection> */}
              </div>
            )}

            {activeTab === 'subsidiaries' && (
              <div>
                <p className="paragraph mb-6">
                  Our specialized subsidiaries focus on specific product lines and regional markets, allowing for targeted
                  development, manufacturing, and market strategies while leveraging the core IP and research from our parent company.
                </p>
                
                <div className="mb-6">
                  <CompanyCard company={companies[0]} />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {companies.slice(1).map(company => (
                    <CompanyCard key={company.id} company={company} />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'structure' && (
              <div>
                <p className="paragraph mb-6">
                  Our legal structure is designed to optimize operations in each region while maintaining strong IP protection
                  and efficient tax management. The parent company in Australia holds all core IP, which is licensed to regional subsidiaries.
                </p>
                
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
                      <tr>
                        <td className="px-4 py-2 text-sm font-medium text-blue-900">Spanex Sciences</td>
                        <td className="px-4 py-2 text-sm text-gray-700">Australia</td>
                        <td className="px-4 py-2 text-sm text-gray-700">Proprietary Limited Company (Pty Ltd)</td>
                        <td className="px-4 py-2 text-sm text-gray-700">R&D tax incentives, IP protection</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm font-medium text-blue-900">Spanex Shelf Life</td>
                        <td className="px-4 py-2 text-sm text-gray-700">India</td>
                        <td className="px-4 py-2 text-sm text-gray-700">Private Limited Company</td>
                        <td className="px-4 py-2 text-sm text-gray-700">Manufacturing cost advantages</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm font-medium text-blue-900">Spanex Shelf Life</td>
                        <td className="px-4 py-2 text-sm text-gray-700">USA</td>
                        <td className="px-4 py-2 text-sm text-gray-700">Limited Liability Company (LLC)</td>
                        <td className="px-4 py-2 text-sm text-gray-700">Market access, liability protection</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm font-medium text-blue-900">Spanex Super Wash</td>
                        <td className="px-4 py-2 text-sm text-gray-700">India</td>
                        <td className="px-4 py-2 text-sm text-gray-700">Private Limited Company</td>
                        <td className="px-4 py-2 text-sm text-gray-700">Manufacturing cost advantages</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm font-medium text-blue-900">Spanex Super Wash</td>
                        <td className="px-4 py-2 text-sm text-gray-700">USA</td>
                        <td className="px-4 py-2 text-sm text-gray-700">Limited Liability Company (LLC)</td>
                        <td className="px-4 py-2 text-sm text-gray-700">Market access, liability protection</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm font-medium text-blue-900">Spanex Super Foods</td>
                        <td className="px-4 py-2 text-sm text-gray-700">India</td>
                        <td className="px-4 py-2 text-sm text-gray-700">Private Limited Company</td>
                        <td className="px-4 py-2 text-sm text-gray-700">Local market focus, regulatory compliance</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm font-medium text-blue-900">Spanex Super Water</td>
                        <td className="px-4 py-2 text-sm text-gray-700">India</td>
                        <td className="px-4 py-2 text-sm text-gray-700">Private Limited Company</td>
                        <td className="px-4 py-2 text-sm text-gray-700">Local market focus, regulatory compliance</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">IP Management Strategy</h4>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">All core IP centralized in Australian parent company</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Licensing agreements with subsidiaries for regional use</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Regional patent filings in key markets</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Royalty structure optimized for tax efficiency</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'markets' && (
              <div>
                <p className="paragraph mb-6">
                  Our global market strategy focuses on key regions with the highest growth potential for each product line,
                  with manufacturing centralized in India and sales operations in target markets.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-blue-50 p-3 rounded-lg text-center">
                    <div className="text-sm font-semibold text-blue-900">USA Market</div>
                    <div className="text-xl font-bold text-blue-800">Primary</div>
                    <p className="text-sm text-gray-600">Shelf Life & Super Wash</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg text-center">
                    <div className="text-sm font-semibold text-blue-900">India Market</div>
                    <div className="text-xl font-bold text-blue-800">Growing</div>
                    <p className="text-sm text-gray-600">Super Foods & Super Water</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg text-center">
                    <div className="text-sm font-semibold text-blue-900">Australia Market</div>
                    <div className="text-xl font-bold text-blue-800">Secondary</div>
                    <p className="text-sm text-gray-600">Shelf Life & R&D Hub</p>
                  </div>
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
                      <tr>
                        <td className="px-4 py-2 text-sm font-medium text-blue-900">Shelf Life Extension</td>
                        <td className="px-4 py-2 text-sm text-gray-700">USA, Australia</td>
                        <td className="px-4 py-2 text-sm text-gray-700">India</td>
                        <td className="px-4 py-2 text-sm text-gray-700">B2B focus on produce industry</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm font-medium text-blue-900">Produce & Meat Wash</td>
                        <td className="px-4 py-2 text-sm text-gray-700">USA</td>
                        <td className="px-4 py-2 text-sm text-gray-700">India</td>
                        <td className="px-4 py-2 text-sm text-gray-700">B2B focus on food processing</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm font-medium text-blue-900">Super Foods</td>
                        <td className="px-4 py-2 text-sm text-gray-700">India</td>
                        <td className="px-4 py-2 text-sm text-gray-700">India</td>
                        <td className="px-4 py-2 text-sm text-gray-700">B2C premium consumer market</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm font-medium text-blue-900">Super Water</td>
                        <td className="px-4 py-2 text-sm text-gray-700">India</td>
                        <td className="px-4 py-2 text-sm text-gray-700">India</td>
                        <td className="px-4 py-2 text-sm text-gray-700">B2C premium consumer market</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <ExpandableSection id="expansion" title="Future Market Expansion">
                  <p className="mb-4">Our phased market expansion strategy focuses on establishing strong positions in current markets before expanding to new regions:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Phase 1: Current Markets (2023-2025)</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">Strengthen USA position for Shelf Lifeand Super Wash</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">Expand India market for Super Foods and Super Water</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">Grow Australian market for Shelf Life</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Phase 2: New Markets (2026-2028)</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">Expand Shelf Lifeto EU and UK markets</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">Introduce Super Wash to Canada and Mexico</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">Launch Super Foods and Super Water in Southeast Asia</span>
                        </li>
                      </ul>
                    </div>
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

export default CompanyStructure;
