import { styled, createGlobalStyle } from "styled-components";
import backgroundDark from './assets/background_dark.png';
import backgroundLight from './assets/background_light.png';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.textColor};
  }
`

export const AppContainer = styled.div<{ $isDarkMode: boolean }>`
    background-image: ${({ $isDarkMode }) =>
        `url(${$isDarkMode ? backgroundDark : backgroundLight})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 100vh;
`;