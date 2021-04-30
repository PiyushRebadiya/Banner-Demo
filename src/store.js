import { createStore } from "redux";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

import { BannerReducer } from './redux/reducer/BannerReducer';

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, BannerReducer);

let store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

let persistor = persistStore(store);

export { store, persistor };