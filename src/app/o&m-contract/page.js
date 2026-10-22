import { Suspense } from "react";
import ConditionSection from "./ConditionSection";

export default function Page() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
      <ConditionSection />
    </Suspense>
  );
}