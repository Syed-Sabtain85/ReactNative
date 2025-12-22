import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

const explore = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Explore our Cafe!</Text>
      <Text style={styles.paragraph}>Find the best cafes around you.</Text>  
        </View>
  )
}

export default explore

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  text:{
    textAlign:'center',
    backgroundColor:'#ffffffa0',
    marginTop:50,
    padding:10,
    fontSize:20,
    fontWeight:'bold',
    color:'#333'
  },
  paragraph:{
    textAlign:'center',
    backgroundColor:'#ffffffa0',
    marginTop:20,
    padding:10,
    fontSize:16,
    color:'#666'
  }
})