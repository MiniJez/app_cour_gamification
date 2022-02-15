import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, View, Text, TextInput } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Colors, Images } from '@constants/index'
import { Image } from 'react-native'
import TextStyle from '@styles/text'
import { Button } from 'react-native-elements'
import ButtonStyle from '@styles/button'
import MarginStyle from '@styles/margin'
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('')
    const [error, setError] = useState(false)

    const onConnectionPress = async () => {
        try {
            let user = username.toLowerCase().trim()
            if(user == "philippe" || user == "lou" || user == "romain" || user == "edouard" || user == "marc-antoine" || user == "adrien") {
                await AsyncStorage.setItem('@username', username)
                navigation.navigate('HomeScreen')
            } else {
                setError(true)
            }
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
                    <Text style={TextStyle.title_medium}>Nom d'utilisateur (prénom)</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(u) => setUsername(u)}
                        value={username}
                    />
                    {error ? <Text style={{color: 'white'}}>Aucun utilisateur de ce nom n'a été trouvé</Text> : null}
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
