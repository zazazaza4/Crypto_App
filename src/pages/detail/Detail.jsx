import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { Spinner } from "components/common";
import { useDetailStore, useStatusStore } from "stores";
import { prefixEnum, statusEnum } from "utils/enums";
import { truncateString } from "utils/helpers/truncate";

import { CryptoDetailRow } from "./components/CryptoDetailRow";

import "./detail.scss";

export const Detail = () => {
  const { item, graphData, fetch, reset } = useDetailStore();
  const { status, handleAsyncOperation } = useStatusStore();

  const { category, id } = useParams();

  useEffect(() => {
    const fetchData = () => {
      fetch(category, id);
    };
    handleAsyncOperation(fetchData);

    return () => {
      reset();
    };
  }, [category, id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (status === statusEnum.LOADING) {
    return (
      <div className="spinner__container">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      {item && (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${item.image?.large || item.image})`,
            }}
          ></div>
          <div className="crypto-content container">
            <div className="crypto-content__poster">
              <div
                className="crypto-content__poster__img"
                style={{
                  backgroundImage: `url(${item.image?.large || item.image})`,
                }}
              ></div>
            </div>
            <div className="crypto-content__info">
              <h2 className="title" title={item.title || item.name}>
                {truncateString(item.title || item.name)}
              </h2>

              {item.country && <p className="country">{item.country}</p>}

              {graphData && (
                <div className="crypto-content__graph">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={graphData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="Date" />
                      <YAxis />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "rgba(0, 0, 0, 0.8)",
                          border: "none",
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="Price"
                        stroke="#8884d8"
                        fill="#8884d8"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              )}
            </div>
          </div>
          <div className="crypto-details">
            <div
              className="description"
              dangerouslySetInnerHTML={{
                __html: item.description?.en || item.description,
              }}
            ></div>
            <h2>Details</h2>
            <CryptoDetailRow
              label="Market cap rank"
              value={item.coingecko_rank}
              prefix={prefixEnum.NOTHING}
            />
            <CryptoDetailRow
              label="24 high"
              value={item.market_data?.high_24h?.usd}
              prefix={prefixEnum.DOLLAR}
            />
            <CryptoDetailRow
              label="24 low"
              value={item.market_data?.low_24h?.usd}
              prefix={prefixEnum.DOLLAR}
            />
            <CryptoDetailRow
              label="Circulating supply"
              value={item.market_data?.circulating_supply?.toFixed(6)}
              prefix={prefixEnum.DOLLAR}
            />
            <CryptoDetailRow
              label="Circulating price"
              value={item.market_data?.current_price?.usd?.toFixed(6)}
              prefix={prefixEnum.DOLLAR}
            />
            <CryptoDetailRow
              label="1y change"
              value={item.market_data?.price_change_percentage_1y?.toFixed(2)}
              prefix={prefixEnum.PERCENT}
            />
            <CryptoDetailRow
              label="Trade volume 24h"
              value={item.trade_volume_24h_btc?.toFixed(2)}
              prefix={prefixEnum.BTC}
            />

            <CryptoDetailRow
              label="Trust score"
              value={item.trust_score}
              prefix={prefixEnum.NOTHING}
            />
            <CryptoDetailRow
              label="Trust score rank"
              value={item.trust_score_rank}
              prefix={prefixEnum.NOTHING}
            />
            <CryptoDetailRow
              label="Year established"
              value={item.year_established}
              prefix={prefixEnum.NOTHING}
            />
          </div>
        </>
      )}
    </>
  );
};
