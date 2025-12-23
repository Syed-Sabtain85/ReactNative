import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

const cafes = [
  { name: 'Jacks Cafe', loc: '+1xxxxxxxxx, Los Angeles' },
  { name: 'Brewed Awakenings', loc: '+1xxxxxxxxx, South East America' },
  { name: 'The Grind House', loc: '+1xxxxxxxxx, North America' },
  { name: 'The Coffee Bean', loc: '+1xxxxxxxxx, California' },
]

const Explore = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        
        {/* Header */}
        <Text style={styles.text}>Explore Cafes ☕</Text>
        <Text style={styles.paragraph}>
          Find our best cafes around you
        </Text>

        <View style={styles.divider} />
        {cafes.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.loc}>{item.loc}</Text>
          </View>
        ))}

      </ScrollView>
    </SafeAreaView>
  )
}

export default Explore


const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#543c3cf6',
  },
  container: {
    paddingBottom: 20,
  },
  text: {
    textAlign: 'center',
    paddingTop: 30,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  paragraph: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 16,
    color: '#d8ceceff',
  },
  divider: {
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    marginHorizontal: 16,
    marginBottom: 12,
    padding: 12,
    borderRadius: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  loc: {
    marginTop: 4,
    fontSize: 14,
    color: '#d8ceceff',
  },
})
