import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import AppBar from '../components/AppBar'
import ContentBox from '../components/ContentBox'
import Background from '../components/Background'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { emailValidator } from '../helpers/emailValidator'

import { theme } from '../core/theme'

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value)
    if (emailError) {
      setEmail({ ...email, error: emailError })
      return
    }
    navigation.navigate('LoginScreen')
  }

  return (
    <>
      <AppBar
        navigation={navigation}
      />
      <Background>
        {/* <BackButton goBack={navigation.goBack} /> */}
        <ContentBox>
          <Header>Forgot password</Header>
          <Text>
            Please fill in your email address below and we'll send you a link to reset your password.
          </Text>
          <TextInput
            label="Email"
            returnKeyType="done"
            value={email.value}
            onChangeText={(text) => setEmail({ value: text, error: '' })}
            error={!!email.error}
            errorText={email.error}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
          />
          <Button
            mode="contained"
            onPress={sendResetPasswordEmail}
            style={{ marginTop: 16 }}
          >
            Reset Password
          </Button>

          <View style={styles.linkContent}>
            <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
              <Text style={styles.link}>Back to login page</Text>
            </TouchableOpacity>
          </View>
        </ContentBox>
      </Background>
    </>
  )
}


const styles = StyleSheet.create({
  linkContent: {
    paddingTop: 10
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})