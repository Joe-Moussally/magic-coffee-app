// ** React Imports
import React from "react"

// ** React Native Imports
import { View, Image, StyleSheet } from "react-native"

// ** Icons Imports
import { AntDesign } from "@expo/vector-icons"

// ** Components Imports
import Button from "../../components/Button"
import Typography from "../../components/Typography"
import { StatusBar } from "expo-status-bar"

const WelcomeScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <StatusBar style="light" />
      <View style={styles.illustrationContainer}>
        <Image
          style={styles.treeLogo}
          source={require("../../assets/images/tree-logo.png")}
        />
        <Image
          style={styles.magicCoffee}
          source={require("../../assets/images/magic-coffee-text.png")}
        />
      </View>

      <Typography center fontSize={50} style={{ marginTop: 60 }}>
        Feel yourself like
      </Typography>
      <Typography center fontSize={50} verticalSpacing={10}>
        a barista!
      </Typography>
      <Typography center margin={15} verticalSpacing={30}>
        Magic coffee on order.
      </Typography>

      <Button
        style={{
          marginTop: "auto",
          marginBottom: "20%",
          marginLeft: "auto",
          marginRight: 30
        }}
        icon={<AntDesign name="arrowright" />}
        iconButton
      />
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1
  },
  illustrationContainer: {
    paddingTop: 40,
    backgroundColor: "#324A59",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "50%"
  },
  treeLogo: {},
  magicCoffee: {}
})
