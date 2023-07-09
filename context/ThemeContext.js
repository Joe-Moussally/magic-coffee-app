// ** React Imports
import React, { createContext, useState, useEffect } from "react"

// ** React Native Imports
import { AsyncStorage } from "react-native"

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    // Retrieve the theme value from AsyncStorage
    const retrieveTheme = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem("theme")
        if (storedTheme) {
          setTheme(storedTheme)
        }
      } catch (error) {
        console.log("Error retrieving theme:", error)
      }
    }

    retrieveTheme()
  }, [])

  // Update the theme value in AsyncStorage when it changes
  useEffect(() => {
    const updateTheme = async () => {
      try {
        await AsyncStorage.setItem("theme", theme)
      } catch (error) {
        console.log("Error updating theme:", error)
      }
    }

    updateTheme()
  }, [theme])

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  // Value to provide in the context
  const themeContextValue = {
    theme,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }
