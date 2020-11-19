import React from 'react';
import { Text, SafeAreaView, StyleSheet, Image, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

import pokeList from '../../image/index'

const Pokedex = () => {
    return (
        <SafeAreaView style={styles.home}>
            <ScrollView>
                {pokeList.map((el, key) => {
                    return (
                        <View key={key} style={{ paddingTop: 50, flexDirection:'row', flexWrap: 'nowrap', }}>
                            <Image 
                                style={{ 
                                    width: 100,
                                    height: 100,
                                    alignSelf: 'center',
                                    resizeMode: 'contain', 
                                }}
                                source={el.uri} 
                            />
                            <Text>{el.name}</Text>
                        </View>
                    )
                })}                
            </ScrollView>
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