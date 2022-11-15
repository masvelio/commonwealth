import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>home</div>} />
        <Route path="about" element={<div>about</div>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
