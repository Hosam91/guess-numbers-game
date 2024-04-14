import React, { useState } from 'react'
import {
  Alert,
  StyleSheet,
  TextInput,
  View,
  Text,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native'
import PrimarryButton from '../components/ui/PrimarryButton'
import colors from '../assets/constants/colors'
import ControlContainer from '../components/ui/ControlContainer'

export default function StartGameScreen(props) {
  const { width, height } = useWindowDimensions()
  console.log(height)
  const marginTopDistance = height < 450 ? '5%' : '15%'
  const { onPickNumber } = props
  const [enterdValue, setEnterdValue] = useState('')
  const onChangeInput = (input) => {
    setEnterdValue(input)
  }
  const resetInput = () => {
    setEnterdValue('')
  }
  const confirmHandler = () => {
    const enterdNumber = Number(enterdValue)

    if (isNaN(enterdNumber) || enterdNumber < 0 || enterdNumber > 100) {
      Alert.alert('Not Valid Number', 'Number Must be Between 1 and 99.', [
        { text: 'Okay', style: 'destructive', onPress: resetInput },
      ])

      return
    }
    if (!enterdNumber) {
      Alert.alert('Enter Number', 'Number Must be Between 1 and 99.', [
        { text: 'Okay', style: 'destructive', onPress: resetInput },
      ])
      return
    }

    onPickNumber(enterdNumber)
  }

  const resetHandler = () => {
    resetInput()
  }
  return (
    <>
      <ScrollView style={styles.rootContainer}>
        <KeyboardAvoidingView style={styles.rootContainer} behavior="position">
          <View
            style={[styles.rootContainer, { marginTop: marginTopDistance }]}
          >
            <View style={styles.screnTitleContainer}>
              <Text style={styles.screnTitle}>Guess My Number</Text>
            </View>
            <ControlContainer>
              <Text style={styles.stepTitle}>Enter Number</Text>
              <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                onChangeText={onChangeInput}
                value={enterdValue}
              />
              <View style={styles.btnsContainer}>
                <PrimarryButton pressHanler={resetHandler}>
                  Reset
                </PrimarryButton>
                <PrimarryButton pressHanler={confirmHandler}>
                  Confirm
                </PrimarryButton>
              </View>
            </ControlContainer>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  screnTitleContainer: {
    alignItems: 'center',
    justifyContent: '',
  },
  screnTitle: {
    color: '#fff',
    fontSize: 25,
    borderWidth: 2,
    borderColor: colors.golden,
    padding: 15,
  },
  numberInput: {
    height: 50,
    fontSize: 35,
    borderBottomColor: colors.golden,
    borderBottomWidth: 2,
    color: colors.golden,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 60,
    borderRadius: 5,
    // width:'50%'
  },
  btnsContainer: {
    flexDirection: 'row',
    gap: 8,
    marginVertical: 16,
  },
  stepTitle: {
    color: colors.golden,
    fontSize: 25,
  },
})
