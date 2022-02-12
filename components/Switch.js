import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import { StyleSheet, Text, View, Switch } from "react-native"

export default function App(props) {
  const [enabled, setEnabled] = useState(props.value)

  const toggleSwitch = () => {
    setEnabled(oldValue => !oldValue)
  }

  return (
    <View style={styles.container}>
      <Switch onValueChange={toggleSwitch} value={enabled} />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
})
