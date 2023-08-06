import PropTypes from "prop-types";

import "./spinner.scss";

const Spinner = ({ isOverflow }) =>
  isOverflow ? (
    <div className="spinner">
      <div className="loader">Loading...</div>
    </div>
  ) : (
    <div className="loader">Loading...</div>
  );

Spinner.propTypes = {
  isOverflow: PropTypes.bool,
};

Spinner.defaultProps = {
  isOverflow: false,
};

export { Spinner };
