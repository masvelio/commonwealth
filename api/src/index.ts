import cors from "cors";
import express, { Express } from "express";

import errorHandler from "./middlewares/errorHandler";
import nftRoutes from "./routes/nft";
import { corsOptionsDelegate } from "./utils/cors";
import { env } from "./utils/config";

const app: Express = express();

app.use(cors(corsOptionsDelegate));

app.use("/api/nft", nftRoutes);

app.use(errorHandler);

app.listen(env.PORT, () => {
  console.log(`⚡️[server]: Running at http://localhost:${env.PORT}`);
});
