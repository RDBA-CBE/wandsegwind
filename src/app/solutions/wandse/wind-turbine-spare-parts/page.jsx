import { Suspense } from "react";
import InnerBanner from "@/components/Inner-Banner";
import WindTurbineSpare from "@/components/WindTurbineSpare";
import { CallButton } from "@/components/Call-Action";

export default function Page() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
      <InnerBanner title="Wind Turbine Spare Parts" bgImage="/images/wind-spare-ban.svg" />
      <WindTurbineSpare />
      <CallButton />
    </Suspense>
  );
}
