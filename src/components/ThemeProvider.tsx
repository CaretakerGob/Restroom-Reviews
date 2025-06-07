
'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void; // Allow direct setting for future use, though toggle is primary
  toggleTheme: () => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const storedTheme = localStorage.getItem('theme') as Theme | null;
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      if (storedTheme) {
        setThemeState(storedTheme);
      } else if (systemPrefersDark) {
        setThemeState('dark');
      } else {
        setThemeState('light');
      }
    } catch (error) {
      // localStorage or matchMedia might not be available (e.g., SSR, specific environments)
      setThemeState('light'); // Default to light theme on error
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      const root = window.document.documentElement;
      if (theme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
      try {
        localStorage.setItem('theme', theme);
      } catch (error) {
        // localStorage might not be available
      }
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setThemeState(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };
  
  // To prevent flash of unstyled content or incorrect theme, 
  // we ensure theme logic runs only after component is mounted.
  // The actual class is applied to <html> via useEffect.
  // Children are rendered immediately; styling will adapt once theme is set.

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
