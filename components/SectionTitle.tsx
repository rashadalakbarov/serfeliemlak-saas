import React from "react";
import Link from "next/link";

type SectionTitleProps = {
  title: string;
  url: string;
};

const SectionTitle = ({ title, url }: SectionTitleProps) => {
  return (
    <div className="flex items-center justify-between my-4 p-1">
      {title} Elanlar
      <Link href={url} className="hover:underline transition-all">
        Daha çox
      </Link>
    </div>
  );
};

export default SectionTitle;
