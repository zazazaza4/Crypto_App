import { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { Button, Input } from "components/common";
import { categoryEnum } from "utils/enums";
import { storesCategory } from "stores";

import "./crypto-search.scss";

export const CryptoSearch = (props) => {
  const navigate = useNavigate();
  const { query, setQuery } = storesCategory[props.category]();

  const goToSearch = useCallback(() => {
    if (query.trim().length > 0) {
      const category = categoryEnum[props.category.toUpperCase()];

      navigate(`/${category}/search/${query}`, {
        replace: true,
      });
    }
  }, [props.category, navigate]);

  useEffect(() => {
    const enterEvent = (e) => {
      e.preventDefault();
      if (e.keyCode === 13) {
        goToSearch();
      }
    };
    document.addEventListener("keyup", enterEvent);
    return () => {
      document.removeEventListener("keyup", enterEvent);
    };
  }, [goToSearch]);

  return (
    <div className="crypto-search">
      <Input
        type="search"
        placeholder="Enter keyword"
        value={query}
        onChange={(e) => {
          setQuery(e);
        }}
      />
      <Button className="small" onClick={goToSearch}>
        Search
      </Button>
    </div>
  );
};

CryptoSearch.propTypes = {
  category: PropTypes.oneOf(Object.values(categoryEnum)).isRequired,
  keyword: PropTypes.string,
};
