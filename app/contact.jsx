import React from 'react';
import { Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

const cafes = [
  { name: 'Jacks Cafe', phone: '+1234567890', location: 'Los Angeles' },
  { name: 'Brewed Awakenings', phone: '+1234567891', location: 'South East America' },
  { name: 'The Grind House', phone: '+1234567892', location: 'North America' },
  { name: 'The Coffee Bean', phone: '+1230987456', location: 'California' },
  { name: 'The Coffee Bean', phone: '+1234567893', location: 'California' },
  { name: 'The Coffee Bean', phone: '+1234567893', location: 'California' },
];

const dialNumber = async (phone) => {
  const url = `tel:${phone}`;
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    Toast.show({
      type: 'success',
      text1: `Opening dialer for ${phone}`,
      position: 'bottom',
      visibilityTime: 1500,
    });
    Linking.openURL(url);
  } else {
    Toast.show({
      type: 'error',
      text1: 'Dialer not supported',
      position: 'bottom',
      visibilityTime: 3000,
    });
  }
};



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
            <Pressable
              onPress={() => dialNumber(item.phone)}
            >
              <Text style={[styles.loc, { textDecorationLine: 'underline' }]}>
                📞 {item.phone}
              </Text>
            </Pressable>
            <Text style={styles.loc}>{item.location}</Text>

          </View>
        ))}

      </ScrollView>
        <Toast
        config={{
          success: (internalState) => (
            <View style={{width: '90%', height: 60, backgroundColor: 'rgba(75, 181, 67, 1)', justifyContent: 'center', paddingHorizontal: 16, borderRadius: 8}}>
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>{internalState.text1}</Text>
            </View>
          ),
          error: (internalState) => (
            <View style={{ width: '90%', height: 60, backgroundColor: '#bf2e2eff', justifyContent: 'center', paddingHorizontal: 16, borderRadius: 8 }}>
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>{internalState.text1}</Text>
            </View>
          ),
        }}
      />
    </SafeAreaView >
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
