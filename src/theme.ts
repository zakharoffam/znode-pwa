import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, ThemeOptions } from '@mui/material';

export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
}

/**
 * Светлая тема приложения
 */
 const lightTheme: ThemeOptions = {
  palette: {
    mode: ThemeMode.LIGHT,
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
  },
  shape: {
    borderRadius: 8,
  },
};

/**
 * Темная тема приложения
 */
const darkTheme: ThemeOptions = {
  palette: {
    mode: ThemeMode.DARK,
    background: {
      default: '#202124',
      paper: '#202124',
    },
    text: {
      primary: '#ffffff',
    },
  },
  shape: {
    borderRadius: 8,
  },
};

export const theme = (mode: ThemeMode) => createTheme(mode === ThemeMode.LIGHT ? lightTheme : darkTheme);
