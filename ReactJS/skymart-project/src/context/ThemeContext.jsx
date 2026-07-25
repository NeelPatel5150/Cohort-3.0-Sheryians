import { createContext, useEffect, useState } from 'react'
import { getItem, setItem } from '../utils/storage'

export const ThemeContext = createContext(null)

const THEME_KEY = 'skymart_theme'

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => getItem(THEME_KEY, 'dark'))

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    setItem(THEME_KEY, theme)
  }, [theme])

  function toggleTheme() {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
