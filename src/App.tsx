import { CssBaseline, LinearProgress, ThemeProvider } from '@mui/material';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { selectThemeMode, setThemeMode } from './app.slice';
import { ErrorBoundary } from './ErrorBourder';
import { useRootDispatch, useRootSelector } from './store';
import { theme, ThemeMode } from './theme';
import { Header } from "./components/Header";


const MainPage = lazy(() => import('./pages/Main.page'));
const Error404Page = lazy(() => import('./pages/Error404.page'));


function App() {
  document.title = 'ZNode.';
  const dispatch = useRootDispatch();
  const themeMode = useRootSelector(selectThemeMode);

  // Автоматическая смена цветовой схемы в зависимости от темы ОС
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  darkModeMediaQuery.addListener((e) => {
    const darkModeOn = e.matches;
    dispatch(setThemeMode(darkModeOn ? ThemeMode.DARK : ThemeMode.LIGHT));
  });

  return (
    <ThemeProvider theme={theme(themeMode)}>
      <ErrorBoundary>
        <CssBaseline />
        <Header />
        <Suspense fallback={<LinearProgress />}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<Error404Page />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
