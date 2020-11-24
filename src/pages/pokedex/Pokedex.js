import React from 'react';
import { Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

import pokeList from '../../public/pokeList.json'

const Pokedex = ({ navigation }) => {

    const handlePokemonInfo = (pokemon) => {
        navigation.navigate('DetailsPokemon', { pokemon })
    }
    
    return (
        <SafeAreaView style={styles.home}>
            <ScrollView >
                {pokeList.map((el, key) => {
                    return (
                        <TouchableOpacity key={key} style={styles.pokedex} onPress={() => handlePokemonInfo(el)}>
                            <Text style={styles.id}> {"#" + el.id} </Text>
                            <Text style={styles.pokeName}> {el.fileGifName.replace(".gif", "")} </Text>
                        </TouchableOpacity>
                    )
                })}                
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    home: {
        alignSelf:'center',
        width: '100%',
        backgroundColor: '#3A3B3C',
    },
    pokedex: {
        display: 'flex',
        flexDirection: 'row',
        padding: 15,
        backgroundColor: "#F97052",
        marginBottom: 7,
        width: '100%'
    },
    id: {
        fontSize: 20,
        marginLeft: 15,
        color: 'black',
        width: '20%'
    },
    pokeName: {
        fontSize: 18,
        marginLeft: 10,
        color: 'black'
    }
})

export default Pokedex