"use client"
import { useState } from "react"
import { Phone, Mail, Download, ChevronsLeft } from "lucide-react"

export default function InnerBanner({ title, bgImage }) {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { image: "/images/new-call.svg", label: "Call", delay: 0, link: "tel:+917094488909" },
    { image: "/images/mail1.svg", label: "Email", delay: 50, link: "mailto:info@renfraenergy.com" },
    { image: "/images/new-whatsapp.svg", label: "WhatsApp", delay: 150, link: "https://wa.me/917094488909" },
    { image: "/images/new-down.svg", label: "Download", delay: 100, link: "/brochure.pdf" },
  ]

 const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <section className="relative w-full h-[150px] md:h-[250px] lg:h-[300px] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage || "/placeholder.svg?height=300&width=1200"})` }}
      />

      {/* Overlay (optional) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#193F3D]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[90%] 2xl:max-w-[80%] mx-auto w-full px-6 md:px-10">
        <div className="text-white space-y-3">
          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-normal">{title || "Page Title"}</h1>

          {/* Divider line */}
          <div className="max-w-[90%] 2xl:max-w-[80%] h-[1px] bg-white/70"></div>

          {/* Breadcrumb */}
          <div className="text-sm md:text-base text-gray-200">
            <a href="/" className="text-white font-bold hover:underline">
              Home
            </a>
            <span className="mx-2 text-white">›</span>
            <span className="text-[#3AB257]">{title || "Page"}</span>
          </div>
        </div>
      </div>

      <div className="fixed -right-2 top-2/4 -translate-y-1/2 md:-right-2 lg:-right-0 z-20">
        <div className="relative flex flex-row items-center gap-3">
          {/* Menu Items */}
          <div className="flex flex-col items-end gap-1">
            {menuItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`transition-all duration-500 ease-out ${
                    isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16 pointer-events-none"
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${item.delay}ms` : "0ms",
                  }}
                >
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <button
                      className="group relative w-12 h-12 md:w-12 md:h-12 bg-white rounded-full hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
                      aria-label={item.label}
                    >
                      <img 
                        src={item.image} 
                        alt={item.label}
                        className="w-6 h-6 object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                      <span className="absolute right-full mr-3 px-3 py-1.5 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                        {item.label}
                      </span>
                    </button>
                  </a>
                </div>
              )
            })}
          </div>

          {/* Main Floating Toggle Button */}
          <button
            onClick={toggleMenu}
            className="relative w-10 h-16 lg:w-8 lg:h-24 bg-gradient-to-r from-[#329ACD] to-[#3AB257] rounded-none transition-all duration-300 flex items-center justify-center z-10"
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
    </section>
  )
}