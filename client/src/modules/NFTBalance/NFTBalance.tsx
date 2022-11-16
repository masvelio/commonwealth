import React, { Fragment, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Dialog, Transition } from "@headlessui/react";
import { TokensQuery } from "@zoralabs/zdk";

import NFTCard from "./NFTCard";

const bfcToken = {
  __typename: "TokenWithMarketsSummary",
  marketsSummary: [],
  token: {
    __typename: "Token",
    tokenId: "303",
    tokenContract: {
      name: "Bored Founders Club (Founders NFT)",
      network: "ETHEREUM",
      description: null,
      collectionAddress: "0x4f202190003b3e459bcbdfae5b5a39063d7f5e49",
      symbol: "BFC(FOUNDERS)",
      chain: 1,
    },
    mintInfo: {
      price: {
        __typename: "PriceAtTime",
        blockNumber: 15308104,
        chainTokenPrice: {
          decimal: 0,
          raw: "0",
        },
        nativePrice: {
          decimal: 0,
          raw: "0",
          currency: {
            address: "0x0000000000000000000000000000000000000000",
            decimals: 18,
            name: "ETH",
          },
        },
        usdcPrice: {
          decimal: 0,
          raw: "0",
        },
      },
      originatorAddress: "0xc76a408ad3c841bbd9b9b554f595c8882863c13c",
      toAddress: "0xc76a408ad3c841bbd9b9b554f595c8882863c13c",
      mintContext: {
        __typename: "TransactionInfo",
        blockNumber: 15308104,
        blockTimestamp: "2022-08-09T12:54:29+00:00",
        transactionHash:
          "0x9789eb0aea6a0b28d5dd83c27d53af9eb0f1156011cfc4db1dfce0912b0a2911",
        logIndex: 695,
      },
    },
    collectionAddress: "0x4f202190003b3e459bcbdfae5b5a39063d7f5e49",
    lastRefreshTime: "2022-08-09T12:58:20.860000+00:00",
    owner: "0xc76a408ad3c841bbd9b9b554f595c8882863c13c",
    name: "BFC Founder #303",
    description:
      "Bored Founders Club (BFC) is a global community of web3 enthusiasts. Developers, founders, creators, investors and more. Together we're building the most influential web3 community in the world. BFC Founders NFT is the most valuable piece in the BFC ecosystem (only 500 NFTs). It unlocks ALL of the benefits. Utility. Private access. Airdrops. And much more. Build the future of the web with us. Visit www.BoredFoundersClub.com for more details.",
    image: {
      size: "475212",
      url: "ipfs://bafybeigi6nq2geyudkgivlrk6cndzd2ppozabk6ff7xuladd4avmu6x5ua",
      mimeType: "image/png",
      mediaEncoding: {
        __typename: "ImageEncodingTypes",
        original:
          "https://api.zora.co/media/ETHEREUM-MAINNET/0x4f202190003b3e459bcbdfae5b5a39063d7f5e49/303/image/original",
        large:
          "https://api.zora.co/media/ETHEREUM-MAINNET/0x4f202190003b3e459bcbdfae5b5a39063d7f5e49/303/image/large",
        poster:
          "https://api.zora.co/media/ETHEREUM-MAINNET/0x4f202190003b3e459bcbdfae5b5a39063d7f5e49/303/image/poster",
        thumbnail:
          "https://api.zora.co/media/ETHEREUM-MAINNET/0x4f202190003b3e459bcbdfae5b5a39063d7f5e49/303/image/thumbnail",
      },
    },
    content: {
      size: null,
      url: null,
      mimeType: null,
      mediaEncoding: {
        __typename: "UnsupportedEncodingTypes",
        original:
          "https://api.zora.co/media/ETHEREUM-MAINNET/0x4f202190003b3e459bcbdfae5b5a39063d7f5e49/303/content/original",
      },
    },
  },
} as unknown as TokenFromAPI;

