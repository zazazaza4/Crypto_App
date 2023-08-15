import { Routes, Route } from "react-router-dom";

import { Catalog, Detail, Home } from "pages";
import Page404 from "pages/page404/Page404";

const RoutesCustom = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/:category/search/:keyword" element={<Catalog />} />
      <Route path="/:category" element={<Catalog />} />
      <Route path="/:category/:id" element={<Detail />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default RoutesCustom;
