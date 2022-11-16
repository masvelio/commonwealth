import { TokensQuery } from "@zoralabs/zdk";
import React from "react";

import ethImg from "../../../assets/ether.png";
import errorImg from "../../../assets/error.png";
import LoadingSpinner from "../../components/LoadingSpinner";
import NFTCard from "./NFTCard";

interface NFTListContentProps {
  showTypeForResults: boolean;
  nfts?: TokensQuery["tokens"]["nodes"];
  animationParent: React.RefObject<HTMLDivElement>;
  handleCardClick: () => void;
  isFetching: boolean;
  validationError: boolean;
}

const NFTListContent = ({
  showTypeForResults,
  nfts,
  animationParent,
  handleCardClick,
  isFetching,
  validationError,
}: NFTListContentProps) => {
  if (isFetching) {
    return <LoadingSpinner />;
  }

  if (validationError) {
    return (
      <div
        ref={animationParent}
        className="flex flex-col items-center text-center"
      >
        <img src={errorImg} alt="eth" className="max-h-96 mx-auto" />
        <p className="text-red-500 font-bold">Validation error!</p>
        <p className="text-red-500">Please type valid address</p>
      </div>
    );
  }

  if (showTypeForResults) {
    return (
      <div
        ref={animationParent}
        className="flex flex-col items-center text-center"
      >
        <img src={ethImg} alt="eth" className="max-h-96 mx-auto" />
        <p className="">Type the address to see the results</p>
      </div>
    );
  }

  return (
    <div
      className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      ref={animationParent}
    >
      {nfts?.map(({ token }) => (
        <NFTCard
          key={token?.tokenId + token?.name}
          id={token?.tokenId}
          name={token?.name}
          contractName={token?.tokenContract?.name}
          imageUrl={(token?.image?.mediaEncoding as any)?.thumbnail}
          onClick={handleCardClick}
        />
      ))}
    </div>
  );
};

export default NFTListContent;
