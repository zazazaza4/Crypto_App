import { Link } from "react-router-dom";

import { OutlineButton, ErrorBoundary } from "components/common";
import { CryptoCarousel, CryptoSlide } from "components/crypto";

import { categoryEnum } from "utils/enums";
import { useEffect } from "react";
import { useCoinsStore, useExchangesStore } from "stores";

export const Home = () => {
  const coins = useCoinsStore();
  const exchanges = useExchangesStore();

  useEffect(() => {
    coins.fetchList();
    exchanges.fetchList();
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
            <Link to={`/${categoryEnum.EXCHANGES}`}>
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <ErrorBoundary>
            <CryptoCarousel
              category={categoryEnum.EXCHANGES}
              items={exchanges.list || exchanges.list.slice(0, 10)}
            />
          </ErrorBoundary>
        </div>
      </div>
    </>
  );
};
