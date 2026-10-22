import { Suspense } from "react";
import InnerBanner from "@/components/Inner-Banner";
import ValueAddedServices from "@/components/ValueAddedServices";
import { CallButton } from "@/components/Call-Action";

export default function Page() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
      <InnerBanner title="Value-Added Services" bgImage="/images/value-ban" />
      <ValueAddedServices/>
      <CallButton />
    </Suspense>
  );
}
