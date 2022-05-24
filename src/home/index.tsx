import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Geolocation, { GeoCoordinates } from 'react-native-geolocation-service';

import { hasLocationPermission } from '../utils';

import { styles } from './styles';

export function Home() {
  const [cords, setCords] = useState<GeoCoordinates | null>(null);

  async function getLocation() {
    const hasPermission = await hasLocationPermission();

    if (!hasPermission) return;

    Geolocation.getCurrentPosition(
      position => setCords(position.coords),
      error => console.error(error.code, error.message),
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      }
    );
  }

  return (
    <View style={styles.container}>
      <Text>Clique para ativar a geolocalização!</Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.4}
        onPress={getLocation}
      >
        <Text style={styles.title}>Ativar</Text>
      </TouchableOpacity>

      <Text>{cords && JSON.stringify(cords, undefined, '\n')}</Text>
    </View>
  );
}
