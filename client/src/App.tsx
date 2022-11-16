import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import Home from "./modules/Home";
import NFTBalance from "./modules/NFTBalance";
import { routes } from "./utils/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path={routes.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={routes.NFT_BALANCE} element={<NFTBalance />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
