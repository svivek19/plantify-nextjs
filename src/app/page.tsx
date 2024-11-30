import React from "react";
import Navbar from "@/components/navbar";
import { FocusCardsDemo } from "@/components/image";

const Page: React.FC = () => {
  return (
    <div>
      <Navbar />

      <div className="mt-4">
        <div className="flex justify-center gap-3 my-8 text-2xl font-semibold text-green-800">
          <h1>Most Desired Plants</h1>
          <p className="bg-green-100 px-2 rounded-md">- 25% Off!</p>
        </div>

        <FocusCardsDemo />
      </div>
    </div>
  );
};

export default Page;
