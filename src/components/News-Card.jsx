

import Link from "next/link"
import Image from "next/image"

function NewsCard({ data_uniq_id, image, title, date, description }) {
  return (
    <Link href={`/news-details?data_uniq_id=${data_uniq_id}`}>
      <div className="cursor-pointer group">
        
        {/* Image */}
        <div className="relative overflow-hidden rounded-lg mb-4 h-48">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        {/* Title */}
        <h3 className="font-semibold text-lg mb-2 transition-colors line-clamp-2 text-[#293E52]">
          {title}
        </h3>

        {/* Date */}
        <p className="text-sm text-[#293E52] mb-3">{date}</p>

        {/* Description (trimmed) */}
        <p className="text-[#293E52] line-clamp-3">
          {description
            ?.replace(/<[^>]+>/g, "")      // remove HTML tags
            .slice(0, 120)                 // limit characters
            + "..."}
        </p>

        {/* Read More link */}
        <p className="text-sm text-[#3CA948] font-medium mt-2">
          Read More →
        </p>

      </div>
    </Link>
  );
}

export default NewsCard;