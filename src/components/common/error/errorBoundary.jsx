import { Component } from "react";
import PropTypes from "prop-types";

import { ErrorComponent } from "components/common";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorComponent feedback={this.props.feedback} />;
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  feedback: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export { ErrorBoundary };
