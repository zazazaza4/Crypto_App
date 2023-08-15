import PropTypes from "prop-types";

import "./error.scss";

const ErrorComponent = ({ feedback, children }) => {
  if (children) {
    return <div className="error">{children}</div>;
  }

  return (
    <div className="error">
      <h3>Sorry, unexpected error</h3>
      <p>
        We are facing an internal server error. Our experts are trying to fix
        problem. Please try again or wait for some time.
      </p>
      <p>{feedback}</p>
    </div>
  );
};

ErrorComponent.propTypes = {
  feedback: PropTypes.string,
  children: PropTypes.node,
};

export { ErrorComponent };
