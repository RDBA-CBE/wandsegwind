"use client"
 
import { useState } from "react"
import { ExternalLink, Play } from "lucide-react"
 
const NewsItem = ({ item }) => (
  <div className="flex gap-4 pb-4 border-b border-slate-200">
    <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
      <img
        src={item.image || "/placeholder.svg"}
        alt={item.title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex-1">
      <p className="text-sm text-slate-500 mb-1">{item.date}</p>
      <p className="text-slate-700 text-sm line-clamp-3">{item.title}</p>
    </div>
                <a href="/news">
    <ExternalLink className="w-5 h-5 text-teal-500 flex-shrink-0" /></a>
  </div>
)
 
const MediaCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false)
 
  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg h-64 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={item.image || "/placeholder.svg"}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
     
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
     
      {/* Play button - always visible */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">
          <Play className="w-8 h-8 text-[#3AB257] fill-[#3AB257] ml-1" />
        </div>
      </div>
     
      {/* Title on hover - bottom left */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <p className="text-white font-semibold text-sm">{item.title}</p>
        <p className="text-white/80 text-xs mt-1">{item.date}</p>
      </div>
    </div>
  )
}
 
const newsData = [
  {
    id: 1,
    date: "May 04, 2025",
    title:
      "Speed Team Group’s Ongoing Commitment to Employee Welfare",
    image: "/images/media-01.png",
  },
  {
    id: 2,
    date: "Apr 15, 2025",
   title:
      "Blazing Into FY 2025-26: A Year of Unstoppable Momentum",
    image: "/images/media-02.png",
  },
  {
    id: 3,
    date: "May 11, 2025",
   title:
      "Wishing You a Powerful & Peaceful Buddha Poornima",
    image: "/images/media-03.jpeg",
  },
]
 
const mediaData = [
  {
    id: 1,
    date: "Oct 10, 2025",
    title: "Media Coverage: Gwind featured in industry publications",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    date: "Oct 10, 2025",
    title: "Video: Behind the scenes at Gwind facilities",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    date: "Oct 10, 2025",
    title: "Innovation Showcase: Latest renewable energy technology",
    image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=600&fit=crop",
  },
]
 
export default function NewsHomeSection() {
  const [activeTab, setActiveTab] = useState("news")
 
  return (
    <div className="w-full bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="max-w-[90%] 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">
              News & Media
            </h1>
            <a href="/news">
              <ExternalLink
                className="w-7 h-7 ml-2"
                strokeWidth={2}
                style={{
                  stroke: "url(#grad)",
                }}
              />
              <svg width="0" height="0">
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3AB257" />
                  <stop offset="100%" stopColor="#329ACD" />
                </linearGradient>
              </svg>
            </a>
          </div>
 
          <p className="text-sm sm:text-sm md:text-base lg:text-base text-[#293E52] max-w-3xl mx-auto leading-relaxed">
           Explore the latest happenings at Gwind and its group companies. Click on the news to read more.
          </p>
        </div>
 
        {/* Tabs Section */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab("news")}
            className={`px-8 py-3 rounded-full font-semibold transition-all ${
              activeTab === "news"
                ? "bg-gradient-to-r from-[#3AB257] to-[#329ACD] text-white shadow-lg"
                : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300"
            }`}
          >
            News
          </button>
          <button
            onClick={() => setActiveTab("media")}
            className={`px-8 py-3 rounded-full font-semibold transition-all ${
              activeTab === "media"
                ? "bg-gradient-to-r from-[#3AB257] to-[#329ACD] text-white shadow-lg"
                : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300"
            }`}
          >
            Media
          </button>
        </div>
 
        {/* Content Section */}
        {activeTab === "news" ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Large Image */}
            <div className="lg:col-span-1">
              <div className="relative overflow-hidden rounded-lg shadow-md h-64 sm:h-80">
                <img
                  src={newsData[0].image}
                  alt={newsData[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-slate-500 mt-4">{newsData[0].date}</p>
              <p className="text-slate-700 mt-2">{newsData[0].title}</p>
              <div className="flex justify-end -mt-4 md:-mt-4 lg:-mt-5 relative right-10">
                          <a href="/news">
  <ExternalLink className="w-5 h-5 text-teal-500" /></a>
              </div>
            </div>
 
            {/* Right Column - Latest News List */}
            <div className="lg:col-span-1 space-y-6">
              {newsData.map((newsItem) => (
                <NewsItem key={newsItem.id} item={newsItem} />
              ))}
            </div>
          </div>
        ) : (
          // Media Grid - 3 cards
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaData.map((item) => (
              <MediaCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}