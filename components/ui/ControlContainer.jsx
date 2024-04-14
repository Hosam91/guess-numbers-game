import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function ControlContainer({children}) {
  return (
    <View style={styles.inputContainer}>
        {children}
      </View>
  )
}
const styles =StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 50,
    backgroundColor: '#4e0329',
    marginHorizontal: 24,
    borderRadius: 10,
    elevation: 9,
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
})