import React from "react";
import { NavLink } from "react-router-dom";

import SHOP_DATA from "../../../resources/shop_data/shop.data";
import "./FeaturedNav.css";

const FeaturedNav = () => {
  return (
    <aside>
      <nav className="navbar navbar-expand-lg navbar-light flex-column">
        <h6 className="navbar-brand" to="/">
          MY MARKETS
        </h6>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon d-block"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav">
            {SHOP_DATA.map((shopCategory, id) => (
              <li key={id} className="nav-item  border-bottom">
                <NavLink
                  className="nav-link active"
                  to={shopCategory.routeName}
                >
                  <div>{shopCategory.title} category</div>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default FeaturedNav;
