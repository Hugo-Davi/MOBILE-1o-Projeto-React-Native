import React from "react";
import {
        View,
        Image,
        Text,
        StyleSheet } from "react-native";

const Profile = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../public/doquinha.jpeg')}/>
            <Text style={styles.title}>Hugo Davi Silva de Andrade</Text>
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    container:{
        padding: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#1e1e1e'
    },
    image: {
        alignSelf: 'center'
    },
    title:{
        justifyContent: 'center',
        fontSize: 28,
        fontWeight: "700",
        color: '#d9d9d9'
    }
})