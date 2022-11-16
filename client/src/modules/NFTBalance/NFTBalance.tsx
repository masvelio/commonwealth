import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useQuery } from "@tanstack/react-query";

import NFTListContent from "./NFTListContent";
import { env } from "../../utils/config";
import { APIToken, APITokens } from "../../utils/types";
import NFTDetailsModal from "./NFTDetailsModal";

const fetchNFTByAddress = async (address: string) => {
  const response = await fetch(`${env.VITE_API_URL}/api/nft/${address}`);
  return await response.json();
};

const NFTBalance = () => {
  const [animationParent] = useAutoAnimate<HTMLDivElement>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeToken, setActiveToken] = useState<APIToken | null>(null);
  const [address, setAddress] = useState("");

  const { data, refetch, isFetching, isFetched } = useQuery<
    APITokens & { error: string }
  >({
    queryKey: ["nft-balance", address],
    queryFn: () => fetchNFTByAddress(address),
    enabled: false,
  });

  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    refetch();
  };

  const handleCardClick = (token: APIToken) => {
    setIsModalOpen(true);
    setActiveToken(token);
  };

  const showTypeForResults = !data;
  const nfts = data?.nodes;
  const validationError = !!data?.error;
  const noResults = isFetched && data?.nodes?.length === 0;

  return (
    <>
      <NFTDetailsModal
        nft={activeToken}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />

      <div className="flex min-h-full items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-lg space-y-8">
          <div>
            <h2 className="mt-6 text-center text-5xl font-bold tracking-tight text-gray-900">
              NFT Balance
            </h2>
            <p className="mt-2 text-center text-md text-gray-600">
              A better way to find crypto data
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                autoComplete="off"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg dark:border-gray-600 dark:placeholder-gray-400"
                placeholder="Type the address..."
                value={address}
                onChange={handleAddress}
              />
              <button
                disabled={!address}
                type="submit"
                className="disabled:opacity-50 text-white absolute right-2.5 bottom-2.5 bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mx-auto max-w-2xl py-8 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <NFTListContent
          showTypeForResults={showTypeForResults}
          nfts={nfts}
          animationParent={animationParent}
          handleCardClick={handleCardClick}
          isFetching={isFetching}
          validationError={validationError}
          noResults={noResults}
        />
      </div>
    </>
  );
};

export default NFTBalance;
