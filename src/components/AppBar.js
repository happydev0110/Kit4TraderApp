import React, { useState } from 'react'
import { TouchableOpacity, Image, View, StyleSheet } from 'react-native'
import { Appbar, Menu } from 'react-native-paper'
// import { theme } from '../core/theme'

// const CustomMenuIcon = ({ onPress, source }) => (
//     <Image
//         source={source}
//         style={{ width: 36, height: 36 }}
//         onPress={onPress}
//     />
// );

const AppBar = ({ ...props }) => {
    const [visible, setVisible] = useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const { navigation } = props
    return (
        <>
            <Appbar.Header style={styles.headerContent}>
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                        <TouchableOpacity onPress={openMenu}>
                            <Image
                                source={require('../assets/images/appbar-menu.png')}
                                style={styles.menuButton}
                            />
                        </TouchableOpacity>
                    }
                >
                    <Menu.Item onPress={() => {navigation.replace('LoginScreen') }} title="Log In" />
                    <Menu.Item onPress={() => { navigation.replace('RegisterScreen')}} title="Sign Up" />
                    <Menu.Item onPress={() => { navigation.replace('ResetPasswordScreen')}} title="Reset Password" />
                </Menu>
                <View style={styles.headerTitle}>
                    <Image source={require('../assets/images/logo-black.png')} style={styles.image} />
                </View>
            </Appbar.Header>
        </>
    )
}

const styles = StyleSheet.create({
    headerContent: {
        height: 64,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    backButton: {
        alignItems: 'flex-start'
    },
    menuButton: {
        width: 36,
        height: 36
    },
    headerTitle: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: -45
    },
    image: {
        height: 20,
        width: 120
    },
})

export default AppBar;