import { useEffect } from "react";

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { CryptoSlideItem } from "components/common";
import { useCoinsStore } from "stores";

import "./crypto-slide.scss";

export const CryptoSlide = () => {
  const { trending, fetchTrendingCoins } = useCoinsStore();

  SwiperCore.use([Autoplay]);

  useEffect(() => {
    fetchTrendingCoins();
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
    </div>
  );
};
