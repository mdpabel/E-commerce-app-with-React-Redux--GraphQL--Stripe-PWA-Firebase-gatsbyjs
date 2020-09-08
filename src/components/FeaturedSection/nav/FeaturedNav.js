import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./FeaturedNav.css";
import selectSection from "../../../redux/directory/directory.select";

const FeaturedNav = ({ section }) => {
  return (
    <aside>
      <nav className="navbar navbar-expand-lg navbar-light flex-column">
        <h6 className="navbar-brand">MY MARKETS</h6>
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
            {section.map((shopCategory, id) => (
              <li key={id} className="nav-item  border-bottom">
                <NavLink className="nav-link active" to={shopCategory.linkUrl}>
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

const mapStateToProps = createStructuredSelector({
  section: selectSection,
});

export default connect(mapStateToProps)(FeaturedNav);
