import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import AppBar from '../components/AppBar'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import LineText from "../components/LineText";
import GoogleButton from '../components/GoogleButton'
import AppleButton from '../components/AppleButton'

import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { authConfig } from "../../firebaseConfig.js";
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = async () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    try {
      const result = await signInWithEmailAndPassword(authConfig, email.value, password.value);
      navigation.navigate('DashboardScreen');
    } catch (error) {
      console.log(error, "error")
    }
  }

  return (
    <>
      <AppBar
        navigation={navigation}
      />
      <Background>
        <View style={styles.mainContent}>
          <Header>Login</Header>
          <TextInput
            label="Email"
            returnKeyType="next"
            value={email.value}
            onChangeText={(text) => setEmail({ value: text, error: '' })}
            error={!!email.error}
            errorText={email.error}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
          />
          <TextInput
            label="Password"
            returnKeyType="done"
            value={password.value}
            onChangeText={(text) => setPassword({ value: text, error: '' })}
            error={!!password.error}
            errorText={password.error}
            secureTextEntry
          />
          <View style={styles.forgotPassword}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ResetPasswordScreen')}
            >
              <Text style={styles.link}>Forgot your password ?</Text>
            </TouchableOpacity>
          </View>
          <Button mode="contained" onPress={onLoginPressed}>
            Log in
          </Button>
          <LineText
            text="or login with"
            style={styles.lineText}
          />
          <View style={[styles.row, { marginTop: 20 }]}>
            <GoogleButton
              onPress={() => console.log('Google login')}
            />
            <AppleButton
              onPress={() => console.log('Apple login')}
              style={{ marginLeft: 20 }}
            />
          </View>
        </View>
      </Background>
    </>
  )
}

const styles = StyleSheet.create({
  mainContent: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginTop: 10,
    marginBottom: 20,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  lineText: {
    marginTop: 15
  }
})