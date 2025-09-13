import type { RootStackParamList } from '@/navigation/types'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Paths } from '@/navigation/paths'
import { useTheme } from '@/theme'

import { Example, Startup } from '@/screens'

const Stack = createNativeStackNavigator<RootStackParamList>()

function AppNavigator() {
  const { navigationTheme, variant } = useTheme()

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navigationTheme}>
        
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default AppNavigator
