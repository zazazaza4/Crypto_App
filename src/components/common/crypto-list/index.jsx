import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import { CryptoSearch, OutlineButton, CryptoListItem } from "components/common";
import { useCoinsStore } from "stores";
import { categoryEnum } from "utils/enums";

import "./crypto-list.scss";

export const CryptoList = (props) => {
  const store = useCoinsStore();

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(20);
  const { keyword } = useParams();

  useEffect(() => {
    // store.fetchCoins();
  }, []);

  return (
    <>
      <div className="section mb-3">
        <CryptoSearch category={props.category} keyword={keyword} />
      </div>
      <div className="crypto-list">
        {store.list.map((item, index) => (
          <CryptoListItem
            category={props.category}
            item={item}
            key={item.id + index}
          />
        ))}
      </div>
      {store.page < store.totalPage ? (
        <div className="crypto-list__loadmore">
          <OutlineButton className="small">Load more</OutlineButton>
        </div>
      ) : null}
    </>
  );
};

CryptoList.propTypes = {
  category: PropTypes.oneOf(Object.values(categoryEnum)).isRequired,
  keyword: PropTypes.string,
};
