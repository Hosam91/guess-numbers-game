import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import colors from '../../assets/constants/colors'


export default function PrimarryButton({ children, pressHanler }) {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={pressHanler}
        android_ripple={{ color: colors.primarry200 }}
        style={({pressed})=>pressed ? [styles.innerContainer,styles.pressed ]:styles.innerContainer }
>
        <Text style={styles.btnText}>{children} </Text>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  innerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 3,
    textAlign: 'center',
    borderRadius: 20,
    backgroundColor: colors.primarry100,
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
  },
  pressed: {
    opacity: 0.75,
    color:'gold'

  },
})
