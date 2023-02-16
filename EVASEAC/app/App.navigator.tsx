import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const { Navigator, Screen } = createNativeStackNavigator();

import HomeScreen from "./screens/HomeScreen";
import SignUpScreen from "./screens/SignUpScreen";
import LoginScreen from "./screens/LoginScreen";
import SplashScreen from "./screens/SplashScreen";

const AppNavigator = () => (
    <NavigationContainer>
        <Navigator
            initialRouteName="splash"
        >
            <Screen name="splash" component={SplashScreen} options={{ headerShown : false }}></Screen>
            <Screen name="login" component={LoginScreen} options={{ headerShown : false }}></Screen>
            <Screen name="home" component={HomeScreen}></Screen>
            <Screen name="signup" component={SignUpScreen} options={{ title: 'Registro' }}></Screen>
        </Navigator>
    </NavigationContainer>
);

export default AppNavigator;
