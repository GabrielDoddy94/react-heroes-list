import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;  
}

html {
  font-size: 62.5%;
}

body {
  background-color: #2c3e50;
  color: #000;
  font-family: 'Poppins', sans-serif;  
}

main {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
`;
