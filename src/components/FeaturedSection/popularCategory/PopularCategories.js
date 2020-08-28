import React, { Component } from "react";

import "./PopularCategories.css";
import SingleCategory from "./singleCategory/SingleCategory";
import SHOP_DATA from "../../../resources/shop_data/shop.data";

class PopularCategories extends Component {
  render() {
    return (
      <div>
        <h6 className="popular_category_header">Popular category</h6>
        {SHOP_DATA.filter((category) => category.popular).map((category) => (
          <SingleCategory
            title={category.title}
            img={category.items[0].imageUrl}
            key={category.id}
            routeName={category.routeName}
          />
        ))}
      </div>
    );
  }
}

export default PopularCategories;
