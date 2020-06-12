import React, { useState } from 'react'
import {View, StyleSheet, TextInput} from 'react-native'

const MyInput = props => {
const [myText, setText] = useState('') 
 
  return (
    <View style={styles.inputContainer}>
      <TextInput
        keyboardType={props.type}
        autoCapitalize="none"
        placeholder={props.myPlace}
        onChangeText={(myText) => setText(myText)}
        defaultValue={myText}
        onChangeText={props.textChange}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#eceff1',
    padding: 10,
    margin: 20,
    borderRadius: 10,
  }
})

export {MyInput}
