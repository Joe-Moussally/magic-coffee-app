// ** React Imports
import React from "react"

// ** React Native Imports
import { View, Text } from "react-native"

// ** Screens Imports
import MenuScreen from "../screens/order-screens/MenuScreen"
import OrderOptionsScreen from "../screens/order-screens/OrderOptionsScreen"

// ** Navigation Imports
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

const OrderStackNavigation = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator
        initialRouteName="MainTabsNavigation"
        screenOptions={{
          headerShadowVisible: false
        }}
      >
        <Stack.Screen
          name="MenuScreen"
          component={MenuScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OrderOptionsScreen"
          component={OrderOptionsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </View>
  )
}

export default OrderStackNavigation
