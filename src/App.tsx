import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, ThemesType } from './config/theme';
import { GlobalStyles, AppContainer } from "./styles";

import { useDarkMode } from './hooks/useDarkMode'

const App: React.FC = () => {

  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === ThemesType.DARK ? darkTheme : lightTheme;
  const isDarkMode = theme === ThemesType.DARK;

  return (
    <ThemeProvider theme={themeMode}>
      <AppContainer $isDarkMode={isDarkMode}>
        <GlobalStyles />
        <NavBar themeToggler={themeToggler} />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
