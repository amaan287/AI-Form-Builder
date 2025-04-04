"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, MonitorIcon } from 'lucide-react';

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="tabs tabs-box border rounded-lg p-1 bg-background">
      <input
        value="light"
        checked={theme === "light"}
        onChange={() => setTheme("light")}
        type="radio"
        name="theme_tabs"
        className="tab"
        id="light-tab"
      />
      <label 
        htmlFor="light-tab" 
        className="tab flex items-center justify-center cursor-pointer p-2 hover:bg-muted rounded"
      >
        <SunIcon className="h-[1.2rem] w-[1.2rem]" />
      </label>

      <input
        value="dark"
        checked={theme === "dark"}
        onChange={() => setTheme("dark")}
        type="radio"
        name="theme_tabs"
        className="tab"
        id="dark-tab"
      />
      <label 
        htmlFor="dark-tab" 
        className="tab flex items-center justify-center cursor-pointer p-2 hover:bg-muted rounded"
      >
        <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
      </label>

      <input
        value="system"
        checked={theme === "system"}
        onChange={() => setTheme("system")}
        type="radio"
        name="theme_tabs"
        className="tab"
        id="system-tab"
      />
      <label 
        htmlFor="system-tab" 
        className="tab flex items-center justify-center cursor-pointer p-2 hover:bg-muted rounded"
      >
        <MonitorIcon className="h-[1.2rem] w-[1.2rem]" />
      </label>
    </div>
  );
}

export default ThemeSwitcher;