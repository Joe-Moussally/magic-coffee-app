// ** Components Imports
import MainStackNavigation from "./Navigations/MainStackNavigation"

// ** Redux Imports
import { store } from "./redux/store"
import { Provider } from "react-redux"

export default function App() {
  return (
    <Provider store={store}>
      <MainStackNavigation />
    </Provider>
  )
}
