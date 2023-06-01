import { Routes, Route } from "react-router-dom";

import { Catalog, Detail, Home } from "pages";

const RoutesCustom = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
};

export default RoutesCustom;
