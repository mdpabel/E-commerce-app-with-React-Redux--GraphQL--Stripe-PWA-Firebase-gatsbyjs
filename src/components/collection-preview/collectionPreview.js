import React from "react";
import { withRouter } from "react-router-dom";

import Product from "../../components/product/Product";
import "./collectionPreview.css";
import { Link } from "react-router-dom";

const collectionPreview = ({ title, items, routeName }) => {
  return (
    <div className="collection__preview container-fluid">
      <Link className="section__Preview_anchor" to={`shop/${routeName}`}>
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

export default withRouter(collectionPreview);
