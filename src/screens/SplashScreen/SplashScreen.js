import { useEffect } from 'react';

import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default function SplashScreen({ navigation }) {

  useEffect(() => {

    const timer = setTimeout(() => {
      navigation.replace('AdminLogin');
    }, 2500);

    return () => clearTimeout(timer);

  }, [navigation]);


  return (
    <View style={styles.container}>

      <View style={styles.logoContainer}>

        <Image
          source={require('../../assets/images/aphenas-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

      </View>


      <View style={styles.loadingContainer}>

        <ActivityIndicator
          size="small"
          color="#FFFFFF"
        />

        <Text style={styles.loadingText}>
          Loading...
        </Text>

      </View>


      <Text style={styles.footerText}>
        APHENAS Intelligence Platform
      </Text>

    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoContainer: {
    width: '70%',
    maxWidth: 520,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: '100%',
    height: 180,
  },

  loadingContainer: {
    marginTop: 35,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  loadingText: {
    fontSize: 11,
    fontWeight: '500',
    color: '#FFFFFF',
    letterSpacing: 0.4,
  },

  footerText: {
    position: 'absolute',
    bottom: 30,
    fontSize: 9,
    fontWeight: '500',
    color: '#777777',
    letterSpacing: 0.5,
  },

});