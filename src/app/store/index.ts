import { configureStore, } from "@reduxjs/toolkit";
// import { Action, ThunkAction }  from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () => configureStore({
  reducer: {},
  devTools: true
});


// export type AppStore = ReturnType<typeof makeStore>;
// export type AppState = ReturnType<AppStore["getState"]>;
// export type AppThunk<T = void> = ThunkAction<T, AppState, unknown, Action>;

export const wrapper = createWrapper<ReturnType<typeof makeStore>>(makeStore);
