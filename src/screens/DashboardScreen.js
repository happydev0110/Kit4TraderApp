import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import AppBar from '../components/AppBar'
import ContentBox from '../components/ContentBox'
import Background from '../components/Background'
import Header from '../components/Header'
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
        <ContentBox>
            <Header>Dashbaord</Header>
            <Text>This is Dashboard Page.</Text>          
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