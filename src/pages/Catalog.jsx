import { useParams } from "react-router-dom";
import { CryptoGrid } from "components";
import { PageHeader } from "components";

const Catalog = () => {
  const { category } = useParams();

  return (
    <>
      <PageHeader>{category.toUpperCase()}</PageHeader>
      <div className="container">
        <div className="section md-3"></div>
      </div>
    </>
  );
};

export default Catalog;
