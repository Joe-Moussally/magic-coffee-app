// ** React Imports
import { useNavigation, useRoute } from "@react-navigation/native"
import React from "react"

// ** React Native Imports
import { View, Text, Image } from "react-native"

const OrderOptionsScreen = () => {
  const route = useRoute()
  console.log(route.params)

  return (
    <View>
      <Image source={route.params.imgSrc} />
    </View>
  )
}

export default OrderOptionsScreen
