// components/WindTurbineGrid.tsx
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const gridItems = [
  {
    id: 1,
    image: '/images/p1.svg',
    title: 'Gamesa - 850 MW',
    alt: 'Project1'
  },
  {
    id: 2,
    image: '/images/p2.svg',
    title: 'Pioneer - 750 MW',
    alt: 'Project2'
  },
  {
    id: 3,
    image: '/images/p3.svg',
    title: 'Pioneer - 250 MW',
    alt: 'Project3'
  },

];

export default function ProjectsHome() {
  return (
    <section className="py-12 px-4 bg-[#F6F6F6]">
      <div className="max-w-[90%] 2xl:max-w-[80%] mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Title */}
               <div className="flex items-center justify-center mb-12">
  <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#293E52] text-center mr-2">
     Projects
  </h1>
   <a href="/project">
            <ExternalLink
              className="w-6 sm:w-7 h-6 sm:h-7"
              strokeWidth={2}
              style={{ stroke: "url(#grad)" }}
            />
            <svg width="0" height="0">
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3AB257" />
                <stop offset="100%" stopColor="#329ACD" />
              </linearGradient>
            </svg>
          </a>
</div>
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {gridItems.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden aspect-[4/3] group"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              
              {/* Overlay with Title */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pb-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}