
"use client";

import { useSearchParams } from "next/navigation";
import InnerBanner from "@/components/Inner-Banner";
import CommitSection from "@/components/Challenege";
import CenterContentSection from "@/components/Solution-Main";
import GwindSection from "@/components/Gwind-Solution";
import InfoGridSection from "@/components/O&m-Contract";
import TechSection from "@/components/Gwind-Solutions";
import SpareInventory from "@/components/Solution-Spare";

export default function MainSolutions() {
  const searchParams = useSearchParams();
  const solutionId = searchParams.get("data_uniq_id"); 

  




  return (
    <>
      <InnerBanner title="GWind Solutions" bgImage="/images/sol-bg.svg" />

      
      <CenterContentSection />
      <CommitSection />
      <GwindSection />
      <InfoGridSection />
      <TechSection />
      <SpareInventory />

      

    </>
  );
}
