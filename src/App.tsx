import { CssBaseline, LinearProgress, ThemeProvider } from '@mui/material';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { selectThemeMode } from './app.slice';
import { ErrorBoundary } from './ErrorBourder';
import { useRootSelector } from './store';
import { theme } from './theme';
import { Header } from "./components/Header";


const MainPage = lazy(() => import('./pages/Main.page'));
const Error404Page = lazy(() => import('./pages/Error404.page'));


function App() {
  document.title = 'ZNode.';
  const themeMode = useRootSelector(selectThemeMode);

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
