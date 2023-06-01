import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { OutlineButton, Button } from "components";
import { btcImg } from "assets";

import "./crypto-slide.scss";

export const CryptoSlideItem = ({ item, className }) => {
  const navigate = useNavigate();
  const background = item ? item.small : item.large;

  // const setModalActive = async () => {
  //   const modal = document.querySelector(`#modal_${item.id}`);
  //   const videos = await tmdbApi.getVideos(category.movie, item.id);

  //   if (videos.results.length > 0) {
  //     const videSrc = "https://www.youtube.com/embed/" + videos.results[0].key;
  //     modal
  //       .querySelector(".modal__content > iframe")
  //       .setAttribute("src", videSrc);
  //   } else {
  //     modal.querySelector(".modal__content").innerHTML = "No trailer";
  //   }

  //   modal.classList.toggle("active");

  // id: "arbdoge-ai",
  // coin_id: 29852,
  // name: "ArbDoge AI",
  // symbol: "AIDOGE",
  // market_cap_rank: 423,
  // thumb:
  //   "https://assets.coingecko.com/coins/images/29852/thumb/photo_2023-04-18_14-25-28.jpg?1681799160",
  // small:
  //   "https://assets.coingecko.com/coins/images/29852/small/photo_2023-04-18_14-25-28.jpg?1681799160",
  // large:
  //   "https://assets.coingecko.com/coins/images/29852/large/photo_2023-04-18_14-25-28.jpg?1681799160",
  // price_btc: 1.0476797260101467e-14,
  // };

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
              Watch now
            </Button>
            <OutlineButton>Watch info</OutlineButton>
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
