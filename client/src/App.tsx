import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import Home from "./modules/Home";
import NFTBalance from "./modules/NFTBalance";
import { routes } from "./utils/routes";

const App = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={routes.NFT_BALANCE} element={<NFTBalance />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
