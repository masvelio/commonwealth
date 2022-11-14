import cors from "cors";
import express, { Express, Request, Response } from "express";

import { corsOptionsDelegate } from "./utils/cors";
import { env } from "./utils/config";

const app: Express = express();

app.use(cors(corsOptionsDelegate));

app.get("/api", async (req: Request, res: Response) => {
  res.status(200).send({ data: "ok" });
});

app.listen(env.PORT, () => {
  console.log(`⚡️[server]: Running at http://localhost:${env.PORT}`);
});
