import { Suspense } from "react";
import InnerBanner from "@/components/Inner-Banner";
import SolarPlantSpare from "@/components/SolarPlantSpare";
import { CallButton } from "@/components/Call-Action";

export default function Page() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
      <InnerBanner title="Solar Plant Spare Parts" bgImage="/images/solar-spare-ban.svg" />
      <SolarPlantSpare />
      <CallButton />
    </Suspense>
  );
}
