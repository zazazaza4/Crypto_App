import { Routes, Route, Navigate } from "react-router-dom";

import { Catalog, Detail, Home } from "pages";

const RoutesCustom = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/:category/search/:keyword" element={<Catalog />} />
      <Route path="/:category" element={<Catalog />} />
      <Route path="/:category/:id" element={<Detail />} />
    </Routes>
  );
};

export default RoutesCustom;
