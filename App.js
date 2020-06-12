import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
} from 'react-native'

import {MyButton, MyInput, ListItem, Header} from './src/components'


const App = () => {
  const [entry,setEntry] = useState('')
  const [list, setList] = useState([]);

  const changeText = (text) => {
    setEntry(text)
  } 

  const addToList=()=>{
    let newList=[...list]
    newList.push({myEntry:entry})
    setList(newList)
  }

  return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
            <View style={{flex: 1}}>
              <Header />
              <FlatList
                keyExtractor={(item,index)=>index.toString()}
                data={list}
                renderItem={({item})=>
                <ListItem data={item}></ListItem>
              }>
              </FlatList>
              
              <MyInput textChange={changeText} myPlace="Bootcamp ödevi..." />
              <MyButton myTitle="Ekle" type="default" myPress={addToList}/>
      
            </View>
        </ScrollView>
      </SafeAreaView>
  )
}


export default App
