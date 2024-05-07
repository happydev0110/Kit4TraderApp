import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { Text } from 'react-native-paper'
import AppBar from '../components/AppBar'
import Background from '../components/Background'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import CheckBox from '../components/CheckBox'

import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import GoogleButton from '../components/GoogleButton'
import AppleButton from '../components/AppleButton'
import LineText from '../components/LineText'

import { createUserWithEmailAndPassword } from "firebase/auth";
import { authConfig } from "../../firebaseConfig.js";

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const onSignUpPressed = async () => {
    const nameError = nameValidator(name.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }

    try {
      const res = await createUserWithEmailAndPassword(authConfig, email.value, password.value);
      Alert.alert('User registered successfully:', email.value)
      navigation.navigate('LoginScreen')
    } catch (error) {
      console.log(error, '1')
    }
  }

  return (
    <>
      <AppBar
        navigation={navigation}
      />
      <Background>
        <View style={styles.mainContent}>
          <Header>SignUp</Header>
          <TextInput
            label="Name"
            returnKeyType="next"
            value={name.value}
            onChangeText={(text) => setName({ value: text, error: '' })}
            error={!!name.error}
            errorText={name.error}
          />
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
          <View style={styles.checkContent}>
            <CheckBox
              status={isChecked ? 'checked' : 'unchecked'}
              onPress={() => toggleCheckbox(!isChecked)}
            />
            <Text style={{ marginTop: 8 }}>I agree to privacy policy and terms of conditions</Text>
          </View>
          <Button
            mode="contained"
            onPress={onSignUpPressed}
            style={{ marginTop: 24 }}
          >
            SignUp
          </Button>
          <View style={styles.row}>
            <Text>Already have account?</Text>
            <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
              <Text style={styles.link}>Log in</Text>
            </TouchableOpacity>
          </View>
          <LineText
            text='or'
          />
          <View style={styles.row}>
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
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16
  },
  row: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  checkContent: {
    flexDirection: 'row',
    marginTop: 10
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})