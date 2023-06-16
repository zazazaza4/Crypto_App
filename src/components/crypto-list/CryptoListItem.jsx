import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { formatNumber } from "helpers";
import { btcImg } from "assets";

import "./crypto-item.scss";

export const CryptoListItem = ({ item, category }) => {
  const { id, name, large, price_btc } = item;
  return (
    <div className="crypto-item" key={id}>
      <Link to={`/${category}/${id}`}>
        <div className="image">
          <img src={large} alt={name} />
        </div>
        <div className="crypto-item__title">{name}</div>
        {price_btc && (
          <div className="crypto-item__prices">
            <span className="btc">
              <img src={btcImg} alt={name} />
              {formatNumber(price_btc)} BTC
            </span>
            <span className="usd">{formatNumber(price_btc)} USD</span>
          </div>
        )}
      </Link>
    </div>
  );
};

CryptoListItem.propTypes = {
  item: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
};
