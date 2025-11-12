"use client";

import * as React from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "light",
  setTheme: () => null,
};

const ThemeProviderContext = React.createContext<ThemeProviderState>(initialState);

export function ThemeProvider({ children, defaultTheme = "light", ...props }: ThemeProviderProps) {
  // Force light theme always. We do not read or persist any preference.
  const theme: Theme = "light";

  React.useEffect(() => {
    const root = window.document.documentElement;
    // Ensure only the light class is present
    root.classList.remove("light", "dark");
    root.classList.add("light");
  }, []);

  const value = {
    theme,
    setTheme: (_: Theme) => {
      /* no-op: theme is fixed to light */
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};

