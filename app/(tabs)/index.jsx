import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { ImageBackground } from 'expo-image'
import backGround from '../../assets/images/coffee.jpg'

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source = {backGround}
        style={styles.image}
        blurRadius={1}
        >
      <Text style={styles.text}>Welcome Back</Text>
      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
  },
  image:{
    width:'100%',
    height:'100%',
    resizeMode:'cover',
    flex:1,
    justifyContent:'center',
  },
  text:{
    textAlign:'center',
    backgroundColor:'#ffffffa0',
    marginTop:50,
    padding:10,
    fontSize:20,
    fontWeight:'bold',
    color:'#333'
  }
})