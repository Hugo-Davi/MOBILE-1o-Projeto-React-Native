import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Profile from '../components/Profile';
import Nav from '../components/Nav'
import { useNavigation } from '@react-navigation/native';


const Home = () => {
    return (
        <View style={styles.container}>
            <Nav/>
            <Profile/>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242527',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Home;