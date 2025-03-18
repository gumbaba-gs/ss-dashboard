import React, { useState, useEffect } from 'react';

const ProduceWashOpportunity = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSection, setExpandedSection] = useState('benefits');
  
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
    { id: 'overview', label: 'Overview', icon: '📋' },
    { id: 'produceWash', label: 'Produce Wash', icon: '🥬' },
    { id: 'meatWash', label: 'Meat Wash', icon: '🥩' },
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

  // Simple progress bar component
  const ProgressBar = ({ label, value }) => (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-blue-900">{label}</span>
        <span className="text-sm font-semibold text-blue-800">{value}</span>
      </div>
      <div className="w-full bg-blue-100 rounded-full h-2.5">
        <div 
          className="bg-blue-600 h-2.5 rounded-full" 
          style={{ width: value }}
        ></div>
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
      <div className="container-padding relative z-10">
        <h2 className="heading text-center">
          Market Opportunity: Advanced Wash Solutions
        </h2>
        <p className="paragraph text-center max-w-3xl mx-auto mb-8">
          Our innovative wash technologies for produce and meat address critical food safety challenges while extending shelf life and reducing waste.
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
              {activeTab === 'overview' && "Advanced Produce & Meat Wash Solutions"}
              {activeTab === 'produceWash' && "Produce Wash Solutions"}
              {activeTab === 'meatWash' && "Meat Wash Solutions"}
              {activeTab === 'launchStrategy' && "Market Launch Strategy"}
            </h3>
            <p className="text-gray-600">
              {activeTab === 'overview' && "Enhancing food safety and extending shelf life"}
              {activeTab === 'produceWash' && "For fruits, vegetables, and leafy greens"}
              {activeTab === 'meatWash' && "For beef, poultry, pork, and other meats"}
              {activeTab === 'launchStrategy' && "Multi-phase expansion across target markets"}
            </p>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div>
                <p className="paragraph">
                  Our innovative wash solutions address critical safety and preservation challenges in the fresh produce and meat industries, significantly reducing spoilage and contamination risks while extending marketable shelf life.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  {/* Produce Wash Overview */}
                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                    <div className="flex items-center mb-4">
                      <span className="text-2xl mr-3">🥬</span>
                      <h3 className="text-xl font-semibold text-blue-800">Produce Wash</h3>
                    </div>
                    <p className="mb-4">Our produce wash solutions eliminate harmful pathogens while extending shelf life by 3-7 days, dramatically reducing waste while ensuring food safety.</p>
                    <button 
                      onClick={() => setActiveTab('produceWash')}
                      className="text-blue-600 font-medium hover:text-blue-800 flex items-center"
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Meat Wash Overview */}
                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                    <div className="flex items-center mb-4">
                      <span className="text-2xl mr-3">🥩</span>
                      <h3 className="text-xl font-semibold text-blue-800">Meat Wash</h3>
                    </div>
                    <p className="mb-4">Our meat wash formulations provide superior pathogen control and shelf life extension without affecting color, texture or flavor.</p>
                    <button 
                      onClick={() => setActiveTab('meatWash')}
                      className="text-blue-600 font-medium hover:text-blue-800 flex items-center"
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Target Markets</h3>
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4">
                    {["USA", "Canada", "Mexico", "Australia", "New Zealand"].map((country) => (
                      <div 
                        key={country}
                        className="bg-white border border-blue-100 rounded-lg p-4 text-center shadow"
                      >
                        <h4 className="font-semibold text-blue-900">{country}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'produceWash' && (
              <div>
                {/* Statistics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <StatCard icon="🌱" label="Global Market Size" value="$4.8B" />
                  <StatCard icon="📈" label="Annual Growth Rate" value="7.2%" />
                  <StatCard icon="🥗" label="Spoilage Reduction" value="Up to 42%" />
                  <StatCard icon="🗓️" label="Shelf Life Extension" value="3-7 days" />
                </div>

                <ExpandableSection id="pathogens" title="Pathogen Reduction Efficacy">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <ProgressBar label="E. coli" value="99.8%" />
                    <ProgressBar label="Salmonella" value="99.9%" />
                    <ProgressBar label="Listeria" value="99.7%" />
                    <ProgressBar label="Norovirus" value="99.5%" />
                  </div>
                </ExpandableSection>

                <ExpandableSection id="benefits" title="Key Benefits">
                  <ul className="space-y-2">
                    {[
                      "Eliminates harmful pathogens without chemical residues",
                      "Maintains natural flavor and nutritional profiles",
                      "Extends shelf life by controlling microbial activity",
                      "Reduces water consumption compared to conventional wash systems",
                      "FDA and FSANZ compliant formulation"
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </ExpandableSection>
              </div>
            )}

            {activeTab === 'meatWash' && (
              <div>
                {/* Statistics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <StatCard icon="🥩" label="Global Market Size" value="$3.2B" />
                  <StatCard icon="📈" label="Annual Growth Rate" value="6.5%" />
                  <StatCard icon="🥓" label="Spoilage Reduction" value="Up to 35%" />
                  <StatCard icon="🗓️" label="Shelf Life Extension" value="2-5 days" />
                </div>

                <ExpandableSection id="pathogens" title="Pathogen Reduction Efficacy">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <ProgressBar label="E. coli O157:H7" value="99.9%" />
                    <ProgressBar label="Salmonella spp." value="99.8%" />
                    <ProgressBar label="Campylobacter" value="99.7%" />
                    <ProgressBar label="Listeria monocytogenes" value="99.6%" />
                  </div>
                </ExpandableSection>

                <ExpandableSection id="benefits" title="Key Benefits">
                  <ul className="space-y-2">
                    {[
                      "Eliminates harmful pathogens while maintaining meat quality",
                      "Preserves color, texture, and flavor profiles",
                      "Extends shelf life without altering product characteristics",
                      "All-natural formulation with no harmful chemicals",
                      "Compliant with USDA, FDA, and international food safety standards"
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </ExpandableSection>
              </div>
            )}
            
            {activeTab === 'launchStrategy' && (
              <div>
                <p className="paragraph mb-6">Our strategic market launch plan for Advanced Produce & Meat Wash Solutions will begin in the USA with existing facilitators, followed by phased expansion into Canada, Mexico, Australia, and New Zealand.</p>
                
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-3">
                      1
                    </div>
                    <h3 className="font-semibold text-lg text-blue-800">Phase 1: USA Market Entry (2025-2026)</h3>
                  </div>
                  <div className="ml-11">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Partner with existing food processing facilitators in key agricultural regions</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Initial focus on California, Florida, and Midwest produce processing centers</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Conduct pilot programs with major produce suppliers and meat processors</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Establish FDA compliance and certification for all formulations</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-3">
                      2
                    </div>
                    <h3 className="font-semibold text-lg text-blue-800">Phase 2: Expansion to Canada & Mexico (2026-2027)</h3>
                  </div>
                  <div className="ml-11">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Leverage USMCA trade agreement for streamlined market entry</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Canada expansion focused on British Columbia and Ontario produce regions</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Mexico expansion targeting major avocado and berry export operations</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Establish local manufacturing partnerships to reduce shipping costs</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-3">
                      3
                    </div>
                    <h3 className="font-semibold text-lg text-blue-800">Phase 3: Australia & New Zealand Launch (2027-2028)</h3>
                  </div>
                  <div className="ml-11">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Secure FSANZ approval for all wash solution formulations</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Partner with major Australian produce exporters in Queensland and Victoria</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>New Zealand focus on kiwifruit and apple preservation solutions</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Develop specialized meat wash solutions for lamb and beef export markets</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
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
                        <div className="text-xs">$12M</div>
                      </div>
                      <div className="text-center">
                        <div className="w-4 h-4 rounded-full bg-blue-600 mb-1 mx-auto"></div>
                        <div className="text-sm font-medium">2026</div>
                        <div className="text-xs">$28M</div>
                      </div>
                      <div className="text-center">
                        <div className="w-4 h-4 rounded-full bg-blue-600 mb-1 mx-auto"></div>
                        <div className="text-sm font-medium">2028</div>
                        <div className="text-xs">$65M+</div>
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

export default ProduceWashOpportunity;