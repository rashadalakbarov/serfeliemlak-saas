import React from "react";
import SectionTitle from "./SectionTitle";
import CardItem from "./CardItem";
import { sampleCards } from "@/lib/config";

const VipSection = () => {
  return (
    <>
      <SectionTitle title="VIP" url="/" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-3">
        {sampleCards.map((c) => (
          <CardItem key={c.id} {...c} />
        ))}
      </div>
    </>
  );
};

export default VipSection;
