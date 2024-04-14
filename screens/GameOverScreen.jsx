import React from 'react'
import { Image, StyleSheet, Text, View,Dimensions, useWindowDimensions, ScrollView } from 'react-native'
import colors from '../assets/constants/colors'
import PrimarryButton from './../components/ui/PrimarryButton';

export default function GameOverScreen({userNumber,counter,startNewGame}) {

const {width,height}=useWindowDimensions()
const marginTopProp = height<400?50:30 
let imgWide =height<450? height:width




  return (
    <ScrollView style={styles.screen}>
    <View style={[styles.rootContainer,{marginTop:marginTopProp,}]}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Game Over !!</Text>
      </View>
      <View>
        <Image source={require('../assets/images/success.png')} 
            style={[styles.img,{ width:imgWide/2,
            height:imgWide/2,}]}
            
            imageStyle={[styles.img,{ width:imgWide/2,
            height:imgWide/2,}]}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Your phone neded to <Text style={styles.number}>{counter} </Text>roundes to guss the number   <Text style={styles.number}>{userNumber}</Text></Text>
      </View>
      <View style={styles.textContainer}>
        <PrimarryButton pressHanler={startNewGame} >Start New Game </PrimarryButton>
      </View>
    </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  screen:{ flex: 1,},
  rootContainer: {
   
    flex: 1,
    alignItems:'center'
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 23,
    color: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    padding: 15,
  },
  img:{
   
    borderRadius:250/2,
    borderWidth:2,
    borderColor:'#000',
    marginTop:40,
    
  },
  textContainer:{
   alignItems:'center',
    marginTop:25,
  },
  text:{
    color:'#000',
    fontSize:25,
    textAlign:'center',
    marginHorizontal:10,
  },
  number:{
    color:colors.primarry200,
    fontWeight:'bold'
  }
})
