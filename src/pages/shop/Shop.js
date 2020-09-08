import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionOverview from "../../components/collection-overview/Collection-overview";
import Collection from "../collection/Collection";
import { asyncFetchCollection } from "../../redux/shop/shop.action";
import withSpinner from "../../hoc/withSpinner";
import { selectSpinner, shopDataIsLoaded } from "../../redux/shop/shop.select";
// import axios from "../../axios";

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionWithSpinner = withSpinner(Collection);

const Shop = ({ match, loading, shopDataIsLoaded, collectionsData }) => {
  useEffect(() => {
    collectionsData();
  }, [collectionsData]);

  return (
    <>
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionOverviewWithSpinner loading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionWithSpinner loading={!shopDataIsLoaded} {...props} />
        )}
      />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectSpinner,
  shopDataIsLoaded: shopDataIsLoaded,
});

const mapDispatchToProps = (dispatch) => {
  return {
    collectionsData: (collection) => dispatch(asyncFetchCollection(collection)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
