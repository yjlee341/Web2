import React from "react";
import tempBanner from "../../../logo.svg";

interface BoothCardProps {
  name: string;
  image?: string;
}

export default function BoothCard({
  name,
  image = tempBanner,
}: BoothCardProps) {
  return (
    <div className="border rounded overflow-hidden shadow-md w-full h-96 flex flex-col">
      <div className="bg-blue-500 text-white text-center py-2">{name}</div>
      <div className="flex-grow bg-gray-300 flex items-center justify-center h-56">
        <img src={image} alt={name} className="object-contain h-48 w-full" />
      </div>
    </div>
  );
}
