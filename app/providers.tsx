'use client';

import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';
import { ThemeContext } from './utils/theme';

export default function Providers({ children }: { children: React.ReactNode }) {
  const [client] = useState(new QueryClient());
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <QueryClientProvider client={client}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div data-theme={theme}>{children}</div>
      </ThemeContext.Provider>
    </QueryClientProvider>
  );
}
