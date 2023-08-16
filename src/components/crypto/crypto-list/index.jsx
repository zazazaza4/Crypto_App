import { useEffect } from "react";
import PropTypes from "prop-types";

import { OutlineButton, Spinner, ErrorComponent } from "components/common";
import { CryptoListItem, CryptoSearch } from "components/crypto";
import { storesCategory, useStatusStore } from "stores";
import { categoryEnum, statusEnum } from "utils/enums";

import "./crypto-list.scss";

export const CryptoList = (props) => {
  const store = storesCategory[props.category]();
  const { status, handleAsyncOperation } = useStatusStore();

  useEffect(() => {
    const { fetchList } = store;
    handleAsyncOperation(fetchList);
  }, [props.category]);

  const renderCryptoList = () => {
    if (status === statusEnum.LOADING) {
      return <Spinner />;
    } else if (status === statusEnum.ERROR) {
      return <ErrorComponent />;
    }

    return store.filteredList.map((item, index) => (
      <CryptoListItem
        category={props.category}
        item={item}
        key={item.id + index}
      />
    ));
  };

  return (
    <>
      <div className="section mb-3">
        <CryptoSearch category={props.category} />
      </div>
      <div className="crypto-list">
        {renderCryptoList()}
        {store.error && <ErrorComponent />}
      </div>
      {store.canLoadMore ? (
        <div className="crypto-list__loadmore">
          <OutlineButton onClick={store.loadMore} className="small">
            Load more
          </OutlineButton>
        </div>
      ) : null}
    </>
  );
};

CryptoList.propTypes = {
  category: PropTypes.oneOf(Object.values(categoryEnum)).isRequired,
  keyword: PropTypes.string,
};
