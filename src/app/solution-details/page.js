import { Suspense } from "react";
import ConditionSection1 from "./ConditionSection1";

export default function Page() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
      <ConditionSection1 />
    </Suspense>
  );
}
