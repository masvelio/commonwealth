import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import Home from "./components/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<div>about</div>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
