import { Link } from "react-router-dom";
import { CryptoSlide, OutlineButton, CryptoCarousel } from "components";
import { useHomeStore } from "stores";
import { category } from "helpers";

const Home = () => {
  const store = useHomeStore();

  return (
    <>
      <CryptoSlide />
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Coins List</h2>
            <Link to={`/${category.coins}`}>
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <CryptoCarousel category={category.coins} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Exchanges List</h2>
            <Link to={`/${category.exchanges}`}>
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <CryptoCarousel category={category.exchanges} />
        </div>
      </div>
    </>
  );
};

export default Home;