const bearToken = {
  __typename: "TokenWithMarketsSummary",
  marketsSummary: [],
  token: {
    __typename: "Token",
    tokenId: "457",
    tokenContract: {
      name: "Phanta Bear",
      network: "ETHEREUM",
      description: null,
      collectionAddress: "0x67d9417c9c3c250f61a83c7e8658dac487b56b09",
      symbol: "PHB",
      chain: 1,
    },
    mintInfo: {
      price: {
        __typename: "PriceAtTime",
        blockNumber: 13916991,
        chainTokenPrice: {
          decimal: 0.26,
          raw: "260000000000000000",
        },
        nativePrice: {
          decimal: 0.26,
          raw: "260000000000000000",
          currency: {
            address: "0x0000000000000000000000000000000000000000",
            decimals: 18,
            name: "ETH",
          },
        },
        usdcPrice: {
          decimal: 970.5354747952356,
          raw: "970535474795235639296",
        },
      },
      originatorAddress: "0x5a672bfeb1a738004bef9e58c1a833acdae8300e",
      toAddress: "0x5a672bfeb1a738004bef9e58c1a833acdae8300e",
      mintContext: {
        __typename: "TransactionInfo",
        blockNumber: 13916991,
        blockTimestamp: "2022-01-01T03:00:54+00:00",
        transactionHash:
          "0xdb8e6f770c43444de5f0a30ad7086a1752b9b9857557df6ce071baf29a30f7dd",
        logIndex: 182,
      },
    },
    collectionAddress: "0x67d9417c9c3c250f61a83c7e8658dac487b56b09",
    lastRefreshTime: "2022-05-10T11:38:07.973000+00:00",
    owner: "0x826a3216115c2697c9b2f0275f6184b9123286bd",
    name: "PHANTA BEAR #457",
    description:
      "Phanta Bear is a collection of 10,000 algorithmically generated digital collectibles that double as membership cards for the Ezek Club.",
    image: {
      size: "222627",
      url: "https://d1kjtx52rxv2sn.cloudfront.net/phanta+bear+token/5613a32k.png",
      mimeType: "image/png",
      mediaEncoding: {
        __typename: "ImageEncodingTypes",
        original:
          "https://api.zora.co/media/ETHEREUM-MAINNET/0x67d9417c9c3c250f61a83c7e8658dac487b56b09/457/image/original",
        large:
          "https://api.zora.co/media/ETHEREUM-MAINNET/0x67d9417c9c3c250f61a83c7e8658dac487b56b09/457/image/large",
        poster:
          "https://api.zora.co/media/ETHEREUM-MAINNET/0x67d9417c9c3c250f61a83c7e8658dac487b56b09/457/image/poster",
        thumbnail:
          "https://api.zora.co/media/ETHEREUM-MAINNET/0x67d9417c9c3c250f61a83c7e8658dac487b56b09/457/image/thumbnail",
      },
    },
    content: {
      size: null,
      url: null,
      mimeType: null,
      mediaEncoding: {
        __typename: "UnsupportedEncodingTypes",
        original:
          "https://api.zora.co/media/ETHEREUM-MAINNET/0x67d9417c9c3c250f61a83c7e8658dac487b56b09/457/content/original",
      },
    },
  },
} as unknown as TokenFromAPI;

type TokenFromAPI = TokensQuery["tokens"]["nodes"][0];

const mockData = [bfcToken, bearToken];

const NFTBalance = () => {
  const [animationParent] = useAutoAnimate<HTMLDivElement>();

  const [address, setAddress] = useState("");
  const [data, setData] = useState<TokenFromAPI[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setData(mockData);
  };

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

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
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="mx-auto max-w-2xl py-8 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div
          className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
          ref={animationParent}
        >
          {data.map(({ token }) => (
            <NFTCard
              key={token?.tokenId}
              id={token?.tokenId}
              name={token?.name}
              contractName={token?.tokenContract?.name}
              imageUrl={(token?.image?.mediaEncoding as any)?.thumbnail}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default NFTBalance;
