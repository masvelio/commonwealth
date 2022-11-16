import { TokensQuery } from "@zoralabs/zdk";

export type APITokens = TokensQuery["tokens"];
export type APIToken = TokensQuery["tokens"]["nodes"][0]["token"];
