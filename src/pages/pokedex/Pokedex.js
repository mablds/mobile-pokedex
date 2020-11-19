import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native'

import pokeList from '../../public/pokeList.json'

const Pokedex = () => {
    return (
        <SafeAreaView style={styles.home}>
            <Text>Pokedex</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    home: {
      flex: 1, 
      justifyContent: "center", 
      alignItems: "center",
      backgroundColor: "#F97052",
    },
})

export default Pokedex