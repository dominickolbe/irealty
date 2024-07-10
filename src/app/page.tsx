import { Button } from "@/components/ui/button";

import Demo from "@/components/demo";
import Link from "next/link";

import { MoveRight } from "lucide-react";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center ">
        <h1 className="text-4xl font-bold text-center ">irealty</h1>
        <h2 className="text-2xl font-bold text-center ">
          Real Estate, Reimagined.
        </h2>
        <Link href="/dashboard" className="flex">
          Go to Dashboard
          <MoveRight className="w-6 h-6 ml-4" />
        </Link>
      </main>
    </div>
  );
}
