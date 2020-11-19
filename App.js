import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './src/pages/home/Home'
import Pokedex from './src/pages/pokedex/Pokedex'
import Abilities from './src/pages/abilities/Abilities'
import Types from './src/pages/types/Types'
import { Header } from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Pokedex" component={Pokedex}/>
        <Stack.Screen name="Abilities" component={Abilities}/>
        <Stack.Screen name="Types" component={Types}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
