"use client"

import { useState } from "react"
import { ChevronsLeft } from "lucide-react"

const carouselItems = [
  {
    id: 1,
    title: "Total Asset Management",
    text: "Maximize turbine performance with GWind’s expert O&M solutions, reducing downtime and enhancing clean energy generation.",
  },

]

export default function VideoBannerSection() {
 
  const [isOpen, setIsOpen] = useState(false)



  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuItems = [
    { image: "/images/new-call.svg", label: "Call", delay: 0, link: "tel:+917094488909" },
    { image: "/images/mail1.svg", label: "Email", delay: 50, link: "mailto:info@renfraenergy.com" },
    { image: "/images/new-whatsapp.svg", label: "WhatsApp", delay: 150, link: "https://wa.me/917094488909" },
    { image: "/images/new-down.svg", label: "Download", delay: 100, link: "/brochure.pdf" },
  ]

  // Use only the first item for static content
  const item = carouselItems[0]

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Background Video */}
      <video
        src="/images/banner.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      ></video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#293E52]"></div>

      {/* Foreground Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-[90%] 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full md:w-1/2 lg:w-6/12">
            {/* Title */}
            <div className="relative h-20 sm:h-20 md:h-10 lg:h-38 overflow-hidden mb-2">
              <h1
                className="absolute text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-black leading-tight text-white transition-all duration-700 ease-in-out transform opacity-100 translate-y-0 title-font"
              >
                {item.title}
              </h1>
            </div>

            {/* Text */}
            <div className="relative h-20 md:h-24 flex items-start overflow-hidden mb-8">
              <p className="absolute text-md sm:text-lg md:text-xl text-white font-normal leading-relaxed opacity-100 translate-y-0">
                {item.text}
              </p>
            </div>

            
          </div>
        </div>
      </div>

      {/* Floating Menu */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-20">
        <div className="relative flex flex-row items-center gap-0">
          {/* Menu Items */}
          <div className="flex flex-col items-end gap-1 mr-2">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ease-out ${
                  isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
                }`}
                style={{ transitionDelay: isOpen ? `${item.delay}ms` : "0ms" }}
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <button
                    className="group relative w-12 h-12 md:w-14 md:h-14 bg-white rounded-full hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
                    aria-label={item.label}
                  >
                    <img
                      src={item.image}
                      alt={item.label}
                      className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="absolute right-full mr-3 px-3 py-1.5 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                      {item.label}
                    </span>
                  </button>
                </a>
              </div>
            ))}
          </div>

          {/* Main Toggle Button */}
          <button
            onClick={toggleMenu}
            className="relative w-10 h-16 lg:w-8 lg:h-24 bg-gradient-to-r from-[#329ACD] to-[#3AB257] rounded-l-lg transition-all duration-300 flex items-center justify-center z-10"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <ChevronsLeft
              className={`w-6 h-6 md:w-7 md:h-7 text-white transition-transform duration-500 ease-out ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
            <div
              className={`absolute inset-0 rounded-full bg-white transition-all duration-700 ${
                isOpen ? "scale-150 opacity-0" : "scale-0 opacity-30"
              }`}
            ></div>
          </button>
        </div>
      </div>
    </div>
  )
}
