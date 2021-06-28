import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import accountReducer from './account'
const store = configureStore({
    reducer: {
        account: accountReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store