import shopActionTypes from "./shop.type";
// import shopUtil from "./shop.util";

const INITIAL_STATE = {
  shopData: null,
  loading: false,
  error: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.FETCH_COLLECTION_START:
      return {
        ...state,
        loading: true,
      };
    case shopActionTypes.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        shopData: action.payload,
        loading: false,
      };
    case shopActionTypes.FETCH_COLLECTION_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default shopReducer;
