import React, { useState, useEffect } from 'react';

const SuperWaterInventory = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('brain-mind');
  const [expandedSection, setExpandedSection] = useState('productDetails');
  
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
  
  // Handle category change
  const handleCategoryChange = (categoryId) => {
    setActiveTab(categoryId);
    // Reset expanded items when changing categories
    setExpandedSection('productDetails');
  };
  // Z² Super Water product data organized by categories
  const superWaterCategories = {
    'brain-mind': {
      title: "Brain & Mind Super Water™",
      subtitle: "Enhanced hydration for mental clarity and cognitive support",
      description: "Our Brain & Mind formulations are designed to support optimal cognitive function, mental clarity, and focus through specialized mineral blends.",
      icon: (
        <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      stats: [
        { label: "Formulations Available", value: "3", icon: "💧" },
        { label: "Development Phase", value: "Production Ready", icon: "✅" },
        { label: "Key Minerals", value: "Zinc, Magnesium", icon: "🔬" },
        { label: "Target Audience", value: "Students, Professionals", icon: "👥" }
      ],
      products: [
        { 
          id: "brain-sprout", 
          title: "Z² Brain Sprout Super Water",
          description: "Mineral Water with Zinc - Supports Brain Function & Immune Health",
          benefit: "Makes you sharp and strong",
          fit: "Great for school kids or anyone needing brain support",
          regulatory: "FSSAI Nutraceutical (Zinc at 2 mg/L supports immunity/cognition)",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Lab Tested", complete: true },
            { label: "Production Ready", complete: true }
          ]
        },
        { 
          id: "focus-clarity", 
          title: "Z² Focus Clarity Super Water",
          description: "Mineral Water with Magnesium - Supports Mental Focus",
          benefit: "Keeps the mind sharp",
          fit: "Best for students or workers needing focus",
          regulatory: "FSSAI Nutraceutical (Extra Mg at 8 mg/L supports mental clarity)",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Lab Tested", complete: true },
            { label: "Production Ready", complete: false, inProgress: true }
          ]
        },
        { 
          id: "mind-calm", 
          title: "Z² Mind Calm Super Water",
          description: "Mineral Water with Magnesium - Supports Relaxation",
          benefit: "Relaxes you when stressed",
          fit: "For busy people needing calm",
          regulatory: "FSSAI Nutraceutical (Extra Mg at 16 mg/L calms nerves)",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Lab Tested", complete: false, inProgress: true },
            { label: "Production Ready", complete: false }
          ]
        }
      ]
    },
    'energy-stamina': {
      title: "Energy & Stamina Super Water™",
      subtitle: "Enhanced hydration for physical performance and endurance",
      description: "Our Energy & Stamina formulations support optimal physical performance, endurance, and post-exercise recovery through specialized mineral blends.",
      icon: (
        <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      stats: [
        { label: "Formulations Available", value: "4", icon: "💧" },
        { label: "Development Phase", value: "Production Ready", icon: "✅" },
        { label: "Key Minerals", value: "Sodium, Potassium, Zinc", icon: "🔬" },
        { label: "Target Audience", value: "Athletes, Active Lifestyles", icon: "👥" }
      ],
      products: [
        { 
          id: "energy-journey", 
          title: "Z² Energy Journey Super Water",
          description: "Mineral Water with Sodium - Supports Energy & Hydration",
          benefit: "Keeps you going all day",
          fit: "For active people or travelers",
          regulatory: "FSSAI Nutraceutical (Extra Na at 10 mg/L aids stamina)",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Lab Tested", complete: true },
            { label: "Production Ready", complete: true }
          ]
        },
        { 
          id: "stamina-lift", 
          title: "Z² Stamina Lift Super Water",
          description: "Mineral Water with Zinc - Supports Physical Stamina",
          benefit: "Gives power for daily life",
          fit: "For people who stay active",
          regulatory: "FSSAI Nutraceutical (Zn at 3 mg/L boosts stamina)",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Lab Tested", complete: true },
            { label: "Production Ready", complete: false, inProgress: true }
          ]
        },
        { 
          id: "recovery-recharge", 
          title: "Z² Recovery Recharge Super Water",
          description: "Mineral Water with Potassium - Supports Hydration & Recovery",
          benefit: "Refreshes after a long day",
          fit: "For anyone after late nights or hard work",
          regulatory: "FSSAI Nutraceutical (Extra K at 20 mg/L aids recovery)",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Lab Tested", complete: true },
            { label: "Production Ready", complete: false }
          ]
        },
        { 
          id: "vitality-boost", 
          title: "Z² Vitality Boost Super Water",
          description: "Mineral Water with Manganese - Supports Overall Vitality",
          benefit: "Keeps you active all day",
          fit: "For anyone wanting daily energy",
          regulatory: "FSSAI Nutraceutical (Mn at 0.5 mg/L boosts vitality)",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Lab Tested", complete: false, inProgress: true },
            { label: "Production Ready", complete: false }
          ]
        }
      ]
    },
    'skin-hair': {
      title: "Skin & Hair Super Water™",
      subtitle: "Enhanced hydration for skin and hair health",
      description: "Our Skin & Hair formulations promote radiant skin and stronger, healthier hair through specialized mineral and nutrient blends.",
      icon: (
        <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      stats: [
        { label: "Formulations Available", value: "3", icon: "💧" },
        { label: "Development Phase", value: "Production Ready", icon: "✅" },
        { label: "Key Minerals", value: "Copper, Biotin", icon: "🔬" },
        { label: "Target Audience", value: "Beauty Enthusiasts", icon: "👥" }
      ],
      products: [
        { 
          id: "skin-glow", 
          title: "Z² Skin Glow Super Water",
          description: "Mineral Water with Copper - Supports Skin Health",
          benefit: "Makes skin fresh and glowing",
          fit: "For anyone who wants good skin",
          regulatory: "FSSAI Nutraceutical (Cu at 0.25 mg/L aids collagen)",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Lab Tested", complete: true },
            { label: "Production Ready", complete: true }
          ]
        },
        { 
          id: "hair-shine", 
          title: "Z² Hair Shine Super Water",
          description: "Mineral Water with Biotin - Supports Healthy Hair",
          benefit: "Gives healthy, shiny hair",
          fit: "Good for anyone who wants strong hair",
          regulatory: "FSSAI Nutraceutical (Biotin at 30 µg/L supports hair health)",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Lab Tested", complete: true },
            { label: "Production Ready", complete: false, inProgress: true }
          ]
        },
        { 
          id: "skin-pure", 
          title: "Z² Skin Pure Super Water",
          description: "Mineral Water Cleanser (Not for Drinking) - Supports Skin Cleansing (Use on Face Only)",
          benefit: "Makes skin soft and clean",
          fit: "For anyone washing their face",
          regulatory: "FSSAI Normal (No drinking, basic minerals)",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Lab Tested", complete: false, inProgress: true },
            { label: "Production Ready", complete: false }
          ]
        }
      ]
    },
    'sleep-breathing': {
      title: "Sleep & Breathing Super Water™",
      subtitle: "Enhanced hydration for restful sleep and respiratory wellness",
      description: "Our Sleep & Breathing formulations promote restorative sleep cycles and support respiratory function through specialized mineral blends.",
      icon: (
        <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
      stats: [
        { label: "Formulations Available", value: "2", icon: "💧" },
        { label: "Development Phase", value: "Production Ready", icon: "✅" },
        { label: "Key Minerals", value: "Magnesium, Potassium", icon: "🔬" },
        { label: "Target Audience", value: "Sleep-Focused Consumers", icon: "👥" }
      ],
      products: [
        { 
          id: "sleep-rest", 
          title: "Z² Sleep Rest Super Water",
          description: "Mineral Water with Magnesium - Supports Restful Sleep",
          benefit: "Makes sleep peaceful",
          fit: "For anyone who needs better rest",
          regulatory: "FSSAI Nutraceutical (Mg at 5 mg/L aids sleep)",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Lab Tested", complete: true },
            { label: "Production Ready", complete: true }
          ]
        },
        { 
          id: "breath-ease", 
          title: "Z² Breath Ease Super Water",
          description: "Mineral Water with Potassium - Supports Easy Breathing",
          benefit: "Makes breathing and sleeping better",
          fit: "For people who want easy breathing",
          regulatory: "FSSAI Nutraceutical (Extra K at 18 mg/L aids breathing)",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Lab Tested", complete: true },
            { label: "Production Ready", complete: false, inProgress: true }
          ]
        }
      ]
    },
    'spiritual-hydration': {
      title: "Spiritual Hydration Super Water™",
      subtitle: "Enhanced hydration inspired by sacred water traditions",
      description: "Our Spiritual Hydration formulations are inspired by the mineral profiles of historically significant waters, offering a connection to cultural hydration traditions.",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      stats: [
        { label: "Formulations Available", value: "2", icon: "💧" },
        { label: "Development Phase", value: "Production Ready", icon: "✅" },
        { label: "Key Minerals", value: "Calcium, Magnesium, Selenium", icon: "🔬" },
        { label: "Target Audience", value: "Culturally-Conscious Consumers", icon: "👥" }
      ],
      products: [
        { 
          id: "sacred-purity", 
          title: "Z² Sacred Purity Super Water (Zamzam Replica)",
          description: "Mineral Water with Extra Calcium & Magnesium - Supports Hydration & Strength",
          benefit: "Feels special and keeps you strong",
          fit: "For people who love holy water",
          regulatory: "FSSAI Nutraceutical (Extra Ca/Mg for wellness)",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Lab Tested", complete: true },
            { label: "Production Ready", complete: true }
          ]
        },
        { 
          id: "divine-essence", 
          title: "Z² Divine Essence Super Water (Zamzam Replica)",
          description: "Mineral Water with Selenium & Potassium - Supports Hydration & Wellness",
          benefit: "Feels holy and keeps you fresh",
          fit: "For people who like special water",
          regulatory: "FSSAI Nutraceutical (Se/K add health benefits)",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Lab Tested", complete: false, inProgress: true },
            { label: "Production Ready", complete: false }
          ]
        }
      ]
    },
    'body-strength': {
      title: "Body Strength Super Water™",
      subtitle: "Enhanced hydration for physical strength and muscle support",
      description: "Our Body Strength formulations promote muscle health, joint integrity, and robust immune function through specialized mineral blends.",
      icon: (
        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      ),
      stats: [
        { label: "Formulations Available", value: "3", icon: "💧" },
        { label: "Development Phase", value: "Production Ready", icon: "✅" },
        { label: "Key Minerals", value: "Calcium, Zinc", icon: "🔬" },
        { label: "Target Audience", value: "Fitness Enthusiasts, Seniors", icon: "👥" }
      ],
      products: [
        { 
          id: "muscle-flow", 
          title: "Z² Muscle Flow Super Water",
          description: "Mineral Water with Calcium - Supports Muscle Health",
          benefit: "Good for exercise and movement",
          fit: "For gym-goers or yoga lovers",
          regulatory: "FSSAI Nutraceutical (Extra Ca at 12 mg/L supports muscles)",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Lab Tested", complete: true },
            { label: "Production Ready", complete: true }
          ]
        },
        { 
          id: "joint-ease", 
          title: "Z² Joint Ease Super Water",
          description: "Mineral Water with Calcium - Supports Joint Health",
          benefit: "Makes moving comfortable",
          fit: "For people with joint pain",
          regulatory: "FSSAI Nutraceutical (Extra Ca at 24 mg/L aids joints)",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Lab Tested", complete: true },
            { label: "Production Ready", complete: false, inProgress: true }
          ]
        },
        { 
          id: "immune-care", 
          title: "Z² Immune Care Super Water",
          description: "Mineral Water with Zinc - Supports Immune Health",
          benefit: "Fights sickness and keeps you well",
          fit: "For anyone wanting a strong body",
          regulatory: "FSSAI Nutraceutical (Zinc at 1.4 mg/L boosts immunity)",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Lab Tested", complete: false, inProgress: true },
            { label: "Production Ready", complete: false }
          ]
        }
      ]
    },
    'wellness-balance': {
      title: "Wellness & Balance Super Water™",
      subtitle: "Enhanced hydration for overall wellness and equilibrium",
      description: "Our Wellness & Balance formulations promote holistic health, relaxation, and natural balance through specialized mineral blends.",
      icon: (
        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      stats: [
        { label: "Formulations Available", value: "4", icon: "💧" },
        { label: "Development Phase", value: "Production Ready", icon: "✅" },
        { label: "Key Minerals", value: "Selenium, Chromium", icon: "🔬" },
        { label: "Target Audience", value: "Health Enthusiasts, Families", icon: "👥" }
      ],
      products: [
        { 
          id: "sleep-rest", 
          title: "Z² Sleep Rest Super Water",
          description: "Mineral Water with Magnesium - Supports Restful Sleep",
          benefit: "Makes sleep peaceful",
          fit: "For anyone who needs better rest",
          regulatory: "FSSAI Nutraceutical (Mg at 5 mg/L aids sleep)",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Lab Tested", complete: true },
            { label: "Production Ready", complete: true }
          ]
        },
        { 
          id: "luxe-hydration", 
          title: "Z² Luxe Hydration Super Water",
          description: "Mineral Water with Selenium - Supports Hydration & Wellness",
          benefit: "Feels special and keeps you well",
          fit: "For people who like premium water",
          regulatory: "FSSAI Nutraceutical (Se at 0.02 mg/L adds health)",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Lab Tested", complete: true },
            { label: "Production Ready", complete: false, inProgress: true }
          ]
        },
        { 
          id: "glucose-balance", 
          title: "Z² Glucose Balance Super Water",
          description: "Mineral Water with Chromium - Supports Glucose Metabolism",
          benefit: "Supports healthy sugar control",
          fit: "For people watching their sugar",
          regulatory: "FSSAI Nutraceutical (Cr at 0.025 mg/L aids sugar)",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Lab Tested", complete: false, inProgress: true },
            { label: "Production Ready", complete: false }
          ]
        },
        { 
          id: "pure-paws", 
          title: "Z² Pure Paws Super Water",
          description: "Mineral Water (Basic Mix) - Provides Safe Hydration",
          benefit: "Keeps you hydrated, no fuss",
          fit: "Perfect for kids, pets, or anyone wanting simple water",
          regulatory: "FSSAI Normal (Just basic minerals, no extras)",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Lab Tested", complete: true },
            { label: "Production Ready", complete: true }
          ]
        }
      ]
    },
    'premium-editions': {
      title: "Premium Edition Super Water™",
      subtitle: "Limited edition, luxury formulations for the discerning consumer",
      description: "Our Premium Edition formulations represent the pinnacle of hydration science, with limited production runs and exclusive mineral profiles.",
      icon: (
        <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      stats: [
        { label: "Formulations Available", value: "3", icon: "💧" },
        { label: "Development Phase", value: "Limited Production", icon: "✅" },
        { label: "Key Features", value: "Personalized, Exclusive", icon: "🔬" },
        { label: "Target Audience", value: "Collectors, Luxury Segment", icon: "👥" }
      ],
      products: [
        { 
          id: "dna-signature", 
          title: "Z² DNA Signature Super Water™",
          description: "Personalized Mineral Water Crafted for Your Unique Genetic Profile",
          benefit: "Genetically optimized hydration with mineral ratios precisely calibrated to your DNA",
          fit: "For health-conscious individuals seeking personalized nutrition based on genetic analysis",
          regulatory: "FSSAI Nutraceutical (Custom mineral blend based on individual genetic profile)",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Lab Tested", complete: true },
            { label: "Limited Production", complete: true }
          ],
          special: "Premium subscription service including DNA analysis kit, custom formulation, and mobile app tracking your hydration metrics and genetic wellness profile."
        },
        { 
          id: "quantum-clarity", 
          title: "Z² Quantum Clarity Super Water",
          description: "Structured Water with 432Hz Frequency Resonance - Inspired by Quantum Physics",
          benefit: "Symbolizes mental clarity and precision thinking",
          fit: "For science collectors and innovative thinkers",
          regulatory: "FSSAI Nutraceutical (Structured water with balanced mineral profile)",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Lab Tested", complete: true },
            { label: "Limited Production", complete: true }
          ],
          special: "Each bottle individually numbered in a limited series of 1,000 units worldwide."
        },
        { 
          id: "sacred-purity", 
          title: "Z² Sacred Purity Super Water (Zamzam Replica)",
          description: "Mineral Water with Extra Calcium & Magnesium - Supports Hydration & Strength",
          benefit: "Feels special and keeps you strong",
          fit: "For people who love premium water experiences",
          regulatory: "FSSAI Nutraceutical (Extra Ca/Mg for wellness)",
          status: [
            { label: "Formulation Procured", complete: true },
            { label: "Lab Tested", complete: true },
            { label: "Limited Production", complete: true }
          ],
          special: "Inspired by sacred waters, this premium formulation comes in specially designed collector's bottles."
        }
      ]
    }
  };

  // Tab categories
  const categories = [
    { id: 'brain-mind', label: 'Brain & Mind' },
    { id: 'energy-stamina', label: 'Energy & Stamina' },
    { id: 'body-strength', label: 'Body Strength' },
    { id: 'sleep-breathing', label: 'Sleep & Breathing' },
    { id: 'skin-hair', label: 'Skin & Hair' },
    { id: 'wellness-balance', label: 'Wellness & Balance' },
    { id: 'spiritual-hydration', label: 'Spiritual Hydration' },
    { id: 'premium-editions', label: 'Premium Editions' }
  ];
  // Calculate total stats across all categories
  const calculateInventoryStats = () => {
    let totalProducts = 0;
    let formulationProcured = 0;
    let labTested = 0;
    let productionReady = 0;
    let limitedEdition = 0;

    Object.values(superWaterCategories).forEach(category => {
      totalProducts += category.products.length;
      
      category.products.forEach(product => {
        if (product.status.some(s => s.label.includes("Formulation") && s.complete)) {
          formulationProcured++;
        }
        
        if (product.status.some(s => s.label.includes("Lab Tested") && s.complete)) {
          labTested++;
        }
        
        if (product.status.some(s => s.label.includes("Production Ready") && s.complete)) {
          productionReady++;
        }

        if (product.status.some(s => s.label.includes("Limited Production") && s.complete)) {
          limitedEdition++;
        }
      });
    });

    return {
      totalProducts,
      formulationProcured,
      labTested,
      productionReady,
      limitedEdition
    };
  };

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
  const stats = calculateInventoryStats();
  const activeData = superWaterCategories[activeTab];

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
          Z² Super Water™ Product Inventory
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-8 text-blue-700">
          Our comprehensive catalog of premium functional water formulations, each designed to address specific wellness needs.
        </p>
        {/* Inventory Summary Stats */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-10 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Z² Super Water™ Product Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-700">{stats.totalProducts}</div>
              <p className="text-sm text-blue-800">Total Products</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-indigo-700">{stats.formulationProcured}</div>
              <p className="text-sm text-indigo-800">Formulation Procured</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-700">{stats.labTested}</div>
              <p className="text-sm text-purple-800">Lab Tested</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-700">{stats.productionReady}</div>
              <p className="text-sm text-green-800">Production Ready</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-amber-700">{stats.limitedEdition}</div>
              <p className="text-sm text-amber-800">Limited Edition</p>
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
                activeTab === category.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-blue-800 hover:bg-blue-50 hover:shadow'
              }`}
              type="button"
            >
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Content based on selected tab */}
        <div className="bg-white rounded-xl shadow overflow-hidden mb-8 relative z-10 border border-blue-100 transition-all duration-300 transform hover:shadow-lg">
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
                {activeData.products.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow p-4 border border-blue-100 transition-all duration-300 hover:shadow-lg">
                    <h4 className="font-semibold text-lg text-blue-800 mb-2">{product.title}</h4>
                    <p className="text-gray-700 mb-3">{product.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-blue-50 p-3 rounded-md">
                        <h5 className="font-medium text-blue-800">Benefits</h5>
                        <p className="text-blue-700">{product.benefit}</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-md">
                        <h5 className="font-medium text-green-800">Target Users</h5>
                        <p className="text-green-700">{product.fit}</p>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 p-3 rounded-md mb-4">
                      <h5 className="font-medium text-yellow-800">Regulatory</h5>
                      <p className="text-yellow-700">{product.regulatory}</p>
                    </div>
                    
                    {/* Special note for premium items */}
                    {product.special && (
                      <div className="bg-amber-50 p-3 rounded-md mb-4 border-l-4 border-amber-500">
                        <h5 className="font-medium text-amber-800">Special Features</h5>
                        <p className="text-amber-700">{product.special}</p>
                      </div>
                    )}
                    
                    <div className="mt-3">
                      <h5 className="font-medium text-gray-800">Development Status</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                        {product.status.map((status, idx) => (
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
                      <span className="text-gray-700">Produced using ultra-purified water base</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-700">Precision mineral infusion technology</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-700">Multi-stage quality control testing</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">Quality Assurance</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-700">Meets FSSAI standards for nutraceutical water</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-700">Third-party verified mineral content</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-700">Bioavailability testing for key minerals</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-700">Shelf-life verified for 12+ months</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-semibold text-indigo-900 mb-3">Manufacturing Partners</h4>
                <p className="text-indigo-800 mb-3">
                  Our products are manufactured through strategic partnerships with premium water facilities across India, each selected for their exceptional quality standards and innovative capabilities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-3 rounded shadow text-center">
                    <div className="font-medium text-indigo-900">Bangalore Facility</div>
                    <p className="text-sm text-gray-600">Primary production hub for Southern India</p>
                  </div>
                  <div className="bg-white p-3 rounded shadow text-center">
                    <div className="font-medium text-indigo-900">Mumbai Facility</div>
                    <p className="text-sm text-gray-600">Specializes in premium formulations</p>
                  </div>
                  <div className="bg-white p-3 rounded shadow text-center">
                    <div className="font-medium text-indigo-900">Delhi NCR Facility</div>
                    <p className="text-sm text-gray-600">Innovation center and Northern India hub</p>
                  </div>
                </div>
              </div>
            </ExpandableSection>
            <ExpandableSection id="distributionModel" title="Distribution Network">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div className="bg-white p-4 rounded-lg shadow border border-blue-100">
                  <h4 className="font-semibold text-blue-900 mb-3">Direct-to-Consumer Model</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-700">Subscription service via website and mobile app</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-700">On-demand ordering with same-day delivery in select cities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-700">Personalized hydration schedules and recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-700">Automated replenishment with flexible scheduling</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow border border-blue-100">
                  <h4 className="font-semibold text-blue-900 mb-3">Last-Mile Delivery</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-700">Partnership with existing micro water distributors</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-700">EV delivery fleet for eco-friendly transportation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-700">Temperature-controlled delivery to maintain quality</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-700">Real-time tracking for customers</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-3">Premium Experience Touchpoints</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-3 rounded shadow transition-all duration-300 transform hover:shadow-md hover:scale-105">
                    <div className="text-center text-lg text-blue-600 mb-2">🥂</div>
                    <div className="font-medium text-center text-blue-900">Water Tasting Lounges</div>
                    <p className="text-sm text-center text-gray-600">Exclusive sampling experiences in premium locations</p>
                  </div>
                  <div className="bg-white p-3 rounded shadow transition-all duration-300 transform hover:shadow-md hover:scale-105">
                    <div className="text-center text-lg text-blue-600 mb-2">🧘</div>
                    <div className="font-medium text-center text-blue-900">Wellness Center Partnerships</div>
                    <p className="text-sm text-center text-gray-600">Integration with premium gyms and spas</p>
                  </div>
                  <div className="bg-white p-3 rounded shadow transition-all duration-300 transform hover:shadow-md hover:scale-105">
                    <div className="text-center text-lg text-blue-600 mb-2">🏨</div>
                    <div className="font-medium text-center text-blue-900">Luxury Hotel Program</div>
                    <p className="text-sm text-center text-gray-600">Exclusive water service for 5-star properties</p>
                  </div>
                </div>
              </div>
            </ExpandableSection>
            <ExpandableSection id="launchTimeline" title="Production Timeline">
              <div className="relative py-6 mb-4">
                <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-blue-200"></div>
                
                <div className="relative mb-6 flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10 transition-all duration-300 hover:scale-110 hover:shadow-md">1</div>
                  <div className="ml-6">
                    <h4 className="font-medium text-blue-800">Phase 1: Initial Production (Q3 2025)</h4>
                    <p className="text-sm text-gray-600">Launch of core formulations in Bangalore</p>
                    <ul className="mt-2 space-y-1">
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">Initial production run of Brain & Mind and Energy & Stamina formulations</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">Pilot testing with select subscription customers</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="relative mb-6 flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10 transition-all duration-300 hover:scale-110 hover:shadow-md">2</div>
                  <div className="ml-6">
                    <h4 className="font-medium text-blue-800">Phase 2: Expanded Production (Q4 2025)</h4>
                    <p className="text-sm text-gray-600">Scale-up to full product line</p>
                    <ul className="mt-2 space-y-1">
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">Complete production line for all standard formulations</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">Integration with distribution network</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="relative flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10 transition-all duration-300 hover:scale-110 hover:shadow-md">3</div>
                  <div className="ml-6">
                    <h4 className="font-medium text-blue-800">Phase 3: Premium Edition Launch (Q1 2026)</h4>
                    <p className="text-sm text-gray-600">Limited production of premium formulations</p>
                    <ul className="mt-2 space-y-1">
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">Launch of DNA Signature and Quantum Clarity formulations</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">Exclusive limited production runs for collector editions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ExpandableSection>
            {/* Development Progress Graph - Applies to all tabs */}
            <div className="bg-white p-4 rounded-lg shadow mt-6 border border-blue-100">
              <h4 className="font-semibold text-blue-900 mb-3">Development Progress</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-blue-900">Formulation Procurement</span>
                    <span className="text-sm text-blue-700">{Math.round((stats.formulationProcured / stats.totalProducts) * 100)}%</span>
                  </div>
                  <div className="w-full bg-blue-100 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: isVisible ? `${(stats.formulationProcured / stats.totalProducts) * 100}%` : '0%' }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-purple-900">Lab Testing</span>
                    <span className="text-sm text-purple-700">{Math.round((stats.labTested / stats.totalProducts) * 100)}%</span>
                  </div>
                  <div className="w-full bg-purple-100 rounded-full h-2.5">
                    <div 
                      className="bg-purple-600 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: isVisible ? `${(stats.labTested / stats.totalProducts) * 100}%` : '0%' }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-green-900">Production Ready</span>
                    <span className="text-sm text-green-700">{Math.round((stats.productionReady / stats.totalProducts) * 100)}%</span>
                  </div>
                  <div className="w-full bg-green-100 rounded-full h-2.5">
                    <div 
                      className="bg-green-600 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: isVisible ? `${(stats.productionReady / stats.totalProducts) * 100}%` : '0%' }}
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

export default SuperWaterInventory;