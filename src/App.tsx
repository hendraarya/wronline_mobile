import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ImageBackground, Text, Image, View } from 'react-native';
import tailwind from 'twrnc'; //library tailwindcss for react-native
import { AuthContext } from './context/AuthContext';
import Heading from './components/Heading';
import AuthStackNavigator from './navigators/AuthStackNavigator';
import Splashscreen from './pages/Splashscreen';
import LoginScreen from './pages/LoginScreen';
import RequestWrScreen from './pages/RequestWrScreen';
import MyComponent from './pages/fabstyle';
import { InputWrScreen } from './pages/InputWrScreen';
import MainContainer from './components/MainContainer';
import BarcodeScanner from './components/QRcodescanner';


const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    // <AuthContext.Provider value={''}>
    //   <NavigationContainer>
    //     <RootStack.Navigator screenOptions={{ headerShown: false }}>
    //       <RootStack.Screen name="AuthStack" component={AuthStackNavigator} />
    //     </RootStack.Navigator>
    //   </NavigationContainer>
    // </AuthContext.Provider>
    // <View >

    //   <Heading> Welcome NMAX Mobile</Heading>

    // </View>
    // <Splashscreen />
    // <LoginScreen />
    // <RequestWrScreen />
    // <MyComponent />
    <InputWrScreen />
    // <BarcodeScanner />


  );
};

