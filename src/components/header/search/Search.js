import React from "react";
import { FaSearch } from "react-icons/fa";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import "./search.css";
import { selectShopDataForCollections } from "../../../redux/shop/shop.select";

const Search = ({ shopData }) => {
  const getCategory = ["All category"];
  shopData.map((item) => getCategory.push(item.title));

  return (
    <form className="search-header">
      <div className="input-group search-section">
        <select className="border-right" name="" id="">
          {getCategory.map((item, idx) => (
            <option key={idx} value="">
              {item}
            </option>
          ))}
        </select>

        <input
          className="form-control input-group-append header_input_style"
          type="text"
          name=""
          placeholder="Search"
        />

        <button className="btn input-group-append header_button" type="submit">
          <FaSearch className="header_search_icon" /> Search
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = createStructuredSelector({
  shopData: selectShopDataForCollections,
});

export default connect(mapStateToProps)(Search);
