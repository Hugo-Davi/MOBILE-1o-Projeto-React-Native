
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home'
import AboutMe from './src/screens/AboutMe';
import Experiences from './src/screens/Experience';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AboutMe" component={AboutMe} />
        <Stack.Screen name="Experiences" component={Experiences} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

