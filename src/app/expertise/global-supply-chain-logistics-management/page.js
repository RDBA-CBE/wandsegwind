import { Suspense } from "react";
import InnerBanner from "@/components/Inner-Banner";
import GlobalSupplyChain from "@/components/GlobalSupplyChain";
import { CallButton } from "@/components/Call-Action";

export default function Page() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
      <InnerBanner title="Global Supply Chain & Logistics Management" bgImage="/images/global-ban" />
      <GlobalSupplyChain/>
      <CallButton />
    </Suspense>
  );
}
