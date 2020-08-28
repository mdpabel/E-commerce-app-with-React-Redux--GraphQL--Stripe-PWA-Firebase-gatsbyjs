import React, { Component } from "react";

import CountDown from "./countDown/CountDown";
import "./DealsAndOffer.css";
import SHOP_DATA from "../../resources/shop_data/shop.data";
import ProductCategory from "./product-category/Product-category";

class DealsAndOffer extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-12 col-sm-12">
                <CountDown />
              </div>

              {SHOP_DATA.filter((category) => category.discount).map(
                (category) => (
                  <ProductCategory
                    title={category.title}
                    imageUrl={category.items[0].imageUrl}
                    key={category.id}
                    discount={category.discount}
                    routeName={category.routeName}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DealsAndOffer;
