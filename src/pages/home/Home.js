import React from 'react';
import { Button, SafeAreaView, Image, StyleSheet, View, Text } from 'react-native'

//<Image style={styles.icon} source={require('../../image/icons/pokeball.png')} />

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.home} >
            <Image style={styles.icon} source={require('../../image/pokemons/Pikachu.gif')} />
            <Text style={styles.title}>Pokédex - TADS</Text>
            <View style={styles.buttonContainer}>
                <Button 
                    title="Pokedex"
                    color='#4D4D4D'
                    onPress={() => navigation.navigate('Pokedex')}
                />
                <Button 
                    title="Abilities"
                    color='#4D4D4D'
                    onPress={() => navigation.navigate('Abilities')}
                />
                <Button 
                    title="Types"
                    color='#4D4D4D'
                    onPress={() => navigation.navigate('Types')}
                />
            </View>
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
    text: {
      color: "white",
      padding: 50,
      fontSize: 22,
      textTransform: "uppercase",
    },
    icon: {
      width: 100,
      height: 100,
      alignSelf: 'center',
      resizeMode: 'contain',
    },
    title:{
      fontFamily: 'sans-serif',
      fontSize: 23,
      marginBottom: 60,
      marginTop: 50
    },  
    buttonContainer: {
        flexGrow: 0.2,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
  });

export default Home