import { Alert, PermissionsAndroid, Platform } from 'react-native';

export async function hasLocationPermission() {
  if (Platform.OS === 'android' && Platform.Version < 23) {
    return true;
  }

  const hasPermission = await PermissionsAndroid.check(
    'android.permission.ACCESS_FINE_LOCATION'
  );

  if (hasPermission) return true;

  const status = await PermissionsAndroid.request(
    'android.permission.ACCESS_FINE_LOCATION'
  );

  if (status === 'granted') {
    return true;
  } else if (status === 'denied') {
    Alert.alert(
      'Ops!',
      'Precisamos da sua permissão para acessar a sua localização!',
      [
        {
          style: 'cancel',
          text: 'Cancelar',
          onPress: hasLocationPermission,
        },
      ]
    );
  } else {
    Alert.alert(
      'Ops!',
      'Precisamos da sua permissão para acessar a sua localização!',
      [
        {
          style: 'cancel',
          text: 'Cancelar',
          onPress: hasLocationPermission,
        },
      ]
    );
  }

  return false;
}
