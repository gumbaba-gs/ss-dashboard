import React, { useState, useMemo, useCallback } from 'react';

const InventorySection = () => {
  const [activeCategory, setActiveCategory] = useState('berries');
  const [expandedItems, setExpandedItems] = useState({});

  // Improved toggle function with useCallback for better performance
  const toggleExpand = useCallback((itemId, e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    
    console.log('Toggling item:', itemId);
    
    setExpandedItems(prevState => {
      const newState = { ...prevState };
      newState[itemId] = !newState[itemId];
      return newState;
    });
  }, []);

  // Handle category change with useCallback
  const handleCategoryChange = useCallback((categoryId) => {
    setActiveCategory(categoryId);
    // Reset expanded items when changing categories
    setExpandedItems({});
  }, []);

  const inventoryData = {
    berries: {
      title: "Berry Family Shelf Life Extenders",
      subtitle: "For blueberry, strawberry, raspberry and other berries",
      icon: (
        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      items: [
        {
          id: "berries-liquid-na",
          title: "Concentrated Liquid - North America",
          status: [
            { label: "Organic", complete: true },
            { label: "Formulation Procured", complete: true },
            { label: "Lab Tested", complete: true },
            { label: "FDA Clearance", complete: true },
            { label: "Manufacturing Sample", complete: false, inProgress: true }
          ]
        },
        {
          id: "berries-liquid-au",
          title: "Concentrated Liquid - Australia",
          status: [
            { label: "Organic", complete: true },
            { label: "Formulation Procured", complete: true },
            { label: "Lab Tested", complete: true },
            { label: "FSANZ Clearance", complete: true },
            { label: "Manufacturing Sample", complete: false, inProgress: true }
          ]
        },
        {
          id: "berries-sachets",
          title: "Sachets Formulation",
          status: [
            { label: "Organic", complete: true },
            { label: "Formulation Procured", complete: true },
            { label: "Lab Tested", complete: true },
            { label: "FDA & FSANZ Clearance", complete: true }
          ]
        }
      ]
    },
    avocado: {
      title: "Avocado Shelf Life Extenders",
      subtitle: "Specialized solutions for avocado preservation",
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      items: [
        {
          id: "avocado-liquid-na",
          title: "Concentrated Liquid - North America",
          status: [
            { label: "Organic", complete: true },
            { label: "Formulation Procured", complete: true },
            { label: "Lab Tested", complete: true },
            { label: "Clearance Process", complete: false, inProgress: true }
          ]
        },
        {
          id: "avocado-liquid-au",
          title: "Concentrated Liquid - Australia",
          status: [
            { label: "Organic", complete: true },
            { label: "Lab Tested", complete: true },
            { label: "FDA Clearance", complete: true },
            { label: "Clearance Process", complete: false, inProgress: true }
          ]
        },
        {
          id: "avocado-sachets",
          title: "Sachet Formulation",
          status: [
            { label: "Organic", complete: true },
            { label: "Lab Tested", complete: true },
            { label: "FDA Clearance", complete: true },
            { label: "Clearance Process", complete: false, inProgress: true }
          ]
        }
      ]
    },
    flowers: {
      title: "Flower Preservation Solutions",
      subtitle: "Keep cut flowers fresh longer",
      icon: (
        <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      items: [
        {
          id: "flowers-rose-liquid",
          title: "Rose Concentrated Liquid",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Lab Tested", complete: true }
          ]
        }
      ]
    },
    vegetables: {
      title: "Vegetable Preservation Solutions",
      subtitle: "Extend shelf life of various vegetables",
      icon: (
        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      items: [
        {
          id: "vegetables-tomatoes",
          title: "Tomatoes",
          status: [
            { label: "Berry formulation works on it", complete: true },
            { label: "Ready for use", complete: true }
          ]
        },
        {
          id: "vegetables-leafy-greens",
          title: "Leafy Greens",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Lab Tested", complete: true }
          ]
        }
      ]
    },
    inProgress: {
      title: "Formulations in Development",
      subtitle: "Formulations procured, pending further development",
      icon: (
        <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
      items: [
        { 
          id: "in-progress-mango", 
          title: "Mango",
          status: [
            { label: "Formulation Procured", complete: true }
          ]
        },
        { 
          id: "in-progress-banana", 
          title: "Banana",
          status: [
            { label: "Formulation Procured", complete: true }
          ]
        },
        { 
          id: "in-progress-grapes", 
          title: "Grapes",
          status: [
            { label: "Formulation Procured", complete: true }
          ]
        },
        { 
          id: "in-progress-pineapple", 
          title: "Pineapple",
          status: [
            { label: "Formulation Procured", complete: true }
          ]
        },
        { 
          id: "in-progress-apple", 
          title: "Apple",
          status: [
            { label: "Formulation Procured", complete: true }
          ]
        },
        { 
          id: "in-progress-citrus", 
          title: "Citrus",
          status: [
            { label: "Formulation Procured", complete: true }
          ]
        },
        { 
          id: "in-progress-stone-fruits", 
          title: "Stone Fruits",
          status: [
            { label: "Formulation Procured", complete: true }
          ]
        },
        { 
          id: "in-progress-cherries", 
          title: "Cherries",
          status: [
            { label: "Formulation Procured", complete: true }
          ]
        }
      ]
    },
    produceWash: {
      title: "Advanced Produce Wash",
      subtitle: "Food safety and freshness solutions",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      items: [
        { 
          id: "produce-wash", 
          title: "Produce Wash Formulations",
          status: [
            { label: "Formulation Complete", complete: true },
            { label: "Lab Tested", complete: true }
          ]
        },
        { 
          id: "meat-wash", 
          title: "Meat Wash Formulations",
          status: [
            { label: "Formulation Complete", complete: true },
            { label: "Lab Tested", complete: true }
          ]
        }
      ]
    },
    superWater: {
      title: "Super Water™",
      subtitle: "Enhanced hydration solutions",
      icon: (
        <svg className="w-8 h-8 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12l-8 8-8-8m16-8l-8 8-8-8" />
        </svg>
      ),
      items: [
        { 
          id: "super-water-lifestyle", 
          title: "Lifestyle-Specific Waters",
          description: "Traveler's Hydrate™ and AlcoholDetox™",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Lab Tested", complete: false }
          ]
        },
        { 
          id: "super-water-cognitive", 
          title: "Mood & Cognitive Function Waters",
          description: "Brain-Boost and Stress Management solutions",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Lab Tested", complete: false }
          ]
        }
      ]
    }
  };

  const calculateInventoryStats = useMemo(() => {
    let totalItems = 0;
    let readyForManufacturing = 0;
    let complianceCleared = 0;
    let formulationProcured = 0;
    let labTested = 0;

    // Calculate totals across all categories
    Object.values(inventoryData).forEach(category => {
      category.items.forEach(item => {
        totalItems++;
        
        // Count formulation procured items
        if (item.status.some(s => s.label.includes("Formulation") && s.complete)) {
          formulationProcured++;
        }
        
        // Count lab tested items
        if (item.status.some(s => s.label.includes("Lab Tested") && s.complete)) {
          labTested++;
        }
        
        // Count items with compliance clearance
        if (item.status.some(s => 
          (s.label.includes("FDA") || s.label.includes("FSANZ") || s.label.includes("Clearance")) && 
          s.complete
        )) {
          complianceCleared++;
        }
        
        // Count items ready for manufacturing
        if (item.status.some(s => 
          (s.label.includes("Ready") || 
          (s.label.includes("Manufacturing") && s.inProgress)) 
        )) {
          readyForManufacturing++;
        }
      });
    });

    return {
      totalItems,
      readyForManufacturing,
      complianceCleared,
      formulationProcured,
      labTested
    };
  }, [inventoryData]);

  const categories = [
    { id: 'berries', label: 'Berry Family' },
    { id: 'avocado', label: 'Avocado' },
    { id: 'flowers', label: 'Flowers' },
    { id: 'vegetables', label: 'Vegetables' },
    { id: 'inProgress', label: 'In Development' },
    { id: 'produceWash', label: 'Produce Wash' },
    { id: 'superWater', label: 'Super Water™' }
  ];

  const StatusIcon = ({ complete, inProgress }) => {
    if (complete) {
      return (
        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      );
    } else if (inProgress) {
      return (
        <svg className="w-5 h-5 text-yellow-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    } else {
      return (
        <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    }
  };

  const activeData = inventoryData[activeCategory];
  const stats = calculateInventoryStats; // This is already the calculated value from useMemo

  return (
    <section id="inventory" className="py-16 gradient-bg relative z-10">
      <div className="container-padding relative">
        <h2 className="heading text-center">Formulations Inventory</h2>
        <p className="paragraph max-w-3xl mx-auto text-center mb-8">
          Track the status of our innovative formulations across different categories, from development to regulatory clearance.
        </p>

        {/* Inventory Summary Stats */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-10 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Formulation Development Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-700">{stats.readyForManufacturing}</div>
              <p className="text-sm text-blue-800">Ready for Manufacturing</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-700">{stats.complianceCleared}</div>
              <p className="text-sm text-green-800">Compliance Cleared</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-700">{stats.labTested}</div>
              <p className="text-sm text-purple-800">Lab Tested</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-yellow-700">{stats.formulationProcured}</div>
              <p className="text-sm text-yellow-800">Formulation Procured</p>
            </div>
          </div>
        </div>

        {/* Category Navigation - Enhanced for better interaction */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 relative z-20" role="tablist" style={{ pointerEvents: 'auto' }}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 relative z-20 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-blue-800 border border-blue-200 hover:bg-blue-50'
              }`}
              tabIndex={0}
              role="tab"
              aria-selected={activeCategory === category.id}
              aria-controls={`${category.id}-panel`}
              id={`${category.id}-tab`}
              type="button"
              style={{ pointerEvents: 'auto' }}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Category Content - Enhanced with proper ARIA attributes */}
        <div
          className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100"
          role="tabpanel"
          id={`${activeCategory}-panel`}
          aria-labelledby={`${activeCategory}-tab`}
        >
          <div className="p-6 bg-gradient-to-r from-blue-50 to-white border-b border-blue-100">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-white p-3 shadow-md">
                {activeData.icon}
              </div>
              <div>
                <h3 className="subheading text-blue-900">{activeData.title}</h3>
                <p className="paragraph mb-0">{activeData.subtitle}</p>
              </div>
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            {activeData.items.map((item) => {
              const isExpanded = !!expandedItems[item.id];
              
              return (
                <div
                  key={item.id}
                  className="p-6 hover:bg-gray-50 transition duration-150 relative z-10"
                  style={{ pointerEvents: 'auto' }}
                >
                  <div
                    className="flex justify-between items-center cursor-pointer relative z-10"
                    onClick={(e) => {
                      if (!e.target.closest('button')) {
                        toggleExpand(item.id, e);
                      }
                    }}
                    style={{ pointerEvents: 'auto' }}
                  >
                    <h4 className="font-semibold text-lg text-blue-800">{item.title}</h4>
                    <button
                      className="text-blue-500 hover:text-blue-700 p-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full relative z-20"
                      onClick={(e) => toggleExpand(item.id, e)}
                      aria-expanded={isExpanded}
                      aria-controls={`${item.id}-content`}
                      type="button"
                      style={{ pointerEvents: 'auto' }}
                    >
                      <svg
                        className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'transform rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  
                  {item.description && (
                    <p className="text-gray-600 mt-1">{item.description}</p>
                  )}
                  
                  {/* Always render the content but control visibility with CSS */}
                  <div
                    id={`${item.id}-content`}
                    className={`mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-300 ease-in-out ${
                      isExpanded ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'
                    }`}
                  >
                    {item.status.map((status, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <StatusIcon complete={status.complete} inProgress={status.inProgress} />
                        <span className={status.complete ? 'text-green-800' : status.inProgress ? 'text-yellow-700' : 'text-gray-500'}>
                          {status.label}
                          {status.inProgress && ' (In Progress)'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InventorySection;