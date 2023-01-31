import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Task = (props) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemTex}>{props.text}</Text>
    </View>
  )
}

export default Task

const styles = StyleSheet.create({
    item:{
        padding:10,
        
    },
    itemTex:{
        fontSize:20,
        color:'#ffffff',
    }
})