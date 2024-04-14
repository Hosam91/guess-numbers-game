import React, { useEffect, useState } from 'react'
import { Alert, FlatList, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { Title } from '../components/ui/Title'
import colors from '../assets/constants/colors'
import { NumberContainer } from '../components/game/NumberContainer'
import ControlContainer from '../components/ui/ControlContainer'
import PrimarryButton from '../components/ui/PrimarryButton'
import { Ionicons } from '@expo/vector-icons'
function generateRandomNumber(min, max, exclude) {
  const randNmbr = Math.floor(Math.random() * (max - min)) + min
  if (randNmbr === exclude) {
    return generateRandomNumber(min, max, exclude)
  } else {
    return randNmbr
  }
}
export default function GameScreen({ userNumber, onGameOver,count }) {

  let maxBound = 100
  let minBound = 0
  const initialGuess = generateRandomNumber(minBound, maxBound, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  const [rounds, setRounds] = useState([initialGuess])
  const {width,height}=useWindowDimensions()
  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver()
    }
  }, [currentGuess, userNumber, onGameOver])

  const handleNextGuess = (dir) => {
    if (
      (dir === 'lower' && currentGuess < userNumber) ||
      (dir === 'higher' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", 'You Know This Is Wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ])
      return
    }
    if (dir === 'lower') {
      count()
      maxBound = currentGuess
    } else {
      minBound = currentGuess + 1
      count()
    }

    const newRandNumber = generateRandomNumber(minBound, maxBound, currentGuess)
    setCurrentGuess(newRandNumber)
    setRounds(prevRounds =>[newRandNumber,...prevRounds])
  }

  let content = <>
     <Title title={"Oppontent's Guess"} />
        <NumberContainer number={currentGuess} />
        <View>
          <ControlContainer>
            <Text style={styles.text}>Higher Or Lower ?</Text>
            <View style={styles.btnsContainer}>
              <View style={styles.btnBox}>
                <PrimarryButton pressHanler={() => handleNextGuess('lower')}>
                  <Ionicons name="remove" size={24} color="white" />
                </PrimarryButton>
              </View>
              <View style={styles.btnBox}>
                <PrimarryButton pressHanler={() => handleNextGuess('higher')}>
                 <Ionicons name="add" size={24} color="white" />
                </PrimarryButton>
              </View>
            </View>
          </ControlContainer>
        </View>
  </>
  if(width>450){
    content = <>

        
        <View>
          
            <Text style={styles.text}>Higher Or Lower ?</Text>
           <View style={styles.wideScreen}>
           <View style={styles.btnBox}>
                <PrimarryButton pressHanler={() => handleNextGuess('lower')}>
                  <Ionicons name="remove" size={24} color="white" />
                </PrimarryButton>
              </View>
              <NumberContainer number={currentGuess} />
              <View style={styles.btnBox}>
                <PrimarryButton pressHanler={() => handleNextGuess('higher')}>
                 <Ionicons name="add" size={24} color="white" />
                </PrimarryButton>
              </View>
           </View>  
          
        </View>
        </>
  }
  return (
    <>
      <View style={styles.screenContainer}>
        {content}
        <ScrollView  style = {styles.listContainer}>
          <View>    
               <FlatList 
        data ={rounds} 
        renderItem ={(itemData)=><Text style = {styles.listItem}>{itemData.item} </Text>}
        keyExtractor ={(item)=>item}
        />
        </View>
 
            </ScrollView>
        

      </View>
    </>
  )
}
const styles = StyleSheet.create({
  screenContainer: {
    padding: 25,
    marginTop: 80,
    flex: 1,
    // alignItems:'center'
  },
  title: {
    fontSize: 25,
    color: colors.golden,
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: colors.golden,
    padding: 14,
  },
  btnsContainer: {
    flexDirection: 'row',
    gap: 8,
    marginVertical: 16,
  },
  text: {
    color: colors.golden,
    fontSize: 20,
    textAlign: 'center',
  },
  btnBox: {
    width: 100,
  },
  listContainer:{
    padding:10,
    marginTop:20,
    
  },
  listItem:{
    backgroundColor:colors.golden,
    marginTop:10,
    padding:8,
    borderRadius:8,
    fontWeight:'bold',



  },
  wideScreen:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  }
})
