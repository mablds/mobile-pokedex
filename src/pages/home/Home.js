import React from 'react';
import { Text, SafeAreaView, Image, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Home = () => {
    return (
        <SafeAreaView style={styles.home} >
            <Image style={styles.icon} source={require('../../image/icons/pokeball.png')} />
            <Text style={styles.text}>
                Pokédex
            </Text>
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