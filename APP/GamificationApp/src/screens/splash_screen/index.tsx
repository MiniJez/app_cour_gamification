import { Text, SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '@constants/colors';
import TextStyle from '@styles/text';

const SpashScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={Colors.gradientBackground} style={styles.gradientContainer}>
                <Text style={TextStyle.title_big}>Loading</Text>
                <ActivityIndicator size={80}/>
            </LinearGradient>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
    },
    gradientContainer: {
        height: "100%",
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default SpashScreen;
