import LoginScreen from '@/screens/Authen/Login/LoginScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

export type AuthStackParamList = {
  Login: undefined
}

const Stack = createNativeStackNavigator<AuthStackParamList>()

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
)

export default AuthStack
