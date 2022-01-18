import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Colors } from '@constants/index'

const LoginScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={Colors.gradientBackground} style={styles.gradientContainer}>
            </LinearGradient>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%"
    },
    gradientContainer: {
        height: "100%"
    }
})

export default LoginScreen
