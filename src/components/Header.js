import React from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'

const Header = () => {
  return(
      <View style={styles.header}>
        <Text style={styles.textStyle}>Yapılacaklar Listesi</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#546e7a',
    width: Dimensions.get('window').width,
    padding: 10,
    flexDirection: 'column'
  },
  textStyle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center'
  }
})

export {Header}