import { useEffect } from "react";

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Spinner } from "components/common";
import { CryptoSlideItem } from "components/crypto";
import { useCoinsStore, useStatusStore } from "stores";
import { statusEnum } from "utils/enums";

import "./crypto-slide.scss";

export const CryptoSlide = () => {
  const { trending, fetchTrendingCoins } = useCoinsStore();
  const { status, handleAsyncOperation } = useStatusStore();

  SwiperCore.use([Autoplay]);

  useEffect(() => {
    handleAsyncOperation(fetchTrendingCoins);
  }, []);

  const renderSlider = () => {
    if (status === statusEnum.LOADING) {
      return (
        <div className="spinner-container">
          <Spinner isOverflow />
        </div>
      );
    } else if (status === statusEnum.ERROR) {
      return <p>An error occurred while loading the data.</p>;
    }

    return (
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
      >
        {trending.map((item, index) => (
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
    );
  };

  return <div className="crypto-slide">{renderSlider()}</div>;
};
