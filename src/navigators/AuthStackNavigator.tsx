import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AuthStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();

export default function AuthStackNavigator() {
    return (
        <AuthStack.Navigator mode={'modal'} screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name={'LoginStack'}>
                {() => (
                    <LoginStack.Navigator mode={'card'} initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
                        <LoginStack.Screen name={'Login'} component={LoginUser} />

                    </LoginStack.Navigator>
                )}
            </AuthStack.Screen>
        </AuthStack.Navigator>
    );
}