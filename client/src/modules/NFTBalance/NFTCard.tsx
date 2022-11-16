import { PhotoIcon } from "@heroicons/react/24/outline";
import React from "react";

interface NFTCardProps {
  imageUrl: string;
  id: string;
  name?: string | null;
  contractName?: string | null;
  onClick: () => void;
}

const NFTCard = ({
  imageUrl,
  id,
  name,
  contractName,
  onClick,
}: NFTCardProps) => {
  return (
    <div
      className="shadow-lg rounded-md group cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-200">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={id}
            className="h-full w-full object-cover object-center group-hover:opacity-90 group-hover:scale-110 transition-all	"
          />
        ) : (
          <div className="flex justify-center h-full">
            <PhotoIcon className="w-10 text-gray-400" />
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-indigo-600">{name}</h3>
        <h3 className="text-sm font-semibold text-gray-600">{contractName}</h3>
      </div>
    </div>
  );
};

export default NFTCard;
