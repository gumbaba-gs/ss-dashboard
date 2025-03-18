import React, { useState } from 'react';

const ProductValidation = () => {
  const [activeTab, setActiveTab] = useState('berryFormula');
  const [expandedCard, setExpandedCard] = useState('shelfLife');
  
  const toggleCard = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };
  
  // Tab options
  const tabOptions = [
    { id: 'berryFormula', label: 'Berry Formula', icon: '🍓' },
    { id: 'sachetPerformance', label: 'Sachet Performance', icon: '📦' },
    { id: 'avocadoFlowers', label: 'Avocado & Flowers', icon: '🥑' },
    { id: 'comparisonData', label: 'Comparison Data', icon: '📊' }
  ];

  // Expandable card component with improved interaction
  const ExpandableCard = ({ id, title, children }) => (
    <div className="bg-white rounded-lg shadow overflow-hidden mb-4 relative z-10">
      <div
        className="p-4 flex justify-between items-center cursor-pointer bg-gradient-to-r from-blue-50 to-white relative z-20"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleCard(id);
        }}
        style={{ pointerEvents: 'auto' }}
      >
        <h3 className="font-semibold text-lg text-blue-800">{title}</h3>
        <svg
          className={`w-5 h-5 text-blue-600 transition-transform duration-200 ${expandedCard === id ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div
        className={`transition-all duration-300 ease-in-out ${
          expandedCard === id ? "p-4 max-h-[2000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {children}
      </div>
    </div>
  );

  // Returns berry formula tab content
  const BerryFormulaTab = () => (
    <div>
      <ExpandableCard id="shelfLife" title="Extended Shelf Life Metrics">
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold text-blue-900 mb-3">Key Performance Metrics</h4>
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-left text-xs font-medium text-blue-800 uppercase py-2">Metric</th>
                <th className="text-left text-xs font-medium text-red-800 uppercase py-2">Control</th>
                <th className="text-left text-xs font-medium text-blue-800 uppercase py-2">Treated</th>
                <th className="text-left text-xs font-medium text-green-800 uppercase py-2">Improvement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 text-sm font-medium text-blue-900">Visual Quality</td>
                <td className="py-2 text-sm text-red-700">7 days</td>
                <td className="py-2 text-sm text-blue-700">35+ days</td>
                <td className="py-2 text-sm font-semibold text-green-700">5x</td>
              </tr>
              <tr>
                <td className="py-2 text-sm font-medium text-blue-900">Firmness</td>
                <td className="py-2 text-sm text-red-700">5 days</td>
                <td className="py-2 text-sm text-blue-700">32 days</td>
                <td className="py-2 text-sm font-semibold text-green-700">6.4x</td>
              </tr>
              <tr>
                <td className="py-2 text-sm font-medium text-blue-900">Flavor</td>
                <td className="py-2 text-sm text-red-700">6 days</td>
                <td className="py-2 text-sm text-blue-700">30 days</td>
                <td className="py-2 text-sm font-semibold text-green-700">5x</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div>
          <h4 className="font-semibold text-blue-900 mb-2">Research Highlights</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>5x shelf life extension verified by multiple independent labs</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Consistent results across strawberries, blueberries, and raspberries</span>
            </li>
          </ul>
        </div>
      </ExpandableCard>
      
      <ExpandableCard id="certifications" title="Certifications & Approvals">
        <div className="bg-blue-50 p-4 rounded-lg">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-left text-xs font-medium text-blue-800 uppercase py-2">Certification</th>
                <th className="text-left text-xs font-medium text-blue-800 uppercase py-2">Status</th>
                <th className="text-left text-xs font-medium text-blue-800 uppercase py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 text-sm font-medium text-blue-900">FDA GRAS Status</td>
                <td className="py-2 text-sm text-green-700">Approved</td>
                <td className="py-2 text-sm">March 2024</td>
              </tr>
              <tr>
                <td className="py-2 text-sm font-medium text-blue-900">USDA Organic Compatible</td>
                <td className="py-2 text-sm text-yellow-700">In Process</td>
                <td className="py-2 text-sm">April 2024</td>
              </tr>
              <tr>
                <td className="py-2 text-sm font-medium text-blue-900">EU Novel Food</td>
                <td className="py-2 text-sm text-yellow-700">In Process</td>
                <td className="py-2 text-sm">July 2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ExpandableCard>
    </div>
  );

  // Returns sachet performance tab content
  const SachetPerformanceTab = () => (
    <div>
      <ExpandableCard id="releaseProfile" title="Controlled Release Profile">
        <div className="mb-6">
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold text-blue-900 mb-3">Release Metrics</h4>
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="text-left text-xs font-medium text-blue-800 uppercase py-2">Metric</th>
                  <th className="text-left text-xs font-medium text-blue-800 uppercase py-2">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 text-sm font-medium text-blue-900">Initial Release (24hrs)</td>
                  <td className="py-2 text-sm text-blue-700">12% of active compounds</td>
                </tr>
                <tr>
                  <td className="py-2 text-sm font-medium text-blue-900">Peak Effectiveness</td>
                  <td className="py-2 text-sm text-blue-700">Day 7-21</td>
                </tr>
                <tr>
                  <td className="py-2 text-sm font-medium text-blue-900">Release Completion</td>
                  <td className="py-2 text-sm text-blue-700">35 days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </ExpandableCard>
      
      <ExpandableCard id="applicationMethod" title="Application Method Efficiency">
        <div className="bg-white p-4 rounded-lg border border-blue-100">
          <h4 className="font-semibold text-blue-900 mb-3">Recommendations</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Dual Sachet approach recommended for premium products</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Single Sachet adequate for standard retail applications</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Integrated packaging solution for high-volume processors</span>
            </li>
          </ul>
        </div>
      </ExpandableCard>
    </div>
  );

  // Returns avocado & flowers tab content
  const AvocadoFlowersTab = () => (
    <div>
      <ExpandableCard id="preliminaryResults" title="Preliminary Testing Results">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-blue-900 mb-3">Avocado (65% Complete)</h4>
            <div className="bg-blue-50 p-4 rounded-lg">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="text-left text-xs font-medium text-blue-800 uppercase py-2">Metric</th>
                    <th className="text-left text-xs font-medium text-blue-800 uppercase py-2">Performance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 text-sm font-medium text-blue-900">Ripening Control</td>
                    <td className="py-2 text-sm text-blue-700">Excellent - 5.2x extension</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-sm font-medium text-blue-900">Color Preservation</td>
                    <td className="py-2 text-sm text-blue-700">Very Good - minimal browning</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-blue-900 mb-3">Flowers (52% Complete)</h4>
            <div className="bg-blue-50 p-4 rounded-lg">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="text-left text-xs font-medium text-blue-800 uppercase py-2">Metric</th>
                    <th className="text-left text-xs font-medium text-blue-800 uppercase py-2">Performance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 text-sm font-medium text-blue-900">Petal Freshness</td>
                    <td className="py-2 text-sm text-blue-700">Excellent - 5.1x extension</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-sm font-medium text-blue-900">Color Vibrancy</td>
                    <td className="py-2 text-sm text-blue-700">Excellent - 92% retention</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </ExpandableCard>
      
      <ExpandableCard id="timeline" title="Testing Completion Timeline">
        <div className="flex items-start mb-4">
          <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4">
            85%
          </div>
          <div className="flex-grow">
            <h4 className="text-lg font-semibold text-blue-800">Lab Testing Phase 2</h4>
            <p className="text-sm text-blue-700">Target: June 2024</p>
          </div>
        </div>
        
        <div className="flex items-start mb-4">
          <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4">
            45%
          </div>
          <div className="flex-grow">
            <h4 className="text-lg font-semibold text-blue-800">Field Trials</h4>
            <p className="text-sm text-blue-700">Target: August 2024</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4">
            30%
          </div>
          <div className="flex-grow">
            <h4 className="text-lg font-semibold text-blue-800">Commercial Partner Testing</h4>
            <p className="text-sm text-blue-700">Target: September 2024</p>
          </div>
        </div>
      </ExpandableCard>
    </div>
  );

  // Returns comparison data tab content
  const ComparisonDataTab = () => (
    <div>
      <ExpandableCard id="visualComparisons" title="Visual Comparisons Over Time">
        <div className="mb-6">
          <h4 className="font-semibold text-blue-900 mb-2">Strawberries</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-blue-200">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase">Day</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-red-800 uppercase">Untreated</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase">Treated</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-blue-100">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-blue-900">Day 7</td>
                  <td className="px-6 py-4 text-sm text-red-700">Visible mold, softening</td>
                  <td className="px-6 py-4 text-sm text-blue-700">Fresh appearance, firm</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-blue-900">Day 14</td>
                  <td className="px-6 py-4 text-sm text-red-700">Severe deterioration</td>
                  <td className="px-6 py-4 text-sm text-blue-700">Minimal changes, edible</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-blue-900">Day 21</td>
                  <td className="px-6 py-4 text-sm text-red-700">Complete loss</td>
                  <td className="px-6 py-4 text-sm text-blue-700">Good color, edible</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </ExpandableCard>
      
      <ExpandableCard id="nutritionalAnalysis" title="Nutritional Retention Analysis">
        <div className="bg-blue-50 p-4 rounded-lg">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-left text-xs font-medium text-blue-800 uppercase py-2">Nutrient</th>
                <th className="text-left text-xs font-medium text-red-800 uppercase py-2">Untreated</th>
                <th className="text-left text-xs font-medium text-blue-800 uppercase py-2">Treated</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 text-sm font-medium text-blue-900">Vitamin C</td>
                <td className="py-2 text-sm text-red-700">35% retention</td>
                <td className="py-2 text-sm text-blue-700">86% retention</td>
              </tr>
              <tr>
                <td className="py-2 text-sm font-medium text-blue-900">Antioxidants</td>
                <td className="py-2 text-sm text-red-700">42% retention</td>
                <td className="py-2 text-sm text-blue-700">91% retention</td>
              </tr>
              <tr>
                <td className="py-2 text-sm font-medium text-blue-900">Flavonoids</td>
                <td className="py-2 text-sm text-red-700">38% retention</td>
                <td className="py-2 text-sm text-blue-700">88% retention</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ExpandableCard>
    </div>
  );

  return (
    <section className="relative py-16 gradient-bg">
      <div className="container-padding relative z-10" style={{ pointerEvents: 'auto' }}>
        <h2 className="heading text-center">
          Product Validation & Testing Results
        </h2>
        <p className="paragraph text-center max-w-3xl mx-auto mb-8">
          Comprehensive analysis of our preservation solutions' performance across multiple product categories.
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
              className={`px-4 py-3 rounded-full flex items-center transition duration-300 relative z-20 ${
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

        {/* Content container with improved interaction */}
        <div className="bg-white bg-opacity-90 rounded-xl shadow-lg overflow-hidden mb-8 relative z-10" style={{ pointerEvents: 'auto' }}>
          {/* Header for current tab */}
          <div className="p-6 bg-gradient-to-r from-blue-50 to-white border-b border-blue-100 relative z-10">
            <h3 className="subheading">
              {activeTab === 'berryFormula' && "Berry Formula Testing Results"}
              {activeTab === 'sachetPerformance' && "Sachet Performance Testing"}
              {activeTab === 'avocadoFlowers' && "Avocado & Flowers Testing"}
              {activeTab === 'comparisonData' && "Comparative Analysis"}
            </h3>
            <p className="text-gray-600">
              {activeTab === 'berryFormula' && "Comprehensive validation data for strawberry, blueberry, and raspberry preservation"}
              {activeTab === 'sachetPerformance' && "Controlled release effectiveness and application efficiency data"}
              {activeTab === 'avocadoFlowers' && "Preliminary results and testing timeline"}
              {activeTab === 'comparisonData' && "Side-by-side testing of treated vs. untreated produce"}
            </p>
          </div>

          {/* Tab content */}
          <div className="p-6">
            {activeTab === 'berryFormula' && <BerryFormulaTab />}
            {activeTab === 'sachetPerformance' && <SachetPerformanceTab />}
            {activeTab === 'avocadoFlowers' && <AvocadoFlowersTab />}
            {activeTab === 'comparisonData' && <ComparisonDataTab />}
          </div>
        </div>

        {/* Background Particles - reusing the existing site design with improved z-index */}
        <div className="particles-bg" style={{ zIndex: -1, pointerEvents: 'none' }}>
          {[...Array(12)].map((_, i) => (
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
      </div>
    </section>
  );
};

export default ProductValidation;