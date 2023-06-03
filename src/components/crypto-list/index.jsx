import PropsTypes from "prop-types";
import { useState } from "react";

import { SwiperSlide, Swiper } from "swiper/react";
import { CryptoCard } from "components";
import data from "../../data.json";

import "./crypto-list.scss";

export const CryptoList = (props) => {
  const [items, setItems] = useState(data);

  return (
    <div className="crypto-list">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <CryptoCard item={item} category={props.category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

CryptoList.propTypes = {
  category: PropsTypes.string.isRequired,
  type: PropsTypes.string.isRequired,
  id: PropsTypes.string,
};
