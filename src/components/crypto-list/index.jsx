import { useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import { CryptoSearch, OutlineButton, CryptoListItem } from "components";

import data from "../../data.json";

import "./crypto-list.scss";

export const CryptoList = (props) => {
  const [items, setItems] = useState(data);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const { keyword } = useParams();

  return (
    <>
      <div className="section mb-3">
        <CryptoSearch category={props.category} keyword={keyword} />
      </div>
      <div className="crypto-list">
        {items.map((item, index) => (
          <CryptoListItem
            category={props.category}
            item={item}
            key={item.id + index}
          />
        ))}
      </div>
      {page < totalPage ? (
        <div className="crypto-list__loadmore">
          <OutlineButton className="small">Load more</OutlineButton>
        </div>
      ) : null}
    </>
  );
};

CryptoList.propTypes = {
  category: PropTypes.string.isRequired,
  keyword: PropTypes.string,
};
