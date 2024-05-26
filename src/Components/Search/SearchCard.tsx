import React from "react";
import tempBanner from "../../logo.svg";

interface SearchCardProps {
  title: string;
  image?: string;
}

export default function SearchCard({
  title,
  image = tempBanner,
}: SearchCardProps) {
  return (
    <article className="w-56 h-64 flex flex-col rounded overflow-hidden bg-gray-200">
      <div className="bg-blue-500 text-white text-center py-1">{title}</div>
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </article>
  );
}
