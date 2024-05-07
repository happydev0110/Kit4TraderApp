import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'

export default function Header(props) {
  return <Text style={styles.header} {...props} />
}

const styles = StyleSheet.create({
  header: {
    fontFamily: 'Roboto',
    fontSize: 20,
    lineHeight: 23.44,
    color: theme.colors.text,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
})
