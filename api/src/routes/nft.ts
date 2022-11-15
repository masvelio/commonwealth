import express from "express";

import nftController from "../controllers/nft";

const router = express.Router();

router.get("/:address", nftController.getNfts);

export default router;
