import React, { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, View, Text, TextInput } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Colors, Images } from '@constants/index'
import { Image } from 'react-native'
import TextStyle from '@styles/text'
import { Button } from 'react-native-elements'
import ButtonStyle from '@styles/button'
import MarginStyle from '@styles/margin'
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
    const [username, setUsername] = useState('')

    useEffect(() => {

    }, []);

    const onConnectionPress = async () => {
        try {
            await AsyncStorage.setItem('@username', username)
        } catch (e) {
            console.log(e)
        }
    }

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
                <View style={styles.inputUserNameContainer}>
                    <Text style={TextStyle.title_medium}>Nom d'utilisateur</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(u) => setUsername(u)}
                        value={username}
                    />
                </View>
                <View style={MarginStyle.marginTop20}>
                    <Button
                        title={"Connexion"}
                        raised={true}
                        buttonStyle={ButtonStyle.validation}
                        titleStyle={TextStyle.title_little}
                        onPress={onConnectionPress}
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
    },
    inputUserNameContainer: {
        marginTop: 30,
        alignItems: 'center'
    },
    textInput: {
        backgroundColor: "white",
        borderRadius: 5,
        fontSize: 20,
        width: 300,
        marginTop: 15,
        height: 40,
        padding: 10
    }
})

export default LoginScreen
