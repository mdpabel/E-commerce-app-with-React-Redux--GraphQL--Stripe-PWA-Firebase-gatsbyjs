import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./PopularCategories.css";
import SingleCategory from "./singleCategory/SingleCategory";
import selectSection from "../../../redux/directory/directory.select";

const PopularCategories = ({ sections }) => {
  return (
    <div>
      <h6 className="popular_category_header">Popular category</h6>
      {sections
        .filter((item) => item.popular)
        .filter((item, idx) => idx < 3)
        .map((category) => (
          <SingleCategory
            title={category.title}
            img={category.imageUrl}
            key={category.id}
            routeName={category.linkUrl}
          />
        ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectSection,
});

export default connect(mapStateToProps)(PopularCategories);
