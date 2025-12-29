import React from 'react';
import {
  Appearance,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { MENU_IMAGES } from '@/constants/menuImages';
import { MENU_ITEMS } from '@/constants/menuItems';
import { Colors } from '@/constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

const MenuItems = () => {
  const colorScheme = Appearance.getColorScheme()
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light
  const styles = createStyles(theme)
  const footer = <Text style={{ fontSize: 18, textAlign: 'center', marginHorizontal: 'auto' }}>Thank you for visiting!</Text>
  const emptyList = <Text style={{ fontSize: 18, textAlign: 'center', marginHorizontal: 'auto' }}>No items available</Text>
  return (

    <SafeAreaView style={styles.container}>
      <FlatList
        data={MENU_ITEMS}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <Text style={{ fontSize: 24, marginBottom: 20 }}>WhAt Do YoU lIkE tO DrInK?</Text>
        )}

        ListFooterComponent={footer}
        ItemSeparatorComponent={() => (
          <View style={styles.separator} />
        )}
        ListEmptyComponent={emptyList}

        renderItem={({ item }) => (
          <View style={styles.itemRow}>
            <View style={styles.item}>
              <Text style={styles.name}>
                {item.name}
              </Text>
              <Text style={styles.price}>
                Price: {item.price} USD
              </Text>
            </View>
            <Image
              source={MENU_IMAGES[item.id - 1]}
              style={styles.image}
            />
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default MenuItems

function createStyles(theme) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      paddingLeft: 20,
      paddingRight: 20
    },
    item: {
      flex: 1,
      padding: 10,
    },
    name: {
      fontSize: 18,
      color: theme.text,
      fontWeight: 'bold',
    },
    price: {
      fontSize: 16,
      color: theme.text,
      marginTop: 4,
    },
    separator: {
      height: 1,
      backgroundColor: theme.text,
      marginBottom: 10
    },
    itemRow: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.card,
      padding: 12,
      marginBottom: 12,
      shadowColor: '#000',
      borderRadius: 16,
      borderColor: '#ddd',
      borderWidth: 1,
    },
    image: {
      width: 90,
      height: 90,
      borderRadius: 12,
      }

  })
}
