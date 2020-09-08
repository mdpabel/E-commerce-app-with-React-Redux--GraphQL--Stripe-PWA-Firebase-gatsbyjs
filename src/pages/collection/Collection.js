import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.select";
import Product from "../../components/product/Product";
import "./Collection.css";

const Collection = ({ collection: { title, items } }) => {
  return (
    <>
      <h1 className="title text-center my-4">{title}</h1>
      <div className="row">
        {items.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state),
  };
};

export default connect(mapStateToProps)(Collection);
