"use client";

export default function InstockSections() {
  
  // --- Section 2 cards ---
  const section2Row1 = [
    { id: 1, title: "Generator", img: "/images/stock1.svg" },
    { id: 2, title: "Gearbox", img: "/images/stock2.svg" },
    { id: 3, title: "Transformer", img: "/images/stock3.svg" },
  ];
  const section2Row2 = [
     { id: 4, title: "Blade With Accessories", img: "/images/stock4.svg" },
    { id: 5, title: "Blade Slewing", img: "/images/stock5.svg" },
    // { id: 6, title: "Rainforest", img: "/images/stock6.svg" },
  ];

  // --- Section 3 cards (repeat section) ---
  const section3Row1 = [
     { id: 1, title: "PLCS", img: "/images/net1.svg" },
     { id: 2, title: "Arrestors", img: "/images/net2.svg" },
     { id: 3, title: "Controllers", img: "/images/net3.svg" },
  ];
  const section3Row2 = [
    { id: 4, title: "Breakers", img: "/images/net4.svg" },
     { id: 5, title: "Relays", img: "/images/net5.svg" },
     { id: 6, title: "Insulators", img: "/images/net6.svg" },
  ];
    const section3Row3 = [
    { id: 7, title: "Sensors", img: "/images/net7.svg" },
     { id: 8, title: "Terminal blocks", img: "/images/net8.svg" },
     { id: 9, title: "Enclosures", img: "/images/net9.svg" },
  ];
    const section3Row4 = [
    { id: 10, title: "Power cables", img: "/images/net10.svg" },
     { id: 11, title: "UPS systems", img: "/images/net11.svg" },
     { id: 12, title: "Backup batteries", img: "/images/net12.svg" },
  ];
    const section3Row5 = [
    { id: 13, title: "Communication modules", img: "/images/net13.svg" },
     { id: 14, title: "Cooling fans, Heaters", img: "/images/net14.svg" },
     { id: 15, title: "Inverters", img: "/images/net15.png" },
  ];

  return (
    <main className="w-full bg-white">

      {/* ===== Section 1 ===== */}
      <section className="max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="text-center mb-2 max-w-5xl mx-auto">
          <p className="text-lg text-[#293E52]">GWind is one among very few strategic O&M solution providers to stock all types of major spares, accessories, electrical and electronic spares for multi brand turbines.</p>
        </div>

        {/* 1st row */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {section1Row1.map((card) => (
            <Card key={card.id} img={card.img} title={card.title} />
          ))}
        </div> */}

        {/* 2nd row */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {section1Row2.map((card) => (
            <Card key={card.id} img={card.img} title={card.title} />
          ))}
        </div> */}
      </section>

      {/* ===== Section 2 ===== */}
      <section className="max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto px-4 pb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#293E52] text-left mb-10">
          Major Spares
        </h2>

        {/* 1st row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {section2Row1.map((card) => (
            <Card key={card.id} img={card.img} title={card.title} />
          ))}
        </div>

        {/* 2nd row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {section2Row2.map((card) => (
            <Card key={card.id} img={card.img} title={card.title} />
          ))}
        </div>
      </section>

      {/* ===== Section 3 (Repeat) ===== */}
      <section className="max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto px-4 py-16 border-t border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#293E52] text-left mb-10">
Electrical Spares
        </h2>

        {/* 1st row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {section3Row1.map((card) => (
            <Card key={card.id} img={card.img} title={card.title} />
          ))}
        </div>

        {/* 2nd row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {section3Row2.map((card) => (
            <Card key={card.id} img={card.img} title={card.title} />
          ))}
        </div>


         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {section3Row3.map((card) => (
            <Card key={card.id} img={card.img} title={card.title} />
          ))}
        </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {section3Row4.map((card) => (
            <Card key={card.id} img={card.img} title={card.title} />
          ))}
        </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {section3Row5.map((card) => (
            <Card key={card.id} img={card.img} title={card.title} />
          ))}
        </div>
      </section>
    </main>
  );
}

// --- Card Component ---
function Card({ img, title }) {
  return (
    <div className="relative group overflow-hidden rounded-xl shadow-lg">
      <img
        src={img}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute bottom-4 left-4 bg-white text-black px-3 py-1 rounded-lg text-sm">
        {title}
      </div>
    </div>
  );
}
