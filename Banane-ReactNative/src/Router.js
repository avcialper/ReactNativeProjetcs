import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './pages/auth/Login'
import Sign from './pages/auth/Sign'
import FlashMessage from 'react-native-flash-message'
import Messages from './pages/Messages'
import colors from './styles/colors'
import auth from '@react-native-firebase/auth'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Stack = createNativeStackNavigator()

export default () => {

  const [userSession, setUserSession] = React.useState();

  React.useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user)
    })
  }, [])

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='LoginPage' component={Login} />
        <Stack.Screen name='SignPage' component={Sign} />
      </Stack.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        {
          !userSession ?
            <Stack.Screen name='AuthStack' component={AuthStack} /> :
            <Stack.Screen
              name='MessagesPage'
              component={Messages}
              options={{
                headerShown: true,
                title: 'derdin ne?',
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: 'black' },
                headerTitleStyle: { color: colors.lightyellow },
                headerRight: () => (
                  <Icon
                    name='logout'
                    size={30}
                    color={colors.lightyellow}
                    onPress={() => auth().signOut()} />
                )
              }} />
        }
      </Stack.Navigator>
      <FlashMessage position='top' />
    </NavigationContainer>
  )
}