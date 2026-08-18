import { ConfigProvider, theme } from "antd";

import { createContext, useContext, useState } from "react";

type ThemeContextType = {
  darkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useAppTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemeProvider missing");
  }

  return context;
};

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? JSON.parse(saved) : true;
  });

  const toggleTheme = () => {
    setDarkMode((prev: boolean) => {
      const next = !prev;
      localStorage.setItem("theme", JSON.stringify(next));
      return next;
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
      }}
    >
      <ConfigProvider
        theme={{
          algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        }}
      >
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}
