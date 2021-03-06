import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './src/pages/home/Home'
import Pokedex from './src/pages/pokedex/Pokedex'
import DetailsPokemon from './src/pages/detailsPoke/DetailsPoke'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Pokedex" component={Pokedex}/>
        <Stack.Screen name="DetailsPokemon" component={DetailsPokemon}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
