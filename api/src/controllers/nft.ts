import { Request, Response, NextFunction } from "express";

import zoraService from "../services/zora";

interface GetNftsRequestParams {
  address: string;
}

const getNfts = async (
  req: Request<GetNftsRequestParams>,
  res: Response,
  next: NextFunction
) => {
  try {
    const address = req.params.address;

    const nfts = await zoraService.getAllNftsByAddress({
      address,
    });

    res.json(nfts);
  } catch (err) {
    next(err);
  }
};

export default { getNfts };
