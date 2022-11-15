import { ZDK } from "@zoralabs/zdk";
import { Chain, Network } from "@zoralabs/zdk/dist/queries/queries-sdk";

export const ZORA_API_GRAPHQL_URL = "https://api.zora.co/graphql";

const zdk = new ZDK({ endpoint: ZORA_API_GRAPHQL_URL }); // Defaults to Ethereum Mainnet

interface GetAllNftsByAddressProps {
  address: string;
}

const getAllNftsByAddress = async ({ address }: GetAllNftsByAddressProps) => {
  try {
    const response = await zdk.tokens({
      networks: [{ network: Network.Ethereum, chain: Chain.Mainnet }],
      where: { ownerAddresses: [address] },
    });

    return response.tokens;
  } catch (err) {
    throw new Error("Zora API error:" + err);
  }
};

const zoraService = { getAllNftsByAddress };

export default zoraService;
