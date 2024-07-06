import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './screens/LandingScreen';
import { useFonts } from 'expo-font';
import LoadingScreen from './screens/LoadingScreen';
import OtpScreen from './screens/OtpScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import VerificationCodeScreen from './screens/VerificationCodeScreen';
import SetPasswordScreen from './screens/SetPasswordScreen';
import UploadProfilePictureScreen from './screens/UploadProfilePictureScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat/Montserrat-Regular.ttf'),
    MontserratBold: require('./assets/fonts/Montserrat/Montserrat-Bold.ttf'),
  });

  
  return (
    <NavigationContainer>
      {!fontsLoaded ? (<Stack.Screen name="LandingScreen" component={LoadingScreen} options={{ headerShown: false }}/>) : (
      <Stack.Navigator initialRouteName="LandingScreen">
      <Stack.Screen name="LandingScreen" component={LandingScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="otp" component={OtpScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="VerificationCode" component={VerificationCodeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="SetPassword" component={SetPasswordScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="UploadProfilePicture" component={UploadProfilePictureScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="LoadingScreen" component={LoadingScreen}/>


      </Stack.Navigator>)}
    </NavigationContainer>
  );
}