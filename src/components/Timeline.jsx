"use client"
import { useEffect, useRef, useState } from "react"
import { axiosGet } from "@/lib/api"

export default function TimelineSection() {
  const timelineRef = useRef(null)
  const [timelineData, setTimelineData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
  if (!timelineData.length) return

  const timeline = timelineRef.current
  if (!timeline) return

  let animationFrame
  const scrollSpeed = 0.5

  const scrollTimeline = () => {
    if (timeline.scrollLeft >= timeline.scrollWidth - timeline.clientWidth) {
      timeline.scrollLeft = 0
    } else {
      timeline.scrollLeft += scrollSpeed
    }
    animationFrame = requestAnimationFrame(scrollTimeline)
  }

  animationFrame = requestAnimationFrame(scrollTimeline)

  const stop = () => cancelAnimationFrame(animationFrame)
  const start = () => (animationFrame = requestAnimationFrame(scrollTimeline))

  timeline.addEventListener("mouseenter", stop)
  timeline.addEventListener("mouseleave", start)

  return () => {
    cancelAnimationFrame(animationFrame)
    timeline.removeEventListener("mouseenter", stop)
    timeline.removeEventListener("mouseleave", start)
  }
}, [timelineData])   // 🔥 THIS IS IMPORTANT

  /* 📡 API */
  const fetchData = async () => {
  try {
    setLoading(true)

    const res = await axiosGet.get("masters/about/get/?web_sts=1")

    // ✅ timeline is directly under data
    const timeline = res.data?.data?.timeline || []

    setTimelineData(Array.isArray(timeline) ? timeline : [])
  } catch (error) {
    console.error("Timeline Error:", error)
    setTimelineData([])
  } finally {
    setLoading(false)
  }
}


  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section className="w-full py-16 bg-white">
      <h2 className="text-2xl md:text-4xl font-semibold text-center mb-12 text-[#1A202C]">
        Timeline
      </h2>

      <div className="relative overflow-hidden">

        {/* 🔄 LOADING */}
        {loading && (
          <div className="py-12 text-center text-gray-500">
            Loading timeline...
          </div>
        )}

        {/* ❌ NO DATA */}
        {!loading && timelineData.length === 0 && (
          <div className="py-12 text-center text-gray-500">
            No timeline data found
          </div>
        )}

        {/* ✅ DATA */}
        {!loading && timelineData.length > 0 && (
  <div className="relative overflow-hidden">
    <div
      ref={timelineRef}
      className="flex items-center overflow-x-auto scrollbar-hide gap-24 px-10 md:px-20"
    >
      {/* Center Line */}
      <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-300 -translate-y-1/2"></div>

      {timelineData.map((item, index) => (
        <div
          key={index}
          className="relative flex-shrink-0 min-h-[200px] w-64"
        >
          {index % 2 === 0 ? (
            <>
              {/* Description Top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 text-center font-semibold bg-blue-50 text-[#293E52] text-sm rounded-lg p-4 shadow-sm">
                {item.timeline_description}
                <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-50 rotate-45"></div>
              </div>

              {/* Dot */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-green-500 rounded-full border-4 border-white z-10"></div>

              {/* Year */}
              <p className="absolute bottom-0 left-1/2 -translate-x-1/2 font-bold text-lg text-[#293E52]">
                {item.timeline_year}
              </p>
            </>
          ) : (
            <>
              {/* Year */}
              <p className="absolute top-0 left-1/2 -translate-x-1/2 font-bold text-lg text-[#293E52]">
                {item.timeline_year}
              </p>

              {/* Dot */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-green-500 rounded-full border-4 border-white z-10"></div>

              {/* Description Bottom */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 text-center font-semibold bg-blue-50 text-gray-700 text-sm rounded-lg p-4 shadow-sm">
                {item.timeline_description}
                <div className="absolute top-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-50 rotate-45"></div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  </div>
)}

      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
