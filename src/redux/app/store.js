import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import rootReducers from './rootReducers';

const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            ImmutableCheck: false
        })
});

const persistor = persistStore(store);

const { dispatch, getSate } = store;

export { store, persistor, dispatch, getSate }