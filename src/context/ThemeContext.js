import React from 'react'

const ThemeContext = React.createContext({
  isDarkMode: false,
  toggleTheme: () => {},
  savedPlayList: [],
  addToSavedPlayList: () => {},
})
export default ThemeContext
