import logger from 'redux-logger';
import thunk from 'redux-thunk';
import RootReducer from './Reducers/RootReducer';
import { createStore, applyMiddleware } from 'redux';
// import storage from 'redux-persist/lib/storage';
// import { persistStore, persistReducer } from 'redux-persist';

// Array containing any development redux middleware.
let devMiddleware = [logger]

// Middleware that will be used in the redux store.
let middleware: any = [thunk]

// Add the development middleware if the app is run in dev mode.
if (process.env.NODE_ENV === 'development') middleware = [...middleware, ...devMiddleware]

// const persistedReducer = persistReducer(persistConfig, RootReducer)

const store = createStore(RootReducer, applyMiddleware(...middleware));
// let persistor = persistStore(store)

export default store