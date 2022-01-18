import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@screens/login';
import ScoreBoardScreen from '@screens/scoreBoard';
import HomeScreen from '@screens/home';

const Stack = createNativeStackNavigator();

function MainNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="ScoreBoard" component={ScoreBoardScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigation;