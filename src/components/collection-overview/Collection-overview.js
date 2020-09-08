import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopDataForCollections } from "../../redux/shop/shop.select";
import CollectionPreview from "../../components/collection-preview/collectionPreview";

const CollectionOverview = ({ shopData }) => {
  return (
    <div>
      {shopData.map(({ id, ...rest }) => (
        <CollectionPreview key={id} {...rest} />
      ))}
    </div>
  );
};

const mapStateTopProps = createStructuredSelector({
  shopData: selectShopDataForCollections,
});

export default connect(mapStateTopProps)(CollectionOverview);
