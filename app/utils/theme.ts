import { createContext } from 'react';

interface ThemeContextData {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextData>({
  theme: 'dark',
  toggleTheme: () => {},
});
