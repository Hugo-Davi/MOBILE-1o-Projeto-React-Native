import { StyleSheet, Text, View } from 'react-native';
import Profile from '../components/Profile';
import { StatusBar } from 'expo-status-bar';
import Nav from '../components/Nav';


const Experiences = () => {
    return (
        <View style={styles.container}>
            <Text>Experiences</Text>
            <Nav/>
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

export default Experiences;