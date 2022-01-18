import React, { useEffect } from 'react'
import { StyleSheet, SafeAreaView, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Colors, Images } from '@constants/index'
import { Image } from 'react-native'

const LoginScreen = () => {

    useEffect(() => {
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={Colors.gradientBackground} style={styles.gradientContainer}>
                <View style={styles.imageViewContainer}>
                    <Image
                        source={Images.codeDeLaRoute}
                        resizeMode='cover'
                        style={styles.image}
                    />
                </View>
            </LinearGradient>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
    },
    gradientContainer: {
        height: "100%",
        width: '100%',
        alignItems: 'center',
    },
    imageViewContainer: {
        height: 200,
        width: 200,
        borderRadius: 100,
        overflow: "hidden",
        marginTop: 40
    },
    image: {
        width: "100%",
        height: "100%"
    }
})

export default LoginScreen
