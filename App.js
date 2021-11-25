
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen
        name="Home" component={Home} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App; 