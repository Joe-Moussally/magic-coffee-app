// ** React Imports
import React from "react"

// ** React Native Imports
import { View, Text, StyleSheet } from "react-native"

// ** Icons Imoprts
import { AntDesign } from "@expo/vector-icons"

// ** Navigation Imports
import { useNavigation } from "@react-navigation/native"

// ** Components Imports
import Button from "../Button"
import Typography from "../Typography"

const UserScreenHeader = ({ title, secondaryTitle, hideBackButton }) => {
  // ** Hooks Imports
  const navigation = useNavigation()

  // ** Styles
  const styles = StyleSheet.create({
    secondaryTitle: {
      color: "gray",
      marginLeft: 20,
      marginBottom: 40
    }
  })
  const handleBack = () => {
    navigation.pop()
  }
  return (
    <>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 30,
          marginBottom: 7,
          height: 65
        }}
      >
        {!hideBackButton && (
          <Button
            icon={<AntDesign name="left" />}
            iconButton
            variant="blank"
            onPress={handleBack}
          />
        )}
        <Typography title>{title}</Typography>
      </View>
      {secondaryTitle && (
        <Typography style={styles.secondaryTitle}>{secondaryTitle}</Typography>
      )}
    </>
  )
}

export default UserScreenHeader
