import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Checkbox } from 'react-native-paper'
import { theme } from '../core/theme'

export default function CheckBox({ ...props }) {
  return (
      <Checkbox
        style={styles.checkBox}
        color={theme.colors.primary}
        {...props}
      />
  )
}

const styles = StyleSheet.create({
  checkBox: {
    backgroundColor: theme.colors.surface,
    borderRadius: 10,
  }
})
