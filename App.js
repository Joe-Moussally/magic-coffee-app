// ** Components Imports
import MainStackNavigation from "./Navigations/MainStackNavigation"

// ** Redux Imports
import { store } from "./redux/store"
import { Provider } from "react-redux"

// ** Fonts Imports
import { useFonts } from "expo-font"

export default function App() {
  // ** Custom Fonts
  const [fontsLoaded] = useFonts({
    "Outfit-Black": require("./fonts/Outfit/static/Outfit-Black.ttf"),
    "Outfit-Bold": require("./fonts/Outfit/static/Outfit-Bold.ttf"),
    OutfitExtraBold: require("./fonts/Outfit/static/Outfit-ExtraBold.ttf"),
    "Outfit-ExtraLight": require("./fonts/Outfit/static/Outfit-ExtraLight.ttf"),
    "Outfit-Light": require("./fonts/Outfit/static/Outfit-Light.ttf"),
    "Outfit-Medium": require("./fonts/Outfit/static/Outfit-Medium.ttf"),
    "Outfit-Regular": require("./fonts/Outfit/static/Outfit-Regular.ttf"),
    "Outfit-SemiBold": require("./fonts/Outfit/static/Outfit-SemiBold.ttf"),
    "Outfit-Thin": require("./fonts/Outfit/static/Outfit-Thin.ttf")
  })

  return (
    <Provider store={store}>
      <MainStackNavigation />
    </Provider>
  )
}
