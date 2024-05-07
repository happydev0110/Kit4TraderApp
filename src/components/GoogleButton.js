import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { theme } from '../core/theme'

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
        source={require('../assets/images/g.png')}
        style={styles.image} // Adjust the width and height according to your image size
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
    width: 40,
    height: 40,
    margin: 10
  },
})