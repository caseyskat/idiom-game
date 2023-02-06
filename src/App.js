import { ThemeProvider } from "styled-components";
import "./App.css";
import QuestionCard from "./components/QuestionCard";
import { GlobalStyle, MainApp } from "./styled-elements";
import { theme } from "./theme";

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
