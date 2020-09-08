import React from "react";
import { css } from "@emotion/core";
import RingLoader from "react-spinners/ClipLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Spinner = () => {
  return (
    <div className="sweet-loading py-5">
      <RingLoader css={override} size={150} color={"#123abc"} loading={true} />
    </div>
  );
};

export default Spinner;
