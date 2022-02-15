import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@screens/login';
import ScoreBoardScreen from '@screens/score_board';
import HomeScreen from '@screens/home';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SpashScreen from '@screens/splash_screen';

const MainStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

const HomeNavigation = () => {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
            <HomeStack.Screen name="ScoreBoardScreen" component={ScoreBoardScreen} />
        </HomeStack.Navigator>
    )
}

const HomeNavigationWithLogin = () => {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <MainStack.Screen name="LoginScreen" component={LoginScreen} />
            <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
            <HomeStack.Screen name="ScoreBoardScreen" component={ScoreBoardScreen} />
        </HomeStack.Navigator>
    )
}

const MainNavigation = () => {
    const [username, setUsername] = useState<any>(null)
    const [isLoading, setIsLoading] = useState<any>(true)

    useEffect(() => {
        const bootstrapAsync = async () => {
            try {
                let user = await AsyncStorage.getItem('@username')
                setUsername(user)
                setIsLoading(false)
            } catch (e) {
                console.log(e)
            }
        };

        bootstrapAsync();
    }, []);

    return (
        <NavigationContainer >
            <MainStack.Navigator screenOptions={{ headerShown: false }}>
                {isLoading ? (
                    <MainStack.Screen name="SplashScreen" component={SpashScreen} />
                ) : username == null ? (
                    <MainStack.Screen name="Login" component={HomeNavigationWithLogin} />
                ) : (
                    <MainStack.Screen name="Home" component={HomeNavigation} />
                )}
            </MainStack.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigation;