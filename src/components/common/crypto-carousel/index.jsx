import PropsTypes from "prop-types";

import { SwiperSlide, Swiper } from "swiper/react";
import { categoryEnum } from "utils/enums";
import { CryptoCard } from "components/common";

import "./crypto-carousel.scss";

export const CryptoCarousel = (props) => {
  return (
    <div className="crypto-carousel">
      {props.items.length === 0 ? (
        <p className="no-items">No items to display.</p>
      ) : (
        <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
          {props.items.map((item, index) => (
            <SwiperSlide key={index}>
              <CryptoCard item={item} category={props.category} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

CryptoCarousel.propTypes = {
  category: PropsTypes.oneOf(Object.values(categoryEnum)).isRequired,
  items: PropsTypes.array.isRequired,
  id: PropsTypes.string,
};
