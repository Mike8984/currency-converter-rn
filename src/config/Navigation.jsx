import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import HomeScreen from '../screens/HomeScreen'
import OptionScreen from '../screens/OptionsScreen'
import CurrencyListScreen from '../screens/CurrencyListScreen'
import colors from '../constants/colors'

const MainStack = createStackNavigator()
const MainStackScreen = () => (
  <MainStack.Navigator initialRouteName="Home">
    <MainStack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <MainStack.Screen name="Options" component={OptionScreen} />
  </MainStack.Navigator>
)

const ModalStack = createStackNavigator()
const ModalStackScreen = () => (
  <ModalStack.Navigator screenOptions={{ presentation: 'modal' }}>
    <ModalStack.Screen
      name="Main"
      component={MainStackScreen}
      options={{ headerShown: false }}
    />
    <ModalStack.Screen
      name="Currency List"
      component={CurrencyListScreen}
      options={({ navigation, route }) => ({
        title: route.params && route.params.title,
        headerLeft: null,
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.pop()}
            style={{ paddingHorizontal: 10 }}
          >
            <Entypo name="cross" size={30} color={colors.blue} />
          </TouchableOpacity>
        ),
      })}
    />
  </ModalStack.Navigator>
)

export default () => (
  <NavigationContainer>
    {/* <MainStackScreen /> */}
    <ModalStackScreen />
  </NavigationContainer>
)
