// ** React Imports
import React from "react"

// ** React Native Imports
import { View, StyleSheet, SafeAreaView } from "react-native"

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
// import { StatusBar } from "expo-status-bar"
import { StatusBar } from "react-native"

const MainTabsNavigation = () => {
  // ** Hooks
  const theme = useTheme()

  const STATUSBAR_HEIGHT = StatusBar.currentHeight
  console.log(STATUSBAR_HEIGHT)

  const Tab = createBottomTabNavigator()

  const styles = StyleSheet.create({
    labelStyle: {
      display: "none"
    },
    tabBarStyle: {
      borderRadius: 30,
      marginHorizontal: 20,
      display: "flex",
      paddingBottom: 0,
      shadowColor: "#e3e3e3",
      shadowOffset: {
        height: 0,
        width: 0
      },
      elevation: 4,
      shadowOpacity: 1,
      shadowRadius: 10
    }
  })

  return (
    <SafeAreaView
      style={{ height: "100%", backgroundColor: theme.pallete.background.main }}
    >
      <StatusBar style="dark" />
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: theme.pallete.primary.main,
          inactiveTintColor: theme.pallete.gray.main,
          labelStyle: styles.labelStyle
        }}
        screenOptions={{
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
              <MaterialIcons
                name="receipt-long"
                size={size + 10}
                color={color}
              />
            )
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  )
}

export default MainTabsNavigation
