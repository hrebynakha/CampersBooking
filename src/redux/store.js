import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./campers/slice";
import { rootReducer } from "./root/slice";
import { favoritesReducer } from "./favorites/slice";
import storage from "redux-persist/lib/storage";
import { persistStore } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "favorites",
  storage,
};

const favoritesPersistedReducer = persistReducer(
  persistConfig,
  favoritesReducer
);

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    root: rootReducer,
    favorites: favoritesPersistedReducer,
  },
});

export const persistor = persistStore(store);
