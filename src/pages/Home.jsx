import { Link } from "react-router-dom";
import { CryptoSlide, OutlineButton, CryptoList } from "components";
import { useHomeStore } from "stores";

const Home = () => {
  const store = useHomeStore();

  return (
    <>
      <CryptoSlide />
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Coins List</h2>
            <Link to="/coins">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <CryptoList category={"coins"} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Exchanges List</h2>
            <Link to="/exchanges">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <CryptoList category={"coins"} />
        </div>
      </div>
    </>
  );
};

export default Home;
