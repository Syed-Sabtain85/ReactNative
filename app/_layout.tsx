import { Appearance } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { Colors } from '@/constants/theme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  return (
      <Stack screenOptions={{
        headerStyle: {
          backgroundColor: theme.headerBackground,
        },
        headerShadowVisible: false,
        headerTintColor: theme.text,
      }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="contact" options={{ headerShown: true, title: 'Contact Us' }} />
        <Stack.Screen name="menu" options={{ headerShown: false, title: 'Menu' }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      </Stack>
  );
}
