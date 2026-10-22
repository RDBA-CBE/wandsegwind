"use client"
import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const SpareInventory = () => {
  const [activeTab, setActiveTab] = useState('inStock');

   const inStockCards = [
    {
      id: 1,
      image: '/images/stock1.svg',
      label: 'Generator'
    },
    {
      id: 2,
      image: '/images/stock2.svg',
      label: 'Gearbox'
    },
    {
      id: 3,
      image: '/images/stock3.svg',
      label: 'Transformer'
    },
        {
      id: 4,
      image: '/images/stock4.svg',
      label: 'Blade With Accessories'
    },
        {
      id: 5,
      image: '/images/stock5.svg',
      label: 'Blade Slewing'
    },
        {
      id: 6,
      image: '/images/stock6.svg',
      label: 'PLCS'
    }
  ];

  const networkCards = [
    {
      id: 7,
      image: '/images/network1.svg',
      label: 'Transformer'
    },
    {
      id: 8,
      image: '/images/network2.svg',
      label: 'Main Shaft'
    },
    {
      id: 9,
      image: '/images/network3.svg',
      label: 'Blade Bearing'
    },
        {
      id: 10,
      image: '/images/network4.svg',
      label: 'Gear Box'
    },
        {
      id: 11,
      image: '/images/network5.svg',
      label: 'Yaw Top'
    },
        {
      id: 12,
      image: '/images/network6.svg',
      label: 'Generator'
    }
  ];
  const currentCards = activeTab === 'inStock' ? inStockCards : networkCards;

  return (
    <div className=" p-4 md:p-8">
      <div className="max-w-[90%] 2xl:max-w-[80%] mx-auto px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#293E52]">
              Spares Inventory
            </h1>
        <a href="/instock-inventory">
            <ExternalLink
              className="w-6 sm:w-7 h-6 sm:h-7"
              strokeWidth={2}
              style={{ stroke: "url(#grad)" }}
            />
            <svg width="0" height="0">
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3AB257" />
                <stop offset="100%" stopColor="#329ACD" />
              </linearGradient>
            </svg>
          </a>          </div>
          <p className="text-slate-600 text-lg mb-1">
           GWind is one among very few strategic O&M solution providers to stock all types of major spares.
          </p>
       
        </div>

        {/* Tabs Section */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex gap-2 p-1 ">
            <button
              onClick={() => setActiveTab('inStock')}
              className={`px-6 py-3 font-medium rounded-full transition-all duration-300 ${
                activeTab === 'inStock'
                  ? 'bg-gradient-to-r from-[#3AB257] to-[#329ACD] text-white shadow-lg'
                  : 'text-slate-600 hover:text-slate-800 hover:bg-slate-100'
              }`}
            >
              In Stock
            </button>
            <button
              onClick={() => setActiveTab('network')}
              className={`px-6 py-3 font-medium rounded-full transition-all duration-300 ${
                activeTab === 'network'
                  ? 'bg-gradient-to-r from-[#3AB257] to-[#329ACD] text-white shadow-lg'
                  : 'text-slate-600 hover:text-slate-800 hover:bg-slate-100'
              }`}
            >
              In Network
            </button>
          </div>
        </div>

        {/* Grid Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCards.map((card, index) => (
            <div
              key={card.id}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white"
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.label}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 " />
                
                {/* Label at bottom-left */}
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="inline-block bg-white/90 backdrop-blur-sm text-[#293E52] px-3 py-1.5 rounded-lg text-sm font-medium shadow-lg">
                    {card.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default SpareInventory;