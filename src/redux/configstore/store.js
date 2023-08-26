// import { createStore, compose, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { rootReducer } from "../reducers";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const configureStore = () => {
//   return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
// };

// export default configureStore;
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "../reducers";

const persistConfig = {
  key: "reducer",
  storage: storage,
  whitelist: ["reducer"], // or blacklist to exclude specific reducers
};

const presistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  presistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);
export { persistor, store };
