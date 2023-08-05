import PropTypes from "prop-types";

import { bg } from "assets";

import "./page-header.scss";

export const PageHeader = (props) => {
  return (
    <div className="page-header" style={{ backgroundImage: `url(${bg})` }}>
      <h2>{props.children}</h2>
    </div>
  );
};

PageHeader.propTypes = {
  children: PropTypes.node.isRequired,
};
