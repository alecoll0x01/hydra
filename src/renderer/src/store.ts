import { configureStore } from "@reduxjs/toolkit";
import {
  downloadSlice,
  windowSlice,
  librarySlice,
  userPreferencesSlice,
  toastSlice,
  userDetailsSlice,
  gameRunningSlice,
  repacksSlice,
  catalogueSearchSlice,
} from "@renderer/features";

export const store = configureStore({
  reducer: {
    window: windowSlice.reducer,
    library: librarySlice.reducer,
    userPreferences: userPreferencesSlice.reducer,
    download: downloadSlice.reducer,
    toast: toastSlice.reducer,
    userDetails: userDetailsSlice.reducer,
    gameRunning: gameRunningSlice.reducer,
    repacks: repacksSlice.reducer,
    catalogueSearch: catalogueSearchSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
