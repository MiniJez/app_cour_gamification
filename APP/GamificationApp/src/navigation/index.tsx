import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, LoginScreen, ScoreBoardScreen } from 'screens';

const Stack = createNativeStackNavigator();

function MainNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="ScoreBoard" component={ScoreBoardScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigation;