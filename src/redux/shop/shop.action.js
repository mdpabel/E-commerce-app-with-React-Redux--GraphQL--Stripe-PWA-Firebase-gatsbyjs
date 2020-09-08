import shopActionTypes from "./shop.type";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../components/firebase/firebase.utils";

const fetchCollectionStart = () => {
  return {
    type: shopActionTypes.FETCH_COLLECTION_START,
  };
};

const fetchCollectionSuccess = (collection) => {
  return {
    type: shopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: collection,
  };
};

const fetchCollectionFail = (error) => {
  return {
    type: shopActionTypes.FETCH_COLLECTION_FAIL,
    payload: error,
  };
};

export const asyncFetchCollection = () => {
  return (dispatch) => {
    dispatch(fetchCollectionStart());

    try {
      const collectionRef = firestore.collection("collections");
      collectionRef.onSnapshot(async (snapShot) => {
        const collection = convertCollectionSnapshotToMap(snapShot);
        dispatch(fetchCollectionSuccess(collection));
      });
    } catch (error) {
      dispatch(fetchCollectionFail(error));
    }
  };
};
