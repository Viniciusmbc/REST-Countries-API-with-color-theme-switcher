import { createContext, useState, useContext } from "react";

export const ThemeContextDefaultValue = {
  theme: "light",
  toggleTheme: () => {},
};

export const ThemeContext = createContext(ThemeContextDefaultValue);

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useChangeTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
