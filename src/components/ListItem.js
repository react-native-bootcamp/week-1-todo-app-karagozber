import React, { useState } from 'react'
import {TouchableOpacity,Text,View,StyleSheet} from 'react-native'

const ListItem=props=>{
    const [status,setStatus]=useState(false)
    const styles=status ? doneStyles : undoneStyles

    statusItem=()=>{
        setStatus(!status)
    }
    return(
        <TouchableOpacity
            style={styles.container}
            onPress={statusItem}>
                <View style={styles.dot}></View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.textStyle}>{props.data.myEntry}</Text>
                    {
                        status && <Text style={styles.textStyle, {fontWeight: 'bold', fontSize: 16}}>Yapıldı!</Text>
                    }
                </View>
        </TouchableOpacity>
    )
}

const doneStyles=StyleSheet.create({
    container:{
        backgroundColor:'#6ab04c',
        margin:5,
        padding:10,
        borderRadius:10,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    textStyle:{
        fontSize:15,
        marginLeft:10,
        textDecorationLine: 'line-through',
    },
    dot:{
        width:10,
        height:10,
        backgroundColor:'black',
        borderRadius:10,        
    }
})

const undoneStyles=StyleSheet.create({
    container:{
        backgroundColor:'#eb4d4b',
        margin:5,
        padding:10,
        borderRadius:10,
        flexDirection:'row',
        alignItems: 'center'        
    },
    textStyle:{
        fontSize:15,
        marginLeft:10
    },
    dot:{
        width:10,
        height:10,
        backgroundColor:'black',
        borderRadius:10,
        
    }
})

export {ListItem}