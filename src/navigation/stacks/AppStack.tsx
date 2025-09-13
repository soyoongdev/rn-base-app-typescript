import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

import { useTheme } from '@/theme'

import SearchScreen from '@/screens/Explore/ExploreScreen'
import ExploreScreen from '@/screens/Explore/ExploreScreen'
import HomeScreen from '@/screens/Home/HomeScreen'
import ProfileScreen from '@/screens/Profile/ProfileScreen'

import { Paths } from '../paths'
import { AppTabParamList } from '../types'

const Tab = createBottomTabNavigator<AppTabParamList>()

export default function AppStack() {
  const { variant } = useTheme()

  return (
    <Tab.Navigator key={variant} screenOptions={{ headerShown: false }}>
      <Tab.Screen component={HomeScreen} name={Paths.Home} />
      <Tab.Screen component={ExploreScreen} name={Paths.Explore} />
      <Tab.Screen component={SearchScreen} name={Paths.Search} />
      <Tab.Screen component={ProfileScreen} name={Paths.Profile} />
    </Tab.Navigator>
  )
}
