import { ConfigProvider, theme } from "antd";
import { useState } from "react";
import { ThemeContext } from "./useAppTheme";

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

          token: darkMode
            ? {
                colorPrimary: "#6366F1",
                colorBgLayout: "#0F172A",
                colorBgContainer: "#1E293B",
                colorPrimaryBg: "#1F2937",
                colorPrimaryBorder: "#4F46E5",
                colorText: "#E2E8F0",
                colorTextSecondary: "#94A3B8",
                colorBorder: "#334155",
              }
            : {
                colorPrimary: "#4F46E5",
                colorBgLayout: "#F3F4FF",
                colorBgContainer: "#FCFCFF",
                colorPrimaryBg: "#EEF2FF",
                colorPrimaryBorder: "#A5B4FC",
                colorText: "#1E293B",
                colorTextSecondary: "#475569",
                colorBorder: "#CBD5E1",
              },

          components: darkMode
            ? {
                Card: {
                  colorBorderSecondary: "#334155",
                },

                Segmented: {
                  trackBg: "#334155",
                  itemSelectedBg: "#6366F1",
                  itemSelectedColor: "#FFFFFF",
                  itemHoverBg: "#475569",
                },

                Select: {
                  optionSelectedBg: "#312E81",
                  optionActiveBg: "#3730A3",
                },

                Tag: {
                  defaultBg: "#312E81",
                },
              }
            : {
                Card: {
                  colorBorderSecondary: "#C7D2FE",
                },

                Segmented: {
                  trackBg: "#E0E7FF",
                  itemSelectedBg: "#4F46E5",
                  itemSelectedColor: "#FFFFFF",
                  itemHoverBg: "#C7D2FE",
                },

                Select: {
                  optionSelectedBg: "#E0E7FF",
                  optionActiveBg: "#EEF2FF",
                },

                Tag: {
                  defaultBg: "#C7D2FE",
                },
              },
        }}
      >
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}
