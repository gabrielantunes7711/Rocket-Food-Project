import { createStore } from "redux";
import rootReducer from "./root-reducer";
import { persistReducer, persistStore } from "redux-persist"; // Importe persistStore
import persistConfig from "./persistConfig"; // Importe a configuração do persistConfig

const store = createStore(persistReducer(persistConfig, rootReducer)); // Use persistReducer

const persistor = persistStore(store); // Crie um persistor

export { store, persistor }; // Exporte o store e o persistor
