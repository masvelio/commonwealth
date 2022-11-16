import React, { Fragment, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Dialog, Transition } from "@headlessui/react";
import { TokensQuery } from "@zoralabs/zdk";
import { useQuery } from "@tanstack/react-query";

import NFTListContent from "./NFTListContent";

const fetchNFTByAddress = async (address: string) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/nft/${address}`
  );
  return await response.json();
};

const NFTBalance = () => {
  const [animationParent] = useAutoAnimate<HTMLDivElement>();

  const [address, setAddress] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, refetch, isFetching } = useQuery<
    TokensQuery["tokens"] & { error: string }
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

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const showTypeForResults = !data;
  const nfts = data?.nodes;
  const validationError = !!data?.error;

  return (
    <>
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsModalOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

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
        />
      </div>
    </>
  );
};

export default NFTBalance;
