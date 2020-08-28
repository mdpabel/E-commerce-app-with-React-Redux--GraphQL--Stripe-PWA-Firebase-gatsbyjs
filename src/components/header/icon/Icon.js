import React from "react";
import { connect } from "react-redux";

import "./Icon.css";
import { Link } from "react-router-dom";
import { selectTotalCartItem } from "../../../redux/cart/cart.select";

const Icon = ({ icon, text, to, badge, handleToggle, totalItem }) => {
  return (
    <div className="mr-3 header_icon">
      <Link onClick={handleToggle} to={to}>
        <div className="icon">
          {icon}
          <span
            className={badge === true ? "notify__badge" : "notify__badge__none"}
          >
            {totalItem}
          </span>
        </div>
        <small className="text">{text}</small>
      </Link>
    </div>
  );
};

const mapStateTopProps = (state) => {
  return {
    totalItem: selectTotalCartItem(state),
  };
};

export default connect(mapStateTopProps)(Icon);
