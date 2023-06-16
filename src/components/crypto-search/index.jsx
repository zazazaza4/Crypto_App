import { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { Button, Input } from "components";
import { category } from "helpers";

import "./crypto-search.scss";

export const CryptoSearch = (props) => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState(props.keyword ? props.keyword : "");

  const goToSearch = useCallback(() => {
    if (keyword.trim().length > 0) {
      navigate(`/${category[props.category]}/search/${keyword}`, {
        replace: true,
      });
    }
  }, [keyword, props.category, navigate]);

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
  }, [keyword, goToSearch]);

  return (
    <div className="crypto-search">
      <Input
        type="search"
        placeholder="Enter keyword"
        value={keyword}
        onChange={(e) => {
          setKeyword(e);
        }}
      />
      <Button className="small" onClick={() => {}}>
        Search
      </Button>
    </div>
  );
};

CryptoSearch.propTypes = {
  category: PropTypes.oneOf([...Object.keys("")]),
  keyword: PropTypes.string,
};
