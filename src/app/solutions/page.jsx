import { Suspense } from "react";
import SolutionsBoth from "./SolutionsBoth";

export default function Page() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
      <SolutionsBoth />
    </Suspense>
  );
}
