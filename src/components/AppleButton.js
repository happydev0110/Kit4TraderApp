import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { theme } from '../core/theme'
import { View } from 'react-native-web'

export default function GoogleButton({ style, ...props }) {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        style
      ]}
      {...props}
    >
      <Image
        source={require('../assets/images/a.png')}
        style={styles.image}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: theme.colors.placeholder,
  },
  image: {
    width: 34,
    height: 40,
    margin: 10,
    marginHorizontal: 12
  },
})