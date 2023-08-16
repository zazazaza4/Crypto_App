import PropTypes from "prop-types";
import { prefixEnum } from "utils/enums";

const CryptoDetailRow = ({ label, value, prefix }) => {
  if (!value) {
    return null;
  }

  return (
    <div className="crypto-details__row">
      <h3>{label}</h3>
      <span>
        {value} {prefix}
      </span>
    </div>
  );
};

CryptoDetailRow.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
    PropTypes.node,
  ]),
  prefix: PropTypes.oneOf(Object.values(prefixEnum)).isRequired,
};

export { CryptoDetailRow };
