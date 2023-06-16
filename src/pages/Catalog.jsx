import { useParams } from "react-router-dom";
import { PageHeader, CryptoList } from "components";

const Catalog = () => {
  const { category } = useParams();

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

export default Catalog;
