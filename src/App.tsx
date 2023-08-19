import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, ThemesType } from './config/theme';
import { GlobalStyles, AppContainer } from "./styles";

import { useDarkMode } from './hooks/useDarkMode'
import backgroundDark from './assets/background_dark.png';
import backgroundLight from './assets/background_light.png';

import Home from './pages/Home/Home';
import ArrowNavigate from './components/ArrowNavigate/ArrowNavigate';

const App: React.FC = () => {

  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === ThemesType.DARK ? darkTheme : lightTheme;
  const isDarkMode = theme === ThemesType.DARK;

  useEffect(() => {
    const element = document.getElementById('app');
    if (element) {
      element.style.backgroundImage = '';
    }
    setTimeout(() => {
      if (element) {
        element.style.backgroundImage = `url(${isDarkMode ? backgroundDark : backgroundLight})`;
      }
    }, 300)
  }, [isDarkMode])

  return (
    <ThemeProvider theme={themeMode}>
      <AppContainer id='app'>
        <GlobalStyles />
        <NavBar themeToggler={themeToggler} />
        <Home />
        <ArrowNavigate />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
