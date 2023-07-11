// ** Components Imports
import MainStackNavigation from "./Navigations/MainStackNavigation"

// ** Redux Imports
import { store } from "./redux/store"
import { Provider } from "react-redux"

// ** Expo Imports
import {
  useFonts,
  Outfit_100Thin,
  Outfit_200ExtraLight,
  Outfit_300Light,
  Outfit_400Regular,
  Outfit_500Medium,
  Outfit_600SemiBold,
  Outfit_700Bold,
  Outfit_800ExtraBold,
  Outfit_900Black
} from "@expo-google-fonts/outfit"

export default function App() {
  // ** Custom Fonts
  let [fontsLoaded] = useFonts({
    Outfit_100Thin,
    Outfit_200ExtraLight,
    Outfit_300Light,
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_600SemiBold,
    Outfit_700Bold,
    Outfit_800ExtraBold,
    Outfit_900Black
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <Provider store={store}>
      <MainStackNavigation />
    </Provider>
  )
}
