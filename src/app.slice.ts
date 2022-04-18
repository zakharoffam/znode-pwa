import { RootState } from "./store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThemeMode } from "./theme";

interface AppStore {
  themeMode: ThemeMode;
}

const themeModeFromLocalStorage = localStorage.getItem('themeMode');

const initState: AppStore = {
  themeMode: themeModeFromLocalStorage === ThemeMode.DARK ? ThemeMode.DARK : ThemeMode.LIGHT,
};

const appSlice = createSlice({
  name: 'appSlice',
  initialState: initState,
  reducers: {
    setThemeMode: (state: AppStore, action: PayloadAction<ThemeMode>) => {
      state.themeMode = action.payload;
      localStorage.setItem('themeMode', action.payload);
    },
  },
});

export const {
  setThemeMode,
} = appSlice.actions;

export const selectThemeMode = (state: RootState) => state.app.themeMode;


export default appSlice.reducer;
