import { View, Text } from "react-native"
import React from "react"
import { useNavigation } from "@react-navigation/native"

const MenuScreen = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text
        onPress={() => {
          navigation.replace("SignInScreen")
        }}
      >
        MenuScreen
      </Text>
    </View>
  )
}

export default MenuScreen
