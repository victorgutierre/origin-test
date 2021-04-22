import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Source Sans Pro', sans-serif;
}

html {
  font-size: 100%;
}

body {
  background-color: #f5f8fa;
}

`;
