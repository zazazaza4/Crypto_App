import { useEffect, useState } from "react";

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "./crypto-slide.scss";
import { CryptoSlideItem } from "components";

export const CryptoSlide = () => {
  const [cryptoItems, setCryptoItems] = useState([]);

  SwiperCore.use([Autoplay]);

  useEffect(() => {
    setCryptoItems([
      {
        id: "arbdoge-ai",
        coin_id: 29852,
        name: "ArbDoge AI",
        symbol: "AIDOGE",
        market_cap_rank: 423,
        thumb:
          "https://assets.coingecko.com/coins/images/29852/thumb/photo_2023-04-18_14-25-28.jpg?1681799160",
        small:
          "https://assets.coingecko.com/coins/images/29852/small/photo_2023-04-18_14-25-28.jpg?1681799160",
        large:
          "https://assets.coingecko.com/coins/images/29852/large/photo_2023-04-18_14-25-28.jpg?1681799160",
        price_btc: 1.0476797260101467e-14,
      },
      {
        id: "arbdoge-ai",
        coin_id: 29852,
        name: "ArbDoge AI",
        symbol: "AIDOGE",
        market_cap_rank: 423,
        thumb:
          "https://assets.coingecko.com/coins/images/29852/thumb/photo_2023-04-18_14-25-28.jpg?1681799160",
        small:
          "https://assets.coingecko.com/coins/images/29852/small/photo_2023-04-18_14-25-28.jpg?1681799160",
        large:
          "https://assets.coingecko.com/coins/images/29852/large/photo_2023-04-18_14-25-28.jpg?1681799160",
        price_btc: 1.0476797260101467e-14,
      },
    ]);
    //   const getMovies = async () => {
    //     const params = { page: 1 };
    //     try {
    //       const response = await tmdbApi.getMoviesList(movieType.popular, {
    //         params,
    //       });
    //       console.log(response);
    //       setMovieItems(response.results.slice(0, 4));
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
    //   getMovies();
  }, []);

  return (
    <div className="crypto-slide">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
      >
        {cryptoItems.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <CryptoSlideItem
                item={item}
                className={`${isActive ? "active" : ""}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
