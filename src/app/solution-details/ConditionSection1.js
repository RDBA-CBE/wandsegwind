"use client";

import InnerBanner from "@/components/Inner-Banner";
import { useState, useEffect } from "react";
import { axiosGet, BASE_URL } from "@/lib/api";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function ConditionSection1() {
  const [showMore, setShowMore] = useState(false);
  const searchParams = useSearchParams();
  const solutionId = searchParams.get("solution_id");

  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [otherSol, setOthersol] = useState([]);
  const [sol, setSolution] = useState(null);

  /* ================= FETCH MAIN CONTENT ================= */
  useEffect(() => {
    if (!solutionId) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axiosGet.get(
          `/masters/solutions/content/get/?web_sts=1&solution_id=${solutionId}`
        );
        setContent(res.data?.data?.[0] || null);
      } catch (err) {
        console.error("Condition content error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [solutionId]);

  /* ================= FETCH TABS ================= */
  useEffect(() => {
    const fetchTabsData = async () => {
      try {
        const response = await axiosGet.get(
          "masters/solutions/get/?web_sts=1"
        );
        setOthersol(response.data.data || []);
      } catch (err) {
        console.error("Tabs Error:", err);
      }
    };

    fetchTabsData();
  }, []);

  /* ================= SET BANNER ================= */
  useEffect(() => {
    if (!solutionId || !otherSol.length) return;

    const master = otherSol.find(
      (s) => s.data_uniq_id === solutionId
    );

    if (!master) return;

    setSolution({
      solution_name: master.title,
      innerBannerImage: master.banner_image_path
        ? BASE_URL + master.banner_image_path
        : "/images/sol-bg.png",
    });
  }, [solutionId, otherSol]);

  /* ================= SORTED DATA ================= */
  const descriptions = [...(content?.data?.content || [])].sort(
  (a, b) => (a.position ?? 0) - (b.position ?? 0)
);

  const image = [...(content?.data?.image || [])].sort(
  (a, b) => (a.position ?? 0) - (b.position ?? 0)
);

  const twoColumnCards = [
  ...(content?.data?.twocolumn?.[0]?.two_column_data || []),
].sort((a, b) => (a.sub_position ?? 0) - (b.sub_position ?? 0));

  const visibleCards = showMore
    ? twoColumnCards
    : twoColumnCards.slice(0, 2);

  const showEmptyState = !loading && !content;

  return (
    <>
      {/* ================= BANNER (ALWAYS VISIBLE) ================= */}
      {sol && (
        <InnerBanner
          title={sol.solution_name}
          bgImage={sol.innerBannerImage}
        />
      )}

      {/* ================= LOADING STATE ================= */}
      {loading && (
        <div className="flex justify-center items-center py-20">
          <p className="text-gray-500 text-lg">Loading...</p>
        </div>
      )}

      {/* ================= NO DATA STATE ================= */}
      {showEmptyState && (
        <div className="flex justify-center items-center py-20">
          <p className="text-gray-500 text-lg">No data found</p>
        </div>
      )}

      {/* ================= CONTENT ================= */}
      {!loading && content && (
        <>
          {/* DESCRIPTION */}
          <section className="max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto px-4 py-10">
            {descriptions.map((item) => (
              <div key={item.data_uniq_id} className="mb-6 text-center">
                <div
                  className="text-[#293E52] text-base leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>
            ))}
          </section>

          {/* IMAGES */}
          {image.map((item) => (
            <div
              key={item.data_uniq_id}
              className="w-full pt-4 lg:p-12"
            >
              <Image
                src={BASE_URL + item.file_path}
                alt="Full Width Image"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
          ))}

          {/* TWO COLUMN SECTION */}
          <section className="w-full bg-white pt-16 px-4 md:px-6 lg:px-8 -mb-5">
            <div className="max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#293E52] mb-4">
                  What We Do
                </h2>
                <p className="text-[#293E52] text-base mb-6">
                  We monitor the health and readiness of wind turbines.
                </p>
                <Image
                  src="/images/sol-gif.gif"
                  alt="What We Do"
                  width={400}
                  height={300}
                />
              </div>

              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {visibleCards.map((card, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-2xl shadow-md p-6"
                    >
                      <Image
                        src={BASE_URL + card.file_path}
                        alt="icon"
                        width={60}
                        height={60}
                      />
                      <div
                        className="
                          mt-4 text-sm text-[#293E52]
                          [&_p]:mb-3
                          [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-3
                          [&_li]:mb-1
                          [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:mb-3
                          [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mb-2
                          [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mb-2
                          [&_a]:text-blue-600 [&_a]:underline
                        "
                        dangerouslySetInnerHTML={{ __html: card.description }}
                      />


                    </div>
                  ))}
                </div>

                <div className="my-6 text-center">
                  <button
                    onClick={() => setShowMore(!showMore)}
                    className="text-[#293E52] font-medium"
                  >
                    {showMore ? "Show Less" : "Show More"}
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* OTHER SOLUTIONS */}
          <section className="w-full bg-gray-50 py-12">
            <div className="max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto px-4">
              <h2 className="text-3xl font-semibold text-[#293E52] mb-10">
                Other Solutions
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherSol
                  .filter((s) => s.data_uniq_id !== solutionId)
                  .slice(0,3)
                  .map((s) => (
                    <div
                      key={s.data_uniq_id}
                      className="border rounded-2xl p-6"
                    >
                      <div className="flex justify-between mb-4">
                        <img
                          src={BASE_URL + s.image_path}
                          alt={s.title}
                          className="w-10 h-10"
                        />
                        <a
                          href={`/solution-details?solution_id=${s.data_uniq_id}`}
                        >
                          <ExternalLink className="w-5 h-5 text-gray-500" />
                        </a>
                      </div>
                      <h3 className="font-semibold">{s.title}</h3>
                      <p
                        className="text-sm text-gray-600"
                        dangerouslySetInnerHTML={{
                          __html: s.description || "",
                        }}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
