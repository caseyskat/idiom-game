import { createGlobalStyle, ThemeProvider } from "styled-components";
import "./App.css";
import QuestionCard from "./components/QuestionCard";
import { MainApp } from "./styled-elements";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  body{
    background: ${({ theme }) => theme.surface1};
    color: ${({ theme }) => theme.text1};
    font-size: clamp(1rem, 8vw, 1.3rem);
    > * {
      transition: 0.25s ease all;
    }
  }
  h1{
    font-size: clamp(1.2rem, 8vw, 2.8rem);
  }
`;
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainApp className="app">
        <QuestionCard />
        <p style={{ fontSize: ".7rem", textAlign: "center" }}>
          made with ❤️ by Caseys_kat © {new Date().getFullYear()}
        </p>
      </MainApp>
    </ThemeProvider>
  );
}

export default App;
