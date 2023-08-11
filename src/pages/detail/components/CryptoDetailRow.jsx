import PropTypes from "prop-types";

const CryptoDetailRow = ({ label, value }) => {
  if (!value) {
    return null;
  }

  return (
    <div className="crypto-details__row">
      <h3>{label}</h3>
      <span>{value}</span>
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
};

export { CryptoDetailRow };
