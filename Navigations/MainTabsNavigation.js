// ** React Imports
import React from "react"

// ** React Native Imports
import { View, StyleSheet } from "react-native"

// ** React Navigation Imports
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

// ** Hooks Imports
import useTheme from "../hooks/useTheme"

// ** Icons Imports
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"

// ** Navigation Components
import OrderStackNavigation from "../Navigations/OrderStackNavigation"
import RewardsStackNavigation from "../Navigations/RewardsStackNavigation"
import MyOrdersStackNavigation from "../Navigations/MyOrdersStackNavigation"

const MainTabsNavigation = () => {
  // ** Hooks
  const theme = useTheme()

  const Tab = createBottomTabNavigator()

  const styles = StyleSheet.create({
    labelStyle: {
      display: "none"
    },
    tabBarStyle: {
      borderRadius: 30,
      marginBottom: 20,
      marginHorizontal: 20,
      display: "flex",
      paddingBottom: 0
    }
  })

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.pallete.primary.main,
        inactiveTintColor: theme.pallete.gray.main,
        labelStyle: styles.labelStyle
      }}
      screenOptions={{
        // activeTintColor: theme.pallete.primary.main,
        // inactiveTintColor: theme.pallete.gray.main,
        // style: styles.tabBarStyle,
        // labelStyle: styles.labelStyle
        tabBarStyle: styles.tabBarStyle,
        headerShown: false,
        tabBarShowLabel: false
      }}
      initialRouteName="OrderStackNavigation"
    >
      <Tab.Screen
        name="OrderStackNavigation"
        component={OrderStackNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="storefront-outline"
              size={size + 10}
              color={color}
              // style={{ marginTop: "auto" }}
            />
          )
        }}
      />
      <Tab.Screen
        name="MyOrdersStackNavigation"
        component={MyOrdersStackNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="wallet-giftcard"
              size={size + 10}
              color={color}
            />
          )
        }}
      />
      <Tab.Screen
        name="RewardsStackNavigation"
        component={RewardsStackNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="receipt-long" size={size + 10} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default MainTabsNavigation
