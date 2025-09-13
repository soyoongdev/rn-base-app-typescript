import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { useTheme } from '@/theme'

import LoginScreen from '@/screens/Authen/Login/LoginScreen'
import RegisterScreen from '@/screens/Authen/Register/RegisterScreen'

import { AuthPaths } from '../paths'
import { AuthStackParamList } from '../types'

const Stack = createNativeStackNavigator<AuthStackParamList>()

export default function AuthStack() {
  const { variant } = useTheme()

  return (
    <Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
      <Stack.Screen component={LoginScreen} name={AuthPaths.Login} />
      <Stack.Screen component={RegisterScreen} name={AuthPaths.Register} />
    </Stack.Navigator>
  )
}
