import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../assets/constants/colors'

export const NumberContainer = ({number}) => {
  return (
    <View style={styles.numberContainer}> 
        <Text style={styles.text}>
            {number}
        </Text>
    </View>
  )
}

const styles =StyleSheet.create({
    numberContainer:{ 
        marginVertical:10,
        marginHorizontal:40,
        textAlign:'center',
        padding:15,
        borderWidth:3,
        borderColor:colors.golden,
        borderRadius:10
    
    },
        text:{
            fontSize:32,
            color:colors.golden,
            fontWeight:'bold',
            textAlign:'center',

        }
    
    })