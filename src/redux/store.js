import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

const middleware = [logger, thunk];

export const store = createStore(rootReducer, applyMiddleware(...middleware));
export const persistor = persistStore(store);
