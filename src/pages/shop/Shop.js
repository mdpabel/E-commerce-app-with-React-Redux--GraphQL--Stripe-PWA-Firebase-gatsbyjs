import React, { Component } from "react";

import CollectionPreview from "../../components/collection-preview/collectionPreview";
import SHOP_DATA from "../../resources/shop_data/shop.data";

class Shop extends Component {
  state = {
    collections: SHOP_DATA,
  };
  render() {
    return (
      <div className="container-fluid">
        {this.state.collections.map(({ id, ...rest }) => (
          <CollectionPreview key={id} {...rest} />
        ))}
      </div>
    );
  }
}

export default Shop;
