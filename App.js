import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
} from 'react-native';

import pokeball from './src/image/icons/pokeball.png'
// import pikachu from './src/image/pokemons/Pikachu.gif'

const App: () => React$Node = () => {
  return (
    <>
    <View style={styles.home}>
      <Image style={styles.icon} source={pokeball} />
      <Text style={styles.text}>
        Pokedex SENAKARAI
      </Text>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center",
    backgroundColor: "#F97052"
  },
  text: {
    color: "white",
    padding: 50,
    fontSize: 18,
    textTransform: "uppercase",
  },
  icon: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    resizeMode: 'contain',
  }
});

export default App;
