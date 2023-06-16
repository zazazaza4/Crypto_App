import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { Button } from "components";

import "./crypto-card.scss";

export const CryptoCard = (props) => {
  const { item, category } = props;
  const link = "category/item.id";
  const bg = item.large;

  return (
    <Link to={link}>
      <div className="crypto-card" style={{ backgroundImage: `url(${bg})` }}>
        <Button>Info</Button>
      </div>
      <h3 className="crypto-card__title">{item.name}</h3>
    </Link>
  );
};

CryptoCard.propTypes = {
  item: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
};
