import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export function App() {
  return (
    <View style={styles.container}>
      <Text>Hiiiiiii</Text>
    </View>
  );
}
