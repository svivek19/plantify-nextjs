import React from "react";
import Navbar from "@/components/navbar";
import { FocusCardsDemo } from "@/components/image";
import { LampDemo } from "@/components/ui/lamp";
import Footer from "@/components/ui/footer";
import Plants from "@/components/plants";

const Page: React.FC = () => {
  return (
    <div>
      <Navbar />

      <div>
        <LampDemo />
      </div>

      <div className="mt-4">
        <div className="flex justify-center gap-3 my-8 text-2xl font-semibold text-green-800">
          <h1>Most Desired Plants</h1>
          <p className="bg-green-100 px-2 rounded-md">- 25% Off!</p>
        </div>

        <FocusCardsDemo />
      </div>

      <div className="flex justify-center">
        <div className="flex justify-center gap-3 my-8 text-2xl font-semibold text-green-800">
          <h1>Our Plants</h1>
        </div>
      </div>
      <div className="flex justify-center">
        <Plants />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
