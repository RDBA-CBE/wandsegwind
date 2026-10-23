"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowLeft, ArrowRight, Quote } from "lucide-react"
import { axiosGet } from "@/lib/api"

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCards, setVisibleCards] = useState(3)
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)

  const containerRef = useRef(null)

  /* 📡 FETCH DATA */
  const fetchData = async () => {
    try {
      setLoading(true)
      const res = await axiosGet.get(`masters/testimonials/get/?web_sts=1`)
      setTestimonials(Array.isArray(res.data?.data) ? res.data.data : [])
    } catch (error) {
      console.error("Testimonials error:", error)
      setTestimonials([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  /* 📱 RESPONSIVE CARD COUNT */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setVisibleCards(1)
      else if (window.innerWidth < 1024) setVisibleCards(2)
      else setVisibleCards(3)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(testimonials.length - visibleCards, 0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1))
  }

  /* ⏱ AUTO SLIDE */
  useEffect(() => {
    if (loading || testimonials.length <= visibleCards) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [loading, maxIndex, testimonials.length, visibleCards])

  return (
    <section
      className="w-full py-16 px-4 md:px-8 lg:px-16 relative bg-cover bg-center"
      style={{ backgroundImage: "url('/images/test-bg.png')" }}
    >
      <div className="relative max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 text-[#293E52]">
          Client Testimonials
        </h2>

        <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6 text-center">
          Read how DLI brings a noticeable change to the operations of our clients
        </p>

        {/* 🔄 LOADING */}
        {loading && (
          <div className="py-12 text-center text-gray-500">
            Loading testimonials...
          </div>
        )}

        {/* ❌ NO DATA */}
        {!loading && testimonials.length === 0 && (
          <div className="py-12 text-center text-gray-500">
            No testimonials found
          </div>
        )}

        {/* ✅ DATA */}
        {!loading && testimonials.length > 0 && (
          <div className="relative overflow-hidden">
            {/* Carousel */}
            <div
              ref={containerRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(100 / visibleCards) * currentIndex}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3"
                >
                  <div className="bg-white/90 rounded-lg p-8 flex flex-col justify-between h-full">
                    <Quote className="w-10 h-10 text-green-500 mb-2" />

                    <div
                      className="text-foreground mb-6 flex-grow leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: testimonial.feedback || "",
                      }}
                    />

                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name || "-"}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {testimonial.designation || ""}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots + Arrows */}
            {testimonials.length > visibleCards && (
              <div className="flex items-center justify-between mt-6">
                {/* Dots */}
                <div className="flex-1 flex justify-center">
                  {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full mx-1 ${
                        index === currentIndex
                          ? "bg-green-500"
                          : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Arrows */}
                <div className="hidden md:flex items-center gap-3">
                  <button
                    onClick={goToPrevious}
                    className="w-10 h-10 rounded-full border-2 border-[#293E52] flex items-center justify-center"
                  >
                    <ArrowLeft className="w-5 h-5 text-[#293E52]" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="w-10 h-10 rounded-full border-2 border-[#293E52] flex items-center justify-center"
                  >
                    <ArrowRight className="w-5 h-5 text-[#293E52]" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
