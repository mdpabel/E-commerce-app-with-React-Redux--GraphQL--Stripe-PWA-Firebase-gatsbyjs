import React from "react";

import Spinner from "../components/spinner/Spinner";

const withSpinner = (WrappedComponent) => {
  const spinner = ({ loading, ...otherProps }) => {
    return loading ? <Spinner /> : <WrappedComponent {...otherProps} />;
  };
  return spinner;
};

export default withSpinner;

// a higher-order component is a function that takes a component and returns a new component.
