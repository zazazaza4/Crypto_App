import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { OutlineButton, Button } from "components";

import "./crypto-slide.scss";

export const CryptoSlideItem = ({ item, className }) => {
  const navigate = useNavigate();
  const background = item ? item.small : item.large;

  const navigateToBuy = () => {
    window.location.href = "https://www.coinbase.com/how-to-buy/" + item.id;
  };

  return (
    <div
      className={`crypto-slide__item ${className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="crypto-slide__item__content container">
        <div className="crypto-slide__item__content__info">
          <h2 className="title"> {item.name}</h2>
          <div className="prices">
            <span className="usd">$ {item.price_btc}</span>
            <span className="btc">{item.price_btc.toFixed(16)} BTC</span>
          </div>
          <div className="btns">
            <Button onClick={() => navigate("/crypto/" + item.id)}>
              More info
            </Button>
            <OutlineButton onClick={navigateToBuy}>Buy now</OutlineButton>
          </div>
        </div>
        <div className="crypto-slide__item__content__poster">
          <img src={item.large} alt="" />
        </div>
      </div>
    </div>
  );
};

CryptoSlideItem.propTypes = {
  item: PropTypes.object.isRequired,
  className: PropTypes.string,
};
