import { useState } from 'react';

import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';


export default function AdminLoginScreen({ navigation }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const handleLogin = () => {

    setErrorMessage('');

    if (!username.trim()) {
      setErrorMessage('Please enter your username.');
      return;
    }

    if (!password.trim()) {
      setErrorMessage('Please enter your password.');
      return;
    }


    setIsLoading(true);


    setTimeout(() => {

      /*
       * TEMPORARY FRONTEND LOGIN
       *
       * This will later be replaced with
       * the real APHENAS backend authentication.
       */

      const demoUsername = 'admin';
      const demoPassword = 'admin123';


      if (
        username.trim() === demoUsername &&
        password === demoPassword
      ) {

        setIsLoading(false);

        navigation.replace('DashboardOverview');

      } else {

        setIsLoading(false);

        setErrorMessage(
          'Invalid username or password.'
        );

      }

    }, 800);
  };


  return (
    <View style={styles.container}>


      {/* LEFT BRANDING PANEL */}

      <View style={styles.brandPanel}>

        <Image
          source={require('../../assets/images/aphenas-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.brandTextContainer}>

          <Text style={styles.brandTitle}>
            Intelligence Platform
          </Text>

          <Text style={styles.brandSubtitle}>
            Administrative Dashboard
          </Text>

        </View>

      </View>


      {/* LOGIN PANEL */}

      <View style={styles.loginPanel}>

        <View style={styles.loginCard}>


          <View style={styles.iconContainer}>

            <Ionicons
              name="shield-checkmark-outline"
              size={24}
              color="#4B5320"
            />

          </View>


          <Text style={styles.loginTitle}>
            Admin Login
          </Text>


          <Text style={styles.loginSubtitle}>
            Sign in to access the APHENAS dashboard
          </Text>


          {/* USERNAME */}

          <View style={styles.field}>

            <Text style={styles.label}>
              Username
            </Text>


            <View style={styles.inputContainer}>

              <Ionicons
                name="person-outline"
                size={17}
                color="#777777"
              />


              <TextInput
                value={username}
                onChangeText={(value) => {
                  setUsername(value);
                  setErrorMessage('');
                }}
                placeholder="Enter username"
                placeholderTextColor="#9A9A9A"
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
              />

            </View>

          </View>


          {/* PASSWORD */}

          <View style={styles.field}>

            <Text style={styles.label}>
              Password
            </Text>


            <View style={styles.inputContainer}>

              <Ionicons
                name="lock-closed-outline"
                size={17}
                color="#777777"
              />


              <TextInput
                value={password}
                onChangeText={(value) => {
                  setPassword(value);
                  setErrorMessage('');
                }}
                placeholder="Enter password"
                placeholderTextColor="#9A9A9A"
                secureTextEntry={!showPassword}
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
              />


              <Pressable
                style={styles.eyeButton}
                onPress={() =>
                  setShowPassword(!showPassword)
                }
              >

                <Ionicons
                  name={
                    showPassword
                      ? 'eye-off-outline'
                      : 'eye-outline'
                  }
                  size={18}
                  color="#777777"
                />

              </Pressable>

            </View>

          </View>


          {/* ERROR */}

          {errorMessage ? (

            <View style={styles.errorContainer}>

              <Ionicons
                name="alert-circle-outline"
                size={16}
                color="#B42318"
              />

              <Text style={styles.errorText}>
                {errorMessage}
              </Text>

            </View>

          ) : null}


          {/* LOGIN BUTTON */}

          <Pressable
            style={[
              styles.loginButton,
              isLoading && styles.loginButtonDisabled,
            ]}
            onPress={handleLogin}
            disabled={isLoading}
          >

            {isLoading ? (

              <Text style={styles.loginButtonText}>
                Signing in...
              </Text>

            ) : (

              <>
                <Text style={styles.loginButtonText}>
                  Sign In
                </Text>

                <Ionicons
                  name="arrow-forward-outline"
                  size={17}
                  color="#FFFFFF"
                />
              </>

            )}

          </Pressable>


          <Text style={styles.demoText}>
            Administrative access only
          </Text>

        </View>

      </View>

    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
  },


  /* ---------------------------------------------- */
  /* BRAND PANEL */
  /* ---------------------------------------------- */

  brandPanel: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 45,
  },

  logo: {
    width: '85%',
    maxWidth: 520,
    height: 150,
  },

  brandTextContainer: {
    alignItems: 'center',
    marginTop: 25,
  },

  brandTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },

  brandSubtitle: {
    marginTop: 7,
    fontSize: 11,
    fontWeight: '500',
    color: '#999999',
    letterSpacing: 0.3,
  },


  /* ---------------------------------------------- */
  /* LOGIN PANEL */
  /* ---------------------------------------------- */

  loginPanel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },

  loginCard: {
    width: '100%',
    maxWidth: 430,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    padding: 35,
  },


  /* ---------------------------------------------- */
  /* LOGIN HEADER */
  /* ---------------------------------------------- */

  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 10,
    backgroundColor: '#EEF1E6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },

  loginTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#000000',
  },

  loginSubtitle: {
    marginTop: 7,
    marginBottom: 28,
    fontSize: 11,
    lineHeight: 17,
    fontWeight: '500',
    color: '#777777',
  },


  /* ---------------------------------------------- */
  /* FORM */
  /* ---------------------------------------------- */

  field: {
    width: '100%',
    marginBottom: 18,
  },

  label: {
    fontSize: 11,
    fontWeight: '700',
    color: '#222222',
    marginBottom: 8,
  },

  inputContainer: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: '#D9DDE3',
    borderRadius: 8,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 13,
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    flex: 1,
    height: '100%',
    marginLeft: 10,
    fontSize: 12,
    fontWeight: '500',
    color: '#111111',
  },

  eyeButton: {
    width: 35,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },


  /* ---------------------------------------------- */
  /* ERROR */
  /* ---------------------------------------------- */

  errorContainer: {
    minHeight: 40,
    borderWidth: 1,
    borderColor: '#F0C7C3',
    borderRadius: 7,
    backgroundColor: '#FFF5F4',
    paddingHorizontal: 11,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    gap: 8,
  },

  errorText: {
    flex: 1,
    fontSize: 10,
    fontWeight: '600',
    color: '#B42318',
  },


  /* ---------------------------------------------- */
  /* LOGIN BUTTON */
  /* ---------------------------------------------- */

  loginButton: {
    width: '100%',
    height: 46,
    borderRadius: 8,
    backgroundColor: '#4B5320',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
  },

  loginButtonDisabled: {
    opacity: 0.7,
  },

  loginButtonText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FFFFFF',
  },


  /* ---------------------------------------------- */
  /* FOOTER */
  /* ---------------------------------------------- */

  demoText: {
    marginTop: 22,
    textAlign: 'center',
    fontSize: 9,
    fontWeight: '500',
    color: '#999999',
  },

});