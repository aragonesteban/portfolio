import { styled, createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) => theme.backgroundColor};
    transition: background-color 0.3s ease;
  }
`

export const AppContainer = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 100vh;
`;