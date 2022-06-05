/* eslint-disable @typescript-eslint/no-explicit-any */
import { Action, ThunkDispatch, configureStore } from '@reduxjs/toolkit';
import employeeReducer from './../apps/employee/store';

const middlewares: Array<any> = [];

if (process.env.NODE_ENV === 'development') {
  const { createLogger } = require('redux-logger');
  const logger = createLogger({ collapsed:
    (_getState: any, _action: any, logEntry: any) => !logEntry.error });

  middlewares.push(logger);
}

const store: any = configureStore({
  reducer: {
    employee: employeeReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(middlewares),
  devTools: process.env.NODE_ENV === 'development',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch =
  ThunkDispatch<RootState, void, Action>;


export default store;
