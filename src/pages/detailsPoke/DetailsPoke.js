import React, { useEffect, useState} from 'react';
import { ImageBackground, SafeAreaView, Image, StyleSheet, View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

import { PokemonsGifs } from '../../image/index'

const colors = {
    fire: '#E93F0D',
    grass: '#6EBE31',
    electric: '#FBBC1D',
    water: '#338FEB',
    ground: '#D1B256',
    rock: '#B9A157',
    fairy: '#F5B1F3',
    poison: '#874088',
    bug: '#AAB71F',
    dragon: '#7864E1',
    psychic: '#ED457E',
    flying: '#99A8F3',
    fighting: '#82371E',
    normal: '#C7BFB6'
};

const DetailsPoke = props => {
    const [pokemonDetail, setPokemonDetail] = useState('')
    const [pokemonName, setPokemonName] = useState('')

    useEffect(() => {
        const { pokemon } = props.route.params
        setPokemonDetail(pokemon)
    }, [])

    useEffect(() => {
        if(!pokemonDetail) return
        setPokemonName(pokemonDetail.fileGifName.replace(".gif", ""))
    }, [pokemonDetail])

    return(
        <SafeAreaView style={styles.home}>
            <ImageBackground style={styles.background} source={require('../../image/wallpaper/pokedetails.png')}>
            <ScrollView>
                <View>
                    <Image 
                        style={styles.pokeGif}
                        source={PokemonsGifs[pokemonName]}
                        />
                    <View style={styles.divDetail}>
                        <Text style={styles.pokeTitle}>
                            {pokemonName}
                        </Text>
                        <View style={{justifyContent: 'center', flexDirection: 'row', padding: 20}}>
                            {pokemonDetail ? pokemonDetail.types.map((el, key) => {
                                return(
                                    <Text style={{
                                        padding: 10, 
                                        backgroundColor: `${colors[el.type.name]}`,
                                            borderRadius: 10,
                                            marginRight: 10
                                        }} 
                                        key={key}>
                                        {el.type.name.toUpperCase()}
                                    </Text>
                                )
                            }) : null}
                        </View>
                        <Text style={styles.typesDiv}>
                            {'Id: #' + pokemonDetail.id}
                        </Text>
                        <Text style={styles.typesDiv}>
                            {'Height: ' + pokemonDetail.height}
                        </Text>
                        <Text style={styles.typesDiv}>
                            {'Weight: ' + pokemonDetail.weight}
                        </Text>
                    </View>
                </View>
            </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'stretch',
        justifyContent: "center",
        borderColor: 'green',
        borderWidth: 10
    },
    home: {
        flex: 1,
        alignSelf:'center',
    },
    pokeGif: {
        width: 300,
        height: 300,
        alignSelf: 'center',
        resizeMode: 'contain',
        margin: 40
    },
    divDetail: {
        borderRadius: 20,
        margin: 30,
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#3A3B3C',
        padding: 15,
    },
    pokeTitle: {
        alignSelf: 'center',
        fontSize: 25,
        color: '#F5F5F5',
        margin: 10
    },
    typesDiv: {
        flexDirection: 'row',
        color: '#FFFFFF',
        marginLeft: 15,
        padding: 10,
        fontSize: 17,
        alignItems: 'center'
    }
})

export default DetailsPoke