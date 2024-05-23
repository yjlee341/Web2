import React from "react";

interface Props {
  name: string;
  price: number;
  volume: string;
  description: string;
  rating: number;
  reviews: number;
  imageUrl: string;
}

export default function ServiceManagementPage({
  name,
  price,
  volume,
  description,
  rating,
  reviews,
  imageUrl,
}: Props) {
  return (
    <div className="border p-4 rounded-lg flex shadow-md relative">
      <img
        src={imageUrl}
        alt={name}
        className="w-24 h-24 object-cover rounded-md"
      />
      <div className="flex flex-col justify-between flex-grow pl-4">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold">
              {name} {volume}
            </h3>
            <p className="text-xl text-gray-800">{price.toLocaleString()}원</p>
          </div>
          <div className="flex space-x-2">
            <button className="text-blue-500 hover:text-blue-700 text-sm">
              수정
            </button>
            <button className="text-red-500 hover:text-red-700 text-sm">
              삭제
            </button>
          </div>
        </div>
        <p className="text-gray-600">{description}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-yellow-500">{rating} ★</span>
          <span className="text-gray-500">{reviews} 리뷰</span>
        </div>
      </div>
    </div>
  );
}
