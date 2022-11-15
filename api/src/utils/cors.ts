import { CorsOptionsDelegate } from "cors";

import { env } from "./config";

export const corsOptionsDelegate: CorsOptionsDelegate = (req, callback) => {
  const origin = req.headers.origin || "";
  const isAllowed = origin === env.CLIENT_URL;

  callback(null, { origin: isAllowed });
};
