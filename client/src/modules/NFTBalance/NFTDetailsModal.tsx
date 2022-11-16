import React from "react";
import { Dialog } from "@headlessui/react";
import { PhotoIcon } from "@heroicons/react/24/outline";

import Modal from "../../components/Modal";
import { APIToken } from "../../utils/types";

interface NFTDetailsModalProps {
  nft: APIToken | null;
  isModalOpen: boolean;
  setIsModalOpen: (val: boolean) => void;
}

interface InfoProps {
  label: string;
  info?: string | null;
}

const Info = ({ label, info }: InfoProps) => {
  if (!info) {
    return null;
  }

  return (
    <div className="mb-3">
      <div className="font-semibold mr-4 text-indigo-600">{label}:</div>
      <div>{info}</div>
    </div>
  );
};
const NFTDetailsModal = ({
  nft,
  isModalOpen,
  setIsModalOpen,
}: NFTDetailsModalProps) => {
  const name = nft?.name;
  const imageUrl = (nft?.image?.mediaEncoding as any)?.thumbnail;
  const tokenContract = nft?.tokenContract?.name;
  const collectionAddress = nft?.collectionAddress;
  const collectionDescription = nft?.description;
  const network = nft?.tokenContract?.network;
  const symbol = nft?.tokenContract?.symbol;

  const infos = [
    { label: "Collection Name", info: tokenContract },
    { label: "Collection Symbol", info: symbol },
    { label: "Collection Address", info: collectionAddress },
    { label: "Collection Network", info: network },
    { label: "Collection Description", info: collectionDescription },
  ];

  return (
    <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      {name && (
        <Dialog.Title
          as="h3"
          className="text-lg font-medium leading-6 text-gray-900 mb-6"
        >
          {nft?.name}
        </Dialog.Title>
      )}

      <div className="grid sm:grid-flow-col grid-flow-row auto-cols-auto">
        <div className="h-52 aspect-square overflow-hidden rounded-lg bg-gray-200">
          {imageUrl ? (
            <img src={imageUrl} alt={nft?.name || ""} className="rounded-xl" />
          ) : (
            <div className="flex justify-center h-full">
              <PhotoIcon className="w-10 text-gray-400" />
            </div>
          )}
        </div>
        <div className="flex flex-col sm:ml-8 sm:mt-0 mt-4">
          {infos.map((el) => (
            <Info label={el.label} info={el.info} key={el.label} />
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default NFTDetailsModal;
