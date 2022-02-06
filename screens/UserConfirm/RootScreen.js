import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IntroScreen from './IntroScreen';
import SignInScreen from './SignInScreen'; 

const Stack = createNativeStackNavigator();

const RootScreen = ({navigation}) => (
    <Stack.Navigator>
        <Stack.Screen name="IntroScreen" component={IntroScreen} options={{headerShown: false}}/>
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{headerShown: false}}/> 
    </Stack.Navigator>
);

export default RootScreen; 