"use client"

import { useState } from "react"
import NewsSection from "@/components/News-Section"
import MediaSection from "@/components/Media-Section"
import InnerBanner from "@/components/Inner-Banner"

export default function NewsMedia() {
  const [activeTab, setActiveTab] = useState("news")

  return (

    <>
    <InnerBanner title="Media & News" bgImage="/images/news-banner.png" />
    
  
    <main className="min-h-screen bg-background">
      <div className="max-w-[90%] 2xl:max-w-[80%] mx-auto px-4 py-12">
        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12">
<button
  onClick={() => setActiveTab("news")}
  className={`px-8 py-2 rounded-full font-medium transition-colors ${
    activeTab === "news"
      ? "text-white bg-gradient-to-r from-[#3CA948] to-[#329ACD]"
      : "bg-white text-[#293E52] hover:bg-gray-300"
  }`}
>
  News
</button>
<button
  onClick={() => setActiveTab("media")}
  className={`px-8 py-2 rounded-full font-medium transition-colors ${
    activeTab === "media"
      ? "text-white bg-gradient-to-r from-[#3CA948] to-[#329ACD]"
      : "bg-white text-[#293E52] hover:bg-gray-300"
  }`}
>
  Media
</button>

        </div>

        {/* Tab Content */}
        {activeTab === "news" && <NewsSection />}
        {activeTab === "media" && <MediaSection />}
      </div>
    </main>
      </>
  )
}