import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native'

const Types = () => {
    return (
        <SafeAreaView style={styles.home}>
            <Text>Types</Text>
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

export default Types