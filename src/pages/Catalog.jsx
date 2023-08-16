import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { PageHeader } from "components/common";
import { CryptoList } from "components/crypto";

export const Catalog = () => {
  const { category } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <>
      <PageHeader>{category.toUpperCase()}</PageHeader>
      <div className="container">
        <div className="section md-3">
          <CryptoList category={category} />
        </div>
      </div>
    </>
  );
};
