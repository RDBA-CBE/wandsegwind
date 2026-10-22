
"use client";
import { useEffect, useState } from "react";
import { axiosGet, BASE_URL } from "@/lib/api";

export default function ProjectsSection() {
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noData, setNoData] = useState(false);

  const fetchProject = async () => {
    try {
      setLoading(true);

      const res = await axiosGet.get(
        `masters/projects/get/?web_sts=1`
      );

      const data = res.data?.data || [];
      setProjectData(data);
      setNoData(data.length === 0);
    } catch (err) {
      console.error("Project Error:", err);
      setNoData(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProject();
  }, []);

  return (
    <>
    <section className="w-full px-4 py-12 md:px-6 lg:px-8">
      <div className="mx-auto max-w-[90%] 2xl:max-w-[80%]">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="text-sm text-[#293E52] md:text-base max-w-3xl mx-auto">
            GWind delivers large-scale solar, wind, and storage projects
            across India, powering a cleaner, sustainable future.{" "}
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-center text-gray-500 py-10">
            Loading projects...
          </p>
        )}

        {/* No Data */}
        {!loading && noData && (
          <p className="text-center text-gray-500 py-10">
            No projects found
          </p>
        )}

        {/* Projects Grid */}
        {!loading && !noData && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {projectData.map((card) => (
              <div
                key={card.id}
                className="overflow-hidden rounded-lg bg-card"
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-muted md:h-64 rounded-lg">
                  <img
                    src={
                      card.image_path
                        ? BASE_URL + card.image_path
                        : "/placeholder.svg"
                    }
                    alt={card.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105 rounded-lg"
                  />
                </div>

                {/* Content */}
                <div className="py-2 px-0">
                  {/* Title & Status */}
                  <div className="mb-3 flex items-center justify-between gap-3 mt-4">
                    <h3 className="text-md md:text-lg lg:text-xl font-semibold text-[#293E52]">
                      {card.title}
                    </h3>

                    <div
                      className={`inline-block rounded-full p-[1.5px] ${
                        card.project_status === 1
                          ? "bg-gradient-to-r from-[#3AB257] to-[#329ACD]"
                          : "bg-gradient-to-r from-[#293E52] to-[#293E52]"
                      }`}
                    >
                      <span className="block rounded-full bg-white px-3 py-1 text-xs font-medium text-[#293E52]">
                        {card.project_status === 2 ?  "Ongoing":"Completed" }
                      </span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="mb-3 flex items-center gap-2 text-sm font-bold text-[#3CA948]">
                    <img
                      src="/images/location.svg"
                      alt="Location"
                      className="h-4 w-4"
                    />
                    <span>{card.location}</span>
                  </div>

                  {/* Description */}
                  <p
                    className="line-clamp-2 text-sm md:text-base text-[#293E52]"
                    dangerouslySetInnerHTML={{
                      __html: card.description || "",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>

    

    </>
  );
}
