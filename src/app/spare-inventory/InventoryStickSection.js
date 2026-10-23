
"use client";

import { useState, useEffect } from "react";
import InnerBanner from "@/components/Inner-Banner";
import { BASE_URL, axiosGet } from "@/lib/api";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ExternalLink } from "lucide-react";


export default function InventoryStickSection() {
  const searchParams = useSearchParams();
  const solutionId = searchParams.get("solution_id");

  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [banner, setBanner] = useState(null);
  const [inventory,setInventory]=useState([])
  const [topDescription, setTopDescription] = useState("");


  useEffect(() => {
    if (!solutionId) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axiosGet.get(
          `/masters/spareinventory/content/get/?web_sts=1&has_limit=0&solution_id=${solutionId}`
        );

        setSections(res.data?.data || []);
        setTopDescription(res.data?.description || "");
      } catch (err) {
        console.error("Spare inventory error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [solutionId]);

   const fetchInventoryData = async () => {
    
    try {
      
      const response = await axiosGet.get(
        "masters/spareinventory/get/?web_sts=1"
      );
      const tabs = response.data.data;
      setInventory(tabs);
      console.log("tabs",tabs)
    } catch (err) {
      console.error("Tabs Error:", err);
    }
  };

  useEffect(() => {
    fetchInventoryData();
  }, []);





  /* Fetch banner */
  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axiosGet.get(
          "masters/spareinventory/get/?web_sts=1"
        );

        const list = res.data?.data || [];
        const match = list.find(x => x.data_uniq_id === solutionId);

        if (match) {
          
          setBanner({
            title: match.title,
            image: match.banner_image_path
              ? BASE_URL + match.banner_image_path
              : "/images/sol-bg.png",
          });
        }
      } catch (err) {
        console.error("Banner error:", err);
      }
    };

    fetchBanner();
  }, [solutionId]);


  const staticInventoryCard = {
  icon: "/images/wandse-logo.jpeg",
  title: "Wandse",
  content:
    "WandSe provides a comprehensive range of high quality OEM and cost-effective alternative spare parts to maximize uptime for the renewable installations.",
  link: "https://dev.wandse.com/",     
  isStatic: true,  
};

const mergedInventory = [
  staticInventoryCard,   
  ...(inventory || []),  
];

  return (
    <>
      {/* Banner */}
      {banner && (
        <InnerBanner
          title={`Spare Inventory / ${banner.title}`}
          bgImage={banner.image}
        />
      )}

      <div className="px-4 sm:px-6 lg:px-12 xl:px-20 py-10">

        {/* Loading */}
        {loading && (
          <p className="text-center text-gray-500">Loading...</p>
        )}

        {/* No data */}
        {!loading && sections.length === 0 && (
          <p className="text-center text-gray-500">No data found</p>
        )}

        {/* TOP DESCRIPTION – SHOW ONLY ONCE */}
{!loading && topDescription && (
  <div className="flex justify-center mb-12">
    <div
      className="text-gray-600 text-center max-w-4xl"
      dangerouslySetInnerHTML={{ __html: topDescription }}
    />
  </div>
)}




        {/* Sections */}
      {!loading &&

      
  sections.map((section, index) => {
    const data = section.data || {};

    const images = data.image || [];
    

    return (
      <div
        key={`${section.solution_id || "section"}-${index}`}
        className="mb-16"
      >
        

        {/* Section Heading */}
        {section.title && (
          <h2 className="text-2xl sm:text-3xl font-bold text-[#293E52] mb-4 text-left">
            {section.title}
          </h2>
        )}

        {/* Cards */}
        {images.length > 0 && (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {images.map((img, i) => (
      <div
        key={img.id || i}
        className="relative border border-gray-200 rounded-2xl shadow-sm overflow-hidden
                   hover:shadow-lg transition-all duration-300"
      >
        <img
          src={BASE_URL + img.file_path}
          alt={img.label || "Image"}
          className="w-full h-70 object-cover rounded-2xl
                     transition-transform duration-300 ease-out
                     hover:scale-105"
        />

        {img.label && (
          <h3 className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-lg
                         text-sm font-semibold text-[#293E52]">
            {img.label}
          </h3>
        )}
      </div>
    ))}
  </div>
)}

      </div>
    );
  })}



      </div>

      <section className="w-full bg-white py-16 ">
      <div className="max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto px-4 md:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#293E52] mb-10 text-left">
          Others
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {mergedInventory
    .filter(
      (s) =>
        s.isStatic || s.data_uniq_id !== solutionId
    )
    .map((card, index) => (
      <div
        key={card.data_uniq_id || card.title || index}
        className="border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-lg transition-all duration-300"
      >
        {/* Top Row */}
        <div className="flex items-center justify-between mb-4">
          <img
            src={card.isStatic ? card.icon : BASE_URL +card.image_path}
            alt={card.title}
            className="w-10 h-10 object-contain"
          />

          {/* External Link */}
          <Link
            href={
              card.isStatic
                ? card.link
                : `/spare-inventory?solution_id=${card.data_uniq_id}`
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="w-5 h-5 text-[#293E52] hover:text-black cursor-pointer transition-colors" />
          </Link>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-[#293E52] mb-2">
          {card.title}
        </h3>

        {card.isStatic ? (
            <p className="text-[#293E52] text-sm leading-relaxed">
              {card.content}
            </p>
          ) : (
            <div
              className="text-[#293E52] text-sm leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: card.description || "",
              }}
            />
          )}
                </div>
              ))}
          </div>

      </div>
    </section>

    </>
  );
}
