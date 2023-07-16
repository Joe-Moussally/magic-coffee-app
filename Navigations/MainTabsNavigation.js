// ** React Imports
import React from "react"

// ** React Native Imports
import { View, StyleSheet } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

// ** Expo Imports
import { StatusBar } from "expo-status-bar"

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

  // ** Navigation
  const Tab = createBottomTabNavigator()

  // ** Safe Area
  const insets = useSafeAreaInsets()

  // ** Styles
  const styles = StyleSheet.create({
    mainContainer: {
      height: "100%",
      backgroundColor: theme.pallete.background.main,
      paddingTop: insets.top
    },
    labelStyle: {
      display: "none"
    },
    tabBarStyle: {
      borderRadius: 30,
      marginHorizontal: 20,
      display: "flex",
      paddingBottom: 0,
      shadowColor: "#00000017",
      shadowOffset: {
        height: 0,
        width: 0
      },
      elevation: 4,
      shadowOpacity: 1,
      shadowRadius: 10,
      position: "absolute",
      bottom: insets.bottom
    }
  })

  return (
    <View style={styles.mainContainer}>
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
    </View>
  )
}

export default MainTabsNavigation
