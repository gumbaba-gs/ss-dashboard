import React, { useState, useEffect, useMemo, useCallback } from 'react';

const PreservativesInventory = () => {
  const [activeCategory, setActiveCategory] = useState('berries');
  const [expandedSection, setExpandedSection] = useState('productDetails');
  const [expandedItems, setExpandedItems] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Set visible after component mount to trigger animations
    setIsVisible(true);
  }, []);

  // Improved toggle function with useCallback for better performance
  const toggleExpand = useCallback((itemId, e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    
    setExpandedItems(prevState => {
      const newState = { ...prevState };
      newState[itemId] = !newState[itemId];
      return newState;
    });
  }, []);

  // Toggle section expansion
  const toggleSection = (sectionId) => {
    if (expandedSection === sectionId) {
      setExpandedSection(null);
    } else {
      setExpandedSection(sectionId);
    }
  };

  // Handle category change with useCallback
  const handleCategoryChange = useCallback((categoryId) => {
    setActiveCategory(categoryId);
    // Reset expanded items when changing categories
    setExpandedItems({});
    // Set default expanded section
    setExpandedSection('productDetails');
  }, []);
  const inventoryData = {
    berries: {
      title: "Berry Family Shelf Life Extenders",
      subtitle: "For blueberry, strawberry, raspberry and other berries",
      description: "Our Berry Family formulations extend the shelf life of all types of berries, maintaining freshness, appearance, and nutritional value significantly longer than untreated produce.",
      icon: (
        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      stats: [
        { label: "Formulations Available", value: "4", icon: "🧪" },
        { label: "Development Phase", value: "Manufacturing", icon: "✅" },
        { label: "Shelf Life Extension", value: "3-5x", icon: "⏱️" },
        { label: "Target Market", value: "Global", icon: "🌎" }
      ],
      items: [
        {
          id: "berries-liquid-na",
          title: "Concentrated Liquid - North America",
          description: "Liquid concentrate specifically formulated for berry preservation in North American markets.",
          benefit: "Extends shelf life by 300% while maintaining flavor profile and nutritional integrity.",
          fit: "Ideal for supermarkets, distributors and berry farms in the US and Canada.",
          regulatory: "FDA approved for organic and conventional produce.",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Organic", complete: true },
            { label: "Lab Tested", complete: true },
            { label: "FDA Clearance", complete: true },
            { label: "Manufacturing Sample", complete: false, inProgress: true }
          ]
        },
        {
          id: "berries-liquid-au",
          title: "Concentrated Liquid - Australia",
          description: "Liquid concentrate specifically formulated for berry preservation in Australian markets.",
          benefit: "Extends shelf life by 300% while maintaining flavor profile and nutritional integrity.",
          fit: "Ideal for supermarkets, distributors and berry farms in Australia and New Zealand.",
          regulatory: "FSANZ approved for organic and conventional produce.",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Organic", complete: true },
            { label: "Lab Tested", complete: true },
            { label: "FSANZ Clearance", complete: true },
            { label: "Manufacturing Sample", complete: false, inProgress: true }
          ]
        },
        {
          id: "berries-solid",
          title: "Concentrated Powder",
          description: "Powdered concentrate for berry preservation with enhanced stability.",
          benefit: "Extended product shelf life and easier shipping compared to liquid formula.",
          fit: "Perfect for regions with challenging cold chain logistics.",
          regulatory: "FDA and FSANZ approved.",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Organic", complete: true },
            { label: "Lab Tested", complete: true },
            { label: "FDA & FSANZ Clearance", complete: true },
            { label: "Manufacturing Sample", complete: false, inProgress: true }
          ]
        },
        {
          id: "berries-sachets",
          title: "Sachets Formulation",
          description: "Pre-measured sachets for consumer convenience and precise application.",
          benefit: "Easy application for home users and small businesses.",
          fit: "Ideal for retail sales and home use markets.",
          regulatory: "FDA & FSANZ Clearance for consumer applications.",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Organic", complete: true },
            { label: "Lab Tested", complete: true },
            { label: "FDA & FSANZ Clearance", complete: true },
            { label: "Manufacturing Sample", complete: true }
          ]
        }
      ]
    },
    avocado: {
      title: "Avocado Shelf Life Extenders",
      subtitle: "Specialized solutions for avocado preservation",
      description: "Our Avocado formulations significantly delay ripening and extend prime eating quality, addressing one of the most challenging preservation problems in fresh produce.",
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      stats: [
        { label: "Formulations Available", value: "4", icon: "🧪" },
        { label: "Development Phase", value: "Clearance", icon: "📋" },
        { label: "Shelf Life Extension", value: "4-6x", icon: "⏱️" },
        { label: "Target Market", value: "Global", icon: "🌎" }
      ],
      items: [
        {
          id: "avocado-liquid-na",
          title: "Concentrated Liquid - North America",
          description: "Liquid concentrate for avocado preservation tailored to North American supply chains.",
          benefit: "Extends window of perfect ripeness by up to 14 days.",
          fit: "Ideal for producers, distributors and retailers in US and Mexico.",
          regulatory: "FDA clearance in progress.",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Organic", complete: true },
            { label: "Lab Tested", complete: true },
            { label: "Clearance Process", complete: false, inProgress: true }
          ]
        },
        {
          id: "avocado-liquid-au",
          title: "Concentrated Liquid - Australia",
          description: "Liquid concentrate for avocado preservation tailored to Australian/NZ supply chains.",
          benefit: "Extends window of perfect ripeness by up to 14 days.",
          fit: "Ideal for Australia/NZ producers and retailers.",
          regulatory: "FSANZ clearance in progress.",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Organic", complete: true },
            { label: "Lab Tested", complete: true },
            { label: "Clearance Process", complete: false, inProgress: true }
          ]
        },
        {
          id: "avocado-solid",
          title: "Concentrated Powder",
          description: "Powdered concentrate for avocado preservation with enhanced stability.",
          benefit: "Extends shelf life significantly with simple application process.",
          fit: "Perfect for bulk processing facilities.",
          regulatory: "FDA and FSANZ approved.",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Organic", complete: true },
            { label: "Lab Tested", complete: true },
            { label: "FDA & FSANZ Clearance", complete: true },
            { label: "Manufacturing Sample", complete: false, inProgress: true }
          ]
        },
        {
          id: "avocado-sachets",
          title: "Sachet Formulation",
          description: "Pre-measured sachets for simple application in retail and home environments.",
          benefit: "Consumer-friendly application for single fruit treatment.",
          fit: "Ideal for retail and consumer markets.",
          regulatory: "Clearance in progress for consumer applications.",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Organic", complete: true },
            { label: "Lab Tested", complete: true },
            { label: "Clearance Process", complete: false, inProgress: true }
          ]
        }
      ]
    },
    flowers: {
      title: "Flower Preservation Solutions",
      subtitle: "Keep cut flowers fresh longer",
      description: "Our Flower Preservation formulations extend the vase life of cut flowers, maintaining appearance and fragrance for significantly longer periods.",
      icon: (
        <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      stats: [
        { label: "Formulations Available", value: "2", icon: "🧪" },
        { label: "Development Phase", value: "Lab Testing", icon: "🔬" },
        { label: "Vase Life Extension", value: "2-3x", icon: "⏱️" },
        { label: "Target Market", value: "Global", icon: "🌎" }
      ],
      items: [
        {
          id: "flowers-rose-liquid",
          title: "Rose Concentrated Liquid",
          description: "Specialized formula optimized for roses and similar flower types.",
          benefit: "Doubles vase life while maintaining bloom quality and fragrance.",
          fit: "Perfect for florists, wedding planners, and event companies.",
          regulatory: "Non-toxic, environmentally safe formulation.",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Lab Tested", complete: true },
            { label: "Safety Certification", complete: true },
            { label: "Manufacturing Sample", complete: false, inProgress: true }
          ]
        }, 
        {
          id: "flowers-solid",
          title: "Concentrated Powder for Flowers",
          description: "Universal powder formula suitable for most cut flower varieties.",
          benefit: "Easy to store and ship, with simple water-mixing application.",
          fit: "Ideal for retail consumer markets and flower delivery services.",
          regulatory: "FSANZ approved, FDA pending.",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Organic", complete: true },
            { label: "Lab Tested", complete: true },
            { label: "FSANZ Clearance", complete: true },
            { label: "Manufacturing Sample", complete: false, inProgress: true }
          ]
        }
      ]
    },
    vegetables: {
      title: "Vegetable Preservation Solutions",
      subtitle: "Extend shelf life of various vegetables",
      description: "Our Vegetable Preservation formulations are designed to maintain freshness, texture, and nutritional value of a wide variety of vegetables.",
      icon: (
        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      stats: [
        { label: "Formulations Available", value: "2", icon: "🧪" },
        { label: "Development Phase", value: "Early Testing", icon: "🔬" },
        { label: "Shelf Life Extension", value: "2-3x", icon: "⏱️" },
        { label: "Target Market", value: "Commercial", icon: "🏪" }
      ],
      items: [
        {
          id: "vegetables-tomatoes",
          title: "Tomatoes",
          description: "Specialized formula for preserving tomato freshness and preventing spoilage.",
          benefit: "Extends shelf life while maintaining flavor and texture.",
          fit: "Ideal for producers, distributors and retailers.",
          regulatory: "Early-stage testing, pending regulatory submissions.",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Organic Compatible", complete: true },
            { label: "Lab Tested", complete: true },
            { label: "Safety Assessment", complete: false, inProgress: true },
            { label: "Regulatory Approval", complete: false }
          ]
        },
        {
          id: "vegetables-leafy-greens",
          title: "Leafy Greens",
          description: "Formula designed for delicate leafy greens preservation challenges.",
          benefit: "Dramatically reduces wilting and maintains nutritional profile.",
          fit: "Perfect for packaged salad producers and distributors.",
          regulatory: "Initial safety testing complete, efficacy validation in progress.",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Initial Lab Testing", complete: true },
            { label: "Extended Testing", complete: false, inProgress: true },
            { label: "Regulatory Assessment", complete: false }
          ]
        }
      ]
    },
    inProgress: {
      title: "Formulations in Development",
      subtitle: "Formulations procured, pending further development",
      description: "These innovative formulations are in earlier stages of our development pipeline, having shown promising initial results.",
      icon: (
        <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
      stats: [
        { label: "Formulations in Pipeline", value: "8", icon: "🧪" },
        { label: "Development Phase", value: "Early Stage", icon: "🔬" },
        { label: "Focus Areas", value: "Tropical & Stone Fruits", icon: "🍑" },
        { label: "Target Timeline", value: "12-18 Months", icon: "📅" }
      ],
      items: [
        { 
          id: "in-progress-mango", 
          title: "Mango",
          description: "Specialized formulation for tropical mango preservation.",
          benefit: "Initial tests show potential for significant shelf life extension.",
          fit: "Global mango export markets, particularly Asia and Americas.",
          regulatory: "Initial safety assessment planned for Q3.",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Initial Testing", complete: false, inProgress: true }
          ]
        },
        { 
          id: "in-progress-banana", 
          title: "Banana",
          description: "Specialized formulation targeting banana ripening control.",
          benefit: "Potential to revolutionize banana logistics and reduce waste.",
          fit: "Global banana supply chain from plantation to retail.",
          regulatory: "Theoretical assessment phase.",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Initial Testing", complete: false, inProgress: true }
          ]
        },
        { 
          id: "in-progress-grapes", 
          title: "Grapes",
          description: "Formulation designed to maintain grape cluster integrity and freshness.",
          benefit: "Addresses dehydration and stem desiccation in table grapes.",
          fit: "Table grape producers and exporters worldwide.",
          regulatory: "Planning stage for initial testing.",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Lab Preparation", complete: false, inProgress: true }
          ]
        },
        { 
          id: "in-progress-pineapple", 
          title: "Pineapple",
          description: "Specialized formula for cut and whole pineapple preservation.",
          benefit: "Shows promise for extending tropical fruit freshness.",
          fit: "Fresh-cut processors and whole fruit exporters.",
          regulatory: "Conceptual formulation under review.",
          status: [
            { label: "Formulation Procured", complete: true }
          ]
        },
        { 
          id: "in-progress-apple", 
          title: "Apple",
          description: "Formulation targeting extended freshness and crispness retention.",
          benefit: "Potential to reduce cold storage requirements.",
          fit: "Apple producers, packers and retailers globally.",
          regulatory: "Initial concept validation.",
          status: [
            { label: "Formulation Procured", complete: true }
          ]
        },
        { 
          id: "in-progress-citrus", 
          title: "Citrus",
          description: "Formula addressing rind integrity and moisture retention.",
          benefit: "Promising early results for reducing peel defects and mold.",
          fit: "Citrus exporters and packers worldwide.",
          regulatory: "Formulation optimization in progress.",
          status: [
            { label: "Formulation Procured", complete: true }
          ]
        },
        { 
          id: "in-progress-stone-fruits", 
          title: "Stone Fruits",
          description: "Specialized formula for peaches, plums, nectarines and apricots.",
          benefit: "Addresses the short shelf life challenges of stone fruits.",
          fit: "Stone fruit producers and distributors.",
          regulatory: "Theoretical formulation stage.",
          status: [
            { label: "Formulation Procured", complete: true }
          ]
        },
        { 
          id: "in-progress-cherries", 
          title: "Cherries",
          description: "Formula targeting cherry stem freshness and fruit firmness.",
          benefit: "Potential to extend premium quality window significantly.",
          fit: "Cherry exporters and premium markets.",
          regulatory: "Initial concept formulation.",
          status: [
            { label: "Formulation Procured", complete: true }
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
          (s.label.includes("Manufacturing") && (s.complete || s.inProgress)) 
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
    { id: 'inProgress', label: 'In Development' }
  ];

  // Status Icon component
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
  const activeData = inventoryData[activeCategory];
  const stats = calculateInventoryStats;

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
          Formulations Inventory
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-8 text-blue-700">
          Track the status of our innovative shelf-life extension formulations across different categories, from development to regulatory clearance.
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

        {/* Category Navigation - Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 relative z-20">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-3 rounded-full flex items-center relative z-20 transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-blue-800 hover:bg-blue-50 hover:shadow'
              }`}
              tabIndex={0}
              role="tab"
              aria-selected={activeCategory === category.id}
              aria-controls={`${category.id}-panel`}
              id={`${category.id}-tab`}
              type="button"
            >
              <span>{category.label}</span>
            </button>
          ))}
        </div>
        {/* Content based on selected tab */}
        <div 
          className="bg-white rounded-xl shadow overflow-hidden mb-8 relative z-10 border border-blue-100 transition-all duration-300 transform hover:shadow-lg"
          role="tabpanel"
          id={`${activeCategory}-panel`}
          aria-labelledby={`${activeCategory}-tab`}
        >
          {/* Tab Header */}
          <div className="p-6 bg-gradient-to-r from-blue-50 to-white border-b border-blue-100 relative z-10">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-white p-3 shadow-md">
                {activeData.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900">{activeData.title}</h3>
                <p className="text-gray-600">{activeData.subtitle}</p>
              </div>
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="p-6">
            <p className="text-gray-700 mb-6">{activeData.description}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {activeData.stats.map((stat) => (
                <StatCard
                  key={stat.label}
                  icon={stat.icon}
                  label={stat.label}
                  value={stat.value}
                />
              ))}
            </div>
            <ExpandableSection id="productDetails" title="Product Formulations">
              <div className="space-y-4">
                {activeData.items.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow p-4 border border-blue-100 transition-all duration-300 hover:shadow-lg">
                    <h4 className="font-semibold text-lg text-blue-800 mb-2">{item.title}</h4>
                    {item.description && (
                      <p className="text-gray-700 mb-3">{item.description}</p>
                    )}
                    
                    {(item.benefit || item.fit) && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        {item.benefit && (
                          <div className="bg-blue-50 p-3 rounded-md">
                            <h5 className="font-medium text-blue-800">Benefits</h5>
                            <p className="text-blue-700">{item.benefit}</p>
                          </div>
                        )}
                        {item.fit && (
                          <div className="bg-green-50 p-3 rounded-md">
                            <h5 className="font-medium text-green-800">Target Users</h5>
                            <p className="text-green-700">{item.fit}</p>
                          </div>
                        )}
                      </div>
                    )}
                    
                    {item.regulatory && (
                      <div className="bg-yellow-50 p-3 rounded-md mb-4">
                        <h5 className="font-medium text-yellow-800">Regulatory</h5>
                        <p className="text-yellow-700">{item.regulatory}</p>
                      </div>
                    )}
                    
                    <div className="mt-3">
                      <h5 className="font-medium text-gray-800">Development Status</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
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
                  </div>
                ))}
              </div>
            </ExpandableSection>
            <ExpandableSection id="manufacturingInfo" title="Manufacturing Information">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">Production Process</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-700">Formulated in ISO-certified laboratories</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-700">Natural, food-grade ingredients</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-700">Precision manufacturing with strict quality controls</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-700">Multi-stage quality assurance testing</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">Quality Assurance</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-700">Meets FDA and FSANZ standards for food safety</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-700">Third-party verified efficacy testing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-700">Rigorous stability and shelf-life validation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-700">Certified for organic use where indicated</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-semibold text-indigo-900 mb-3">Manufacturing Partners</h4>
                <p className="text-indigo-800 mb-3">
                  Our products are manufactured through strategic partnerships with specialty chemical facilities, each selected for their exceptional quality standards and innovative capabilities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-3 rounded shadow text-center">
                    <div className="font-medium text-indigo-900">North America</div>
                    <p className="text-sm text-gray-600">FDA-compliant manufacturing</p>
                  </div>
                  <div className="bg-white p-3 rounded shadow text-center">
                    <div className="font-medium text-indigo-900">Australia</div>
                    <p className="text-sm text-gray-600">FSANZ-compliant production</p>
                  </div>
                  <div className="bg-white p-3 rounded shadow text-center">
                    <div className="font-medium text-indigo-900">R&D Center</div>
                    <p className="text-sm text-gray-600">Continuous innovation lab</p>
                  </div>
                </div>
              </div>
            </ExpandableSection>
            <ExpandableSection id="distributionModel" title="Distribution Network">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div className="bg-white p-4 rounded-lg shadow border border-blue-100">
                  <h4 className="font-semibold text-blue-900 mb-3">B2B Distribution</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-700">Connect with farmers and pack houses</span>
                    </li>
                    {/* <li className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-700">Distribution agreements with agricultural suppliers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-700">Custom formulation services for large enterprises</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-700">Bulk ordering with scheduled delivery</span>
                    </li> */}
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow border border-blue-100">
                  <h4 className="font-semibold text-blue-900 mb-3">Consumer Products</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-700">Retail-ready packaging for sachets and small quantities</span>
                    </li>
                    {/* <li className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-700">E-commerce platform for direct consumer sales</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-700">Subscription options for regular users</span>
                    </li> */}
                    <li className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-700">Educational resources for optimal product use</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ExpandableSection>
            <ExpandableSection id="developmentTimeline" title="Development Timeline">
              <div className="relative py-6 mb-4">
                <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-blue-200"></div>
                
                <div className="relative mb-6 flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10 transition-all duration-300 hover:scale-110 hover:shadow-md">1</div>
                  <div className="ml-6">
                    <h4 className="font-medium text-blue-800">Phase 1: Core Products (Current)</h4>
                    <p className="text-sm text-gray-600">Advanced development of berry and avocado formulations</p>
                    <ul className="mt-2 space-y-1">
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">Regulatory approvals for primary products</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">Manufacturing preparation</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="relative mb-6 flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10 transition-all duration-300 hover:scale-110 hover:shadow-md">2</div>
                  <div className="ml-6">
                    <h4 className="font-medium text-blue-800">Phase 2: Expanded Product Line (6-12 months)</h4>
                    <p className="text-sm text-gray-600">Development of flower and vegetable formulations</p>
                    <ul className="mt-2 space-y-1">
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">Expanded testing across more produce varieties</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">Secondary regulatory approvals</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="relative flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10 transition-all duration-300 hover:scale-110 hover:shadow-md">3</div>
                  <div className="ml-6">
                    <h4 className="font-medium text-blue-800">Phase 3: Future Innovations (12-24 months)</h4>
                    <p className="text-sm text-gray-600">Development of tropical and stone fruit formulations</p>
                    <ul className="mt-2 space-y-1">
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">Scaling production for global distribution</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">Development of next-generation formulations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ExpandableSection>
            {/* Development Progress Graph */}
            <div className="bg-white p-4 rounded-lg shadow mt-6 border border-blue-100">
              <h4 className="font-semibold text-blue-900 mb-3">Development Progress</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-blue-900">Formulation Procurement</span>
                    <span className="text-sm text-blue-700">{Math.round((stats.formulationProcured / stats.totalItems) * 100)}%</span>
                  </div>
                  <div className="w-full bg-blue-100 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: isVisible ? `${(stats.formulationProcured / stats.totalItems) * 100}%` : '0%' }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-purple-900">Lab Testing</span>
                    <span className="text-sm text-purple-700">{Math.round((stats.labTested / stats.totalItems) * 100)}%</span>
                  </div>
                  <div className="w-full bg-purple-100 rounded-full h-2.5">
                    <div 
                      className="bg-purple-600 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: isVisible ? `${(stats.labTested / stats.totalItems) * 100}%` : '0%' }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-green-900">Regulatory Clearance</span>
                    <span className="text-sm text-green-700">{Math.round((stats.complianceCleared / stats.totalItems) * 100)}%</span>
                  </div>
                  <div className="w-full bg-green-100 rounded-full h-2.5">
                    <div 
                      className="bg-green-600 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: isVisible ? `${(stats.complianceCleared / stats.totalItems) * 100}%` : '0%' }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-amber-900">Manufacturing Ready</span>
                    <span className="text-sm text-amber-700">{Math.round((stats.readyForManufacturing / stats.totalItems) * 100)}%</span>
                  </div>
                  <div className="w-full bg-amber-100 rounded-full h-2.5">
                    <div 
                      className="bg-amber-600 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: isVisible ? `${(stats.readyForManufacturing / stats.totalItems) * 100}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreservativesInventory;