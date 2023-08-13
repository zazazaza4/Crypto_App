import { Link } from "react-router-dom";

import {
  CryptoSlide,
  OutlineButton,
  CryptoCarousel,
  ErrorBoundary,
} from "components/common";
import { categoryEnum } from "utils/enums";
import { useEffect } from "react";
import { useCoinsStore, useExchangeStore } from "stores";

const Home = () => {
  const coins = useCoinsStore();
  const exchange = useExchangeStore();

  useEffect(() => {
    coins.fetchList();
    exchange.fetchList();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ErrorBoundary>
        <CryptoSlide />
      </ErrorBoundary>
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Coins List</h2>
            <Link to={`/${categoryEnum.COINS}`}>
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <ErrorBoundary>
            <CryptoCarousel
              category={categoryEnum.COINS}
              items={coins.list || coins.list.slice(0, 10)}
            />
          </ErrorBoundary>
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Exchanges List</h2>
            <Link to={`/${categoryEnum.EXCHANGE}`}>
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <ErrorBoundary>
            <CryptoCarousel
              category={categoryEnum.EXCHANGE}
              items={exchange.list || exchange.list.slice(0, 10)}
            />
          </ErrorBoundary>
        </div>
      </div>
    </>
  );
};

export default Home;
