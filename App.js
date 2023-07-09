import { View } from "react-native"
import MainStackNavigation from "./Navigations/MainStackNavigation"
import { ThemeProvider } from "./context/ThemeContext"

export default function App() {
  return (
    <ThemeProvider>
      <MainStackNavigation />
    </ThemeProvider>
  )
}
