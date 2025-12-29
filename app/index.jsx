import { ImageBackground } from 'expo-image'
import { Link } from 'expo-router'
import React from 'react'
import {
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import backGround from '../assets/images/coffee.jpg'

const App = () => {
  return (
    <View style={styles.safe}>
      <ImageBackground
        source={backGround}
        style={styles.image}>

        <View style={styles.top}>
          <Text style={styles.text}>WeLcOmE bAcK!</Text>
        </View>

        <View style={styles.bottom}>
          <Link href="/menu" asChild>
            <Pressable style={styles.btn}>
              <Text style={styles.link}>MeNu</Text>
            </Pressable>
          </Link>

          <Link href="/contact" asChild>
            <Pressable style={styles.btn}>
              <Text style={styles.link}>CoNtAcT uS</Text>
            </Pressable>
          </Link>
        </View>

      </ImageBackground>
    </View>
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
    flexDirection: 'row',
    marginTop: 'auto',
    justifyContent: 'space-between',
    marginBottom: 50,
    alignItems: 'center',
  },
  btn: {
    width: '48%',
    height: 60,
    borderRadius: 20,
    backgroundColor: '#335227ff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  link: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
})
