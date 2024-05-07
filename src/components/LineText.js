import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'

export default function LineText({ style, text, ...props }) {
    return (
        <View style={[styles.textContainer, style]}>
            <View style={styles.line} />
            <Text style={styles.text}>{text}</Text>
            <View style={styles.line} />
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: theme.colors.placeholder,
        marginHorizontal: 5, // Adjust the margin as needed
    },
    text: {
        marginHorizontal: 13, // Adjust the margin as needed
        fontSize: 12, 
    },
})
