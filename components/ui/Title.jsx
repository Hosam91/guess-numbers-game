import React from 'react'
import { StyleSheet, Text } from 'react-native'
import colors from '../../assets/constants/colors'

export const Title = ({title}) => {
  return (
    <>
          <Text style={styles.title}>{title}</Text>

    </>
  )
}
const styles=StyleSheet.create({

  title:{
    fontSize:25,
    color:"#fff",
    fontWeight:'bold',
    textAlign:'center',
    borderWidth:3,
    borderColor:'#fff',
    padding:14,
    marginBottom:30


  }
})