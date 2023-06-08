"use client";

import { ReactNode, createContext, useState } from "react";

export interface ThemeConfig {
  mode: string;
  toggle: () => void;
}
export const ThemeContext = createContext<ThemeConfig>({
  mode: "dark",
  toggle: () => {},
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState<string>("dark");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
