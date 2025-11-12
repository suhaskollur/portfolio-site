"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  // Theme is fixed to light. Render a non-interactive Sun icon for consistency.
  return (
    <div role="img" aria-label="Light theme" className="inline-flex items-center justify-center w-8 h-8">
      <Sun className="h-[1.2rem] w-[1.2rem] text-primary" />
    </div>
  );
}

