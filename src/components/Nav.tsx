import React from 'react';
import { Button, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Nav = () => {
    const navigation = useNavigation<any>()
    return (
        <View style={{
            flexDirection: 'row'
        }}>
            <Button
                title="Home"
                onPress={() => {
                    navigation.navigate("Home")
                }
                }/>
            <Button
                title="About me"
                onPress={() => {
                    navigation.navigate("AboutMe")
                }
                }/>
            <Button
                title="Experiences"
                onPress={() => {
                    navigation.navigate("Experiences")
                }
                }/>
        </View>
    )
}

export default Nav;