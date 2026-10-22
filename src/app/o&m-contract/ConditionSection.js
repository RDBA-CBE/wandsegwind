"use client";

import InnerBanner from "@/components/Inner-Banner";
import { useState, useEffect } from "react";
import { axiosGet, BASE_URL } from "@/lib/api";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";



export default function ConditionSection() {
  const [showMore, setShowMore] = useState(false);
  const searchParams = useSearchParams();
  const solutionId = searchParams.get("solution_id"); 

  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [omData, setOmData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [otherSol,setOthersol]=useState([]);
  const [sol,setSolution]=useState(null)


  useEffect(() => {
    if (!solutionId) return;

    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await axiosGet.get(
          `/masters/om/content/get/?web_sts=1&solution_id=${solutionId}`
        );

        setContent(res.data?.data?.[0] || null);
      } catch (err) {
        console.error("Solution content error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [solutionId]);


 
const fetchTabsData = async () => {
  try {
    const response = await axiosGet.get("masters/om/get/?web_sts=1");
    setOthersol(response.data.data || []);
  } catch (err) {
    console.error("Tabs Error:", err);
  }
};

useEffect(() => {
  fetchTabsData();
}, []);


useEffect(() => {
  if (!solutionId || !otherSol.length) return;

  const master = otherSol.find(
    (s) => s.data_uniq_id === solutionId
  );

  if (!master) return;

  const heroImage = master.banner_image_path?.trim()
    ? BASE_URL + master.banner_image_path
    : "/images/sol-bg.png";

  setSolution({
    solution_name: master.title,
    innerBannerImage: heroImage,
  });
}, [solutionId, otherSol]);

 


 
const sortByPosition = (arr = []) =>
  [...arr].sort((a, b) => (a.position ?? 0) - (b.position ?? 0));


 if (loading) {
  return <p className="text-center py-10">Loading...</p>;
}

if (!content || !content.data) {
  return <p className="text-center py-10">No data found</p>;
}

  const descriptions = sortByPosition(content.data?.content);


  const image = sortByPosition(content.data?.image);

  const twoColumnCards = sortByPosition(
  content.data?.twocolumn?.[0]?.two_column_data
);

const gridBlock = content.data?.grid?.[0];

const gridTitle = gridBlock?.grid_data?.[0]?.title || "";

const gridCards = gridBlock?.grid_data?.[0]?.data || [];
const sortedGridCards = [...gridCards].sort(
  (a, b) => Number(a.sub_position) - Number(b.sub_position)
);
const mainImageCard = sortedGridCards.find(
  (item) => Number(item.sub_position) === 1
);

const otherCards = sortedGridCards.filter(
  (item) => Number(item.sub_position) !== 1
);

const firstRowCards = otherCards.slice(0, 3);
const remainingCards = otherCards.slice(3);


const threeColumnData =
  content?.data?.threecolumn?.[0]?.three_column_data?.map(item => {
    const temp = document.createElement("div");
    temp.innerHTML = item.description || "";

    return {
      title: item.title || "Details",
      description: item.description,
      image: item.file_path ? BASE_URL + item.file_path : null,
    };
  }) || [];


  const orderedFlow = [];

descriptions.forEach((item) => {
  orderedFlow.push({
    type: "description",
    position: item.position,
    data: item,
  });
});

image.forEach((item) => {
  orderedFlow.push({
    type: "image",
    position: item.position,
    data: item,
  });
});

if (twoColumnCards.length > 0) {
  orderedFlow.push({
    type: "twocolumn",
    position: content.data?.twocolumn?.[0]?.position,
    data: twoColumnCards,
  });
}


if (gridCards.length > 0) {
  orderedFlow.push({
    type: "grid",
    position: gridBlock.position,
    data: {
      title: gridTitle,
      mainImageCard,
      firstRowCards,
      remainingCards,
    },
  });
}


if (threeColumnData.length > 0) {
  orderedFlow.push({
    type: "threecolumn",
    position: content.data.threecolumn?.[0]?.position,
    data: threeColumnData,
  });
}

if (content.data?.flowchart?.length > 0) {
  orderedFlow.push({
    type: "flowchart",
    position: content.data.flowchart[0].position,
    data: content.data.flowchart[0].flow_chart_data || [],
  });
}

const decodeHtml = (html = "") => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const extractPoints = (html = "") => {
  if (!html) return [];

  const decoded = decodeHtml(html);
  const temp = document.createElement("div");
  temp.innerHTML = decoded;

  const points = [];

  temp.querySelectorAll("li").forEach(li => {
    const strong = li.querySelector("strong");
    const title = strong ? strong.innerText.replace(":", "").trim() : "";
    const content = li.innerText.replace(strong?.innerText || "", "").trim();

    points.push({ title, content });
  });

  return points;
};

const points = extractPoints(
  threeColumnData[activeIndex]?.description
);



orderedFlow.sort((a, b) => a.position - b.position);
const hasRenderableData = orderedFlow.length > 0;



const threeColumnImage =
  content?.data?.threecolumn?.[0]?.three_column_data?.[activeIndex]?.file_path
    ? BASE_URL +
      content.data.threecolumn[0].three_column_data[activeIndex].file_path
    : null;




  return (
<>

      {sol && (
        <InnerBanner
          title={sol.solution_name}
          bgImage={sol.innerBannerImage}
        />
      )}


{!hasRenderableData && (
  <p className="text-center py-16 text-gray-500">
    No data found
  </p>
)}

{hasRenderableData &&
  orderedFlow.map((block, index) => {
    switch (block.type) {
    
    case "description":
  return (
    <section
      key={`desc-${block.data.data_uniq_id}`}
      className="max-w-[90%] 2xl:max-w-[80%] mx-auto px- py-10"
    >
      <div
        className="
          text-[#293E52] leading-relaxed

          /* HEADINGS */
          [&_h1]:text-left
          [&_h1]:text-3xl
          [&_h1]:font-semibold
          [&_h1]:mb-6

          [&_h2]:text-left
          [&_h2]:text-2xl
          [&_h2]:font-semibold
          [&_h2]:mb-5

          [&_h3]:text-left
          [&_h3]:text-xl
          [&_h3]:font-semibold
          [&_h3]:mb-4

          /* PARAGRAPH */
          [&_p]:px-[50px]
          [&_p]:text-base
          [&_p]:mb-2
          [&_p]:text-center

          /* LIST GRID */
          [&_ul]:grid
          [&_ul]:grid-cols-1
          [&_ul]:sm:grid-cols-2
          [&_ul]:md:grid-cols-4
          [&_ul]:gap-4
          [&_ul]:pl-0
          [&_ul]:list-none
          [&_ul]:mt-6

          /* LIST ITEMS */
          [&_li]:flex
          [&_li]:items-start
          [&_li]:gap-2
          [&_li]:text-left

          /* CHECK ICON */
          [&_li::before]:content-['']
          [&_li::before]:w-4
          [&_li::before]:h-4
          [&_li::before]:mt-1
          [&_li::before]:bg-[url('/images/check.svg')]
          [&_li::before]:bg-contain
          [&_li::before]:bg-no-repeat
          [&_li::before]:shrink-0
        "
        dangerouslySetInnerHTML={{ __html: block.data.description }}
      />
    </section>
);

    case "image":
      return (
        <div
          key={`img-${block.data.data_uniq_id}`}
          className="w-full pt-2 lg:p-12"
        >
          <Image
            src={BASE_URL + block.data.file_path}
            alt="Full Width Image"
            width={1200}
            height={600}
            className="w-full h-auto"
          />
        </div>
      );

    case "twocolumn":
  return (
    <section
      key={`two-${index}`}
      className="w-full bg-white py-12"
    >
      <div className="max-w-[90%] 2xl:max-w-[80%] mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#293E52] mb-4">
              What It Covers
            </h2>
            <p className="text-[#293E52] text-base md:text-lg mb-8">
              All services included in the Annual Operation and Maintenance Contract (AOMC).
            </p>
          </div>
        </div>

        {/* RIGHT SIDE (Cards Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {block.data.map((card, i) => (
            <div
              key={i}
              className="relative rounded-2xl shadow-md overflow-hidden group h-64 flex items-end hover:shadow-lg transition-all"
            >
              {/* Background Image */}
              <Image
                src={BASE_URL + card.file_path}
                alt="image"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Text Content (on hover) */}
              <div
                className="
                  absolute bottom-0 left-0 right-0 z-10 p-4 text-white
                  opacity-0 group-hover:opacity-100
                  translate-y-5 group-hover:translate-y-0
                  transition-all duration-500
                  
                  [&_h3]:font-semibold
                  [&_h3]:text-base
                  [&_h3]:mb-1
                  [&_p]:text-sm
                  [&_p]:leading-relaxed
                "
                dangerouslySetInnerHTML={{ __html: card.description }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
      );

    case "grid": {
  const { title, mainImageCard, firstRowCards, remainingCards } = block.data;

  return (
    <section key={`grid-${index}`} className="w-full bg-gray-50 py-12">
      <div className="max-w-[90%] 2xl:max-w-[80%] mx-auto px-4 md:px-6 lg:px-8">

        {/* GRID TITLE */}
        {title && (
          <h2 className="text-2xl md:text-3xl font-semibold text-[#293E52] mb-8">
            {title}
          </h2>
        )}

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {mainImageCard && (
            <div className="relative rounded-2xl overflow-hidden h-56">
              <Image
                src={BASE_URL + mainImageCard.file_path}
                alt="Main image"
                fill
                className="object-cover"
              />
            </div>
          )}

          {firstRowCards.map((card, i) => (
            <article key={i} className="bg-white rounded-2xl shadow-sm p-8">
              <Image
                src={BASE_URL + card.file_path}
                alt="icon"
                width={64}
                height={64}
              />
              <div
                className="text-sm text-[#293E52] mt-6"
                dangerouslySetInnerHTML={{ __html: card.description }}
              />
            </article>
          ))}
        </div>

        {/* BOTTOM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {remainingCards.map((card, i) => (
            <article key={i} className="bg-white rounded-2xl shadow-sm p-8">
              <Image
                src={BASE_URL + card.file_path}
                alt="icon"
                width={56}
                height={56}
              />
              <div
                className="text-sm text-[#293E52] mt-6"
                dangerouslySetInnerHTML={{ __html: card.description }}
              />
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}


    case "threecolumn": {
  const data = block.data;

  if (!data?.length) return null;

  return (
    <main
      key={`three-${index}`}
      className="w-full bg-white text-[#293E52]"
    >
      

      {/* SECTION 2 */}
      <section className="max-w-[90%] 2xl:max-w-[80%] mx-auto px-4 md:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-10 items-center md:items-start">

        {/* LEFT – TITLES */}
        <div className="flex flex-row md:flex-col gap-4 w-full md:w-1/4 text-center md:text-left">
          {data.map((item, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`text-base sm:text-lg font-semibold border-b-2 md:border-l-4 md:border-b-0 px-4 py-2 transition-all ${
                activeIndex === i
                  ? "text-[#293E52] border-black"
                  : "text-gray-500 border-transparent hover:text-black"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* CENTER – IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-[280px] h-[220px] sm:w-[360px] sm:h-[280px] md:w-[420px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
            {threeColumnImage ? (
              <Image
                src={threeColumnImage}
                alt="Three column image"
                fill
                className="object-cover transition-all duration-500"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                Image not available
              </div>
            )}
          </div>
        </div>

<div className="w-full md:w-1/3">
  <ul className="space-y-3">
    {points.map((point, i) => (
      <li key={i} className="flex items-start gap-3">
        <span className="mt-1 w-3 h-3 bg-black rounded-full"></span>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          <span className="font-semibold text-[#293E52]">
            {point.title}
          </span>{" "}
          {point.content}
        </p>
      </li>
    ))}
  </ul>
</div>




      </section>
    </main>
  );
}

case "flowchart": {
  const items =
    block.data
      ?.sort((a, b) => a.sub_position - b.sub_position)
      ?.map(item => {
        const temp = document.createElement("div");
        temp.innerHTML = item.description || "";

        return {
          title: temp.querySelector("h3")?.innerText || "",
          description: temp.querySelector("p")?.innerText || "",
          imgSrc: item.file
            ? BASE_URL + item.file
            : "/images/check.svg",
        };
      }) || [];

  return (
    <section
      key={`flow-${index}`}
      className="relative py-16 bg-white"
    >
      {/* Title */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-[#293E52] mb-12">
        The Challenge of Wind Asset Management
      </h2>

      <p className="text-sm md:text-base text-[#293E52] max-w-6xl mx-auto mb-12 text-center">
        Our comprehensive Total Asset Management services are designed to maximize
        your energy production and protect your investment.
      </p>

      <div className="relative max-w-[90%] 2xl:max-w-[80%] mx-auto px-4 md:px-8">
        {/* Vertical line */}
        <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[2px] bg-gray-200 h-[93%]" />

        <div className="space-y-16 md:space-y-24">
          {items.map((item, i) => (
            <div
              key={i}
              className="relative flex flex-col md:flex-row items-center md:items-start"
            >
              {/* LEFT */}
              <div className={`hidden md:flex w-1/2 justify-end pr-10 ${i % 2 === 0 ? "opacity-100" : "opacity-0"}`}>
                {i % 2 === 0 && (
                  <div className="text-right max-w-sm">
                    <h3 className="text-lg font-semibold text-[#172431] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#172431] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>

              {/* ICON */}
              <div className="z-10 flex items-center justify-center w-16 h-16 rounded-full bg-[#E0F2F1] border shadow-md mx-auto md:absolute md:left-1/2 md:-translate-x-1/2">
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* RIGHT */}
              <div className={`hidden md:flex w-1/2 justify-start pl-10 ${i % 2 !== 0 ? "opacity-100" : "opacity-0"}`}>
                {i % 2 !== 0 && (
                  <div className="text-left max-w-sm">
                    <h3 className="text-lg font-bold text-[#172431] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#293E52] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>

              {/* MOBILE */}
              <div className="md:hidden text-center mt-6">
                <h3 className="text-lg font-bold text-[#172431] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#293E52] leading-relaxed px-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


    default:
      return null;
  }
})}




<section className="w-full bg-white py-16 ">
      <div className="max-w-[90%] 2xl:max-w-[80%] mx-auto px-4 md:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-10 text-left">
          Other O&M Contracts
        </h2>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherSol.length === 0 && (
            <p className="col-span-full text-center text-gray-500">
              No data found
            </p>
          )}
          
          {otherSol
          .filter((card) => card.data_uniq_id !== solutionId)
          .slice(0,3)
          .map((card, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-lg transition-all duration-300"
            >
              {/* Top Row - Icons */}
              <div className="flex items-center justify-between mb-4">
                <img
                  src={BASE_URL+card.image_path}
                  alt={card.title || "icon"}
                  className="w-10 h-10 object-contain"
                />

                {/* External Link Icon with Navigation */}
              
                    <a
                          href={`/o&m-contract?solution_id=${card.data_uniq_id}`}
                        >
                          <ExternalLink className="w-5 h-5 text-gray-500" />
                        </a>
                  

              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {card.title}
              </h3>

              {/* Content */}

                      <p
                        className="text-sm text-gray-600"
                        dangerouslySetInnerHTML={{
                          __html: card.description,
                        }}
                      />
            </div>
          ))}
        </div>
      </div>
    </section>



    
</>
  );
}


