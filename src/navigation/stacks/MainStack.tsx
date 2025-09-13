import HomeScreen from '@/screens/Home/HomeScreen'
import { useTheme } from '@/theme'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Paths } from '../paths'
import { RootStackParamList } from '../types'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function MainStack() {
  const { navigationTheme, variant } = useTheme()

  return (
    <Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
      <Stack.Screen component={HomeScreen} name={Paths.Home} />
    </Stack.Navigator>
  )
}
