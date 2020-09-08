import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CountDown from "./countDown/CountDown";
import "./DealsAndOffer.css";
import ProductCategory from "./product-category/Product-category";
import selectSection from "../../redux/directory/directory.select";

const DealsAndOffer = ({ directory }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12">
              <CountDown />
            </div>

            {directory
              .filter((item, idx) => idx < 3)
              .map((item) => (
                <ProductCategory
                  title={item.title}
                  imageUrl={item.imageUrl}
                  key={item.id}
                  discount={item.discount}
                  routeName={item.linkUrl}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  directory: selectSection,
});

export default connect(mapStateToProps)(DealsAndOffer);
