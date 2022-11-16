import { Request, Response } from "express";

import zoraService from "../services/zora";

interface GetNftsRequestParams {
  address: string;
}

const getNfts = async (req: Request<GetNftsRequestParams>, res: Response) => {
  try {
    const address = req.params.address;

    const nfts = await zoraService.getAllNftsByAddress({
      address,
    });

    res.json(nfts);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export default { getNfts };
