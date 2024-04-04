import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";
import { Profile } from "./components/Profile";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const toggleTheme = () => {
    if (themeMode === "light") setThemeMode("dark");
    else setThemeMode("light");
  };

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    htmlElement.classList.remove("light", "dark");
    htmlElement.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, toggleTheme }}>
      <Profile />
    </ThemeProvider>
  );
}

export default App;
