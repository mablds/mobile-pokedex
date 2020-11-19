import React from 'react';
import { Button, SafeAreaView, Image, StyleSheet } from 'react-native'


const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.home} >
            <Image style={styles.icon} source={require('../../image/icons/pokeball.png')} />
            <Button 
                title="Pokedex"
                onPress={() => navigation.navigate('Pokedex')}
            />
            <Button 
                title="Abilities"
                onPress={() => navigation.navigate('Abilities')}
            />
            <Button 
                title="Types"
                onPress={() => navigation.navigate('Types')}
            />

        </SafeAreaView>
    )
}

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

export default Home