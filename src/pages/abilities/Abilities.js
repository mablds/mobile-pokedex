import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native'

const Abilities = () => {
    return (
        <SafeAreaView style={styles.home}>
            <Text>Abilities</Text>
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

export default Abilities