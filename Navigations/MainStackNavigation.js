import { View, Text } from "react-native"
import React from "react"

// ** React Navigation Imports
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

// ** Screens Imports
import WelcomeScreen from "../screens/WelcomeScreen"
import SignInScreen from "../screens/user-screens/SignInScreen"
import MainTabsNavigation from "./MainTabsNavigation"

const Stack = createNativeStackNavigator()

const MainStackNavigation = () => {
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <Stack.Navigator
          initialRouteName="WelcomeScreen"
          screenOptions={{
            headerShadowVisible: false
          }}
        >
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignInScreen"
            component={SignInScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="MainTabsNavigation"
            component={MainTabsNavigation}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  )
}

export default MainStackNavigation
