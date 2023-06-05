import { Routes, Route } from "react-router-dom";

import { Catalog, Home } from "pages";

const RoutesCustom = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/:category/search/:keyword" element={<Catalog />} />
      <Route path="/:category" element={<Catalog />} />
    </Routes>
  );
};

export default RoutesCustom;
