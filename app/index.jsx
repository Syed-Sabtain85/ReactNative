import { ImageBackground } from 'expo-image'
import { Link } from 'expo-router'
import React from 'react'
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  SafeAreaView
} from 'react-native'
import backGround from '../assets/images/coffee.jpg'

const App = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <ImageBackground
        source={backGround}
        style={styles.image}
        blurRadius={1}
      >
        <View style={styles.top}>
          <Text style={styles.text}>Welcome Back!</Text>
        </View>

        {/* Bottom Section */}
        <View style={styles.bottom}>
          <Link href="/contact" asChild>
            <Pressable style={styles.btn}>
              <Text style={styles.link}>Go to explore</Text>
            </Pressable>
          </Link>
        </View>

      </ImageBackground>
    </SafeAreaView>
  )
}

export default App
const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  top: {
    marginTop: 30,
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2d2d2d',
  },
  bottom: {
     marginTop: 'auto',
    marginBottom: 50,
    alignItems: 'center',
  },
  btn: {
    width: 220,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#260e0eff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
})
