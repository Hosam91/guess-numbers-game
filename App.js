import { StatusBar } from 'expo-status-bar'
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import colors from './assets/constants/colors'
import GameOverScreen from './screens/GameOverScreen'

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [counter, setCounter] = useState(1)
  const [isGameOver, setIsGameOver] = useState(false)

  const gameOverScreenHandler =()=>{
    setIsGameOver(true)
  }
  
  const  increasCounter = ()=>{
    setCounter(prevCount => prevCount+1)
  }

  const startGameHandler = (pickedNumber) => {
    setUserNumber(pickedNumber)
  }

  const startNewGame = ()=>{
    setIsGameOver(false)
    startGameHandler(null)
  }

  let screen = <StartGameScreen onPickNumber={startGameHandler} />
  //  let screen = <GameOverScreen  counter={counter} userNumber={userNumber} startNewGame={startNewGame} />
  if (userNumber) {
    screen = <GameScreen count={increasCounter} userNumber={userNumber} onGameOver={gameOverScreenHandler}/>
  }
  if (userNumber&&isGameOver) {
    screen = <GameOverScreen  counter={counter} userNumber={userNumber} startNewGame={startNewGame} />
  }
  return (
    <>
    <StatusBar  StatusBarStyle='light-content'/>
    <LinearGradient style={styles.root} colors={['#3b201f', colors.golden]}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.root}
        imageStyle={styles.bgImg}
      >
        <StatusBar  style="light" backgroundColor='royalblue' />
        <SafeAreaView style={styles.root} >
          {screen}

        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,

    // alignItems: 'center',ff
    // justifyContent: 'center',
  },
  bgImg: {
    flex: 1,
    opacity: 0.15,
  },
})
