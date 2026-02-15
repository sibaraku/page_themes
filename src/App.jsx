import "./App.css";
import Page from "./components/Page";
import { createContext, useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const ThemeContext = createContext("light");
  return (
    <ThemeContext.Provider value={theme}>
      <Page ThemeContext={ThemeContext} theme={theme} setTheme={setTheme} />
    </ThemeContext.Provider>
  );
}

export default App;