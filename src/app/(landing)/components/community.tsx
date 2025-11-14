import React from "react";
import FeaturesList, { Feature } from "./ui/features-list";
import JoinUsGrid from "./ui/joinus";
import MissionCard from "./ui/mission-card";

const CommunitySection: React.FC = () => {
  const features: Feature[] = [
    { id: 1, text: "Conpetual Clarity", isHighlight: false },
    { id: 2, text: "Open Ecosystem", isHighlight: false },
    { id: 3, text: "Modular Infrastructure", isHighlight: true },
    { id: 4, text: "Aligned Incentives", isHighlight: false },
    { id: 5, text: "Privacy First", isHighlight: false },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-4 md:p-8  rounded-[3rem]">
        
        <div className="lg:col-span-1">
          <MissionCard />
        </div>

        <div className="lg:col-span-1">
          <FeaturesList features={features} />
        </div>

        <div className="lg:col-span-1">
          <JoinUsGrid />
        </div>
        
      </div>
    </section>
  );
};

export default function Page() {

  return (
    <main
    >
      <CommunitySection />
    </main>
  );
}