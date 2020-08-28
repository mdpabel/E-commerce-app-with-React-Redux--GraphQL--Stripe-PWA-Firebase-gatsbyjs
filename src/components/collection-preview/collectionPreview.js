import React from "react";

import Product from "../../components/product/Product";
import "./collectionPreview.css";
import { Link } from "react-router-dom";

const collectionPreview = ({ title, items }) => {
  return (
    <div className="collection__preview">
      <Link className="section__Preview_anchor" to="/shop">
        <h3 className="collection__preview__title heading__line">{title}</h3>
      </Link>
      <div className="collection__preview__data">
        <div className="row">
          {items
            .filter((itm, idx) => idx < 4)
            .map((item) => (
              <Product key={item.id} item={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default collectionPreview;
